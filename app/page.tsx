import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          One verse. One minute. Jesus changes everything.
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Daily Scripture you can understand and live today — meaning + one step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/start-here"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-lg hover:opacity-90 transition-opacity text-center"
          >
            Start Here
          </Link>
          <Link
            href="/prayer"
            className="inline-block w-full sm:w-auto px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-center"
          >
            Request Prayer
          </Link>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">What to expect</h2>
        <ul className="space-y-3 text-white/80">
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>One verse (read aloud)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Simple meaning (plain language)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>One step for today</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Invitation to Jesus</span>
          </li>
        </ul>
      </section>

      {/* Latest Videos Section */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Latest videos</h2>
        <p className="text-white/60">
          Videos coming soon. Follow @hisminute on TikTok, Instagram, YouTube, and X.
        </p>
      </section>
    </div>
  );
}
