"use client";

import { useState, FormEvent } from "react";

export default function Prayer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-20">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Request prayer.
        </h1>
        <p className="text-lg text-white/80 mb-6">
          You're not alone. We'll pray for you.
        </p>
        <p className="text-white/60 text-sm">
          We keep requests private and never share without permission.
        </p>
      </section>

      {/* Form */}
      <section className="mb-8">
        {submitted ? (
          <div className="bg-[var(--accent)]/20 border border-[var(--accent)] rounded-lg p-6 text-center">
            <p className="text-white font-medium">
              Thanks. We received your request.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Name (optional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[var(--accent)] focus:bg-white/10 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[var(--accent)] focus:bg-white/10 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="request"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Prayer request <span className="text-[var(--accent)]">*</span>
              </label>
              <textarea
                id="request"
                name="request"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[var(--accent)] focus:bg-white/10 transition-colors resize-none"
                placeholder="Share your prayer request..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              Send request
            </button>
          </form>
        )}
      </section>

      {/* Safety Note */}
      <section>
        <p className="text-white/40 text-xs">
          If you are in immediate danger, contact your local emergency services.
        </p>
      </section>
    </div>
  );
}
