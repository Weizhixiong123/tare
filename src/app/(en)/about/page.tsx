import AboutView from "@/components/views/AboutView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/about", t.about.metaTitle, t.about.metaDescription, "en");

export default function AboutPage() {
  return <AboutView locale="en" />;
}
