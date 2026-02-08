import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Terms — His Minute",
  description: "Terms of use for His Minute.",
};

export default function Terms() {
  return (
    <Container className="py-12 md:py-20">
      <section className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-6">
          Terms
        </h1>
        <p className="text-lg text-[var(--foreground)]/80 leading-relaxed mb-8">
          By using this site, you agree to use it respectfully and lawfully.
        </p>
        <Card>
          <ul className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>
                <strong className="text-[var(--foreground)]">Content:</strong> His Minute provides faith-based encouragement. It's not medical, legal, or financial advice.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>
                <strong className="text-[var(--foreground)]">Support:</strong> Partner support is optional and helps us create and share content.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>
                <strong className="text-[var(--foreground)]">Subscriptions:</strong> You can cancel your monthly Partner support anytime. Your support remains active until the end of the current billing period.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] text-lg">•</span>
              <span>
                <strong className="text-[var(--foreground)]">Refunds:</strong> Because support is a voluntary contribution, we generally don't offer refunds. If you believe a charge was made in error, contact us at{" "}
                <a
                  href="mailto:support@hisminute.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  support@hisminute.com
                </a>{" "}
                and we'll help.
              </span>
            </li>
          </ul>
        </Card>
        <p className="text-[var(--foreground)]/60 mt-8">
          We may update these terms from time to time.
        </p>
      </section>
    </Container>
  );
}
