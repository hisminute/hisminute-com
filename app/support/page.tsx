"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { CtaStrip } from "@/components/CtaStrip";

type SubscriptionTier = "hope" | "encouragement" | "outreach" | "legacy";

const tiers: Array<{
  name: string;
  tier: SubscriptionTier;
  price: string;
  buttonText: string;
  perks: string[];
}> = [
  {
    name: "Hope Partner",
    tier: "hope",
    price: "$5/month",
    buttonText: "Become a Hope Partner",
    perks: [
      "Monthly Partner Update (impact + what's next)",
      "Early peek at the weekly theme + verse list",
    ],
  },
  {
    name: "Growth Partner",
    tier: "encouragement",
    price: "$15/month",
    buttonText: "Become a Growth Partner",
    perks: [
      "Everything in Hope Partner",
      "Monthly Verse Card Pack (phone wallpapers + printable)",
    ],
  },
  {
    name: "Reach Partner",
    tier: "outreach",
    price: "$35/month",
    buttonText: "Become a Reach Partner",
    perks: [
      "Everything in Growth Partner",
      "Monthly Behind-the-Scenes (unlisted: why these verses / encouragement for the week)",
    ],
  },
  {
    name: "Legacy Partner",
    tier: "legacy",
    price: "$100/month",
    buttonText: "Become a Legacy Partner",
    perks: [
      "Everything in Reach Partner",
      "Quarterly Prayer + Encouragement Night (unlisted)",
      "Optional name listing on a Thank You page (opt-in)",
    ],
  },
];

const giveOnceAmounts = [
  { label: "$10", amount: 10 },
  { label: "$25", amount: 25 },
  { label: "$50", amount: 50 },
  { label: "$100", amount: 100 },
];

export default function Support() {
  const [loadingTier, setLoadingTier] = useState<SubscriptionTier | null>(null);
  const [loadingAmount, setLoadingAmount] = useState<number | null>(null);
  const [tierError, setTierError] = useState<SubscriptionTier | null>(null);
  const [amountError, setAmountError] = useState<number | null>(null);

  const handleTierClick = async (tier: SubscriptionTier) => {
    setLoadingTier(tier);
    setTierError(null);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "subscription", tier }),
      });

      const data = await response.json();

      if (data.ok && data.url) {
        window.location.href = data.url;
      } else {
        setTierError(tier);
        setLoadingTier(null);
      }
    } catch {
      setTierError(tier);
      setLoadingTier(null);
    }
  };

  const handleGiveOnceClick = async (amount: number) => {
    setLoadingAmount(amount);
    setAmountError(null);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "onetime", amount }),
      });

      const data = await response.json();

      if (data.ok && data.url) {
        window.location.href = data.url;
      } else {
        setAmountError(amount);
        setLoadingAmount(null);
      }
    } catch {
      setAmountError(amount);
      setLoadingAmount(null);
    }
  };

  return (
    <Container className="py-12 md:py-20">
      {/* 1) H1 + Subhead */}
      <section className="mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-4">
          Support His Minute
        </h1>
        <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed max-w-prose">
          Support is optional and helps us reach more people with uplifting,
          Christ-centered encouragement.
        </p>
      </section>

      {/* 2) His Minute Hope Partners (tiers + give once) */}
      <section className="mb-12 md:mb-16">
        <SectionHeader title="Become a Partner" className="mb-6" />
        <p className="text-[var(--foreground)]/80 leading-relaxed mb-10 max-w-prose">
          Hope Partners help us share uplifting Scripture encouragement every day
          and reach more people with the hope of Jesus.
        </p>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {tiers.map((tierData) => (
            <Card key={tierData.name}>
              <h3 className="text-xl font-heading font-bold text-[var(--foreground)] mb-1">
                {tierData.name}
              </h3>
              <p className="text-[var(--accent)] font-semibold mb-4">
                {tierData.price}
              </p>
              <ul className="space-y-2 text-[var(--foreground)]/70 text-sm mb-6">
                {tierData.perks.map((perk, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--accent)]">•</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleTierClick(tierData.tier)}
                variant="primary"
                className={`w-full ${loadingTier === tierData.tier ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={loadingTier === tierData.tier}
              >
                {loadingTier === tierData.tier ? "Loading..." : tierData.buttonText}
              </Button>
              {tierError === tierData.tier && (
                <p className="text-red-400 text-sm mt-3 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Give Once */}
      <section className="mb-12 md:mb-16">
        <SectionHeader title="Give once" className="mb-6" />
        <div className="flex flex-wrap gap-3 mb-4">
          {giveOnceAmounts.map(({ label, amount }) => (
            <Button
              key={amount}
              onClick={() => handleGiveOnceClick(amount)}
              variant="secondary"
              className={loadingAmount === amount ? "opacity-70 cursor-not-allowed" : ""}
              disabled={loadingAmount === amount}
            >
              {loadingAmount === amount ? "..." : label}
            </Button>
          ))}
        </div>
        {amountError !== null && (
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </section>

      {/* 4) What Your Support Helps Fund */}
      <section className="mb-12 md:mb-16">
        <SectionHeader title="What your support helps fund" className="mb-6" />
        <Card>
          <ul className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>Daily filming + editing + captions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>Tools and templates for consistent quality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>Website + email delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>Distribution and occasional promotion to reach new people</span>
            </li>
          </ul>
        </Card>
      </section>

      {/* 5) No-Pressure Line (once, after bullets) */}
      <section className="mb-12 md:mb-16">
        <Card className="text-center py-8">
          <p className="text-[var(--accent)] font-heading font-medium text-lg">
            Jesus is free. Your support is optional and helps us share Jesus with more people.
          </p>
        </Card>
      </section>

      {/* 6) Policies */}
      <section className="mb-0">
        <SectionHeader title="Policies" className="mb-4" />
        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
          For details on subscriptions, refunds, and privacy, please see the pages below.
        </p>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li>
            <Link
              href="/privacy"
              className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
            >
              Contact
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
}
