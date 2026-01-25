"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/start-here", label: "Start Here" },
  { href: "/prayer", label: "Prayer" },
  { href: "/archive", label: "Archive" },
  { href: "/support", label: "Support" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1020] border-b border-[#1D2A4A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tight text-[#F5F7FF] hover:text-[#FFC30B] transition-colors"
          >
            His Minute
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  pathname === link.href
                    ? "text-[#F5F7FF]"
                    : "text-[#7E8BB3] hover:text-[#B8C2E0]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFC30B] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* TODO: Add mobile menu toggle */}
          <button className="md:hidden text-sm font-medium text-[#B8C2E0] hover:text-[#F5F7FF] transition-colors">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
