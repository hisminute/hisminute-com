import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { videos } from "@/content/videos";

export const metadata: Metadata = {
  title: "His Minute",
  description: "Find clarity, peace, and purpose in Jesus Christ.",
};

const outcomeItems = [
  { title: "Clarity", description: "Know what matters", image: "/clarity-100.png" },
  { title: "Peace", description: "Stand on truth", image: "/peace-104.png" },
  { title: "Purpose", description: "Live with intention", image: "/purpose-101.png" },
];

export default function Home() {
  return (
    <>
      {/* Hero — photo with text on the open right; stacked below lg */}
      <section className="relative overflow-hidden bg-[var(--background)] lg:min-h-[min(85vh,720px)]">
        <div className="relative h-[min(42vh,300px)] sm:h-[min(44vh,340px)] md:h-[min(46vh,400px)] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
          <Image
            src="/hero-100.png"
            alt="A woman in a quiet, reflective moment."
            fill
            priority
            className="object-cover object-[32%_center] sm:object-[28%_center] md:object-[22%_center] lg:object-[18%_center]"
            sizes="100vw"
          />
          {/* Light right-side scrim on large screens only — keeps the left subject clear */}
          <div
            className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-[#0B1B3A]/45 via-[#0B1B3A]/08 to-transparent lg:block"
            aria-hidden
          />
        </div>

        <Container className="relative z-10 flex !max-w-6xl flex-col justify-center lg:min-h-[min(85vh,720px)] lg:py-16 xl:py-20">
          <div className="mx-auto w-full max-w-3xl py-10 text-center sm:py-12 lg:mx-0 lg:ml-auto lg:mr-0 lg:max-w-xl lg:py-16 lg:pl-4 lg:pr-0 lg:text-left xl:max-w-2xl xl:pl-8">
            <div className="lg:rounded-2xl lg:border lg:border-white/10 lg:bg-[#0B1B3A]/70 lg:px-8 lg:py-10 lg:shadow-[0_12px_48px_-16px_rgba(0,0,0,0.55)]">
              <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-[var(--foreground)] [text-shadow:0_1px_2px_rgba(11,27,58,0.45),0_2px_16px_rgba(11,27,58,0.25)] md:text-4xl lg:text-5xl lg:[text-shadow:0_1px_2px_rgba(11,27,58,0.55),0_2px_28px_rgba(11,27,58,0.35)] xl:text-6xl">
                Find clarity, peace, and purpose in Jesus Christ.
              </h1>

              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[var(--foreground)]/90 md:text-xl lg:mx-0 lg:mb-10 lg:max-w-lg lg:[text-shadow:0_1px_2px_rgba(11,27,58,0.45)]">
                Real hope for real life, rooted in Scripture, and focused on Jesus.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button href="/start-here" variant="primary">
                  Find Hope
                </Button>
                <Button href="/prayer" variant="secondary">
                  Request Prayer
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcomes Section — individual cards */}
      <section className="py-12 md:py-16">
        <Container>
          <SectionHeader title="What Jesus Offers" className="mb-8 text-center" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-6">
            {outcomeItems.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
              >
                {/* Gold accent top border */}
                <div className="pointer-events-none absolute top-0 left-4 right-4 z-10 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent" />
                <div className="relative aspect-square w-full overflow-hidden border-b border-white/10">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="mb-1 text-center text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-center text-md text-[var(--foreground)]/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Latest Videos Section — with distinct background panel */}
      <section id="latest-videos" className="py-12 md:py-16 bg-[#0a1628]">
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
        </Container>
      </section>

      {/* Support Ask Section - Will you help us share Jesus today? */}
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
