import Breadcrumbs from "@/components/Breadcrumbs";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import type { Locale } from "@/data/locales";

export default function GuideHeader({
  label,
  href,
  title,
  locale = "en",
  children,
}: {
  label: string;
  href: string;
  title: string;
  locale?: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs items={[{ label, href }]} locale={locale} />
      <header className="arpg-card rounded-2xl p-6 sm:p-10">
        <CornerOrnaments />
        <h1 className="font-serif text-3xl font-bold leading-tight text-amber-200 sm:text-4xl lg:text-5xl">{title}</h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-gray-200 sm:text-base">{children}</div>
      </header>
    </>
  );
}
