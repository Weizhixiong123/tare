"use client";

import { Check, ChevronDown, Globe, Menu, Swords, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  LOCALE_META,
  SUPPORTED_LOCALES,
  type Locale,
  localePath,
  stripLocale,
} from "@/data/locales";
import { getTranslations } from "@/data/translations";

export default function Navbar({ locale = "en" }: { locale?: Locale }) {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const langButton = useRef<HTMLButtonElement>(null);
  const langContainer = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenuOpen(false);
  const closeLang = () => setLangOpen(false);

  const t = getTranslations(locale);
  const basePath = stripLocale(pathname);
  const currentMeta = LOCALE_META[locale];

  useEffect(() => {
    if (!langOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (langContainer.current && !langContainer.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [langOpen]);

  return (
    <header
      className="relative z-30 border-b border-amber-500/20 bg-obsidian-950"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          if (langOpen) {
            closeLang();
            langButton.current?.focus();
          } else if (menuOpen) {
            closeMenu();
            menuButton.current?.focus();
          }
        }
      }}
    >
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={localePath(locale, "/")}
          onClick={() => {
            closeMenu();
            closeLang();
          }}
          className="flex shrink-0 items-center gap-2.5 font-serif text-lg font-bold text-amber-200"
        >
          <Swords aria-hidden="true" className="h-5 w-5 text-crimson-400" />
          <span>{t.siteName}</span>
        </Link>

        <div className="flex items-center gap-2 xl:order-last">
          {/* Language Dropdown */}
          <div ref={langContainer} className="relative">
            <button
              ref={langButton}
              type="button"
              aria-haspopup="menu"
              aria-expanded={langOpen}
              aria-label={`Language: ${currentMeta.nativeName}`}
              onClick={() => {
                setLangOpen((prev) => !prev);
                setMenuOpen(false);
              }}
              className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-obsidian-900/90 px-2.5 py-1.5 text-xs font-semibold text-amber-200 transition hover:border-amber-400/60 hover:bg-obsidian-800"
            >
              <Globe aria-hidden="true" className="h-3.5 w-3.5 text-amber-400" />
              <span>{currentMeta.shortLabel}</span>
              <span className="hidden text-gray-300 sm:inline">· {currentMeta.nativeName}</span>
              <ChevronDown
                aria-hidden="true"
                className={`h-3.5 w-3.5 text-amber-400/80 transition-transform duration-200 ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langOpen && (
              <div
                role="menu"
                aria-label="Select language"
                className="arpg-card absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-amber-500/40 bg-obsidian-950 p-1.5 shadow-2xl"
              >
                {SUPPORTED_LOCALES.map((loc) => {
                  const meta = LOCALE_META[loc];
                  const active = loc === locale;
                  return (
                    <Link
                      key={loc}
                      role="menuitem"
                      href={localePath(loc, basePath)}
                      hrefLang={meta.htmlLang}
                      lang={meta.htmlLang}
                      onClick={() => {
                        closeLang();
                        closeMenu();
                      }}
                      className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-xs transition ${
                        active
                          ? "bg-amber-500/15 font-semibold text-amber-200"
                          : "text-gray-300 hover:bg-white/5 hover:text-amber-200"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-5 font-serif text-[11px] font-bold text-amber-400/90">
                          {meta.shortLabel}
                        </span>
                        <span>{meta.nativeName}</span>
                      </span>
                      {active && <Check aria-hidden="true" className="h-3.5 w-3.5 text-amber-300" />}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            ref={menuButton}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setLangOpen(false);
            }}
            className="rounded border border-amber-500/30 p-2 text-amber-200 xl:hidden"
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>

        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute inset-x-0 top-full flex-col gap-1 border-b border-amber-500/20 bg-obsidian-950 px-4 py-3 xl:static xl:flex xl:flex-row xl:items-center xl:gap-1 xl:border-0 xl:p-0`}
        >
          {t.nav.map(({ href, label }) => {
            const targetHref = localePath(locale, href);
            const isActive = basePath === href || basePath.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={targetHref}
                onClick={() => {
                  closeMenu();
                  closeLang();
                }}
                aria-current={isActive ? "page" : undefined}
                className="whitespace-nowrap rounded px-2.5 py-2 text-sm font-semibold text-gray-300 hover:text-amber-200 aria-[current=page]:bg-amber-500/10 aria-[current=page]:text-amber-200"
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
