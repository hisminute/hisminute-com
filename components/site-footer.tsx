import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">His Minute</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Daily devotional content to strengthen your faith.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/start-here" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
                  Start Here
                </Link>
              </li>
              <li>
                <Link href="/prayer" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
                  Prayer
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
                  Support Us
                </Link>
              </li>
              {/* TODO: Add additional footer links (Privacy, Terms, Contact, etc.) */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>&copy; {currentYear} His Minute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
