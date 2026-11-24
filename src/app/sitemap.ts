import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES, localePath } from "@/data/locales";
import { SEEKER_CLASSES, SITE_CONFIG, SITE_NAV } from "@/data/taraeData";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE_CONFIG.sourceCheckDate;

  const basePaths: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly";
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    ...SITE_NAV.map(({ href }) => ({
      path: href,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...SEEKER_CLASSES.map(({ id }) => ({
      path: `/classes/${id}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const item of basePaths) {
    const languages: Record<string, string> = {};
    for (const loc of SUPPORTED_LOCALES) {
      languages[loc] = new URL(localePath(loc, item.path), SITE_CONFIG.url).href;
    }

    for (const loc of SUPPORTED_LOCALES) {
      entries.push({
        url: new URL(localePath(loc, item.path), SITE_CONFIG.url).href,
        lastModified,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: { languages },
      });
    }
  }

  return entries;
}
