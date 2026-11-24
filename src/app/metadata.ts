import type { Metadata } from "next";
import { LOCALE_META, SUPPORTED_LOCALES, type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";

export function pageMetadata(
  path: string,
  title: string,
  description: string,
  locale: Locale = "en",
): Metadata {
  const localizedPath = localePath(locale, path);
  const url = new URL(localizedPath, SITE_CONFIG.url).href;
  const languages: Record<string, string> = {};

  for (const loc of SUPPORTED_LOCALES) {
    languages[loc] = new URL(localePath(loc, path), SITE_CONFIG.url).href;
  }
  languages["x-default"] = new URL(localePath("en", path), SITE_CONFIG.url).href;

  const image = {
    url: new URL("/images/tarae-share.jpg", SITE_CONFIG.url).href,
    width: 1200,
    height: 630,
    alt: "Dark fantasy landscape with a red eclipse",
  };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      locale: LOCALE_META[locale].ogLocale,
      siteName: SITE_CONFIG.name,
      url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
