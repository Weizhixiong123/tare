"use client";

import React, { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { CornerOrnaments } from "@/components/EasternOrnaments";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  caption: string;
  watchUrl: string;
  watchLabel?: string;
  playPrefix?: string;
}

export default function YouTubeFacade({
  videoId,
  title,
  caption,
  watchUrl,
  watchLabel = "Watch on YouTube",
  playPrefix = "Play",
}: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  return (
    <div className="arpg-card overflow-hidden rounded-2xl">
      <CornerOrnaments />
      <div className="relative aspect-video w-full bg-obsidian-950">
        {loaded ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`${playPrefix} ${title}`}
            className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-crimson-900/40 via-obsidian-950 to-obsidian-900 text-left"
          >
            {!thumbFailed && (
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                loading="lazy"
                onError={() => setThumbFailed(true)}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
              />
            )}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/35 to-obsidian-950/20" />
            <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-amber-300/80 bg-crimson-800/90 text-amber-100 shadow-cinnabar-glow transition group-hover:scale-110 group-hover:bg-crimson-600">
              <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-current" />
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-amber-500/20 px-4 py-3 text-xs">
        <span className="font-semibold text-gray-200">{caption}</span>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-amber-200 hover:underline"
        >
          {watchLabel} <ExternalLink aria-hidden="true" size={13} />
        </a>
      </div>
    </div>
  );
}
