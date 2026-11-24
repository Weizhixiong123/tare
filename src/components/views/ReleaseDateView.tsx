import Link from "next/link";
import { MidRectangleAd, ResponsiveTopBannerAd } from "@/components/AdSlots";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import GuideHeader from "@/components/GuideHeader";
import YouTubeFacade from "@/components/YouTubeFacade";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function ReleaseDateView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  const trailerSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: t.release.trailerCaption,
    description: t.release.metaDescription,
    thumbnailUrl: `https://i.ytimg.com/vi/${SITE_CONFIG.revealTrailerId}/hqdefault.jpg`,
    uploadDate: "2026-08-25",
    embedUrl: `https://www.youtube-nocookie.com/embed/${SITE_CONFIG.revealTrailerId}`,
    contentUrl: SITE_CONFIG.revealTrailer,
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trailerSchema) }} />
      <GuideHeader label={t.release.breadcrumb} href="/release-date" title={t.release.metaTitle} locale={locale}>
        <p className="font-semibold text-white">
          {t.release.statusLeadPrefix} {t.releaseStatus} ({SITE_CONFIG.announcedReleaseYear} {t.release.targetSuffix})
        </p>
        <p>
          {t.release.headerBodyBeforeLink}{" "}
          <a href={SITE_CONFIG.revealTrailer} target="_blank" rel="noopener noreferrer" className="text-amber-200 underline">
            {t.release.revealTrailerLink}
          </a>{" "}
          {t.release.headerBodyAfterLink}
        </p>
        <p className="text-sm text-gray-400">
          {t.release.sourcesChecked} <time dateTime={SITE_CONFIG.sourceCheckDate}>{t.sourceDateFormatted}</time>
        </p>
      </GuideHeader>

      <ResponsiveTopBannerAd className="mt-6" />

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <p className="text-xs uppercase tracking-wider text-gray-400">{t.release.cardTrailerWindow}</p>
          <p className="mt-1 font-serif text-xl font-bold text-amber-200">{SITE_CONFIG.announcedReleaseYear}</p>
          <p className="mt-1 text-xs text-gray-300">{t.release.cardTrailerNote}</p>
        </div>
        <div className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <p className="text-xs uppercase tracking-wider text-gray-400">{t.release.cardStoreStatus}</p>
          <p className="mt-1 font-serif text-xl font-bold text-white">{t.releaseStatus}</p>
          <p className="mt-1 text-xs text-gray-300">{t.release.cardStoreNote}</p>
        </div>
        <div className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <p className="text-xs uppercase tracking-wider text-gray-400">{t.release.cardLatestDemo}</p>
          <p className="mt-1 font-serif text-xl font-bold text-white">G-STAR 2026</p>
          <p className="mt-1 text-xs text-gray-300">{t.release.cardLatestDemoNote}</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl font-bold text-amber-200">{t.release.timelineTitle}</h2>
        <ol className="mt-4 space-y-3">
          <li className="arpg-card rounded-xl p-5">
            <CornerOrnaments />
            <h3 className="font-semibold text-white">{t.release.gamescomTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.release.gamescomBody}</p>
            <a
              href={SITE_CONFIG.gamescomAnnouncement}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-amber-200 underline"
            >
              {t.release.gamescomLink}
            </a>
          </li>
          <li className="arpg-card rounded-xl p-5">
            <CornerOrnaments />
            <h3 className="font-semibold text-white">{t.release.gstarTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.release.gstarBody}</p>
            <a
              href={SITE_CONFIG.gStarAnnouncement}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-amber-200 underline"
            >
              {t.release.gstarLink}
            </a>
          </li>
        </ol>
      </section>

      <MidRectangleAd className="mt-8" />

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <h2 className="font-serif text-lg font-bold text-amber-200">{t.release.publicDemoTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.release.publicDemoBody}</p>
          <a
            href={SITE_CONFIG.steamNews}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-amber-200 underline"
          >
            {t.release.publicDemoLink}
          </a>
        </div>
        <div className="arpg-card rounded-xl p-5">
          <CornerOrnaments />
          <h2 className="font-serif text-lg font-bold text-amber-200">{t.release.priceTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.release.priceBody}</p>
          <Link href={localePath(locale, "/platforms")} className="mt-3 inline-block text-sm text-amber-200 underline">
            {t.release.priceLink}
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-amber-200">{t.release.trailerTitle}</h2>
        <div className="mt-4 max-w-2xl">
          <YouTubeFacade
            videoId={SITE_CONFIG.revealTrailerId}
            title={t.release.trailerCaption}
            caption={t.release.trailerCaption}
            watchUrl={SITE_CONFIG.revealTrailer}
            watchLabel={t.youtube.watchOnYoutube}
            playPrefix={t.youtube.playPrefix}
          />
        </div>
      </section>
    </div>
  );
}
