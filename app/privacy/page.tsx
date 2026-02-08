import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Privacy — His Minute",
  description: "Privacy policy for His Minute.",
};

export default function Privacy() {
  return (
    <Container className="py-12 md:py-20">
      <section className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-6">
          Privacy
        </h1>
        <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
          We take your privacy seriously. We only collect what we need to serve you, and we never sell your personal information.
        </p>
        <Card>
          <ul className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>
                <strong className="text-[var(--foreground)]">Prayer requests:</strong> If you submit a prayer request, we store the information you choose to share so we can pray for you and follow up only if you ask us to.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>
                <strong className="text-[var(--foreground)]">Support:</strong> Payments are processed securely by Stripe. His Minute does not store your full card details.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>
                <strong className="text-[var(--foreground)]">Email:</strong> If you email us, we'll use your information only to respond.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>
                <strong className="text-[var(--foreground)]">Sharing:</strong> We never share prayer requests publicly without permission.
              </span>
            </li>
          </ul>
        </Card>
        <p className="text-[var(--foreground)]/60 mt-8">
          If you have questions, contact us at{" "}
          <a
            href="mailto:support@hisminute.com"
            className="text-[var(--accent)] hover:underline"
          >
            support@hisminute.com
          </a>
          .
        </p>
      </section>
    </Container>
  );
}
