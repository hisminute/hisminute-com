"use client";

import { useState } from "react";

export default function Support() {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-20">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Support His Minute
        </h1>
        <p className="text-lg text-white/80 mb-6">
          Support is optional — but it helps us reach more people with uplifting,
          Christ-centered encouragement.
        </p>
        <p className="text-white/70">
          If His Minute encourages you, optional support helps us produce and
          distribute more daily Scripture encouragement.
        </p>
      </section>

      {/* What Your Support Helps Fund */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">
          What your support helps fund
        </h2>
        <ul className="space-y-3 text-white/80">
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
      </section>

      {/* No-Pressure Line */}
      <section className="mb-12">
        <p className="text-[var(--accent)] font-medium text-lg border-l-4 border-[var(--accent)] pl-4 py-2">
          Jesus is free. We'll never gate the message behind giving.
        </p>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleButtonClick}
            className="w-full sm:w-auto px-8 py-3 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            Become a monthly partner
          </button>
          <button
            onClick={handleButtonClick}
            className="w-full sm:w-auto px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            Give once
          </button>
        </div>
        {showMessage && (
          <p className="text-[var(--accent)] text-sm">
            Support options coming soon.
          </p>
        )}
      </section>
    </div>
  );
}
