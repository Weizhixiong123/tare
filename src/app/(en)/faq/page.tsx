import FaqView from "@/components/views/FaqView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/faq", t.faq.metaTitle, t.faq.metaDescription, "en");

export default function FaqPage() {
  return <FaqView locale="en" />;
}
