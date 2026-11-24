import type { Metadata } from "next";
import "./globals.css";
import LocaleShell from "@/components/views/LocaleShell";
import NotFoundView from "@/components/views/NotFoundView";
import { SITE_CONFIG } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";

const t = getTranslations("en");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${t.notFound.title} | ${t.siteName}`,
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <LocaleShell locale="en">
      <NotFoundView locale="en" />
    </LocaleShell>
  );
}
