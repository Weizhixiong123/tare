import { notFound } from "next/navigation";
import ClassesView from "@/components/views/ClassesView";
import { isNonDefaultLocale } from "@/data/locales";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  return pageMetadata("/classes", t.classes.metaTitle, t.classes.metaDescription, locale);
}

export default async function LocalizedClassesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <ClassesView locale={locale} />;
}
