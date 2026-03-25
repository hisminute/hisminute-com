import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Start — His Minute",
  description: "This is your time. Real hope is found in Jesus Christ.",
};

const outcomeItems = [
  { title: "Clarity", description: "Know what matters" },
  { title: "Peace", description: "Stand on truth" },
  { title: "Purpose", description: "Live with intention" },
];

export default function StartHere() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <Container className="!max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-12">
            <div className="text-center md:max-w-xl md:text-left lg:max-w-none">
              <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-[var(--foreground)] md:text-4xl lg:text-5xl xl:text-6xl">
                Begin with Jesus
              </h1>
              <p className="mx-auto mb-10 max-w-xl text-xl leading-relaxed text-[var(--foreground)]/80 md:mx-0 md:text-2xl">
                Real hope is found in Jesus Christ.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                <Button href="#prayer" variant="primary">
                  Pray Now
                </Button>
                <Button href="/prayer" variant="secondary">
                  Request Prayer
                </Button>
              </div>
            </div>
            <div className="relative aspect-[1376/768] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/start-hero-100.png"
                alt=""
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* The Gospel Section */}
      <section className="py-12 md:py-16 bg-white/[0.02]">
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionHeader title="The Good News" className="mb-8 text-center" centered />
            <div className="space-y-6 text-[var(--foreground)]/80 leading-relaxed text-xl">
              <p>
                God made you and loves you deeply.
                And even if life feels broken right now, God has not given up on you.
              </p>
              <p>
                Jesus, the Son of God, came to bring us back to God. He lived with perfect love, gave His life for us, and rose again.
              </p>
              <p>
                Because of Jesus, we don’t have to earn our way to God. Because of Him, our salvation is a gift, received by faith.
              </p>
              <p>
                You can begin with Jesus today, just as you are, and receive His grace.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Prayer Section */}
      <section id="prayer" className="py-12 md:py-16 bg-[#0a1628] scroll-mt-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionHeader title="A prayer to begin with Jesus" className="mb-8 text-center" centered />
            <Card className="border-l-4 border-l-[var(--accent)]">
              <p className="text-[var(--foreground)]/90 italic text-2xl leading-12 whitespace-pre-line">
              {/* The His Minute Prayer: Jesus, I need You. I trust in You. Forgive me, change my heart, lead my life. Amen  */}
                Jesus, {"\n"}
                I need You. 
                I trust in You. {"\n"}
                Forgive me, change my heart, lead my life. {"\n"}
                Amen {"\n"}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Next Steps Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <SectionHeader title="Your next step" className="mb-8" centered />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/prayer" variant="primary">
                Request Prayer
              </Button>              
              <Button href="/#latest-videos" variant="secondary">
                Watch the Latest
              </Button>
              <Button href="/support" variant="secondary">
                Support His Minute
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
