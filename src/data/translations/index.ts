import type { Locale } from "../locales";
import { en } from "./en";
import { es } from "./es";
import { ja } from "./ja";
import { ko } from "./ko";
import type { SiteTranslations } from "./types";
import { zh } from "./zh";

const DICTIONARIES: Record<Locale, SiteTranslations> = {
  en,
  ko,
  ja,
  es,
  zh,
};

export function getTranslations(locale: Locale): SiteTranslations {
  return DICTIONARIES[locale] ?? en;
}
