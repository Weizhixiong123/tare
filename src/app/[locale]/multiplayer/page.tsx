import { notFound } from "next/navigation";
import MultiplayerView from "@/components/views/MultiplayerView";
import { isNonDefaultLocale } from "@/data/locales";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  return pageMetadata("/multiplayer", t.multiplayer.metaTitle, t.multiplayer.metaDescription, locale);
}

export default async function LocalizedMultiplayerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <MultiplayerView locale={locale} />;
}
