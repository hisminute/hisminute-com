import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Start Here — His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function StartHere() {
  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Start here.
        </h1>
        <p className="text-lg text-white/80 leading-relaxed">
          If you're new to Jesus (or coming back), this is for you.
        </p>
      </section>

      {/* The Good News */}
      <Section title="The good news">
        <ol className="space-y-4 text-white/80 leading-relaxed">
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
      </Section>

      {/* A Simple Next Step */}
      <Section title="A simple next step">
        <p className="text-white/80 leading-relaxed">
          Turn to Jesus: believe, receive, follow.
        </p>
      </Section>

      {/* A Simple Prayer */}
      <Section title="A simple prayer (optional)">
        <blockquote className="border-l-4 border-[var(--accent)] pl-4 py-2 text-white/90 italic bg-white/5 rounded-r-lg">
          "Jesus, I believe You are Lord. Forgive my sin. Make me new. Lead my
          life. Amen."
        </blockquote>
      </Section>

      {/* Next Steps */}
      <Section title="Next steps" className="mb-0">
        <ul className="space-y-3 text-white/80 leading-relaxed">
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
      </Section>
    </Container>
  );
}
