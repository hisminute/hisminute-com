import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer — His Minute",
  description: "Find clarity, peace, and purpose through Jesus Christ.",
};

export default function PrayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
