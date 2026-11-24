import { notFound } from "next/navigation";
import ReleaseDateView from "@/components/views/ReleaseDateView";
import { isNonDefaultLocale } from "@/data/locales";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  return pageMetadata("/release-date", t.release.metaTitle, t.release.metaDescription, locale);
}

export default async function LocalizedReleaseDatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <ReleaseDateView locale={locale} />;
}
