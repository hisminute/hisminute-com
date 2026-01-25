import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { ScriptureCard } from "@/components/scripture-card";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Start Here",
  description: "New to His Minute? Learn how to begin your daily devotional journey and strengthen your faith.",
  path: "/start-here",
});

export default function StartHerePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Start Here"
        description="Welcome! Let's begin your journey of daily devotion and spiritual growth."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose-his-minute">
              <h2>What is His Minute?</h2>
              <p>
                His Minute is a daily devotional platform designed to help you grow closer to God through scripture, reflection, and prayer. We believe that even just a minute spent intentionally with God can transform your day.
              </p>
            </div>

            {/* Scripture */}
            <ScriptureCard
              verse="Your word is a lamp for my feet, a light on my path."
              reference="Psalm 119:105"
            />

            {/* How it Works */}
            <div className="prose-his-minute">
              <h2>How It Works</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Start Your Day with Scripture</h3>
                  <p className="text-base">
                    Each morning, receive a carefully selected Bible verse and devotional thought to guide your day.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Reflect and Pray</h3>
                  <p className="text-base">
                    Take time to meditate on the message and bring your prayers to God.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Carry It With You</h3>
                  <p className="text-base">
                    Let the day's message shape your thoughts, words, and actions throughout the day.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button href="/prayer" variant="primary" size="lg">
                Begin with Prayer
              </Button>
              <Button href="/archive" variant="outline" size="lg">
                Browse Past Devotionals
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
