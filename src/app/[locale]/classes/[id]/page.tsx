import { notFound } from "next/navigation";
import SeekerDetailView from "@/components/views/SeekerDetailView";
import { NON_DEFAULT_LOCALES, isNonDefaultLocale } from "@/data/locales";
import { SEEKER_CLASSES } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../../metadata";

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.flatMap((locale) =>
    SEEKER_CLASSES.map(({ id }) => ({ locale, id })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isNonDefaultLocale(locale)) return {};
  const t = getTranslations(locale);
  const seeker = t.seekers.find((c) => c.id === id);
  if (!seeker) return {};
  return pageMetadata(
    `/classes/${seeker.id}`,
    `${seeker.name} (${seeker.originalName}) – ${t.siteName}`,
    seeker.summary,
    locale,
  );
}

export default async function LocalizedSeekerDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isNonDefaultLocale(locale)) notFound();
  return <SeekerDetailView locale={locale} id={id} />;
}
