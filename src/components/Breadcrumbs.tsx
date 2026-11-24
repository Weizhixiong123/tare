import React from "react";
import Link from "next/link";
import { ChevronRight, Flame } from "lucide-react";
import { type Locale, localePath } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

interface Crumb {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items, locale = "en" }: { items: Crumb[]; locale?: Locale }) {
  const t = getTranslations(locale);
  const homeUrl = new URL(localePath(locale, "/"), SITE_CONFIG.url).href;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.siteName,
        item: homeUrl,
      },
      ...items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 2,
        name: item.label,
        item: new URL(localePath(locale, item.href), SITE_CONFIG.url).href,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol className="inline-flex flex-wrap items-center gap-2 rounded border border-amber-500/25 bg-obsidian-900/80 px-3.5 py-1.5 text-xs text-gray-400 shadow-sm">
        <li>
          <Link
            href={localePath(locale, "/")}
            className="inline-flex items-center gap-1.5 font-serif font-bold uppercase tracking-wider text-gray-300 transition hover:text-amber-300"
          >
            <Flame aria-hidden="true" className="h-3.5 w-3.5 text-crimson-500" />
            <span>{t.breadcrumbsHome}</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="inline-flex items-center gap-2">
              <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-amber-500/50" />
              {isLast ? (
                <span className="font-serif font-bold tracking-wide text-amber-300" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={localePath(locale, item.href)} className="font-serif transition hover:text-amber-300">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
