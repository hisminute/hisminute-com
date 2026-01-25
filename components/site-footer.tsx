import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1B3A] text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Slogan */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl font-medium text-white/90 italic">
            One verse. One minute. Jesus changes everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">His Minute</h3>
            <p className="text-sm text-white/70 mb-4">
              Daily devotional content to strengthen your faith.
            </p>
            <p className="text-sm font-medium text-[#FFC30B]">
              @hisminute
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/start-here" 
                  className="text-white/70 hover:text-[#FFC30B] transition-colors"
                >
                  Start Here
                </Link>
              </li>
              <li>
                <Link 
                  href="/prayer" 
                  className="text-white/70 hover:text-[#FFC30B] transition-colors"
                >
                  Prayer
                </Link>
              </li>
              <li>
                <Link 
                  href="/archive" 
                  className="text-white/70 hover:text-[#FFC30B] transition-colors"
                >
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/support" 
                  className="text-white/70 hover:text-[#FFC30B] transition-colors"
                >
                  Support Us
                </Link>
              </li>
              {/* TODO: Add additional footer links (Privacy, Terms, Contact, etc.) */}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>&copy; {currentYear} His Minute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
