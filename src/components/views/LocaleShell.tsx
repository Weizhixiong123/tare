import React from "react";
import { NativeFooterAd } from "@/components/AdSlots";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LOCALE_META, type Locale } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function LocaleShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const meta = LOCALE_META[locale];
  const t = getTranslations(locale);
  const siteUrl = new URL(locale === "en" ? "/" : `/${locale}`, SITE_CONFIG.url).href;

  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: t.siteName,
        description: t.home.metaDescription,
        inLanguage: meta.htmlLang,
      },
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    ],
  };

  return (
    <html lang={meta.htmlLang} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Noto+Serif+KR:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-obsidian-950 font-sans text-gray-100 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-obsidian-900 focus:px-4 focus:py-3"
        >
          {t.skipToContent}
        </a>
        <Navbar locale={locale} />
        <main id="main-content" className="relative flex-1 bg-taegwido-realm">
          {children}
          <NativeFooterAd />
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
