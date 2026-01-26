import { NextRequest, NextResponse } from "next/server";
import { hashIp, countRecentSubmissions, insertPrayerRequest, PrayerCategory } from "@/lib/db/prayer";

interface PrayerRequestBody {
  name?: string;
  email?: string;
  consentToContact?: boolean;
  request?: string;
  category?: string;
  website?: string; // honeypot
}

const MAX_REQUESTS_PER_10_MIN = 3;

const VALID_CATEGORIES: PrayerCategory[] = ["healing", "guidance", "family", "anxiety", "salvation", "other"];

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // Take the first IP in the chain
    return forwardedFor.split(",")[0].trim();
  }
  // Fallback
  return "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const body: PrayerRequestBody = await request.json();

    // 1) Honeypot check - silent drop if filled
    if (body.website && body.website.trim() !== "") {
      return NextResponse.json({ ok: true, ref: "HM-000000" });
    }

    // 2) Validate request field
    const requestText = body.request?.trim() || "";
    if (requestText.length < 3 || requestText.length > 2000) {
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR" },
        { status: 400 }
      );
    }

    // 3) Validate optional fields
    const name = body.name?.trim().slice(0, 100) || null;
    const email = body.email?.trim().slice(0, 254) || null;
    const consentToContact = body.consentToContact === true;
    
    // 4) Validate category (optional)
    let category: PrayerCategory | null = null;
    if (body.category && VALID_CATEGORIES.includes(body.category as PrayerCategory)) {
      category = body.category as PrayerCategory;
    }

    // 5) Rate limiting
    const clientIp = getClientIp(request);
    const ipHash = clientIp !== "unknown" ? hashIp(clientIp) : null;

    if (ipHash) {
      const recentCount = await countRecentSubmissions(ipHash);
      if (recentCount >= MAX_REQUESTS_PER_10_MIN) {
        return NextResponse.json(
          { ok: false, error: "RATE_LIMIT" },
          { status: 429 }
        );
      }
    }

    // 6) Insert into database
    const result = await insertPrayerRequest({
      name,
      email,
      consentToContact,
      request: requestText,
      ipHash,
      category,
    });

    // Log success without request body
    console.log("prayer_request_saved", {
      id: result.id,
      ref_code: result.ref_code,
      timestamp: result.created_at,
    });

    return NextResponse.json({ ok: true, ref: result.ref_code });
  } catch (error) {
    // Check for ref_code generation failure
    if (error instanceof Error && error.message === "REF_FAILED") {
      console.error("prayer_request_error: REF_FAILED after max retries");
      return NextResponse.json(
        { ok: false, error: "REF_FAILED" },
        { status: 500 }
      );
    }
    
    // Log error without user data
    console.error("prayer_request_error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
