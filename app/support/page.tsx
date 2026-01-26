"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function Support() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Support His Minute
        </h1>
        <p className="text-lg text-white/80 mb-6 leading-relaxed">
          Support is optional — but it helps us reach more people with uplifting,
          Christ-centered encouragement.
        </p>
        <p className="text-white/70 leading-relaxed">
          If His Minute encourages you, optional support helps us produce and
          distribute more daily Scripture encouragement.
        </p>
      </section>

      {/* What Your Support Helps Fund */}
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

      {/* No-Pressure Line */}
      <Section>
        <p className="text-[var(--accent)] font-medium text-lg border-l-4 border-[var(--accent)] pl-4 py-2">
          Jesus is free. We'll never gate the message behind giving.
        </p>
      </Section>

      {/* Buttons */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={handleButtonClick} variant="primary">
            Become a monthly partner
          </Button>
          <Button onClick={handleButtonClick} variant="secondary">
            Give once
          </Button>
        </div>
        {showMessage && (
          <p className="text-[var(--accent)] text-sm">
            Support options coming soon.
          </p>
        )}
      </section>
    </Container>
  );
}
