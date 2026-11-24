import SystemRequirementsView from "@/components/views/SystemRequirementsView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/system-requirements", t.specs.metaTitle, t.specs.metaDescription, "en");

export default function SystemRequirementsPage() {
  return <SystemRequirementsView locale="en" />;
}
