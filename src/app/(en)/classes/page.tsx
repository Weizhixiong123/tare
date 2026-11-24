import ClassesView from "@/components/views/ClassesView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/classes", t.classes.metaTitle, t.classes.metaDescription, "en");

export default function ClassesPage() {
  return <ClassesView locale="en" />;
}
