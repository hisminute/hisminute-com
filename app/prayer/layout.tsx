import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer — His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function PrayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
