import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { EmailSignup } from "@/components/EmailSignup";
import { videos } from "@/content/videos";

export const metadata: Metadata = {
  title: "His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Text + CTAs */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[var(--accent)] border border-[var(--accent)]/50 rounded-full bg-[var(--accent)]/10">
                TODO_COPY_HOME_BADGE
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--foreground)] mb-6 leading-tight">
                One verse. One minute. Jesus changes everything.
              </h1>
              <p className="text-lg md:text-xl text-[var(--foreground)]/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Daily Scripture you can understand and live today — meaning + one step.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button href="/start-here" variant="primary">
                  Start Here
                </Button>
                <Button href="/prayer" variant="secondary">
                  Request Prayer
                </Button>
              </div>
            </div>

            {/* Right: Feature Card with "What to expect" */}
            <div className="lg:mt-8">
              <Card>
                <h2 className="text-xl md:text-2xl font-heading font-semibold text-[var(--foreground)] mb-6">
                  What to expect
                </h2>
                <ul className="space-y-4 text-[var(--foreground)]/80 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)] text-lg">•</span>
                    <span>One verse (read aloud)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)] text-lg">•</span>
                    <span>Simple meaning (plain language)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)] text-lg">•</span>
                    <span>One step for today</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)] text-lg">•</span>
                    <span>Invitation to Jesus</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Videos Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <Container>
          <SectionHeader title="Latest videos" className="mb-8" />
          <div className="space-y-4 mb-6">
            {videos.map((video, index) => (
              <Card key={index} className="p-5">
                <p className="text-[var(--foreground)] font-medium">{video.title}</p>
                <p className="text-[var(--foreground)]/50 text-sm">{video.platform}</p>
                {video.url === null && (
                  <p className="text-[var(--accent)] text-sm mt-1">Coming soon</p>
                )}
              </Card>
            ))}
          </div>
          <p className="text-[var(--foreground)]/60">
            Videos coming soon. Follow @hisminute on TikTok, Instagram, YouTube, and X.
          </p>
        </Container>
      </section>

      {/* Take Your Next Step Section */}
      <section className="py-16 md:py-20 border-t border-white/10 bg-white/[0.02]">
        <Container>
          <SectionHeader title="Take your next step" className="mb-6" />
          <p className="text-[var(--foreground)]/80 mb-2 leading-relaxed max-w-prose">
            Start here if you're new to Jesus (or coming back).
          </p>
          <p className="text-[var(--foreground)]/80 mb-8 leading-relaxed max-w-prose">
            Need prayer? We're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
        </Container>
      </section>

      {/* Email Signup Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <Container>
          <Card className="max-w-xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-[var(--foreground)] mb-4">
              Get the daily verse
            </h2>
            <p className="text-[var(--foreground)]/80 mb-6 leading-relaxed">
              Get a simple daily email with the verse and link.
            </p>
            <EmailSignup />
          </Card>
        </Container>
      </section>

      {/* Trust Line */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <Container>
          <Card className="text-center py-8 md:py-10">
            <p className="text-[var(--accent)] font-heading font-medium text-lg md:text-xl">
              Jesus is free. We'll never gate the message behind giving.
            </p>
          </Card>
        </Container>
      </section>
    </>
  );
}
