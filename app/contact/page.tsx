import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Contact — His Minute",
  description: "Get in touch with His Minute.",
};

export default function Contact() {
  return (
    <Container className="py-12 md:py-20">
      <section className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-6">
          Contact
        </h1>
        <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
          If you have a question about His Minute, we'd love to hear from you.
        </p>
        <Card>
          <p className="text-[var(--foreground)] font-medium mb-4">
            Email:{" "}
            <a
              href="mailto:support@hisminute.com"
              className="text-[var(--accent)] hover:underline"
            >
              support@hisminute.com
            </a>
          </p>
          <p className="text-[var(--foreground)]/60 text-sm">
            We do our best to respond within a few days.
          </p>
        </Card>
      </section>
    </Container>
  );
}
