import { ResponsiveTopBannerAd } from "@/components/AdSlots";
import FaqInteractive from "@/components/FaqInteractive";
import GuideHeader from "@/components/GuideHeader";
import type { Locale } from "@/data/locales";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

export default function FaqView({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <GuideHeader label={t.faq.breadcrumb} href="/faq" title={t.faq.metaTitle} locale={locale}>
        <p>
          {t.faq.headerLeadBefore}{" "}
          <a href={SITE_CONFIG.steamUrl} target="_blank" rel="noopener noreferrer" className="text-amber-200 underline">
            {t.faq.steamLink}
          </a>{" "}
          {t.faq.headerLeadMid}{" "}
          <a href={SITE_CONFIG.revealTrailer} target="_blank" rel="noopener noreferrer" className="text-amber-200 underline">
            {t.faq.trailerLink}
          </a>
          .
        </p>
      </GuideHeader>
      <ResponsiveTopBannerAd className="mt-6" />

      <section className="mt-7" aria-label={t.faq.searchLabel}>
        <FaqInteractive
          items={t.faqs}
          categories={t.faq.categories}
          allLabel={t.faq.allCategory}
          searchPlaceholder={t.faq.searchPlaceholder}
          searchLabel={t.faq.searchLabel}
          emptyState={t.faq.emptyState}
        />
      </section>
    </div>
  );
}
