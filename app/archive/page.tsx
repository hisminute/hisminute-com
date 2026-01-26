import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Archive — His Minute",
  description: "One verse. One minute. Jesus changes everything.",
};

export default function Archive() {
  return (
    <Container className="py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Archive</h1>
      <p className="text-lg text-white/80 mb-6 leading-relaxed">
        Daily verses (coming soon).
      </p>
      <p className="text-white/60 leading-relaxed">
        We'll post a daily verse list here with links to each video.
      </p>
    </Container>
  );
}
