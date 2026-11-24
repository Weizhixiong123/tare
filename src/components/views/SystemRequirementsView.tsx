import Link from "next/link";
import { MidRectangleAd, ResponsiveTopBannerAd } from "@/components/AdSlots";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import GuideHeader from "@/components/GuideHeader";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function SystemRequirementsView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <GuideHeader label={t.specs.breadcrumb} href="/system-requirements" title={t.specs.metaTitle} locale={locale}>
        <p>{t.specs.headerLead}</p>
        <p className="text-sm text-gray-400">
          {t.specs.checkedLabel} <time dateTime={SITE_CONFIG.sourceCheckDate}>{t.sourceDateFormatted}</time>
        </p>
      </GuideHeader>

      <ResponsiveTopBannerAd className="mt-6" />

      <section className="mt-7 grid gap-4 sm:grid-cols-2" aria-label={t.specs.metaTitle}>
        <div className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <h2 className="font-serif text-lg font-bold text-amber-200">{t.specs.minTitle}</h2>
          <dl className="mt-3 divide-y divide-amber-500/15 text-sm">
            {t.specs.fields.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 py-2">
                <dt className="text-gray-400">{label}</dt>
                <dd className="text-right text-gray-200">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <h2 className="font-serif text-lg font-bold text-amber-200">{t.specs.recTitle}</h2>
          <dl className="mt-3 divide-y divide-amber-500/15 text-sm">
            {t.specs.fields.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 py-2">
                <dt className="text-gray-400">{label}</dt>
                <dd className="text-right text-gray-200">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <MidRectangleAd className="mt-8" />

      <section className="arpg-card mt-8 rounded-2xl p-6">
        <CornerOrnaments />
        <h2 className="font-serif text-xl font-bold text-amber-200">{t.specs.whyTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.specs.whyBody1}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.specs.whyBody2}</p>
        <div className="mt-5 flex flex-wrap gap-5 border-t border-amber-500/20 pt-4 text-sm">
          <a href={SITE_CONFIG.steamUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-200 underline">
            {t.specs.linkSteam}
          </a>
          <a href={SITE_CONFIG.steamNews} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-200 underline">
            {t.specs.linkNews}
          </a>
          <Link href={localePath(locale, "/platforms")} className="font-semibold text-amber-200 underline">
            {t.specs.linkPlatforms}
          </Link>
        </div>
      </section>
    </div>
  );
}
