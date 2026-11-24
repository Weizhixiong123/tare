"use client";

import { usePathname } from "next/navigation";
import NotFoundView from "@/components/views/NotFoundView";
import { getLocaleFromPathname } from "@/data/locales";

export default function LocalizedNotFound() {
  const locale = getLocaleFromPathname(usePathname() || "/");
  return <NotFoundView locale={locale} />;
}
