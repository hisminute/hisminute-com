import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Container } from "@/components/Container";
import { NavLink } from "@/components/NavLink";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set NEXT_PUBLIC_SITE_URL in Vercel environment variables to https://hisminute.com
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// TODO: Replace public/og.png with a proper 1200x630 branded PNG before launch.
// A reference design exists at public/og.svg with the correct layout and branding.

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "His Minute",
  description: "One verse. One minute. Jesus changes everything.",
  openGraph: {
    title: "His Minute",
    description: "One verse. One minute. Jesus changes everything.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "His Minute",
    description: "One verse. One minute. Jesus changes everything.",
    images: ["/og.png"],
  },
};

function AnnouncementStrip() {
  return (
    <div className="w-full bg-white/5 border-b border-white/10 py-3 md:py-2">
      <Container>
        <p className="text-center text-sm text-white/70 leading-relaxed">
          New here?{" "}
          <Link
            href="/start-here"
            className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm px-1 py-0.5 -mx-1"
          >
            Start at Start Here
          </Link>
          . Need prayer?{" "}
          <Link
            href="/prayer"
            className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm px-1 py-0.5 -mx-1"
          >
            Request Prayer
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}

function Header() {
  return (
    <header className="w-full border-b border-white/10">
      <Container>
        <nav className="flex flex-wrap items-center justify-between gap-2 py-3 md:py-4">
          <Link
            href="/"
            className="text-xl font-semibold text-white hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm py-1"
          >
            His Minute
          </Link>
          <ul className="flex flex-wrap items-center gap-1 text-sm md:gap-2">
            <li>
              <NavLink href="/start-here">Start Here</NavLink>
            </li>
            <li>
              <NavLink href="/prayer">Prayer</NavLink>
            </li>
            <li>
              <NavLink href="/support">Support</NavLink>
            </li>
            <li>
              <NavLink href="/archive">Archive</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 mt-auto">
      <Container className="py-8">
        <p className="text-center text-[var(--accent)] font-medium mb-4">
          One verse. One minute. Jesus changes everything.
        </p>
        <p className="text-center text-white/60 text-sm mb-4">@hisminute</p>
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm mb-4">
          <li>
            <Link
              href="/start-here"
              className="text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Start Here
            </Link>
          </li>
          <li>
            <Link
              href="/prayer"
              className="text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Prayer
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Support
            </Link>
          </li>
        </ul>
        <p className="text-center text-white/40 text-xs">
          © {currentYear} His Minute
        </p>
      </Container>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <AnnouncementStrip />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
