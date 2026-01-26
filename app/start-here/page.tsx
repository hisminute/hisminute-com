import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Here — His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function StartHere() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-20">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start here.
        </h1>
        <p className="text-lg text-white/80">
          If you're new to Jesus (or coming back), this is for you.
        </p>
      </section>

      {/* The Good News */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">The good news</h2>
        <ol className="space-y-4 text-white/80">
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)] font-semibold">1.</span>
            <span>God loves you — He made you for Him.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)] font-semibold">2.</span>
            <span>Sin breaks us — we can't fix ourselves.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)] font-semibold">3.</span>
            <span>
              Jesus saves — His death and resurrection open the way back to God.
            </span>
          </li>
        </ol>
      </section>

      {/* A Simple Next Step */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">A simple next step</h2>
        <p className="text-white/80">Turn to Jesus: believe, receive, follow.</p>
      </section>

      {/* A Simple Prayer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          A simple prayer (optional)
        </h2>
        <blockquote className="border-l-4 border-[var(--accent)] pl-4 py-2 text-white/90 italic bg-white/5 rounded-r-lg">
          "Jesus, I believe You are Lord. Forgive my sin. Make me new. Lead my
          life. Amen."
        </blockquote>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Next steps</h2>
        <ul className="space-y-3 text-white/80">
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Read the Gospel of John</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Talk to God daily (simple honesty)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Connect to a local church</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Request prayer at hisminute.com</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
