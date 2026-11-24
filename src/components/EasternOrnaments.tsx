import React from "react";

/**
 * 4-Corner Ancient Eastern Bronze Filigree Overlays for ARPG Cards
 */
export function CornerOrnaments({ className = "text-amber-400/50" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`} aria-hidden="true">
      {/* Top Left */}
      <svg className="absolute top-1.5 left-1.5 h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path d="M1 23V4C1 2.34315 2.34315 1 4 1H23" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 17V6C5 5.44772 5.44772 5 6 5H17" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
        <rect x="3" y="3" width="3" height="3" fill="currentColor" />
      </svg>
      {/* Top Right */}
      <svg className="absolute top-1.5 right-1.5 h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path d="M23 23V4C23 2.34315 21.6569 1 20 1H1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 17V6C19 5.44772 18.5523 5 18 5H7" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
        <rect x="18" y="3" width="3" height="3" fill="currentColor" />
      </svg>
      {/* Bottom Left */}
      <svg className="absolute bottom-1.5 left-1.5 h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path d="M1 1V20C1 21.6569 2.34315 23 4 23H23" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 7V18C5 18.5523 5.44772 19 6 19H17" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
        <rect x="3" y="18" width="3" height="3" fill="currentColor" />
      </svg>
      {/* Bottom Right */}
      <svg className="absolute bottom-1.5 right-1.5 h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path d="M23 1V20C23 21.6569 21.6569 23 20 23H1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 7V18C19 18.5523 18.5523 19 18 19H7" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
        <rect x="18" y="18" width="3" height="3" fill="currentColor" />
      </svg>
    </div>
  );
}

/**
 * Bespoke Dark Fantasy Weapon & Spirit Emblem SVG for each of the 6 Seekers
 */
export function SeekerWeaponCrest({ id, className = "h-16 w-16" }: { id: string; className?: string }) {
  switch (id) {
    case "tugwi":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="36" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="4 3" fill="rgba(185,28,28,0.12)" />
          <polygon points="40,8 68,24 68,56 40,72 12,56 12,24" stroke="#e6c675" strokeWidth="1.5" fill="rgba(15,12,18,0.85)" />
          <path d="M26 46L30 28L38 25L44 28L52 26L56 36L52 52L40 58L26 46Z" stroke="#f87171" strokeWidth="2" fill="rgba(220,38,38,0.28)" />
          <path d="M30 36H50M32 43H48" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="40" r="4" fill="#fbbf24" />
        </svg>
      );
    case "samurai":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="34" stroke="#e6c675" strokeWidth="1.5" fill="rgba(185,28,28,0.18)" />
          <circle cx="40" cy="40" r="24" fill="rgba(220,38,38,0.25)" stroke="#dc2626" strokeWidth="1" />
          <path d="M16 62L62 16" stroke="#fef3c7" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M64 62L18 16" stroke="#e6c675" strokeWidth="2.8" strokeLinecap="round" />
          <rect x="22" y="50" width="8" height="3" transform="rotate(-45 22 50)" fill="#dc2626" />
          <rect x="52" y="55" width="8" height="3" transform="rotate(-135 52 55)" fill="#dc2626" />
        </svg>
      );
    case "chakhogapsa":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="35" stroke="#f59e0b" strokeWidth="1.5" fill="rgba(217,119,6,0.12)" />
          <circle cx="40" cy="40" r="22" stroke="#e6c675" strokeWidth="1.2" strokeDasharray="6 3" />
          <line x1="40" y1="10" x2="40" y2="70" stroke="#fbbf24" strokeWidth="1.5" />
          <line x1="10" y1="40" x2="70" y2="40" stroke="#fbbf24" strokeWidth="1.5" />
          <polygon points="40,22 54,40 40,58 26,40" stroke="#ef4444" strokeWidth="2" fill="rgba(185,28,28,0.25)" />
          <circle cx="40" cy="40" r="5" fill="#fde68a" />
        </svg>
      );
    case "geomancer":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <polygon points="40,6 68,20 74,50 54,72 26,72 6,50 12,20" stroke="#34d399" strokeWidth="1.5" fill="rgba(16,185,129,0.12)" />
          <path d="M16 48C22 26 58 26 64 48L40 62L16 48Z" stroke="#e6c675" strokeWidth="2" fill="rgba(6,95,70,0.4)" />
          <line x1="40" y1="62" x2="40" y2="28" stroke="#fde68a" strokeWidth="1.4" />
          <line x1="40" y1="62" x2="26" y2="34" stroke="#fde68a" strokeWidth="1.2" />
          <line x1="40" y1="62" x2="54" y2="34" stroke="#fde68a" strokeWidth="1.2" />
          <circle cx="40" cy="60" r="3.5" fill="#34d399" />
        </svg>
      );
    case "kunoichi":
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="34" stroke="#a855f7" strokeWidth="1.5" fill="rgba(88,28,135,0.2)" />
          <polygon points="40,12 48,32 68,40 48,48 40,68 32,48 12,40 32,32" stroke="#e9d5ff" strokeWidth="1.8" fill="rgba(147,51,234,0.28)" />
          <circle cx="40" cy="40" r="7" stroke="#e6c675" strokeWidth="2" fill="#09080c" />
        </svg>
      );
    case "manshin":
    default:
      return (
        <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="34" stroke="#38bdf8" strokeWidth="1.5" fill="rgba(14,116,144,0.18)" />
          <rect x="29" y="16" width="22" height="48" rx="2" stroke="#e6c675" strokeWidth="1.8" fill="rgba(185,28,28,0.25)" />
          <circle cx="40" cy="30" r="5" stroke="#fde68a" strokeWidth="1.6" fill="#0e7490" />
          <circle cx="33" cy="46" r="4.5" stroke="#fde68a" strokeWidth="1.5" fill="#0e7490" />
          <circle cx="47" cy="46" r="4.5" stroke="#fde68a" strokeWidth="1.5" fill="#0e7490" />
        </svg>
      );
  }
}
