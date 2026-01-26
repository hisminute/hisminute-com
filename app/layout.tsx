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

export const metadata: Metadata = {
  // TODO: Set metadataBase when deployment URL is known
  // metadataBase: new URL("https://hisminute.com"),
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

function Header() {
  return (
    <header className="w-full border-b border-white/10">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="text-xl font-semibold text-white hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm"
          >
            His Minute
          </Link>
          <ul className="flex items-center gap-4 text-sm md:gap-6">
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
        <ul className="flex items-center justify-center gap-6 text-sm mb-4">
          <li>
            <Link
              href="/start-here"
              className="text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm"
            >
              Start Here
            </Link>
          </li>
          <li>
            <Link
              href="/prayer"
              className="text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm"
            >
              Prayer
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-sm"
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
