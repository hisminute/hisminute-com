import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Support",
  description: "Support His Minute and help us continue providing daily devotional content to believers around the world.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Support His Minute"
        description="Help us continue providing daily devotional content to believers worldwide."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Mission Statement */}
            <div className="prose-his-minute text-center">
              <h2>Our Mission</h2>
              <p>
                His Minute exists to help believers grow closer to God through daily devotional content, prayer resources, and biblical teaching—all provided completely free of charge.
              </p>
            </div>

            {/* Why Support */}
            <div className="prose-his-minute">
              <h2>Why Support Us?</h2>
              <p>
                Your generous support enables us to:
              </p>
              <ul className="space-y-3 text-base list-disc list-inside">
                <li>Create high-quality devotional content daily</li>
                <li>Maintain and improve our platform</li>
                <li>Reach more people with the Gospel</li>
                <li>Keep all content free and accessible to everyone</li>
                <li>Develop new resources for spiritual growth</li>
              </ul>
            </div>

            {/* Support Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-semibold mb-3">One-Time Gift</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Make a single contribution to support our ministry.
                </p>
                <Button href="#" variant="primary" className="w-full">
                  Give Once
                </Button>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-semibold mb-3">Monthly Partner</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Join our community of monthly supporters.
                </p>
                <Button href="#" variant="primary" className="w-full">
                  Give Monthly
                </Button>
              </div>
            </div>

            {/* Other Ways to Help */}
            <div className="prose-his-minute">
              <h2>Other Ways to Help</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Share with Others</h3>
                  <p className="text-base">
                    Tell your friends, family, and church community about His Minute.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pray for Us</h3>
                  <p className="text-base">
                    Pray for wisdom, guidance, and impact as we serve believers worldwide.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Provide Feedback</h3>
                  <p className="text-base">
                    Help us improve by sharing your thoughts and suggestions.
                  </p>
                </div>
              </div>
            </div>

            {/* TODO: Integrate payment processor (Stripe/PayPal) */}
            {/* TODO: Add donation impact metrics */}
            {/* TODO: Add testimonials from supporters */}

            {/* Thank You */}
            <div className="text-center p-8 rounded-lg bg-zinc-50 dark:bg-zinc-900">
              <h3 className="text-2xl font-semibold mb-3">Thank You</h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Your support makes it possible for us to serve believers around the world. May God bless you abundantly for your generosity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
