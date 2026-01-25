"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/prayer", label: "Prayer" },
  { href: "/archive", label: "Archive" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1020] border-b border-[#1D2A4A]">
      {/* Subtle gradient glow at bottom for premium feel */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#FFC30B]/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight text-[#F5F7FF] hover:text-[#FFC30B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30B]/50 rounded"
          >
            His Minute
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors px-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30B]/50 ${
                  pathname === link.href
                    ? "text-[#F5F7FF]"
                    : "text-[#7E8BB3] hover:text-[#F5F7FF]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-[#FFC30B] rounded-full" />
                )}
              </Link>
            ))}

            {/* Separator */}
            <span className="w-px h-5 bg-[#1D2A4A] mx-3" />

            {/* Primary CTA */}
            <Link
              href="/support"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-[#FFC30B] text-[#0B1B3A] hover:bg-[#FFC30B]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30B]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1020]"
            >
              Support
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 -mr-2 text-[#B8C2E0] hover:text-[#F5F7FF] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC30B]/50"
            aria-label="Open menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
