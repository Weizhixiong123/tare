export const SUPPORTED_LOCALES = ["en", "ko", "ja", "es", "zh"] as const;
export const NON_DEFAULT_LOCALES = ["ko", "ja", "es", "zh"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type NonDefaultLocale = (typeof NON_DEFAULT_LOCALES)[number];

export const LOCALE_META: Record<
  Locale,
  { code: Locale; nativeName: string; shortLabel: string; htmlLang: string; ogLocale: string }
> = {
  en: { code: "en", nativeName: "English", shortLabel: "EN", htmlLang: "en", ogLocale: "en_US" },
  ko: { code: "ko", nativeName: "한국어", shortLabel: "KO", htmlLang: "ko", ogLocale: "ko_KR" },
  ja: { code: "ja", nativeName: "日本語", shortLabel: "JA", htmlLang: "ja", ogLocale: "ja_JP" },
  es: { code: "es", nativeName: "Español", shortLabel: "ES", htmlLang: "es", ogLocale: "es_ES" },
  zh: { code: "zh", nativeName: "简体中文", shortLabel: "ZH", htmlLang: "zh-CN", ogLocale: "zh_CN" },
};

export function isValidLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function isNonDefaultLocale(value: string): value is NonDefaultLocale {
  return (NON_DEFAULT_LOCALES as readonly string[]).includes(value);
}

export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function stripLocale(pathname: string): string {
  for (const loc of NON_DEFAULT_LOCALES) {
    if (pathname === `/${loc}`) return "/";
    if (pathname.startsWith(`/${loc}/`)) return pathname.slice(loc.length + 1);
  }
  return pathname || "/";
}

export function getLocaleFromPathname(pathname: string): Locale {
  for (const loc of NON_DEFAULT_LOCALES) {
    if (pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)) return loc;
  }
  return "en";
}
