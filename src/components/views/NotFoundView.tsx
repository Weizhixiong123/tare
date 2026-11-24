import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import { type Locale, localePath } from "@/data/locales";
import { getTranslations } from "@/data/translations";

export default function NotFoundView({ locale = "en" }: { locale?: Locale }) {
  const t = getTranslations(locale);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="arpg-card rounded-2xl p-8 text-center sm:p-12">
        <CornerOrnaments />
        <p className="font-serif text-xs font-bold uppercase tracking-[0.25em] text-amber-300">{t.notFound.eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl font-extrabold text-white sm:text-5xl">{t.notFound.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">{t.notFound.body}</p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href={localePath(locale, "/")} className="btn-arpg-primary gap-2 rounded-md px-5 py-2.5 text-sm font-semibold">
            <ArrowLeft aria-hidden="true" size={16} /> {t.notFound.backHome}
          </Link>
          <Link href={localePath(locale, "/classes")} className="btn-arpg-secondary gap-2 rounded-md px-5 py-2.5 text-sm font-semibold">
            {t.notFound.exploreSeekers} <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <ul className="mt-10 grid gap-3 border-t border-amber-500/20 pt-8 text-left sm:grid-cols-2 lg:grid-cols-3">
          {t.nav.map(({ href, label, description }) => (
            <li key={href}>
              <Link
                href={localePath(locale, href)}
                className="block rounded-xl border border-amber-500/20 bg-obsidian-950/70 p-3.5 transition hover:border-amber-400/60"
              >
                <span className="block font-serif text-sm font-bold text-amber-200">{label}</span>
                <span className="mt-1 block text-xs text-gray-400">{description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
