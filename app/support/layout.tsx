import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
