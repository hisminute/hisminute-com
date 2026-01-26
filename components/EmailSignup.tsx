"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/Button";

export function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div className="bg-[var(--accent)]/20 border border-[var(--accent)] rounded-lg p-6 text-center mb-4">
          <p className="text-[var(--foreground)] font-medium">
            Thanks! Email sign-up is coming soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="your@email.com"
              className="flex-1 max-w-xs px-4 py-3.5 bg-white/5 border border-white/20 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:border-[var(--accent)] focus:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            />
            <Button type="submit" variant="primary">
              Sign up
            </Button>
          </div>
        </form>
      )}
      <p className="text-[var(--foreground)]/50 text-sm">
        No spam. Unsubscribe anytime.
      </p>
    </>
  );
}
