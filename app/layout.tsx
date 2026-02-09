import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import { Container } from "@/components/Container";
import { NavLink } from "@/components/NavLink";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// IMPORTANT: Set NEXT_PUBLIC_SITE_URL in Vercel environment variables to https://www.hisminute.com
// This ensures Open Graph images and metadata resolve correctly in production.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hisminute.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "His Minute",
    template: "His Minute | %s",
  },
  description: "Find clarity, peace, and purpose through Jesus Christ.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "His Minute",
    description: "Find clarity, peace, and purpose through Jesus Christ.",
    images: [
      {
        url: "/hmlogo.png",
        width: 2048,
        height: 2048,
        alt: "His Minute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "His Minute",
    description: "Find clarity, peace, and purpose through Jesus Christ.",
    images: ["/hmlogo.png"],
  },
  icons: {
    icon: "/hmlogo.png",
    apple: "/hmlogo.png",
    shortcut: "/hmlogo.png",
  },
};

function AnnouncementStrip() {
  return (
    <div className="w-full bg-white/5 border-b border-white/10 py-3 md:py-2">
      <Container>
        <p className="text-center text-sm text-[var(--foreground)]/70 leading-relaxed">
          New here?{" "}
          <Link
            href="/start-here"
            className="text-[var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm px-1 py-0.5 -mx-1"
          >
            Start Here
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
        <nav className="flex flex-wrap items-center justify-between gap-2 py-4 md:py-5">
          <Link
            href="/"
            className="text-xl font-heading font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm py-1"
          >
            His Minute
          </Link>
          <ul className="flex flex-wrap items-center gap-1 text-sm md:gap-2">
            <li>
              <NavLink href="/start-here">Find Hope</NavLink>
            </li>
            <li>
              <NavLink href="/prayer">Prayer</NavLink>
            </li>
            <li>
              <NavLink href="/support">Support</NavLink>
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
    <footer className="w-full border-t border-white/10 mt-auto bg-[#00224B]">
      <Container className="py-12 md:py-16">
        <p className="text-center text-[var(--accent)] font-heading font-medium text-lg mb-4">
          Find clarity, peace, and purpose through Jesus Christ.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm mb-6">
          <li>
            <Link
              href="/start-here"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Find Hope
            </Link>
          </li>
          <li>
            <Link
              href="/prayer"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Prayer
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-2 py-1 -mx-2"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm mb-6">
          <li>
            <a
              href="https://www.youtube.com/@HisMinute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-1 py-1"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hisminute/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-1 py-1"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@hisminute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-1 py-1"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/hisminute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-1 py-1"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://x.com/HisMinute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm px-1 py-1"
            >
              X
            </a>
          </li>
        </ul>
        <p className="text-center text-[var(--foreground)]/40 text-xs">
          © {currentYear} His Minute
        </p>
      </Container>
    </footer>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "His Minute",
      url: siteUrl,
      sameAs: [
        "https://www.youtube.com/@HisMinute",
        "https://www.instagram.com/hisminute/",
        "https://www.tiktok.com/@hisminute",
        "https://www.facebook.com/hisminute",
        "https://x.com/HisMinute",
      ],
    },
    {
      "@type": "WebSite",
      name: "His Minute",
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnnouncementStrip />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
