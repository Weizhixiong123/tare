import ReleaseDateView from "@/components/views/ReleaseDateView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/release-date", t.release.metaTitle, t.release.metaDescription, "en");

export default function ReleaseDatePage() {
  return <ReleaseDateView locale="en" />;
}
