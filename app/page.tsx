import { Button } from "@/components/button";
import { ScriptureCard } from "@/components/scripture-card";
import { CTASection } from "@/components/cta-section";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Home",
  description: "Daily devotional content to strengthen your faith and grow closer to God.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#F5F7FF] leading-[1.1]">
              Take a Minute with God
            </h1>
            <p className="text-lg md:text-xl text-[#B8C2E0] mb-4 max-w-2xl mx-auto leading-relaxed">
              A simple daily devotional to help you pause, reflect, and grow closer to Jesus—one minute at a time.
            </p>
            <p className="text-base md:text-lg font-medium text-[#7E8BB3] mb-12 italic">
              One verse. One minute. Jesus changes everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/start-here"
                className="btn-primary"
              >
                Get Started
              </a>
              <a
                href="/archive"
                className="btn-secondary"
              >
                Browse Archive
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Scripture */}
      <section className="py-16 md:py-20 bg-[#0B1020]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#F5F7FF]">
              Today's Scripture
            </h2>
            <ScriptureCard
              verse="For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."
              reference="Jeremiah 29:11"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#F5F7FF]">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-[#0E1630] border border-[#1D2A4A]">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F7FF]">Daily Devotionals</h3>
              <p className="text-[#B8C2E0]">
                Start each day with scripture-based reflections and encouragement.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#0E1630] border border-[#1D2A4A]">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F7FF]">Prayer Guides</h3>
              <p className="text-[#B8C2E0]">
                Learn to deepen your prayer life with practical resources.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[#0E1630] border border-[#1D2A4A]">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3 text-[#F5F7FF]">Community</h3>
              <p className="text-[#B8C2E0]">
                Join believers growing together in faith and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0B1020] border-t border-[#1D2A4A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[#F5F7FF]">
              Ready to Begin?
            </h2>
            <p className="text-lg md:text-xl text-[#B8C2E0] mb-8">
              Join thousands of believers who start their day with His Minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/start-here" className="btn-primary">
                Start Your Journey
              </a>
              <a href="/about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
