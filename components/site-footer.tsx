import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1020] border-t border-[#1D2A4A] mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-6xl">
        {/* Slogan with gold accent line */}
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-[#FFC30B] mx-auto mb-6 rounded-full" />
          <p className="text-xl md:text-2xl font-medium text-[#F5F7FF] italic">
            One verse. One minute. Jesus changes everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F5F7FF]">His Minute</h3>
            <p className="text-sm text-[#7E8BB3] mb-4 leading-relaxed">
              Daily devotional content to strengthen your faith.
            </p>
            <p className="text-sm font-medium text-[#B8C2E0]">
              <span className="inline-block w-1.5 h-1.5 bg-[#FFC30B] rounded-full mr-2 relative top-[-1px]" />
              @hisminute
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#F5F7FF]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/start-here" 
                  className="text-[#7E8BB3] hover:text-[#F5F7FF] transition-colors"
                >
                  Start Here
                </Link>
              </li>
              <li>
                <Link 
                  href="/prayer" 
                  className="text-[#7E8BB3] hover:text-[#F5F7FF] transition-colors"
                >
                  Prayer
                </Link>
              </li>
              <li>
                <Link 
                  href="/archive" 
                  className="text-[#7E8BB3] hover:text-[#F5F7FF] transition-colors"
                >
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#F5F7FF]">Support</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/support" 
                  className="text-[#7E8BB3] hover:text-[#F5F7FF] transition-colors"
                >
                  Support Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1D2A4A] text-center text-sm text-[#7E8BB3]">
          <p>&copy; {currentYear} His Minute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
