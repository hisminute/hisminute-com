import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  path?: string;
}

const siteConfig = {
  name: "His Minute",
  description: "Daily devotional content to strengthen your faith and grow closer to God.",
  url: "https://hisminute.com", // TODO: Update with actual production URL
};

export function generatePageMetadata({ title, description, path = "" }: PageMetadata): Metadata {
  const pageTitle = title === "Home" ? siteConfig.name : `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    openGraph: {
      type: "website",
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}

export { siteConfig };
