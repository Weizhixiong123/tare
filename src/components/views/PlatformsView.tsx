import Link from "next/link";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import GuideHeader from "@/components/GuideHeader";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function PlatformsView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <GuideHeader label={t.platforms.breadcrumb} href="/platforms" title={t.platforms.metaTitle} locale={locale}>
        <p>{t.platforms.headerLead}</p>
        <p className="text-sm text-gray-400">
          {t.platforms.checkedLabel} <time dateTime={SITE_CONFIG.sourceCheckDate}>{t.sourceDateFormatted}</time>
        </p>
      </GuideHeader>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <section className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <h2 className="font-serif text-lg font-bold text-amber-200">{t.platforms.pcTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.platforms.pcBody}</p>
          <a href={SITE_CONFIG.steamUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-amber-200 underline">
            {t.platforms.pcLink}
          </a>
        </section>
        <section className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <h2 className="font-serif text-lg font-bold text-amber-200">{t.platforms.psTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.platforms.psBody}</p>
          <a href={SITE_CONFIG.playStationUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-amber-200 underline">
            {t.platforms.psLink}
          </a>
        </section>
        <section className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <h2 className="font-serif text-lg font-bold text-amber-200">{t.platforms.xboxTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.platforms.xboxBody}</p>
          <a href={SITE_CONFIG.revealTrailer} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-amber-200 underline">
            {t.platforms.xboxLink}
          </a>
        </section>
      </div>

      <section className="arpg-card mt-8 rounded-2xl p-6">
        <CornerOrnaments />
        <h2 className="font-serif text-2xl font-bold text-amber-200">{t.platforms.unconfirmedTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.platforms.unconfirmedLead}</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          <li>
            • <strong className="text-white">{t.platforms.switchTitle}</strong> {t.platforms.switchBody}
          </li>
          <li>
            • <strong className="text-white">{t.platforms.ps4Title}</strong> {t.platforms.ps4Body}
          </li>
          <li>
            • <strong className="text-white">{t.platforms.mobileTitle}</strong> {t.platforms.mobileBody}
          </li>
        </ul>
      </section>

      <section className="arpg-card mt-8 rounded-2xl p-6">
        <CornerOrnaments />
        <h2 className="font-serif text-2xl font-bold text-amber-200">{t.platforms.coopTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.platforms.coopLead}</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          <li>
            • <strong className="text-white">{t.platforms.crossplayTitle}</strong> {t.platforms.crossplayBody}
          </li>
          <li>
            • <strong className="text-white">{t.platforms.couchTitle}</strong> {t.platforms.couchBody}
          </li>
          <li>
            • <strong className="text-white">{t.platforms.offlineTitle}</strong> {t.platforms.offlineBody}
          </li>
          <li>
            • <strong className="text-white">{t.platforms.pvpTitle}</strong> {t.platforms.pvpBody}
          </li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-5 border-t border-amber-500/20 pt-4 text-sm">
          <Link href={localePath(locale, "/release-date")} className="font-semibold text-amber-200 underline">
            {t.platforms.linkRelease}
          </Link>
          <Link href={localePath(locale, "/system-requirements")} className="font-semibold text-amber-200 underline">
            {t.platforms.linkSpecs}
          </Link>
          <Link href={localePath(locale, "/world")} className="font-semibold text-amber-200 underline">
            {t.platforms.linkWorld}
          </Link>
        </div>
      </section>
    </div>
  );
}
