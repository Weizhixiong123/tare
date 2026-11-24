import { notFound } from "next/navigation";
import FaqView from "@/components/views/FaqView";
import { isNonDefaultLocale } from "@/data/locales";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  return pageMetadata("/faq", t.faq.metaTitle, t.faq.metaDescription, locale);
}

export default async function LocalizedFaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <FaqView locale={locale} />;
}
