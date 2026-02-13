import { NextRequest, NextResponse } from "next/server";

const MAX_REQUESTS_PER_10_MIN = 30;
const RATE_WINDOW_MS = 10 * 60 * 1000;

// Best-effort in-memory rate limit (resets on serverless cold start)
const rateMap = new Map<
  string,
  { count: number; windowStart: number }
>();

// Best-effort in-memory cache (resets on serverless cold start)
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TTL_MS = 3600 * 1000; // 1 hour

const SAFE_OPTIONS_KEYS = [
  "includeVerseNumbers",
  "includeFirstVerseNumbers",
  "includeHeadings",
  "includeFootnotes",
  "includeShortCopyright",
  "includePassageReferences",
] as const;

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry) {
    rateMap.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (now - entry.windowStart > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, windowStart: now });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_10_MIN) {
    return false;
  }

  entry.count++;
  return true;
}

function validateReference(ref: unknown): string | null {
  if (typeof ref !== "string") return null;
  const trimmed = ref.trim();
  if (trimmed.length < 1 || trimmed.length > 120) return null;
  // Reject dangerous input: newlines, angle brackets, control chars
  if (/[\n\r<>[\x00-\x1f]]/.test(trimmed)) return null;
  return trimmed;
}

function buildOptionsHash(options: Record<string, unknown>): string {
  const safe: Record<string, boolean> = {};
  for (const key of SAFE_OPTIONS_KEYS) {
    if (typeof options[key] === "boolean") {
      safe[key] = options[key];
    }
  }
  return JSON.stringify(safe);
}

function buildCacheKey(reference: string, optionsHash: string): string {
  return `${reference}::${optionsHash}`;
}

function buildEsvUrl(reference: string, options: Record<string, unknown>): string {
  const params = new URLSearchParams();
  params.set("q", reference);

  // Defaults for clean on-screen text
  params.set("include-headings", "false");
  params.set("include-footnotes", "false");
  params.set("include-verse-numbers", "true");
  params.set("include-first-verse-numbers", "true");
  params.set("include-short-copyright", "false");
  params.set("include-passage-references", "false");
  params.set("line-length", "0");

  // Allow overrides from options (allowlist only)
  const overrides: Record<string, string> = {
    includeVerseNumbers: "include-verse-numbers",
    includeFirstVerseNumbers: "include-first-verse-numbers",
    includeHeadings: "include-headings",
    includeFootnotes: "include-footnotes",
    includeShortCopyright: "include-short-copyright",
    includePassageReferences: "include-passage-references",
  };
  for (const [optKey, esvParam] of Object.entries(overrides)) {
    if (typeof options[optKey] === "boolean") {
      params.set(esvParam, String(options[optKey]));
    }
  }

  return `https://api.esv.org/v3/passage/text/?${params.toString()}`;
}

export async function POST(request: NextRequest) {
  try {
    // 1) Auth
    const authHeader = request.headers.get("authorization");
    const expectedKey = process.env.HM_PROXY_KEY;
    if (!expectedKey) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.slice(7)
      : null;
    if (!token || token !== expectedKey) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2) Parse body
    let body: { reference?: unknown; options?: unknown };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // 3) Validate reference
    const reference = validateReference(body.reference);
    if (!reference) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid reference: required string, 1-120 chars, no newlines or angle brackets",
        },
        { status: 400 }
      );
    }

    const options = typeof body.options === "object" && body.options !== null
      ? (body.options as Record<string, unknown>)
      : {};
    const optionsHash = buildOptionsHash(options);

    // 4) Rate limit
    const clientIp = getClientIp(request);
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { ok: false, error: "Rate limited" },
        { status: 429 }
      );
    }

    // 5) Check cache
    const cacheKey = buildCacheKey(reference, optionsHash);
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      const res = NextResponse.json(cached.data as object);
      res.headers.set(
        "Cache-Control",
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400"
      );
      return res;
    }

    // 6) Call ESV API
    const esvKey = process.env.ESV_API_KEY;
    if (!esvKey) {
      return NextResponse.json(
        { ok: false, error: "Upstream error" },
        { status: 502 }
      );
    }

    const esvUrl = buildEsvUrl(reference, options);
    const esvRes = await fetch(esvUrl, {
      headers: {
        Authorization: `Token ${esvKey}`,
      },
    });

    if (esvRes.status >= 400 && esvRes.status < 500) {
      return NextResponse.json(
        { ok: false, error: "Invalid reference" },
        { status: 400 }
      );
    }

    if (!esvRes.ok) {
      return NextResponse.json(
        { ok: false, error: "Upstream error" },
        { status: 502 }
      );
    }

    let esvData: {
      passages?: string[];
      canonical?: string;
      query?: string;
    };
    try {
      esvData = await esvRes.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Upstream error" },
        { status: 502 }
      );
    }

    const passages = Array.isArray(esvData.passages) ? esvData.passages : [];
    const text = passages.join("\n\n").trim();
    const canonical = typeof esvData.canonical === "string"
      ? esvData.canonical
      : reference;

    const payload = {
      ok: true,
      reference,
      canonical,
      text,
      raw: {
        query: esvData.query,
        passageCount: passages.length,
      },
    };

    cache.set(cacheKey, { data: payload, timestamp: Date.now() });

    const res = NextResponse.json(payload);
    res.headers.set(
      "Cache-Control",
      "public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400"
    );
    return res;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Upstream error" },
      { status: 502 }
    );
  }
}
