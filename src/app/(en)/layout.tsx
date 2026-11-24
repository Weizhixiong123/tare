import type { Metadata } from "next";
import "../globals.css";
import LocaleShell from "@/components/views/LocaleShell";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

const t = getTranslations("en");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: { default: t.siteName, template: `%s | ${t.siteName}` },
  description: t.home.metaDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: t.siteName,
    title: t.siteName,
    description: t.home.metaDescription,
    images: [
      {
        url: "/images/tarae-share.jpg",
        width: 1200,
        height: 630,
        alt: "Dark fantasy landscape with a red eclipse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.siteName,
    description: t.home.metaDescription,
    images: ["/images/tarae-share.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LocaleShell locale="en">{children}</LocaleShell>;
}
