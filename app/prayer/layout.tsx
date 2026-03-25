import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer — His Minute",
  description:
    "Share your prayer request, and we will pray with you in faith and hope.",
};

export default function PrayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
