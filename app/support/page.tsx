"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { CtaStrip } from "@/components/CtaStrip";

const tiers = [
  {
    name: "Hope Partner",
    price: "$5/month",
    buttonText: "Become a Hope Partner",
    perks: [
      "Monthly Partner Update (impact + what's next)",
      "Early peek at the weekly theme + verse list",
    ],
  },
  {
    name: "Growth Partner",
    price: "$15/month",
    buttonText: "Become a Growth Partner",
    perks: [
      "Everything in Hope Partner",
      "Monthly Verse Card Pack (phone wallpapers + printable)",
    ],
  },
  {
    name: "Reach Partner",
    price: "$35/month",
    buttonText: "Become a Reach Partner",
    perks: [
      "Everything in Growth Partner",
      "Monthly Behind-the-Scenes (unlisted: why these verses / encouragement for the week)",
    ],
  },
  {
    name: "Legacy Partner",
    price: "$100/month",
    buttonText: "Become a Legacy Partner",
    perks: [
      "Everything in Reach Partner",
      "Quarterly Prayer + Encouragement Night (unlisted)",
      "Optional name listing on a Thank You page (opt-in)",
    ],
  },
];

const giveOnceAmounts = ["$10", "$25", "$50", "$100", "Custom"];

export default function Support() {
  const [tierMessages, setTierMessages] = useState<Record<string, boolean>>({});
  const [giveOnceMessage, setGiveOnceMessage] = useState(false);

  const handleTierClick = (tierName: string) => {
    setTierMessages((prev) => ({ ...prev, [tierName]: true }));
    setTimeout(() => {
      setTierMessages((prev) => ({ ...prev, [tierName]: false }));
    }, 3000);
  };

  const handleGiveOnceClick = () => {
    setGiveOnceMessage(true);
    setTimeout(() => setGiveOnceMessage(false), 3000);
  };

  return (
    <Container className="py-12 md:py-20">
      {/* 1) H1 + Subhead */}
      <section className="mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-4">
          Support His Minute
        </h1>
        <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed max-w-prose">
          Support is optional — but it helps us reach more people with uplifting,
          Christ-centered encouragement.
        </p>
      </section>

      {/* 2) His Minute Hope Partners (tiers + give once) */}
      <section className="mb-12 md:mb-16">
        <SectionHeader title="His Minute Hope Partners" className="mb-6" />
        <p className="text-[var(--foreground)]/80 leading-relaxed mb-10 max-w-prose">
          Hope Partners help us share uplifting Scripture encouragement every day
          and reach more people with the hope of Jesus. Support is optional, and
          the message will always be free.
        </p>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {tiers.map((tier) => (
            <Card key={tier.name}>
              <h3 className="text-xl font-heading font-bold text-[var(--foreground)] mb-1">
                {tier.name}
              </h3>
              <p className="text-[var(--accent)] font-semibold mb-4">
                {tier.price}
              </p>
              <ul className="space-y-2 text-[var(--foreground)]/70 text-sm mb-6">
                {tier.perks.map((perk, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--accent)]">•</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleTierClick(tier.name)}
                variant="primary"
                className="w-full"
              >
                {tier.buttonText}
              </Button>
              {tierMessages[tier.name] && (
                <p className="text-[var(--accent)] text-sm mt-3 text-center">
                  Partner sign-up coming soon.
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
          {giveOnceAmounts.map((amount) => (
            <Button
              key={amount}
              onClick={handleGiveOnceClick}
              variant="secondary"
            >
              {amount}
            </Button>
          ))}
        </div>
        {giveOnceMessage && (
          <p className="text-[var(--accent)] text-sm">
            Giving options coming soon.
          </p>
        )}
      </section>

      {/* 3) Encouragement paragraph */}
      <section className="mb-12 md:mb-16">
        <p className="text-[var(--foreground)]/70 leading-relaxed max-w-prose">
          If His Minute encourages you, optional support helps us produce and
          distribute more daily Scripture encouragement.
        </p>
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
      <section className="mb-0">
        <Card className="text-center py-8">
          <p className="text-[var(--accent)] font-heading font-medium text-lg">
            Jesus is free. We'll never gate the message behind giving.
          </p>
        </Card>
      </section>

      <CtaStrip />
    </Container>
  );
}
