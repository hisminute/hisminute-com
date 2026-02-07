import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { videos } from "@/content/videos";

export const metadata: Metadata = {
  title: "His Minute",
  description: "Find clarity, peace, and purpose through Jesus Christ.",
};

const outcomeItems = [
  { title: "Clarity", description: "Know what matters" },
  { title: "Peace", description: "Stand on truth" },
  { title: "Purpose", description: "Live with intention" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section — with subtle gradient panel */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Hero gradient background panel */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(212, 175, 55, 0.06) 0%, rgba(212, 175, 55, 0.02) 40%, transparent 100%)",
          }}
        />
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            {/* Slogan as supporting badge }
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[var(--accent)] border border-[var(--accent)]/40 rounded-full bg-[var(--accent)]/10">
              One verse. One minute. Jesus changes everything.
            </span>
            { Slogan as supporting badge */}

            {/* Mission statement as H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-[var(--foreground)] mb-6 leading-tight">
              Find clarity, peace, and purpose through Jesus Christ.
            </h1>

            <p className="text-lg md:text-xl text-[var(--foreground)]/80 mb-10 max-w-xl mx-auto leading-relaxed">
              Real hope for real life, rooted in Scripture, and focused on Jesus.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/start-here" variant="primary">
                Start Here
              </Button>
              <Button href="/prayer" variant="secondary">
                Request Prayer
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcomes Section — individual cards */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeader title="What Jesus Offers" className="mb-8 text-center" />
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {outcomeItems.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/[0.04] border border-white/10 rounded-xl p-5 md:p-6"
              >
                {/* Gold accent top border */}
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent" />
                <h3 className="text-[var(--foreground)] font-semibold mb-1 text-center text-lg">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground)]/60 text-center text-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest Videos Section — with distinct background panel */}
      <section className="py-12 md:py-16 bg-[#0a1628]">
        <Container>
          <SectionHeader title="Latest videos" className="mb-8 text-center" />
          <div className="space-y-4 mb-6">
            {videos.map((video, index) => (
              <Card key={index} className="p-5 bg-white/[0.02]">
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

      {/* Support Ask Section */}
      <section className="py-12 md:py-16 border-t border-white/10">
        <Container>
          <Card className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-[var(--foreground)] mb-4">
              Will you help us share Jesus today?
            </h2>
            <p className="text-[var(--foreground)]/80 mb-6 leading-relaxed">
              Your support helps us reach more people with the love of Jesus Christ.
            </p>
            <Button href="/support" variant="primary" className="mb-6">
              Support His Minute
            </Button>
          </Card>
        </Container>
      </section>
    </>
  );
}
