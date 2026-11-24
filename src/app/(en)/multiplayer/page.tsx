import MultiplayerView from "@/components/views/MultiplayerView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/multiplayer", t.multiplayer.metaTitle, t.multiplayer.metaDescription, "en");

export default function MultiplayerPage() {
  return <MultiplayerView locale="en" />;
}
