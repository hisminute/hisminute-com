export interface ArchiveEntry {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  scripture: {
    verse: string;
    reference: string;
  };
  slug: string;
}

export const archiveEntries: ArchiveEntry[] = [
  {
    id: "1",
    title: "Walking in Faith",
    date: "2026-01-20",
    excerpt: "Discovering the power of unwavering trust in God's plan for your life.",
    scripture: {
      verse: "Trust in the Lord with all your heart and lean not on your own understanding.",
      reference: "Proverbs 3:5",
    },
    slug: "walking-in-faith",
  },
  {
    id: "2",
    title: "The Power of Prayer",
    date: "2026-01-15",
    excerpt: "Understanding how consistent prayer transforms our relationship with God.",
    scripture: {
      verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      reference: "Philippians 4:6",
    },
    slug: "power-of-prayer",
  },
  {
    id: "3",
    title: "Living by Grace",
    date: "2026-01-10",
    excerpt: "Embracing the transformative grace that God freely offers to all believers.",
    scripture: {
      verse: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.",
      reference: "Ephesians 2:8",
    },
    slug: "living-by-grace",
  },
  // TODO: Add more archive entries as content is created
];
