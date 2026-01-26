import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export function CtaStrip() {
  return (
    <section className="mt-16 pt-12 border-t border-white/10">
      <Container>
        <Card className="bg-white/[0.02]">
          <h2 className="text-2xl font-heading font-semibold text-[var(--foreground)] mb-4">
            Take your next step
          </h2>
          <p className="text-[var(--foreground)]/80 mb-2 leading-relaxed">
            Start here if you're new to Jesus (or coming back).
          </p>
          <p className="text-[var(--foreground)]/80 mb-6 leading-relaxed">
            Need prayer? We're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button href="/start-here" variant="primary">
              Start Here
            </Button>
            <Button href="/prayer" variant="secondary">
              Request Prayer
            </Button>
          </div>
          <p className="text-sm text-[var(--foreground)]/60">
            Optional support:{" "}
            <Link
              href="/support"
              className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
            >
              Support His Minute
            </Link>
          </p>
        </Card>
      </Container>
    </section>
  );
}
