"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { MidRectangleAd } from "@/components/AdSlots";
import { CornerOrnaments } from "@/components/EasternOrnaments";
import type { LocalizedFaqItem } from "@/data/translations/types";

interface FaqInteractiveProps {
  items: readonly LocalizedFaqItem[];
  categories: {
    general: string;
    gameplay: string;
    platforms: string;
    lore: string;
  };
  allLabel: string;
  searchPlaceholder: string;
  searchLabel: string;
  emptyState: string;
}

export default function FaqInteractive({
  items,
  categories,
  allLabel,
  searchPlaceholder,
  searchLabel,
  emptyState,
}: FaqInteractiveProps) {
  const [selectedKey, setSelectedKey] = useState<"all" | LocalizedFaqItem["categoryKey"]>("all");
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();

  const categoryTabs: Array<{ key: "all" | LocalizedFaqItem["categoryKey"]; label: string }> = [
    { key: "all", label: allLabel },
    { key: "general", label: categories.general },
    { key: "gameplay", label: categories.gameplay },
    { key: "platforms", label: categories.platforms },
    { key: "lore", label: categories.lore },
  ];

  const filtered = items.filter((item) => {
    const matchesCat = selectedKey === "all" || item.categoryKey === selectedKey;
    const matchesQuery =
      search === "" ||
      item.question.toLowerCase().includes(search) ||
      item.answer.toLowerCase().includes(search);
    return matchesCat && matchesQuery;
  });

  return (
    <div>
      {/* Filter & Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              aria-pressed={selectedKey === tab.key}
              onClick={() => setSelectedKey(tab.key)}
              className={`rounded px-3.5 py-2 font-serif text-xs font-bold uppercase tracking-wider transition ${
                selectedKey === tab.key
                  ? "btn-arpg-primary"
                  : "border border-amber-500/30 bg-obsidian-900/90 text-gray-300 hover:border-amber-400 hover:text-amber-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-2.5 h-4 w-4 text-amber-400" />
          <input
            type="search"
            aria-label={searchLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full rounded border border-amber-500/35 bg-obsidian-900/95 py-2 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:border-amber-300 focus:outline-none"
          />
        </div>
      </div>

      {/* FAQ Cards */}
      <div className="mt-6 space-y-4">
        {filtered.map((item, idx) => (
          <React.Fragment key={item.question}>
            <div className="arpg-card rounded-2xl p-6">
              <CornerOrnaments />
              <span className="text-xs font-semibold text-amber-300">{item.categoryLabel}</span>
              <h2 className="mt-3 font-serif text-lg font-bold text-white">{item.question}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">{item.answer}</p>
            </div>
            {idx === 2 && filtered.length >= 4 && <MidRectangleAd className="my-6" />}
          </React.Fragment>
        ))}

        {filtered.length === 0 && (
          <div role="status" className="arpg-card rounded-2xl p-8 text-center text-sm text-gray-400">
            {emptyState}
          </div>
        )}
      </div>
    </div>
  );
}
