"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseStyles =
    "block px-3 py-2 -mx-1 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

  const activeStyles = isActive
    ? "text-[var(--accent)] underline underline-offset-4"
    : "text-white/80 hover:text-white";

  return (
    <Link
      href={href}
      className={baseStyles + " " + activeStyles + " " + className}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
