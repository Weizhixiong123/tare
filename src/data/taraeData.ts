export const SITE_CONFIG = {
  name: "TARAE Wiki",
  officialTitle: "TARAE: The Unbound",
  url: "https://taraegame.wiki",
  developer: "Boundary",
  publisher: "KRAFTON, Inc.",
  steamUrl: "https://store.steampowered.com/app/4604540/TARAE_The_Unbound/?l=english",
  playStationUrl: "https://store.playstation.com/en-us/concept/10020644/",
  steamNews: "https://steamcommunity.com/app/4604540/allnews",
  revealTrailer: "https://www.youtube.com/watch?v=vM8iBVDH6f8",
  revealTrailerId: "vM8iBVDH6f8",
  gameplayPreview: "https://www.youtube.com/watch?v=QjhLu2oenm8",
  gameplayPreviewId: "QjhLu2oenm8",
  gamescomAnnouncement: "https://press.krafton.com/en-GB/KRAFTON-SHOWCASES-FIVE-NEW-TITLES-AT-GAMESCOM-2026-OPENING-NIGHT-LIVE",
  gStarAnnouncement: "https://prtimes.jp/main/html/rd/p/000000438.000082433.html",
  releaseStatus: "To be announced",
  announcedReleaseYear: "2027",
  sourceCheckDate: "2026-11-24",
};

export const SITE_NAV = [
  { href: "/release-date", label: "Release Date", description: "Release timing, pricing and hands-on demos." },
  { href: "/classes", label: "Classes", description: "Meet the six playable Seekers." },
  { href: "/world", label: "World & Systems", description: "Taegwido, Six Realms, Five Elements, Yin-Yang and Karma." },
  { href: "/platforms", label: "Platforms", description: "Store listings and release status for PC, PS5 and Xbox." },
  { href: "/multiplayer", label: "Multiplayer", description: "Online co-op, crossplay, offline play and PvP status." },
  { href: "/system-requirements", label: "PC Requirements", description: "What Steam lists for minimum and recommended specs." },
  { href: "/faq", label: "FAQ", description: "Quick answers on the game, combat and Taegwido." },
] as const;

export interface SeekerClass {
  id: string;
  name: string;
  originalName: string;
  role: string;
  range: string;
  weapons: string;
  demoStatus: string;
  summary: string;
  overview: string;
  combatFocus: readonly string[];
  playstyleNote: string;
  seoKeyword?: string;
}

export const SEEKER_CLASSES: readonly SeekerClass[] = [
  {
    id: "tugwi",
    name: "Warfiend",
    originalName: "투귀",
    role: "Martial arts brawler",
    range: "Close-range melee",
    weapons: "Iron gauntlets and unarmed strikes",
    demoStatus: "First playable at G-STAR 2026",
    summary:
      "A close-range fighter built around heavy punches and aggressive combos. Warfiend was playable for the first time at G-STAR 2026.",
    overview:
      "Warfiend (known in Korean as 투귀 / Tugwi) fights at point-blank range using gauntlet-heavy martial arts rather than blades or ranged magic. KRAFTON showcased Warfiend as a newly playable Seeker during G-STAR 2026 in Busan.",
    combatFocus: [
      "Aggressive close-quarters chains built around combo points and link-score finishers.",
      "Fast gap-closing movement to stay inside melee range during boss patterns.",
      "High-risk positioning that rewards reading enemy wind-ups and timing dodges.",
    ],
    playstyleNote:
      "Best suited for players who prefer fast, kinetic brawling and close-range boss pressure over kiting or ranged spellcasting.",
  },
  {
    id: "samurai",
    name: "Samurai",
    originalName: "무사",
    role: "Melee sword fighter",
    range: "Close-range melee",
    weapons: "Katana and short swords",
    demoStatus: "Showcased in early playable builds",
    summary:
      "A sword fighter who switches stances in close combat, alternating between quick strikes and heavier attacks.",
    overview:
      "Samurai (무사) centers on disciplined swordsmanship, pairing rapid cuts with deliberate stance transitions and defensive timing. Early previews highlight parrying and counter-oriented melee exchanges.",
    combatFocus: [
      "Stance switching between nimble slashes and heavier committed sword strikes.",
      "Timing-based parries and counter openings against aggressive elite enemies and bosses.",
      "Balanced melee reach and mobility compared to pure unarmed brawlers.",
    ],
    playstyleNote:
      "A natural fit for ARPG players who want crisp melee feedback and deliberate parry-and-punish combat.",
  },
  {
    id: "chakhogapsa",
    name: "Tiger Hunter",
    originalName: "착호갑사",
    role: "Ranged hunter",
    range: "Mid-to-long range",
    weapons: "Black-powder firearms, portable cannons and traps",
    demoStatus: "Showcased in early playable builds",
    summary:
      "Inspired by historical Korean tiger hunters. The Tiger Hunter uses firearms and traps to fight from a distance.",
    overview:
      "Drawing from the Joseon-era Chakhogapsa (착호갑사) — elite royal tiger hunters — this Seeker controls space with black-powder weaponry, explosives, and battlefield snares.",
    combatFocus: [
      "Mid-to-long-range firearm barrages using portable cannons and powder-fueled shots.",
      "Area denial through hunting traps and grenades to slow charging foes.",
      "Spacing management to keep distance while punishing boss recovery frames.",
    ],
    playstyleNote:
      "Ideal for tactical ranged players who like setting up traps and controlling choke points before unleashing heavy shots.",
  },
  {
    id: "geomancer",
    name: "Geomancer",
    originalName: "풍수사",
    role: "Area damage caster",
    range: "Mid-range caster",
    weapons: "Ceremonial fan and geomantic compass",
    demoStatus: "Showcased in early playable builds",
    summary:
      "A caster who draws on the Five Elements to control space and attack groups of enemies.",
    overview:
      "Geomancer (풍수사 / Pungsuja) channels Eastern geomancy and the Five Elements through a folding fan and compass, shaping terrain hazards and wide-area elemental spells.",
    combatFocus: [
      "Channeling Five Elements abilities across wide ground zones to clear enemy hordes.",
      "Layering terrain hazards and localized weather phenomena for sustained area control.",
      "Mid-range positioning that rewards awareness of enemy rushes.",
    ],
    playstyleNote:
      "Strong choice for players who enjoy elemental spellweaving, crowd control, and clearing dense waves of monsters.",
  },
  {
    id: "kunoichi",
    name: "Kunoichi",
    originalName: "쿠노이치",
    seoKeyword: "Ninja",
    role: "Mobile assassin (ninja / shinobi)",
    range: "Close-range assassin",
    weapons: "Light blades and shinobi tools",
    demoStatus: "Announced launch roster",
    summary:
      "A fast ninja-style close-range fighter whose preview highlights mobility and rapid strikes.",
    overview:
      "Kunoichi (쿠노이치) fills the agile ninja / shinobi assassin role in the Seekers roster, emphasizing high-speed evasion, light blades, and quick bursts of close-range damage in official class previews.",
    combatFocus: [
      "High movement speed and rapid-fire close-quarters strike sequences.",
      "Hit-and-run evasion suited to weaving around hazardous boss AoEs.",
      "Burst damage windows that capitalize on brief enemy openings.",
    ],
    playstyleNote:
      "Targeted at players who value high-tempo movement and reactive dodging over heavy armor or static casting.",
  },
  {
    id: "manshin",
    name: "Manshin",
    originalName: "만신",
    role: "Spirit caster",
    range: "Mid-range caster",
    weapons: "Shamanistic implements and spiritual magic",
    demoStatus: "Announced launch roster",
    summary:
      "A caster inspired by Korean shamanic traditions who calls on spirits in combat.",
    overview:
      "Manshin (만신) is rooted in traditional Korean shamanism, invoking spirits and folkloric rituals to battle the twisted phantoms inhabiting Taegwido.",
    combatFocus: [
      "Spirit-summoning and shamanistic spellcasting drawn from Korean folklore.",
      "Indirect battlefield pressure alongside ranged ritual magic.",
      "Distinct thematic synergy with TARAE's Six Realms and karma motifs.",
    ],
    playstyleNote:
      "Appeals to players drawn to summoner/occult archetypes and Korean mythological aesthetics.",
  },
];

export const WORLD_SYSTEMS = [
  {
    id: "taegwido",
    title: "Taegwido & the Shattered Six Realms",
    summary:
      "The game takes place on Taegwido, an island formed when an outcast named Agasa shattered the boundaries of the Buddhist Six Realms of Rebirth to break the wheel of reincarnation.",
    details:
      "With the barriers torn apart, twisted phantoms and fiendish creatures flooded the land. Six Seekers—each carrying their own afflictions and motives—travel across Taegwido to recover the scattered Sources needed to restore the cycle of rebirth.",
  },
  {
    id: "five-elements",
    title: "The Five Elements & Yin-Yang",
    summary:
      "Steam and Gamescom listings highlight traditional Eastern philosophies—specifically the balance and conflict of the Five Elements alongside Yin and Yang—as direct influences on combat and builds.",
    details:
      "Rather than relying solely on Western elemental tropes, TARAE ties skill interactions, equipment, and tactical choices to Eastern cosmological dynamics.",
  },
  {
    id: "karma-builds",
    title: "Skills, Traits, Gear & Karma",
    summary:
      "Character customization combines class skills, support skills, traits, and gear with progression shaped by karma and reincarnation.",
    details:
      "Even within the same Seeker class, choosing different skill links, traits, and equipment paths creates contrasting playstyles suited for solo play or online co-op.",
  },
  {
    id: "boss-combat",
    title: "Horde Clearing & Pattern-Driven Bosses",
    summary:
      "Official trailers and press materials pair fast-paced top-down horde combat with deliberate boss encounters.",
    details:
      "Boss fights emphasize reading enemy animations and attack patterns, timing dodges and counters, and exploiting openings rather than standing still and trading hits.",
  },
] as const;

export const FAQ_CATEGORIES = ["General & Release", "Gameplay & Classes", "Platforms & Co-op", "Lore"] as const;

export interface FaqItem {
  category: (typeof FAQ_CATEGORIES)[number];
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "General & Release",
    question: "What is TARAE: The Unbound?",
    answer:
      "TARAE: The Unbound is an upcoming top-down action RPG from Boundary and KRAFTON. Its Eastern dark fantasy setting draws on the Buddhist Six Realms of Rebirth.",
  },
  {
    category: "General & Release",
    question: "When does TARAE: The Unbound come out?",
    answer: `KRAFTON's reveal trailer lists ${SITE_CONFIG.announcedReleaseYear} as the release year. Steam and PlayStation say the specific date is still to be announced.`,
  },
  {
    category: "General & Release",
    question: "Is there a public TARAE demo on Steam?",
    answer:
      "Boundary announced hands-on demos at Gamescom 2026 and G-STAR 2026. The Steam store did not list a downloadable public demo when we checked.",
  },
  {
    category: "General & Release",
    question: "How much will TARAE cost? Is it free-to-play?",
    answer:
      "Pricing, cost, and monetization (free-to-play vs. paid purchase) remain unconfirmed on the official Steam and PlayStation store pages.",
  },
  {
    category: "General & Release",
    question: "Is TARAE: The Unbound an MMORPG or an action RPG?",
    answer:
      "TARAE: The Unbound is a top-down hack-and-slash action RPG (ARPG) supporting single-player and online co-op, rather than a traditional persistent MMORPG.",
  },
  {
    category: "General & Release",
    question: "What game engine does TARAE: The Unbound use?",
    answer:
      "Boundary and KRAFTON have not officially confirmed the game engine on the Steam or PlayStation Store listings.",
  },
  {
    category: "General & Release",
    question: "Will TARAE have Early Access, a beta or a playtest?",
    answer:
      "Not announced yet. When we last checked, Steam listed no Early Access schedule, open beta or Steam Playtest sign-up. The 2026 hands-on builds were playable only on site at Gamescom and G-STAR.",
  },
  {
    category: "General & Release",
    question: "Who is developing TARAE? Is it a Korean game?",
    answer:
      "TARAE: The Unbound is developed by Boundary and published by KRAFTON, Inc., the South Korean company behind PUBG: Battlegrounds. The game draws heavily on Korean history and folklore, from Joseon-era tiger hunters to Manshin shamanism, and was shown at G-STAR 2026 in Busan.",
  },
  {
    category: "Gameplay & Classes",
    question: "How many playable classes are in TARAE?",
    answer:
      "Six playable classes are announced: Warfiend, Samurai, Tiger Hunter, Geomancer, Kunoichi (ninja-style assassin) and Manshin. The game calls its playable characters Seekers.",
  },
  {
    category: "Gameplay & Classes",
    question: "Does TARAE have character creation or a skill tree?",
    answer:
      "Official previews showcase six fixed Seekers with distinct identities rather than blank-slate character creation. Build customization runs through class skills, traits, support skills, gear, the Five Elements, Yin and Yang, and karma.",
  },
  {
    category: "Gameplay & Classes",
    question: "Which classes were playable in the 2026 demos?",
    answer:
      "KRAFTON showcased hands-on builds at Gamescom 2026 and G-STAR 2026, with Warfiend (Tugwi) making its first playable appearance at G-STAR 2026 alongside Samurai, Tiger Hunter and Geomancer.",
  },
  {
    category: "Gameplay & Classes",
    question: "How does combat in TARAE compare with Diablo or Path of Exile?",
    answer:
      "TARAE shares a top-down perspective and character build systems with those action RPGs. Its published gameplay emphasizes learning boss attack patterns and timing dodges and counters.",
  },
  {
    category: "Gameplay & Classes",
    question: "How does build crafting work in TARAE?",
    answer:
      "Steam describes builds made from class skills, traits, support skills and gear. It also describes the Five Elements, Yin and Yang, and karma as influences on progression and equipment.",
  },
  {
    category: "Platforms & Co-op",
    question: "Is TARAE multiplayer? Does it support online co-op, crossplay, couch co-op, or offline play?",
    answer:
      "Steam lists single-player and online co-op. Crossplay, local couch co-op, offline mode requirements, PvP, and the maximum player limit are still unconfirmed.",
  },
  {
    category: "Platforms & Co-op",
    question: "What platforms is TARAE coming to? Is it on Switch, Switch 2, PS4, or mobile?",
    answer:
      "KRAFTON's reveal trailer names PC, PlayStation 5 and Xbox Series X|S. Nintendo Switch, Switch 2, PS4, and mobile versions have not been announced, and an Epic Games Store listing remains unverified.",
  },
  {
    category: "Lore",
    question: "What is Taegwido?",
    answer:
      "Taegwido is the island formed when Agasa shattered the boundaries of the Six Realms. The Seekers travel there to recover the Sources and restore the cycle of rebirth.",
  },
  {
    category: "Lore",
    question: "Who is Agasa and what are the Sources?",
    answer:
      "In the official store lore, Agasa is the outcast who broke the boundaries between the Six Realms to shatter the wheel of reincarnation. The Seekers journey across Taegwido to recover the scattered Sources and mend the broken cycle.",
  },
];
