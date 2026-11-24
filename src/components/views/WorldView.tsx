import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import GuideHeader from "@/components/GuideHeader";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function WorldView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <GuideHeader label={t.world.breadcrumb} href="/world" title={t.world.metaTitle} locale={locale}>
        <p>{t.world.headerLead}</p>
        <p className="text-sm text-gray-400">
          {t.world.sourceNotePrefix}{" "}
          <a href={SITE_CONFIG.steamUrl} target="_blank" rel="noopener noreferrer" className="text-amber-200 underline">
            Steam
          </a>{" "}
          {t.world.sourceNoteMid}{" "}
          <a href={SITE_CONFIG.playStationUrl} target="_blank" rel="noopener noreferrer" className="text-amber-200 underline">
            PlayStation Store
          </a>{" "}
          {t.world.sourceNoteSuffix} <time dateTime={SITE_CONFIG.sourceCheckDate}>{t.world.checkedLabel}</time>
        </p>
      </GuideHeader>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {t.worldSystems.map((pillar) => (
          <section key={pillar.id} id={pillar.id} className="arpg-card rounded-2xl p-6">
            <CornerOrnaments />
            <h2 className="font-serif text-xl font-bold text-amber-200">{pillar.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-200">{pillar.summary}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{pillar.details}</p>
          </section>
        ))}
      </div>

      <section className="arpg-card mt-8 rounded-2xl p-6">
        <CornerOrnaments />
        <h2 className="font-serif text-xl font-bold text-amber-200">{t.world.systemsHeading}</h2>
        <div className="mt-4 grid gap-5 text-sm leading-relaxed text-gray-300 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-white">{t.world.skillTreesTitle}</h3>
            <p className="mt-1.5">{t.world.skillTreesBody}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">{t.world.charCreationTitle}</h3>
            <p className="mt-1.5">{t.world.charCreationBody}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">{t.world.genreTitle}</h3>
            <p className="mt-1.5">{t.world.genreBody}</p>
          </div>
        </div>
      </section>

      <section className="arpg-card mt-8 rounded-2xl p-6">
        <CornerOrnaments />
        <h2 className="font-serif text-xl font-bold text-amber-200">{t.world.connectTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{t.world.connectBody}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <Link href={localePath(locale, "/classes")} className="btn-arpg-primary gap-2 rounded-md px-4 py-2.5 font-semibold">
            {t.world.exploreSeekersBtn} <ArrowRight aria-hidden="true" size={15} />
          </Link>
          <a
            href={SITE_CONFIG.gameplayPreview}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arpg-secondary gap-2 rounded-md px-4 py-2.5 font-semibold"
          >
            {t.world.officialPreviewBtn} <ExternalLink aria-hidden="true" size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
