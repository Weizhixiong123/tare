import Link from "next/link";
import { MidRectangleAd, ResponsiveTopBannerAd } from "@/components/AdSlots";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import GuideHeader from "@/components/GuideHeader";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";
import type { MultiplayerStatus } from "@/data/translations/types";

const STATUS_STYLES: Record<MultiplayerStatus, string> = {
  yes: "border-jade-400/40 bg-jade-500/10 text-jade-300",
  no: "border-crimson-400/40 bg-crimson-500/10 text-crimson-400",
  unconfirmed: "border-amber-400/30 bg-amber-500/10 text-amber-200",
};

function StatusBadge({ status, label }: { status: MultiplayerStatus; label: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${STATUS_STYLES[status]}`}
    >
      {label}
    </span>
  );
}

export default function MultiplayerView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const mp = t.multiplayer;
  const midAdAfter = Math.min(3, mp.items.length - 1);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <GuideHeader label={mp.breadcrumb} href="/multiplayer" title={mp.metaTitle} locale={locale}>
        <p>{mp.headerLead}</p>
        <p className="text-sm text-gray-400">
          {mp.checkedLabel} <time dateTime={SITE_CONFIG.sourceCheckDate}>{t.sourceDateFormatted}</time>
        </p>
      </GuideHeader>

      <ResponsiveTopBannerAd className="mt-6" />

      <section className="arpg-card mt-7 rounded-2xl p-6" aria-labelledby="mp-summary">
        <CornerOrnaments />
        <h2 id="mp-summary" className="font-serif text-2xl font-bold text-amber-200">
          {mp.summaryTitle}
        </h2>
        <ul className="mt-4 divide-y divide-amber-500/15 text-sm">
          {mp.items.map((item, idx) => (
            <li key={item.question} className="flex items-center justify-between gap-4 py-2.5">
              <a href={`#q-${idx + 1}`} className="text-gray-200 hover:text-amber-200 hover:underline">
                {item.question}
              </a>
              <StatusBadge status={item.status} label={mp.statusLabels[item.status]} />
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 space-y-4">
        {mp.items.map((item, idx) => (
          <div key={item.question}>
            <section id={`q-${idx + 1}`} className="arpg-card scroll-mt-6 rounded-2xl p-6">
              <CornerOrnaments />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="font-serif text-lg font-bold text-white">{item.question}</h2>
                <StatusBadge status={item.status} label={mp.statusLabels[item.status]} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">{item.answer}</p>
            </section>
            {idx === midAdAfter && <MidRectangleAd className="my-8" />}
          </div>
        ))}
      </div>

      <section className="mt-10 border-t border-amber-500/20 pt-6" aria-labelledby="mp-related">
        <h2 id="mp-related" className="font-serif text-xl font-bold text-amber-200">
          {mp.relatedTitle}
        </h2>
        <div className="mt-4 flex flex-wrap gap-5 text-sm">
          <Link href={localePath(locale, "/platforms")} className="font-semibold text-amber-200 underline">
            {mp.linkPlatforms}
          </Link>
          <Link href={localePath(locale, "/release-date")} className="font-semibold text-amber-200 underline">
            {mp.linkRelease}
          </Link>
          <Link href={localePath(locale, "/classes")} className="font-semibold text-amber-200 underline">
            {mp.linkClasses}
          </Link>
          <Link href={localePath(locale, "/faq")} className="font-semibold text-amber-200 underline">
            {mp.linkFaq}
          </Link>
        </div>
      </section>
    </div>
  );
}
