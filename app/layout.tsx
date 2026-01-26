import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

function Header() {
  return (
    <header className="w-full border-b border-white/10">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-semibold text-white hover:text-[var(--accent)] transition-colors"
        >
          His Minute
        </Link>
        <ul className="flex items-center gap-4 text-sm md:gap-6">
          <li>
            <Link
              href="/start-here"
              className="text-white/80 hover:text-white transition-colors"
            >
              Start Here
            </Link>
          </li>
          <li>
            <Link
              href="/prayer"
              className="text-white/80 hover:text-white transition-colors"
            >
              Prayer
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="text-white/80 hover:text-white transition-colors"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              href="/archive"
              className="text-white/80 hover:text-white transition-colors"
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <p className="text-center text-[var(--accent)] font-medium mb-4">
          One verse. One minute. Jesus changes everything.
        </p>
        <p className="text-center text-white/60 text-sm mb-4">@hisminute</p>
        <ul className="flex items-center justify-center gap-6 text-sm mb-4">
          <li>
            <Link
              href="/start-here"
              className="text-white/60 hover:text-white transition-colors"
            >
              Start Here
            </Link>
          </li>
          <li>
            <Link
              href="/prayer"
              className="text-white/60 hover:text-white transition-colors"
            >
              Prayer
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="text-white/60 hover:text-white transition-colors"
            >
              Support
            </Link>
          </li>
        </ul>
        <p className="text-center text-white/40 text-xs">
          © {currentYear} His Minute
        </p>
      </div>
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
