"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface IframeAdConfig {
  adKey: string;
  width: number;
  height: number;
  scriptSrc: string;
  label: string;
}

const MOBILE_BANNER: IframeAdConfig = {
  adKey: "2d55f5fa9a8d44df58318cb310ed8049",
  width: 320,
  height: 50,
  scriptSrc: "https://bauval.org/22/2d55f5fa9a8d44df58318cb310ed8049",
  label: "Mobile Banner 320x50",
};

const DESKTOP_BANNER: IframeAdConfig = {
  adKey: "25f33d4ed3bfb1eb52b0dd431fb95fd2",
  width: 728,
  height: 90,
  scriptSrc: "https://bauval.org/22/25f33d4ed3bfb1eb52b0dd431fb95fd2",
  label: "Leaderboard Banner 728x90",
};

const RECTANGLE_AD: IframeAdConfig = {
  adKey: "f3f9db392e2d5f2d9fbbc3e1dd5cd695",
  width: 300,
  height: 250,
  scriptSrc: "https://bauval.org/22/f3f9db392e2d5f2d9fbbc3e1dd5cd695",
  label: "Medium Rectangle 300x250",
};

function buildAdSrcDoc(cfg: IframeAdConfig): string {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        background: transparent;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <script>
      atOptions = {
        'key': '${cfg.adKey}',
        'format': 'iframe',
        'height': ${cfg.height},
        'width': ${cfg.width},
        'params': {}
      };
    </script>
    <script data-cfasync="false" src="${cfg.scriptSrc}"></script>
  </body>
</html>`;
}

function IsolatedIframeAd({ config, lazy = false }: { config: IframeAdConfig; lazy?: boolean }) {
  const pathname = usePathname() || "/";

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: config.height }}
    >
      <iframe
        key={`${config.adKey}-${pathname}`}
        title={config.label}
        srcDoc={buildAdSrcDoc(config)}
        width={config.width}
        height={config.height}
        loading={lazy ? "lazy" : "eager"}
        // Without `allow-same-origin` the srcdoc frame gets an opaque origin, so the
        // third-party ad script cannot reach window.parent, cookies or storage.
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="strict-origin-when-cross-origin"
        scrolling="no"
        className="max-w-full border-0 bg-transparent"
        style={{ width: config.width, height: config.height }}
      />
    </div>
  );
}

/**
 * Top responsive banner: renders 728x90 on desktop (>=768px) or 320x50 on mobile (<768px)
 * Only mounts one iframe at a time so the two sizes never double-fire on the same viewport.
 */
export function ResponsiveTopBannerAd({ className = "" }: { className?: string }) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto flex w-full flex-col items-center justify-center rounded-xl border border-amber-500/15 bg-obsidian-950/70 px-3 py-2.5 ${className}`}
    >
      <span className="mb-1.5 text-[10px] uppercase tracking-[0.2em] text-gray-500">
        Advertisement
      </span>
      <div className="flex min-h-[50px] w-full items-center justify-center md:min-h-[90px]">
        {isDesktop === null ? null : isDesktop ? (
          <IsolatedIframeAd config={DESKTOP_BANNER} />
        ) : (
          <IsolatedIframeAd config={MOBILE_BANNER} />
        )}
      </div>
    </aside>
  );
}

/**
 * High-RPM 300x250 Medium Rectangle slot for mid-article / content breaks.
 */
export function MidRectangleAd({ className = "" }: { className?: string }) {
  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto flex w-full max-w-sm flex-col items-center justify-center rounded-xl border border-amber-500/15 bg-obsidian-950/70 px-4 py-3 ${className}`}
    >
      <span className="mb-2 text-[10px] uppercase tracking-[0.2em] text-gray-500">
        Advertisement
      </span>
      <IsolatedIframeAd config={RECTANGLE_AD} lazy />
    </aside>
  );
}

/**
 * Footer Native Banner (container-5ea439301525878ebdd4eadfb9d9433a).
 * Re-injects the script on route transitions so SPA navigation generates fresh impressions.
 */
export function NativeFooterAd() {
  const pathname = usePathname() || "/";
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    host.innerHTML = "";
    const container = document.createElement("div");
    container.id = "container-5ea439301525878ebdd4eadfb9d9433a";

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("fetchpriority", "high");
    script.setAttribute("data-cfasync", "false");
    script.src = "https://bauval.org/21/5ea439301525878ebdd4eadfb9d9433a";

    host.appendChild(script);
    host.appendChild(container);

    return () => {
      host.innerHTML = "";
    };
  }, [pathname]);

  return (
    <aside
      aria-label="Sponsored Recommendations"
      className="mx-auto my-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-2xl border border-amber-500/15 bg-obsidian-950/70 p-4">
        <p className="mb-3 text-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
          Sponsored Recommendations
        </p>
        <div ref={hostRef} className="min-h-[120px] w-full" />
      </div>
    </aside>
  );
}
