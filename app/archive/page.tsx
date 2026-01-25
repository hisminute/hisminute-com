import { PageHeader } from "@/components/page-header";
import { ScriptureCard } from "@/components/scripture-card";
import { archiveEntries } from "@/lib/archive-data";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Archive",
  description: "Browse our complete collection of daily devotionals and scripture-based reflections.",
  path: "/archive",
});

export default function ArchivePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Archive"
        description="Explore past devotionals and scripture reflections."
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* TODO: Add search/filter functionality */}
            {/* TODO: Add pagination or infinite scroll */}

            <div className="space-y-8">
              {archiveEntries.map((entry) => (
                <article
                  key={entry.id}
                  className="p-6 md:p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                        {entry.title}
                      </h2>
                      <time className="text-sm text-zinc-600 dark:text-zinc-400">
                        {new Date(entry.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                    {entry.excerpt}
                  </p>

                  <ScriptureCard
                    verse={entry.scripture.verse}
                    reference={entry.scripture.reference}
                  />

                  {/* TODO: Add link to individual devotional page when implemented */}
                  {/* <Link href={`/devotional/${entry.slug}`} className="...">
                    Read Full Devotional →
                  </Link> */}
                </article>
              ))}
            </div>

            {/* Empty State (when no entries) */}
            {archiveEntries.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-zinc-600 dark:text-zinc-400">
                  No devotionals available yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
