import { notFound } from "next/navigation";
import SystemRequirementsView from "@/components/views/SystemRequirementsView";
import { isNonDefaultLocale } from "@/data/locales";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  return pageMetadata("/system-requirements", t.specs.metaTitle, t.specs.metaDescription, locale);
}

export default async function LocalizedSystemRequirementsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <SystemRequirementsView locale={locale} />;
}
