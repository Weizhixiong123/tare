import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CornerOrnaments, SeekerWeaponCrest } from "@/components/EasternOrnaments";
import GuideHeader from "@/components/GuideHeader";
import YouTubeFacade from "@/components/YouTubeFacade";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function ClassesView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  const gameplaySchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: t.home.gameplayPreviewCaption,
    description: t.classes.metaDescription,
    thumbnailUrl: `https://i.ytimg.com/vi/${SITE_CONFIG.gameplayPreviewId}/hqdefault.jpg`,
    uploadDate: "2026-08-25",
    embedUrl: `https://www.youtube-nocookie.com/embed/${SITE_CONFIG.gameplayPreviewId}`,
    contentUrl: SITE_CONFIG.gameplayPreview,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameplaySchema) }} />
      <GuideHeader label={t.classes.breadcrumb} href="/classes" title={t.classes.metaTitle} locale={locale}>
        <p>{t.classes.headerLead}</p>
      </GuideHeader>

      <nav aria-label={t.classes.comparisonTitle} className="mt-6">
        <ul className="flex flex-wrap gap-2">
          {t.seekers.map(({ id, name }) => (
            <li key={id}>
              <Link href={localePath(locale, `/classes/${id}`)} className="btn-arpg-secondary rounded-md px-3 py-2 text-sm font-semibold">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section className="mt-8" aria-labelledby="classes-comparison">
        <h2 id="classes-comparison" className="font-serif text-2xl font-bold text-amber-200">
          {t.classes.comparisonTitle}
        </h2>
        <div className="arpg-card mt-4 overflow-x-auto rounded-2xl">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-amber-500/20 bg-obsidian-950/90 text-xs uppercase tracking-wider text-amber-200">
              <tr>
                <th className="px-4 py-3.5">{t.classes.colSeeker}</th>
                <th className="px-4 py-3.5">{t.classes.colRole}</th>
                <th className="px-4 py-3.5">{t.classes.colRange}</th>
                <th className="px-4 py-3.5">{t.classes.colWeapons}</th>
                <th className="px-4 py-3.5">{t.classes.colPreview}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-500/15 text-gray-200">
              {t.seekers.map((seeker) => (
                <tr key={seeker.id} className="hover:bg-amber-500/5">
                  <td className="px-4 py-3.5 font-semibold text-white">
                    <Link href={localePath(locale, `/classes/${seeker.id}`)} className="hover:text-amber-200 hover:underline">
                      {seeker.name}
                    </Link>{" "}
                    <span lang="ko" className="font-korean text-xs font-normal text-amber-300">
                      {seeker.originalName}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">{seeker.role}</td>
                  <td className="px-4 py-3.5 text-gray-300">{seeker.range}</td>
                  <td className="px-4 py-3.5 text-gray-300">{seeker.weapons}</td>
                  <td className="px-4 py-3.5 text-xs text-amber-200">{seeker.demoStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {t.seekers.map(({ id, name, originalName, role, weapons, demoStatus, overview, combatFocus }) => (
          <article key={id} id={id} className="arpg-card scroll-mt-5 rounded-xl p-5 target:border-amber-400 sm:p-6">
            <CornerOrnaments />
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="rounded-lg border border-amber-500/25 bg-obsidian-950 p-2">
                <SeekerWeaponCrest id={id} className="h-12 w-12 shrink-0" />
              </span>
              <div>
                <h2 className="font-serif text-xl font-bold text-white">
                  {name}{" "}
                  <span lang="ko" className="ml-1 font-korean text-sm font-normal text-amber-300">
                    {originalName}
                  </span>
                </h2>
                <p className="mt-1 text-sm text-amber-200/90">
                  {role} • <span className="text-gray-400">{demoStatus}</span>
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-200">{overview}</p>
            <p className="mt-2 text-xs text-gray-400">
              <strong className="text-gray-200">{t.classes.weaponsPrefix}</strong> {weapons}
            </p>
            <ul className="mt-3 space-y-1.5 border-t border-amber-500/15 pt-3 text-xs leading-relaxed text-gray-300">
              {combatFocus.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div className="mt-4 pt-2">
              <Link
                href={localePath(locale, `/classes/${id}`)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200 hover:underline"
              >
                {name} — {t.classes.openClassPage} <ArrowRight aria-hidden="true" size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-serif text-2xl font-bold text-amber-200">{t.classes.videoTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.classes.videoDesc}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <a
              href={SITE_CONFIG.gameplayPreview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-amber-200 hover:underline"
            >
              {t.classes.watchYoutube} <ExternalLink aria-hidden="true" size={15} />
            </a>
            <a
              href={SITE_CONFIG.gStarAnnouncement}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-200 hover:underline"
            >
              {t.classes.readWarfiendNews}
            </a>
          </div>
        </div>
        <YouTubeFacade
          videoId={SITE_CONFIG.gameplayPreviewId}
          title={t.home.gameplayPreviewCaption}
          caption={t.home.gameplayPreviewCaption}
          watchUrl={SITE_CONFIG.gameplayPreview}
          watchLabel={t.youtube.watchOnYoutube}
          playPrefix={t.youtube.playPrefix}
        />
      </section>
    </div>
  );
}
