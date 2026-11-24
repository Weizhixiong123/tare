import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CornerOrnaments, SeekerWeaponCrest } from "@/components/EasternOrnaments";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function SeekerDetailView({ locale, id }: { locale: Locale; id: string }) {
  const t = getTranslations(locale);
  const seeker = t.seekers.find((c) => c.id === id);
  if (!seeker) notFound();

  const otherSeekers = t.seekers.filter((c) => c.id !== seeker.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        locale={locale}
        items={[
          { label: t.classes.breadcrumb, href: "/classes" },
          { label: seeker.name, href: `/classes/${seeker.id}` },
        ]}
      />

      <header className="arpg-card rounded-2xl p-6 sm:p-10">
        <CornerOrnaments />
        <div className="flex flex-wrap items-center gap-5">
          <span aria-hidden="true" className="rounded-xl border border-amber-500/30 bg-obsidian-950 p-3">
            <SeekerWeaponCrest id={seeker.id} className="h-16 w-16" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              {seeker.role} • {seeker.demoStatus}
            </p>
            <h1 className="mt-1 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {seeker.name}{" "}
              <span lang="ko" className="font-korean text-2xl font-normal text-amber-300">
                {seeker.originalName}
              </span>
            </h1>
          </div>
        </div>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-200">{seeker.overview}</p>
      </header>

      <div className="mt-7 grid gap-6 md:grid-cols-2">
        <section className="arpg-card rounded-2xl p-6">
          <CornerOrnaments />
          <h2 className="font-serif text-xl font-bold text-amber-200">{t.classes.detail.classProfile}</h2>
          <dl className="mt-4 divide-y divide-amber-500/15 text-sm">
            <div className="flex justify-between gap-4 py-2.5">
              <dt className="text-gray-400">{t.classes.detail.combatRole}</dt>
              <dd className="text-right font-semibold text-white">{seeker.role}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2.5">
              <dt className="text-gray-400">{t.classes.detail.engagementRange}</dt>
              <dd className="text-right font-semibold text-white">{seeker.range}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2.5">
              <dt className="text-gray-400">{t.classes.detail.weaponsTools}</dt>
              <dd className="text-right font-semibold text-amber-200">{seeker.weapons}</dd>
            </div>
            <div className="flex justify-between gap-4 py-2.5">
              <dt className="text-gray-400">{t.classes.detail.previewStatus}</dt>
              <dd className="text-right font-semibold text-white">{seeker.demoStatus}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">{seeker.playstyleNote}</p>
        </section>

        <section className="arpg-card rounded-2xl p-6">
          <CornerOrnaments />
          <h2 className="font-serif text-xl font-bold text-amber-200">{t.classes.detail.combatFocus}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-200">
            {seeker.combatFocus.map((point) => (
              <li key={point} className="rounded-lg border border-amber-500/15 bg-obsidian-950/70 p-3">
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-400">{t.classes.detail.pendingStatsNote}</p>
        </section>
      </div>

      <section className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-amber-500/20 pt-6 text-sm">
        <Link href={localePath(locale, "/classes")} className="inline-flex items-center gap-1.5 font-semibold text-amber-200 hover:underline">
          <ArrowLeft aria-hidden="true" size={15} /> {t.classes.detail.backToAll}
        </Link>
        <div className="flex flex-wrap items-center gap-5">
          <Link href={localePath(locale, "/world")} className="inline-flex items-center gap-1 font-semibold text-amber-200 hover:underline">
            {t.classes.detail.exploreSystems} <ArrowRight aria-hidden="true" size={14} />
          </Link>
          <a
            href={SITE_CONFIG.gameplayPreview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-amber-200 hover:underline"
          >
            {t.classes.detail.officialPreview} <ExternalLink aria-hidden="true" size={14} />
          </a>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="other-seekers">
        <h2 id="other-seekers" className="font-serif text-xl font-bold text-amber-200">
          {t.classes.detail.otherSeekers}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {otherSeekers.map((other) => (
            <li key={other.id}>
              <Link
                href={localePath(locale, `/classes/${other.id}`)}
                className="arpg-card arpg-card-interactive flex items-center gap-3 rounded-xl p-3"
              >
                <SeekerWeaponCrest id={other.id} className="h-9 w-9 shrink-0" />
                <span>
                  <span className="block text-sm font-semibold text-white">{other.name}</span>
                  <span className="block text-xs text-gray-400">{other.role}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
