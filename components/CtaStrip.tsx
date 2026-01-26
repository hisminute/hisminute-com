import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export function CtaStrip() {
  return (
    <Section className="mt-16 pt-12 border-t border-white/10">
      <Container>
        <h2 className="text-2xl font-bold text-white mb-4">
          Take your next step
        </h2>
        <p className="text-white/80 mb-2 leading-relaxed">
          Start here if you're new to Jesus (or coming back).
        </p>
        <p className="text-white/80 mb-6 leading-relaxed">
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
        <p className="text-sm text-white/60">
          Optional support:{" "}
          <Link
            href="/support"
            className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
          >
            Support His Minute
          </Link>
        </p>
      </Container>
    </Section>
  );
}
