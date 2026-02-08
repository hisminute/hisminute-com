import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — His Minute",
  description: "Find clarity, peace, and purpose through Jesus Christ.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
