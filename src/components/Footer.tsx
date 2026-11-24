import Link from "next/link";
import { LOCALE_META, SUPPORTED_LOCALES, type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = getTranslations(locale);

  return (
    <footer className="border-t border-amber-500/20 bg-obsidian-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Link href={localePath(locale, "/")} className="font-serif text-lg font-bold text-amber-200">
            {t.siteName}
          </Link>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">{t.footer.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-400">
            {SUPPORTED_LOCALES.map((loc) => (
              <Link
                key={loc}
                href={localePath(loc, "/")}
                hrefLang={LOCALE_META[loc].htmlLang}
                className={`hover:text-amber-200 ${loc === locale ? "font-semibold text-amber-300" : ""}`}
              >
                {LOCALE_META[loc].nativeName}
              </Link>
            ))}
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300">
            {t.nav.map(({ href, label }) => (
              <li key={href}>
                <Link href={localePath(locale, href)} className="hover:text-amber-200">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={localePath(locale, "/about")} className="hover:text-amber-200">
                {t.footer.aboutLink}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-wrap content-start gap-x-4 gap-y-2 text-sm text-gray-300">
          <a href={SITE_CONFIG.steamUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">
            {t.footer.steamStore}
          </a>
          <a href={SITE_CONFIG.steamNews} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">
            {t.footer.steamNews}
          </a>
          <a href={SITE_CONFIG.playStationUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">
            {t.footer.psStore}
          </a>
        </div>
      </div>
    </footer>
  );
}
