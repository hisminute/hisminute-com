import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { videos } from "@/content/videos";

export const metadata: Metadata = {
  title: "His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function Home() {
  return (
    <Container className="py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          One verse. One minute. Jesus changes everything.
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Daily Scripture you can understand and live today — meaning + one step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/start-here" variant="primary">
            Start Here
          </Button>
          <Button href="/prayer" variant="secondary">
            Request Prayer
          </Button>
        </div>
      </section>

      {/* What to Expect Section */}
      <Section title="What to expect">
        <ul className="space-y-3 text-white/80 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>One verse (read aloud)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Simple meaning (plain language)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>One step for today</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--accent)]">•</span>
            <span>Invitation to Jesus</span>
          </li>
        </ul>
      </Section>

      {/* Latest Videos Section */}
      <Section title="Latest videos" className="mb-0">
        <ul className="space-y-4 mb-6">
          {videos.map((video, index) => (
            <li
              key={index}
              className="border border-white/10 rounded-lg p-4 bg-white/5"
            >
              <p className="text-white font-medium">{video.title}</p>
              <p className="text-white/50 text-sm">{video.platform}</p>
              {video.url === null && (
                <p className="text-[var(--accent)] text-sm mt-1">Coming soon</p>
              )}
            </li>
          ))}
        </ul>
        <p className="text-white/60">
          Videos coming soon. Follow @hisminute on TikTok, Instagram, YouTube, and X.
        </p>
      </Section>
    </Container>
  );
}
