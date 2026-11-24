import { notFound } from "next/navigation";
import HomeView from "@/components/views/HomeView";
import { isNonDefaultLocale } from "@/data/locales";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  return pageMetadata("/", t.home.metaTitle, t.home.metaDescription, locale);
}

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <HomeView locale={locale} />;
}
