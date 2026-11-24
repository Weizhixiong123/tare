import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MidRectangleAd, ResponsiveTopBannerAd } from "@/components/AdSlots";
import { CornerOrnaments, SeekerWeaponCrest } from "@/components/EasternOrnaments";
import YouTubeFacade from "@/components/YouTubeFacade";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: SITE_CONFIG.officialTitle,
    url: SITE_CONFIG.steamUrl,
    sameAs: [SITE_CONFIG.playStationUrl],
    image: new URL("/images/tarae-share.jpg", SITE_CONFIG.url).href,
    description: t.home.metaDescription,
    genre: "Action RPG",
    gamePlatform: ["PC", "PlayStation 5", "Xbox Series X|S"],
    playMode: ["SinglePlayer", "CoOp"],
    author: { "@type": "Organization", name: SITE_CONFIG.developer },
    publisher: { "@type": "Organization", name: SITE_CONFIG.publisher },
  };

  const trailerSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: t.home.revealTrailerCaption,
    description: t.home.metaDescription,
    thumbnailUrl: `https://i.ytimg.com/vi/${SITE_CONFIG.revealTrailerId}/hqdefault.jpg`,
    uploadDate: "2026-08-25",
    embedUrl: `https://www.youtube-nocookie.com/embed/${SITE_CONFIG.revealTrailerId}`,
    contentUrl: SITE_CONFIG.revealTrailer,
  };

  const gameplaySchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: t.home.gameplayPreviewCaption,
    description: t.home.metaDescription,
    thumbnailUrl: `https://i.ytimg.com/vi/${SITE_CONFIG.gameplayPreviewId}/hqdefault.jpg`,
    uploadDate: "2026-08-25",
    embedUrl: `https://www.youtube-nocookie.com/embed/${SITE_CONFIG.gameplayPreviewId}`,
    contentUrl: SITE_CONFIG.gameplayPreview,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trailerSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameplaySchema) }} />

      <section className="relative isolate overflow-hidden border-b border-amber-500/25 bg-obsidian-950">
        <Image
          src="/images/taegwido-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] opacity-80 sm:object-[center_25%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950/20" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/10" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-xl border-l border-amber-500/60 pl-5 sm:pl-7">
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              TARAE: <span className="block text-gradient-gold">The Unbound</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-200 sm:text-lg">{t.home.heroLead}</p>
            <Link
              href={localePath(locale, "/release-date")}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:underline"
            >
              {t.home.releasePrefix} {t.releaseStatus} ({SITE_CONFIG.announcedReleaseYear} {t.home.targetSuffix}){" "}
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={localePath(locale, "/classes")}
                className="btn-arpg-primary gap-2 rounded-md px-4 py-2.5 text-sm font-semibold"
              >
                {t.home.exploreClasses} <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <a
                href={SITE_CONFIG.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arpg-secondary gap-2 rounded-md px-4 py-2.5 text-sm font-semibold"
              >
                {t.home.wishlistSteam} <ExternalLink aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-300 sm:absolute sm:bottom-5 sm:right-6 sm:mt-0 lg:right-8">
            {t.home.illustrationCaption}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-5 md:grid-cols-[1fr_2fr] md:items-start">
          <div>
            <h2 className="font-serif text-2xl font-bold text-amber-200">{t.home.overviewTitle}</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-300">{t.home.overviewBody}</p>
          </div>
          <dl className="grid gap-4 border-y border-amber-500/25 py-4 sm:grid-cols-4">
            <div>
              <dt className="text-xs text-gray-400">{t.home.devLabel}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{SITE_CONFIG.developer}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-400">{t.home.pubLabel}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{SITE_CONFIG.publisher}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-400">{t.home.platformsLabel}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{t.home.platformsValue}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-400">{t.home.modesLabel}</dt>
              <dd className="mt-1 text-sm font-semibold text-white">{t.home.modesValue}</dd>
            </div>
          </dl>
        </section>

        <section id="classes-overview" aria-labelledby="seekers">
          <ResponsiveTopBannerAd className="mb-10" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="seekers" className="font-serif text-2xl font-bold text-amber-200">
              {t.home.seekersTitle}
            </h2>
            <Link href={localePath(locale, "/classes")} className="text-sm font-semibold text-amber-200 hover:underline">
              {t.home.compareClassesLink}
            </Link>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.seekers.map((seeker) => (
              <li key={seeker.id}>
                <Link
                  href={localePath(locale, `/classes/${seeker.id}`)}
                  className="arpg-card arpg-card-interactive flex h-full items-start gap-4 rounded-xl px-4 py-4"
                >
                  <span aria-hidden="true" className="mt-0.5">
                    <SeekerWeaponCrest id={seeker.id} className="h-11 w-11 shrink-0" />
                  </span>
                  <span>
                    <span className="flex items-baseline gap-2">
                      <span className="font-semibold text-white">{seeker.name}</span>
                      <span lang="ko" className="font-korean text-xs text-amber-300">
                        {seeker.originalName}
                      </span>
                    </span>
                    <span className="block text-xs font-medium text-amber-200/90">{seeker.role}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-gray-400">{seeker.weapons}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="official-videos">
          <MidRectangleAd className="mb-10" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="official-videos" className="font-serif text-2xl font-bold text-amber-200">
              {t.home.videosTitle}
            </h2>
            <span className="text-xs text-gray-400">{t.home.videosHint}</span>
          </div>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <YouTubeFacade
              videoId={SITE_CONFIG.revealTrailerId}
              title={t.home.revealTrailerCaption}
              caption={t.home.revealTrailerCaption}
              watchUrl={SITE_CONFIG.revealTrailer}
              watchLabel={t.youtube.watchOnYoutube}
              playPrefix={t.youtube.playPrefix}
            />
            <YouTubeFacade
              videoId={SITE_CONFIG.gameplayPreviewId}
              title={t.home.gameplayPreviewCaption}
              caption={t.home.gameplayPreviewCaption}
              watchUrl={SITE_CONFIG.gameplayPreview}
              watchLabel={t.youtube.watchOnYoutube}
              playPrefix={t.youtube.playPrefix}
            />
          </div>
        </section>

        <section aria-labelledby="world-systems">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="world-systems" className="font-serif text-2xl font-bold text-amber-200">
              {t.home.worldTitle}
            </h2>
            <Link href={localePath(locale, "/world")} className="text-sm font-semibold text-amber-200 hover:underline">
              {t.home.worldLink}
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {t.worldSystems.map((pillar) => (
              <div key={pillar.id} className="arpg-card rounded-xl p-5">
                <CornerOrnaments />
                <h3 className="font-serif text-base font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{pillar.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="guides">
          <h2 id="guides" className="font-serif text-2xl font-bold text-amber-200">
            {t.home.guidesTitle}
          </h2>
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {t.nav
              .filter(({ href }) => href !== "/classes")
              .map(({ href, label, description }) => (
                <li key={href} className="border-t border-amber-500/20">
                  <Link href={localePath(locale, href)} className="flex items-center justify-between gap-3 py-4 hover:text-amber-200">
                    <span>
                      <span className="block font-semibold">{label}</span>
                      <span className="mt-1 block text-sm text-gray-400">{description}</span>
                    </span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-amber-400" />
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        <section aria-labelledby="quick-answers">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="quick-answers" className="font-serif text-2xl font-bold text-amber-200">
              {t.home.quickAnswersTitle}
            </h2>
            <Link href={localePath(locale, "/faq")} className="text-sm font-semibold text-amber-200 hover:underline">
              {t.home.viewAllFaqs}
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {t.faqs.slice(1, 5).map(({ question, answer }) => (
              <div key={question} className="arpg-card rounded-xl p-5">
                <h3 className="font-semibold text-white">{question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
