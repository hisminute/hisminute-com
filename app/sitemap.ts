import { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hisminute.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
    },
    {
      url: `${siteUrl}/start-here`,
      lastModified,
    },
    {
      url: `${siteUrl}/prayer`,
      lastModified,
    },
    {
      url: `${siteUrl}/support`,
      lastModified,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
    },
  ];
}
