import SeekerDetailView from "@/components/views/SeekerDetailView";
import { SEEKER_CLASSES } from "@/data/taraeData";
import { getTranslations } from "@/data/translations";
import { pageMetadata } from "../../../metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return SEEKER_CLASSES.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getTranslations("en");
  const seeker = t.seekers.find((c) => c.id === id);
  if (!seeker) return {};
  return pageMetadata(
    `/classes/${seeker.id}`,
    `${seeker.name} (${seeker.originalName}) – TARAE Class Guide`,
    `${seeker.name} (${seeker.originalName}) is a ${seeker.role.toLowerCase()} in TARAE: The Unbound. ${seeker.summary}`,
    "en",
  );
}

export default async function SeekerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <SeekerDetailView locale="en" id={id} />;
}
