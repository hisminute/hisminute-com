import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Start — His Minute",
  description: "This is your time. Real hope is found in Jesus.",
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
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-[var(--foreground)] mb-6 leading-tight">
              Start your journey with Jesus
            </h1>
            <p className="text-xl md:text-2xl text-[var(--foreground)]/80 mb-10 max-w-xl mx-auto leading-relaxed">
              This is your time. Real hope is found in Jesus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#prayer" variant="primary">
                Pray now
              </Button>
              <Button href="/prayer" variant="secondary">
                Request Prayer
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What Jesus Offers Section */}
      <section className="py-12 md:py-16 bg-white/[0.02]">
        <Container>
          <SectionHeader title="What Jesus Offers" className="mb-8 text-center" centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {outcomeItems.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/[0.04] border border-white/10 rounded-xl p-5 md:p-6 text-center"
              >
                {/* Gold accent top border */}
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent" />
                <h3 className="text-[var(--foreground)] font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground)]/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The Gospel Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionHeader title="The Good News" className="mb-8 text-center" centered />
            <div className="space-y-6 text-[var(--foreground)]/80 leading-relaxed text-lg">
              <p>
                God made you and loves you deeply.  
                And even if life feels broken right now, God has not given up on you.
              </p>
              <p>
                Jesus came to bring us back to God. He lived with perfect love, gave His life for us, and rose again.
              </p>
              <p>
                Salvation is a gift, not something you have to earn. You can come to Jesus just as you are and receive His grace today.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Prayer Section */}
      <section id="prayer" className="py-12 md:py-16 bg-[#0a1628] scroll-mt-24">
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionHeader title="A simple prayer" className="mb-8 text-center" centered />
            <Card className="border-l-4 border-l-[var(--accent)]">
              <p className="text-[var(--foreground)]/90 italic text-2xl leading-12 whitespace-pre-line">
              {/* The His Minute Prayer: Jesus, I need You. I trust in You. Forgive me, change my heart, and lead my life. Amen  */}
                Jesus, {"\n"}
                I need You. 
                I trust in You. {"\n"}
                Forgive me, change my heart, and lead my life. {"\n"}
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
              <Button href="/" variant="secondary">
                Watch the latest
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
