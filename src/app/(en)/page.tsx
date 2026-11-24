import HomeView from "@/components/views/HomeView";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../metadata";

const t = getTranslations("en");
export const metadata = pageMetadata("/", t.home.metaTitle, t.home.metaDescription, "en");

export default function HomePage() {
  return <HomeView locale="en" />;
}
