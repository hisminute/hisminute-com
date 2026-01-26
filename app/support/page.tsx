"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
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
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Support His Minute
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          Support is optional — but it helps us reach more people with uplifting,
          Christ-centered encouragement.
        </p>
      </section>

      {/* 2) His Minute Hope Partners (tiers + give once) */}
      <Section title="His Minute Hope Partners">
        <p className="text-white/80 leading-relaxed mb-8">
          Hope Partners help us share uplifting Scripture encouragement every day
          and reach more people with the hope of Jesus. Support is optional, and
          the message will always be free.
        </p>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-white/20 rounded-lg p-6 bg-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
              <p className="text-[var(--accent)] font-semibold mb-4">
                {tier.price}
              </p>
              <ul className="space-y-2 text-white/70 text-sm mb-6">
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
            </div>
          ))}
        </div>
      </Section>

      {/* Give Once */}
      <Section title="Give once">
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
      </Section>

      {/* 3) Encouragement paragraph */}
      <Section>
        <p className="text-white/70 leading-relaxed">
          If His Minute encourages you, optional support helps us produce and
          distribute more daily Scripture encouragement.
        </p>
      </Section>

      {/* 4) What Your Support Helps Fund */}
      <Section title="What your support helps fund">
        <ul className="space-y-3 text-white/80 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Daily filming + editing + captions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Tools and templates for consistent quality</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Website + email delivery</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Distribution and occasional promotion to reach new people</span>
          </li>
        </ul>
      </Section>

      {/* 5) No-Pressure Line (once, after bullets) */}
      <Section>
        <p className="text-[var(--accent)] font-medium text-lg border-l-4 border-[var(--accent)] pl-4 py-2">
          Jesus is free. We'll never gate the message behind giving.
        </p>
      </Section>

      <CtaStrip />
    </Container>
  );
}
