import { notFound } from "next/navigation";
import PlatformsView from "@/components/views/PlatformsView";
import { isNonDefaultLocale } from "@/data/locales";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  return pageMetadata("/platforms", t.platforms.metaTitle, t.platforms.metaDescription, locale);
}

export default async function LocalizedPlatformsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <PlatformsView locale={locale} />;
}
