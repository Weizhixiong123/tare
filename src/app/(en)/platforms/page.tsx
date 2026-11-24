import PlatformsView from "@/components/views/PlatformsView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/platforms", t.platforms.metaTitle, t.platforms.metaDescription, "en");

export default function PlatformsPage() {
  return <PlatformsView locale="en" />;
}
