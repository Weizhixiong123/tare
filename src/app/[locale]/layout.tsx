import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import LocaleShell from "@/components/views/LocaleShell";
import { LOCALE_META, NON_DEFAULT_LOCALES, isNonDefaultLocale } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  const meta = LOCALE_META[locale];

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: { default: t.siteName, template: `%s | ${t.siteName}` },
    description: t.home.metaDescription,
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
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
}

export default async function LocalizedRootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <LocaleShell locale={locale}>{children}</LocaleShell>;
}
