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
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Take a Minute with God
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
              Daily devotional content to strengthen your faith and deepen your relationship with Jesus Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/start-here" variant="primary" size="lg">
                Get Started
              </Button>
              <Button href="/archive" variant="outline" size="lg">
                Browse Archive
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Scripture */}
      <section className="py-16 md:py-20 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold mb-3">Daily Devotionals</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Start each day with scripture-based reflections and encouragement.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold mb-3">Prayer Guides</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Learn to deepen your prayer life with practical resources.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Join believers growing together in faith and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Begin?"
        description="Join thousands of believers who start their day with His Minute."
        primaryButtonText="Start Your Journey"
        primaryButtonHref="/start-here"
        secondaryButtonText="Learn More"
        secondaryButtonHref="/about"
        className="bg-zinc-50/50 dark:bg-zinc-900/50"
      />
    </div>
  );
}
