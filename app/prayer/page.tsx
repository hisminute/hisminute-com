import { PageHeader } from "@/components/page-header";
import { ScriptureCard } from "@/components/scripture-card";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Prayer",
  description: "Discover the power of prayer and learn how to develop a deeper prayer life with practical guides and resources.",
  path: "/prayer",
});

export default function PrayerPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Prayer"
        description="Communicate with God through prayer and experience His presence in your life."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose-his-minute">
              <h2>The Power of Prayer</h2>
              <p>
                Prayer is not just speaking words into the air—it's an intimate conversation with the Creator of the universe. Through prayer, we express our gratitude, confess our struggles, seek guidance, and experience God's peace.
              </p>
            </div>

            {/* Scripture */}
            <ScriptureCard
              verse="The Lord is near to all who call on him, to all who call on him in truth."
              reference="Psalm 145:18"
            />

            {/* Prayer Topics */}
            <div className="prose-his-minute">
              <h2>How to Pray</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Adoration</h3>
                  <p className="text-base">
                    Begin by praising God for who He is—His character, His greatness, His love.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Confession</h3>
                  <p className="text-base">
                    Acknowledge your sins and shortcomings, knowing that God offers forgiveness and grace.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Thanksgiving</h3>
                  <p className="text-base">
                    Express gratitude for God's blessings, both big and small, in your life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Supplication</h3>
                  <p className="text-base">
                    Bring your requests before God, trusting in His wisdom and timing.
                  </p>
                </div>
              </div>
            </div>

            {/* Sample Prayer */}
            <div className="p-8 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-semibold mb-4">A Prayer to Begin</h3>
              <p className="italic text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                Heavenly Father, I come before You today with a humble heart. Thank You for Your unfailing love and constant presence in my life. I confess my weaknesses and ask for Your strength. Guide my steps today and help me to honor You in all I do. In Jesus' name, Amen.
              </p>
            </div>

            {/* TODO: Add prayer request submission form */}
            {/* TODO: Add prayer journal feature */}
          </div>
        </div>
      </section>
    </div>
  );
}
