import Link from "next/link";

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/prayer", label: "Prayer" },
  { href: "/archive", label: "Archive" },
  { href: "/support", label: "Support" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Subtle gradient fade from body to footer */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#FFC30B]/20 to-transparent" />
      
      <div className="bg-[#0B1020] border-t border-[#1D2A4A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Top Zone: Brand + Mission */}
          <div className="py-12 md:py-16 text-center border-b border-[#1D2A4A]/50">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#F5F7FF] mb-3">
              His Minute
            </h2>
            <p className="text-[#B8C2E0] text-base md:text-lg max-w-md mx-auto leading-relaxed">
              Daily devotional content to strengthen your faith and draw you closer to Jesus.
            </p>
          </div>

          {/* Middle Zone: Nav Links + Social */}
          <div className="py-8 md:py-10 border-b border-[#1D2A4A]/50">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
              {/* Nav Links */}
              <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
                {navLinks.map((link, index) => (
                  <span key={link.href} className="flex items-center">
                    <Link 
                      href={link.href} 
                      className="text-sm font-medium text-[#7E8BB3] hover:text-[#F5F7FF] transition-colors px-3 py-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30B]/50"
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <span className="text-[#1D2A4A] mx-0.5 hidden md:inline">·</span>
                    )}
                  </span>
                ))}
              </nav>

              {/* Separator for desktop */}
              <span className="hidden md:block w-px h-5 bg-[#1D2A4A] mx-6" />

              {/* Social Handle */}
              <a 
                href="https://instagram.com/hisminute" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-[#B8C2E0] hover:text-[#F5F7FF] transition-colors rounded-md px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30B]/50"
              >
                <span className="w-1.5 h-1.5 bg-[#FFC30B] rounded-full" />
                @hisminute
              </a>
            </div>
          </div>

          {/* Bottom Zone: Slogan + Privacy + Copyright */}
          <div className="py-10 md:py-12 text-center">
            {/* Slogan */}
            <div className="mb-8">
              <div className="w-8 h-0.5 bg-[#FFC30B] mx-auto mb-5 rounded-full" />
              <p className="text-lg md:text-xl font-semibold text-[#F5F7FF] italic tracking-wide">
                One verse. One minute. Jesus changes everything.
              </p>
            </div>

            {/* Privacy Notice */}
            <p className="text-xs text-[#7E8BB3] mb-6 max-w-sm mx-auto leading-relaxed">
              Prayer requests are private. We do not sell your information.
            </p>

            {/* Copyright */}
            <p className="text-xs text-[#7E8BB3]/70">
              © {currentYear} His Minute
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
