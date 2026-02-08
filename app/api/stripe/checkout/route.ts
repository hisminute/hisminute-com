import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

type SubscriptionTier = "hope" | "encouragement" | "outreach" | "legacy";

interface CheckoutRequestBody {
  type: "subscription" | "onetime";
  tier?: SubscriptionTier;
  amount?: number;
}

const TIER_ENV_MAP: Record<SubscriptionTier, string> = {
  hope: "STRIPE_PRICE_HOPE_MONTHLY",
  encouragement: "STRIPE_PRICE_ENCOURAGEMENT_MONTHLY",
  outreach: "STRIPE_PRICE_OUTREACH_MONTHLY",
  legacy: "STRIPE_PRICE_LEGACY_MONTHLY",
};

const ALLOWED_AMOUNTS = [10, 25, 50, 100];

function getOrigin(request: NextRequest): string {
  const origin = request.headers.get("origin");
  if (origin) return origin;
  
  // Fallback for dev
  return process.env.NODE_ENV === "production" 
    ? "https://hisminute.com" 
    : "http://localhost:3000";
}

export async function POST(request: NextRequest) {
  try {
    // Validate STRIPE_SECRET_KEY exists
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json(
        { ok: false, error: "STRIPE_SECRET_KEY missing" },
        { status: 500 }
      );
    }

    // Initialize Stripe lazily inside handler
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2025-02-24.acacia",
    });

    const body: CheckoutRequestBody = await request.json();
    const { type, tier, amount } = body;

    const origin = getOrigin(request);

    // Validate subscription request
    if (type === "subscription") {
      if (!tier || !(tier in TIER_ENV_MAP)) {
        return NextResponse.json(
          { ok: false, error: "INVALID_TIER" },
          { status: 400 }
        );
      }

      const envVarName = TIER_ENV_MAP[tier];
      const priceId = process.env[envVarName];
      
      if (!priceId) {
        console.error("stripe_checkout_error: Missing env var", envVarName);
        return NextResponse.json(
          { ok: false, error: `Missing ${envVarName}` },
          { status: 500 }
        );
      }

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${origin}/support/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/support/cancel`,
      });

      if (!session.url) {
        return NextResponse.json(
          { ok: false, error: "SESSION_URL_MISSING" },
          { status: 500 }
        );
      }

      console.info("stripe_checkout_created", { type, tier });
      return NextResponse.json({ ok: true, url: session.url });
    }

    // Validate one-time request
    if (type === "onetime") {
      if (!amount || !ALLOWED_AMOUNTS.includes(amount)) {
        return NextResponse.json(
          { ok: false, error: "INVALID_AMOUNT" },
          { status: 400 }
        );
      }

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: amount * 100,
              product_data: {
                name: "His Minute — One-time gift",
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${origin}/support/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/support/cancel`,
      });

      if (!session.url) {
        return NextResponse.json(
          { ok: false, error: "SESSION_URL_MISSING" },
          { status: 500 }
        );
      }

      console.info("stripe_checkout_created", { type, amount });
      return NextResponse.json({ ok: true, url: session.url });
    }

    // Invalid type
    return NextResponse.json(
      { ok: false, error: "INVALID_TYPE" },
      { status: 400 }
    );
  } catch (error) {
    console.error(
      "stripe_checkout_error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
