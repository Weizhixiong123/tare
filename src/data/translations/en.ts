import { FAQ_ITEMS, SEEKER_CLASSES, SITE_CONFIG, SITE_NAV, WORLD_SYSTEMS } from "../taraeData";
import type { SiteTranslations } from "./types";

export const en: SiteTranslations = {
  siteName: SITE_CONFIG.name,
  officialTitle: SITE_CONFIG.officialTitle,
  releaseStatus: SITE_CONFIG.releaseStatus,
  sourceDateFormatted: "November 24, 2026",
  skipToContent: "Skip to content",
  nav: SITE_NAV,
  footer: {
    tagline:
      "An independent community wiki for TARAE: The Unbound by Boundary and KRAFTON. Not affiliated with or endorsed by Boundary or KRAFTON, Inc.",
    aboutLink: "About & Disclaimer",
    steamStore: "Steam Store",
    steamNews: "Steam News",
    psStore: "PlayStation Store",
  },
  breadcrumbsHome: "Home",
  home: {
    metaTitle: SITE_CONFIG.officialTitle,
    metaDescription:
      "An independent wiki for TARAE: The Unbound. Explore the six playable classes, Taegwido lore, release details, platforms, PC requirements and official trailers.",
    heroLead: "A top-down action RPG set on Taegwido, an island born from the shattered Six Realms.",
    releasePrefix: "Release date:",
    targetSuffix: "target",
    exploreClasses: "Explore Classes",
    wishlistSteam: "Wishlist on Steam",
    illustrationCaption: "Community illustration",
    overviewTitle: "Game Overview",
    overviewBody:
      "An isometric action RPG (not a traditional MMORPG): fight through hordes, learn boss patterns and build around skills, traits, the Five Elements, Yin and Yang, and karma.",
    devLabel: "Developer",
    pubLabel: "Publisher",
    platformsLabel: "Platforms",
    platformsValue: "PC, PS5, Xbox Series X|S",
    modesLabel: "Modes",
    modesValue: "Single-player & Online Co-op",
    seekersTitle: "The Six Seekers",
    compareClassesLink: "Compare all six classes →",
    videosTitle: "Official Trailers & Gameplay",
    videosHint: "Click to load YouTube player",
    revealTrailerCaption: "Official Reveal Trailer (Gamescom 2026)",
    gameplayPreviewCaption: "Official Gameplay Preview",
    worldTitle: "Taegwido Lore & Build Systems",
    worldLink: "Read full world & systems guide →",
    guidesTitle: "Game Guides",
    quickAnswersTitle: "Quick Answers",
    viewAllFaqs: "View all FAQs →",
  },
  classes: {
    breadcrumb: "Classes",
    metaTitle: "TARAE Classes and the Six Seekers",
    metaDescription:
      "Meet Warfiend, Samurai, Tiger Hunter, Geomancer, Kunoichi and Manshin, the six playable classes in TARAE: The Unbound.",
    headerLead:
      "In TARAE: The Unbound, playable heroes are called Seekers. Six fixed classes are announced—including martial brawlers, blade masters, ranged hunters, elemental mages, a ninja-style assassin, and a spirit shaman—each customized through class skills, traits, and support skills.",
    comparisonTitle: "Six Seekers Comparison",
    colSeeker: "Seeker",
    colRole: "Role",
    colRange: "Range",
    colWeapons: "Weapons & Tools",
    colPreview: "Preview Status",
    weaponsPrefix: "Weapons:",
    openClassPage: "class page",
    videoTitle: "See the Seekers in Combat",
    videoDesc:
      "Watch the official gameplay preview to see how class stances, boss patterns, and elemental abilities play out from the top-down camera.",
    watchYoutube: "Watch on YouTube",
    readWarfiendNews: "Read KRAFTON’s Warfiend announcement",
    detail: {
      classProfile: "Class Profile",
      combatRole: "Combat Role",
      engagementRange: "Engagement Range",
      weaponsTools: "Weapons & Tools",
      previewStatus: "Preview Status",
      combatFocus: "Combat Focus",
      pendingStatsNote: "Full skill trees and exact numerical stats remain unconfirmed prior to release.",
      backToAll: "Back to All Six Seekers",
      exploreSystems: "Explore Five Elements & Karma",
      officialPreview: "Official Gameplay Preview",
      otherSeekers: "Other Playable Seekers",
    },
  },
  world: {
    breadcrumb: "World & Systems",
    metaTitle: "Taegwido Lore, Skill Trees, Character Creation & ARPG Systems",
    metaDescription:
      "Explore the Eastern dark fantasy world of TARAE: The Unbound — Taegwido, Agasa, the Six Realms, skill customization, character creation status, Five Elements, Yin-Yang, and Diablo-style ARPG combat.",
    headerLead:
      "TARAE: The Unbound sets its top-down action RPG combat on Taegwido, an island born from Eastern mythology and the Buddhist Six Realms of Rebirth.",
    sourceNotePrefix: "Based on official",
    sourceNoteMid: "and",
    sourceNoteSuffix: "descriptions, checked",
    checkedLabel: "November 24, 2026",
    systemsHeading: "Skill Trees, Character Creation & Genre Comparisons",
    skillTreesTitle: "Skill Trees & Traits",
    skillTreesBody:
      "Instead of a single generic talent bar, Steam describes build crafting through class skills, support skills, traits, and gear shaped by the Five Elements, Yin and Yang, and karma.",
    charCreationTitle: "Character Creation Status",
    charCreationBody:
      "Official previews spotlight six named Seekers with distinct fighting styles and lore rather than blank-slate custom protagonists. Visual customization options remain unconfirmed.",
    genreTitle: "ARPG vs. MMORPG & Diablo",
    genreBody:
      "TARAE is a top-down hack-and-slash action RPG (single-player and online co-op), not a traditional persistent MMORPG. Like Diablo, it features isometric builds, while placing heavy emphasis on boss pattern recognition and dodges.",
    connectTitle: "How Systems Connect to the Six Seekers",
    connectBody:
      "Each of the six playable Seekers interacts with Taegwido's combat and build crafting differently—from Geomancer's Five Elements area formations and Manshin's spirit rituals to Warfiend's aggressive close-quarters combos and Kunoichi's fast shinobi strikes.",
    exploreSeekersBtn: "Explore All Six Seekers",
    officialPreviewBtn: "Official Gameplay Preview",
  },
  release: {
    breadcrumb: "Release Date",
    metaTitle: "TARAE Release Date, Beta Playtest, Demo & Price Status",
    metaDescription:
      "KRAFTON’s trailer lists 2027 for TARAE: The Unbound. Check release date timing, beta/playtest/Early Access status, hands-on demos and free-to-play vs. price details.",
    statusLeadPrefix: "Release date:",
    targetSuffix: "target window",
    headerBodyBeforeLink: "KRAFTON’s",
    revealTrailerLink: "reveal trailer",
    headerBodyAfterLink:
      "lists 2027 for PC, PlayStation 5 and Xbox Series X|S. Steam and PlayStation still show the specific day and month as pending.",
    sourcesChecked: "Sources checked",
    cardTrailerWindow: "Trailer Release Window",
    cardTrailerNote: "Shown at the end of the reveal trailer",
    cardStoreStatus: "Store Listing Status",
    cardStoreNote: "Steam App 4604540 & PlayStation Store",
    cardLatestDemo: "Latest Hands-On Demo",
    cardLatestDemoNote: "Busan booth (November 19–22, 2026)",
    timelineTitle: "Demo & Announcement Timeline",
    gamescomTitle: "Gamescom 2026 (August 25, 2026)",
    gamescomBody:
      "KRAFTON revealed TARAE on August 25 at Opening Night Live alongside its reveal trailer naming a 2027 release year for PC, PS5 and Xbox Series X|S. Boundary offered hands-on demos in Cologne during the show.",
    gamescomLink: "KRAFTON’s Gamescom announcement",
    gstarTitle: "G-STAR 2026 (November 19–22, 2026)",
    gstarBody:
      "The Busan event ran November 19–22. KRAFTON announced Warfiend’s (Tugwi) first playable appearance at the booth alongside Samurai, Tiger Hunter and Geomancer.",
    gstarLink: "KRAFTON’s G-STAR announcement",
    publicDemoTitle: "Public Demo, Beta & Early Access",
    publicDemoBody:
      "Steam had no downloadable public demo, open beta test, Steam Playtest registration, or Early Access schedule listed when we checked. The 2026 playable builds were available only on site at Gamescom and G-STAR.",
    publicDemoLink: "Follow official Steam news updates",
    priceTitle: "Price, Cost & Free-to-Play Status",
    priceBody:
      "Exact retail price, cost by region, and whether TARAE: The Unbound will be a paid purchase or free-to-play remain unconfirmed on the official Steam and PlayStation Store listings.",
    priceLink: "See platforms and store listings",
    trailerTitle: "Official Reveal Trailer",
    trailerCaption: "Official Reveal Trailer listing the 2027 release window",
  },
  platforms: {
    breadcrumb: "Platforms",
    metaTitle: "TARAE Platforms: Steam, PS5, Xbox, Switch & Crossplay Status",
    metaDescription:
      "Confirmed TARAE: The Unbound platforms (PC Steam, PS5, Xbox Series X|S) plus official status for Switch 2, PS4, mobile, online co-op, crossplay, couch co-op, and offline play.",
    headerLead:
      "KRAFTON announced TARAE: The Unbound for PC, PlayStation 5 and Xbox Series X|S. Specific launch dates, cross-platform play, and additional console ports remain pending.",
    checkedLabel: "Store listings checked",
    pcTitle: "PC (Steam)",
    pcBody:
      "Steam has an official store listing (App ID 4604540) with single-player and online co-op tags. An Epic Games Store listing remains unverified.",
    pcLink: "Wishlist on Steam",
    psTitle: "PlayStation 5",
    psBody: "The PlayStation Store has an official concept listing (ID 10020644) with a wishlist option and Eastern dark fantasy overview.",
    psLink: "Open PlayStation Store",
    xboxTitle: "Xbox Series X|S",
    xboxBody: "KRAFTON lists Xbox Series X|S alongside PC and PlayStation 5 in the official reveal trailer description.",
    xboxLink: "View the official trailer",
    unconfirmedTitle: "Switch, Switch 2, PS4 & Mobile Status",
    unconfirmedLead:
      "Players frequently ask whether TARAE: The Unbound will release on additional hardware. Only PC, PS5, and Xbox Series X|S are confirmed:",
    switchTitle: "Nintendo Switch & Switch 2:",
    switchBody: "Not announced. Neither Boundary nor KRAFTON has listed a Nintendo version.",
    ps4Title: "PlayStation 4 (PS4) & Xbox One:",
    ps4Body: "Not announced. Console listings target PS5 and Xbox Series X|S.",
    mobileTitle: "Mobile (iOS / Android):",
    mobileBody: "Not announced. TARAE is being showcased as a PC and current-gen console action RPG.",
    coopTitle: "Online Co-op, Crossplay, Couch Co-op & Offline Mode",
    coopLead:
      "Steam confirms both Single-player and Online Co-op modes. Several multiplayer and connectivity details have not yet been published on the store pages:",
    crossplayTitle: "Crossplay & Cross-Save:",
    crossplayBody: "Unconfirmed. Support across PC, PS5, and Xbox Series X|S has not been announced.",
    couchTitle: "Couch Co-op (Local Split-Screen / Shared-Screen):",
    couchBody: "Unconfirmed. Only Single-player and Online Co-op appear in Steam's feature tags.",
    offlineTitle: "Offline Play:",
    offlineBody: "Unconfirmed. Single-player is supported, but whether an always-online connection is required has not been stated.",
    pvpTitle: "PvP & Party Size Limit:",
    pvpBody: "Unconfirmed. No PvP modes or exact co-op player count limit are listed on Steam yet.",
    linkRelease: "Check the release date",
    linkSpecs: "Check PC requirements",
    linkWorld: "Explore Taegwido & build systems",
  },
  specs: {
    breadcrumb: "PC Requirements",
    metaTitle: "TARAE PC System Requirements",
    metaDescription: "Check the official Steam status for TARAE: The Unbound’s minimum and recommended PC system requirements.",
    headerLead:
      "Boundary has not yet published the minimum or recommended PC specs for TARAE: The Unbound. Steam currently shows placeholder fields for processor, graphics card, memory, and storage.",
    checkedLabel: "Steam listing (App 4604540) checked",
    minTitle: "Minimum Requirements",
    recTitle: "Recommended Requirements",
    fields: [
      { label: "Operating System", value: "To be announced (64-bit Windows expected for Steam PC)" },
      { label: "Processor (CPU)", value: "To be announced" },
      { label: "Memory (RAM)", value: "To be announced" },
      { label: "Graphics Card (GPU)", value: "To be announced" },
      { label: "DirectX", value: "To be announced" },
      { label: "Storage", value: "To be announced" },
    ],
    whyTitle: "Why Are PC Specs Still Pending?",
    whyBody1:
      "With a 2027 release window listed in KRAFTON's reveal trailer, optimization is still ongoing. Hands-on builds shown at Gamescom 2026 and G-STAR 2026 ran on controlled exhibition hardware rather than finalized consumer spec tiers.",
    whyBody2:
      "Rather than guessing unverified GPU or CPU baselines, this page tracks the official Steam store fields directly and will update as soon as Boundary posts hardware targets or opens a public online playtest.",
    linkSteam: "Check the official Steam listing",
    linkNews: "Monitor Steam News",
    linkPlatforms: "Compare console & PC platforms",
  },
  faq: {
    breadcrumb: "FAQ",
    metaTitle: "TARAE FAQ: Release Date, Classes, Price, Crossplay & Switch Status",
    metaDescription:
      "Verified answers about TARAE: The Unbound — 2027 release window, free-to-play vs. price, crossplay, couch co-op, offline play, Switch 2/PS4/mobile status, skill trees, and Taegwido lore.",
    headerLeadBefore: "Answers on the release, classes, co-op and the world of Taegwido, based on the",
    steamLink: "Steam listing",
    headerLeadMid: "and",
    trailerLink: "KRAFTON’s reveal trailer",
    allCategory: "All",
    searchPlaceholder: "Search FAQs...",
    searchLabel: "Search FAQs",
    emptyState: "No matching questions. Try a different search or category.",
    categories: {
      general: "General & Release",
      gameplay: "Gameplay & Classes",
      platforms: "Platforms & Co-op",
      lore: "Lore",
    },
  },
  about: {
    breadcrumb: "About & Disclaimer",
    metaTitle: "About & Editorial Policy",
    metaDescription:
      "Editorial standards, official source verification, and non-affiliation disclaimer for TARAE Wiki (taraegame.wiki).",
    headerLead:
      "TARAE Wiki (taraegame.wiki) is an independent, fan-maintained encyclopedia covering TARAE: The Unbound, the upcoming top-down action RPG developed by Boundary and published by KRAFTON, Inc.",
    disclaimerTitle: "Unofficial Wiki Disclaimer",
    disclaimerBody1:
      "This website is an unofficial community resource and is not affiliated with, endorsed by, or sponsored by Boundary or KRAFTON, Inc.",
    disclaimerBody2:
      "All game titles, character names, lore terms, logos, and store assets remain the property of their respective trademark owners. Artwork on the homepage hero is labeled as community illustration.",
    policyTitle: "Source & Fact-Checking Policy",
    policyBody1:
      "Because TARAE: The Unbound is in active pre-release development, every guide separates confirmed official information from details that remain unannounced.",
    policyBody2Prefix: "All facts on this site are cross-checked against primary listings and announcements, last verified on",
    sourcesTitle: "Primary Official Sources Tracked",
    sourceSteam: "Official Steam Store Page (App 4604540)",
    sourcePs: "PlayStation Store Concept Listing",
    sourceGamescom: "KRAFTON Gamescom 2026 Press Release",
    sourceGstar: "KRAFTON G-STAR 2026 Announcement",
    sourceTrailer: "Official Reveal Trailer (YouTube)",
    sourcePreview: "Official Gameplay Preview (YouTube)",
    footerNotePrefix: "Spotted an outdated store status? Compare against the",
    footerNoteMid: "Release Date tracker",
    footerNoteSuffix: "FAQ page",
  },
  notFound: {
    eyebrow: "Error 404 • Lost in Taegwido",
    title: "Page Not Found",
    body: "The scroll or route you requested does not exist on this wiki. Return to the main hub or jump directly to one of the TARAE: The Unbound guides below.",
    backHome: "Back to Home",
    exploreSeekers: "Explore Six Seekers",
  },
  youtube: {
    watchOnYoutube: "Watch on YouTube",
    playPrefix: "Play",
  },
  seekers: SEEKER_CLASSES,
  worldSystems: WORLD_SYSTEMS,
  faqs: FAQ_ITEMS.map((item) => ({
    categoryKey:
      item.category === "General & Release"
        ? "general"
        : item.category === "Gameplay & Classes"
        ? "gameplay"
        : item.category === "Platforms & Co-op"
        ? "platforms"
        : "lore",
    categoryLabel: item.category,
    question: item.question,
    answer: item.answer,
  })),
};
