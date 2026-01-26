import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CtaStrip } from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Start Here — His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function StartHere() {
  return (
    <Container className="py-12 md:py-20">
      {/* Header */}
      <section className="mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-4">
          Start here.
        </h1>
        <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed max-w-prose">
          If you're new to Jesus (or coming back), this is for you.
        </p>
      </section>

      {/* The Good News */}
      <section className="mb-12 md:mb-16">
        <SectionHeader title="The good news" className="mb-8" />
        <div className="space-y-4">
          <Card>
            <div className="flex items-start gap-4">
              <span className="text-[var(--accent)] font-heading font-bold text-2xl">1.</span>
              <p className="text-[var(--foreground)]/80 leading-relaxed pt-1">
                God loves you — He made you for Him.
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <span className="text-[var(--accent)] font-heading font-bold text-2xl">2.</span>
              <p className="text-[var(--foreground)]/80 leading-relaxed pt-1">
                Sin breaks us — we can't fix ourselves.
              </p>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <span className="text-[var(--accent)] font-heading font-bold text-2xl">3.</span>
              <p className="text-[var(--foreground)]/80 leading-relaxed pt-1">
                Jesus saves — His death and resurrection open the way back to God.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* A Simple Next Step */}
      <section className="mb-12 md:mb-16">
        <SectionHeader title="A simple next step" className="mb-6" />
        <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">
          Turn to Jesus: believe, receive, follow.
        </p>
      </section>

      {/* A Simple Prayer */}
      <section className="mb-12 md:mb-16">
        <SectionHeader title="A simple prayer (optional)" className="mb-6" />
        <Card className="border-l-4 border-l-[var(--accent)]">
          <blockquote className="text-[var(--foreground)]/90 italic text-lg leading-relaxed">
            "Jesus, I believe You are Lord. Forgive my sin. Make me new. Lead my
            life. Amen."
          </blockquote>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="mb-0">
        <SectionHeader title="Next steps" className="mb-6" />
        <Card>
          <ul className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>Read the Gospel of John</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>Talk to God daily (simple honesty)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>Connect to a local church</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>Request prayer at hisminute.com</span>
            </li>
          </ul>
        </Card>
      </section>

      <CtaStrip />
    </Container>
  );
}
