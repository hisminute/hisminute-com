import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { CtaStrip } from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Archive — His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function Archive() {
  return (
    <Container className="py-12 md:py-20">
      <section className="mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-4">
          Archive
        </h1>
        <p className="text-lg md:text-xl text-[var(--foreground)]/80 leading-relaxed max-w-prose">
          Daily verses (coming soon).
        </p>
      </section>

      <Card>
        <p className="text-[var(--foreground)]/60 leading-relaxed">
          We'll post a daily verse list here with links to each video.
        </p>
      </Card>

      <CtaStrip />
    </Container>
  );
}
