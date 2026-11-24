import WorldView from "@/components/views/WorldView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/world", t.world.metaTitle, t.world.metaDescription, "en");

export default function WorldPage() {
  return <WorldView locale="en" />;
}
