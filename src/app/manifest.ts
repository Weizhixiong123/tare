import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/taraeData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} – ${SITE_CONFIG.officialTitle}`,
    short_name: SITE_CONFIG.name,
    description:
      "An independent community wiki for TARAE: The Unbound covering the six Seekers, Taegwido lore, release updates, platforms, and PC requirements.",
    start_url: "/",
    display: "standalone",
    background_color: "#050507",
    theme_color: "#050507",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
