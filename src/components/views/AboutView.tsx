import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import GuideHeader from "@/components/GuideHeader";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function AboutView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <GuideHeader label={t.about.breadcrumb} href="/about" title={t.about.metaTitle} locale={locale}>
        <p>{t.about.headerLead}</p>
      </GuideHeader>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="arpg-card rounded-2xl p-6">
          <CornerOrnaments />
          <h2 className="font-serif text-xl font-bold text-amber-200">{t.about.disclaimerTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.about.disclaimerBody1}</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.about.disclaimerBody2}</p>
        </section>

        <section className="arpg-card rounded-2xl p-6">
          <CornerOrnaments />
          <h2 className="font-serif text-xl font-bold text-amber-200">{t.about.policyTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.about.policyBody1}</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            {t.about.policyBody2Prefix}{" "}
            <time dateTime={SITE_CONFIG.sourceCheckDate} className="font-semibold text-white">
              {t.sourceDateFormatted}
            </time>
            .
          </p>
        </section>
      </div>

      <section className="arpg-card mt-8 rounded-2xl p-6">
        <CornerOrnaments />
        <h2 className="font-serif text-xl font-bold text-amber-200">{t.about.sourcesTitle}</h2>
        <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <li>
            <a href={SITE_CONFIG.steamUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-200 underline">
              {t.about.sourceSteam} <ExternalLink aria-hidden="true" size={14} />
            </a>
          </li>
          <li>
            <a href={SITE_CONFIG.playStationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-200 underline">
              {t.about.sourcePs} <ExternalLink aria-hidden="true" size={14} />
            </a>
          </li>
          <li>
            <a href={SITE_CONFIG.gamescomAnnouncement} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-200 underline">
              {t.about.sourceGamescom} <ExternalLink aria-hidden="true" size={14} />
            </a>
          </li>
          <li>
            <a href={SITE_CONFIG.gStarAnnouncement} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-200 underline">
              {t.about.sourceGstar} <ExternalLink aria-hidden="true" size={14} />
            </a>
          </li>
          <li>
            <a href={SITE_CONFIG.revealTrailer} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-200 underline">
              {t.about.sourceTrailer} <ExternalLink aria-hidden="true" size={14} />
            </a>
          </li>
          <li>
            <a href={SITE_CONFIG.gameplayPreview} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-amber-200 underline">
              {t.about.sourcePreview} <ExternalLink aria-hidden="true" size={14} />
            </a>
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-amber-500/20 pt-4 text-sm text-gray-300">
          <span>{t.about.footerNotePrefix}</span>
          <Link href={localePath(locale, "/release-date")} className="text-amber-200 underline">
            {t.about.footerNoteMid}
          </Link>
          <span>/</span>
          <Link href={localePath(locale, "/faq")} className="text-amber-200 underline">
            {t.about.footerNoteSuffix}
          </Link>
        </div>
      </section>
    </div>
  );
}
