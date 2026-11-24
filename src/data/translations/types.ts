export interface LocalizedNavItem {
  href: string;
  label: string;
  description: string;
}

export interface LocalizedSeeker {
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
  /** Extra search term for the class page title, e.g. "Ninja" for Kunoichi. */
  seoKeyword?: string;
}

export type MultiplayerStatus = "yes" | "no" | "unconfirmed";

export interface LocalizedMultiplayerItem {
  question: string;
  status: MultiplayerStatus;
  answer: string;
}

export interface LocalizedWorldSystem {
  id: string;
  title: string;
  summary: string;
  details: string;
}

export interface LocalizedFaqItem {
  categoryKey: "general" | "gameplay" | "platforms" | "lore";
  categoryLabel: string;
  question: string;
  answer: string;
}

export interface SiteTranslations {
  siteName: string;
  officialTitle: string;
  releaseStatus: string;
  sourceDateFormatted: string;
  skipToContent: string;
  nav: readonly LocalizedNavItem[];
  footer: {
    tagline: string;
    aboutLink: string;
    steamStore: string;
    steamNews: string;
    psStore: string;
  };
  breadcrumbsHome: string;
  home: {
    metaTitle: string;
    metaDescription: string;
    heroLead: string;
    releasePrefix: string;
    targetSuffix: string;
    exploreClasses: string;
    wishlistSteam: string;
    illustrationCaption: string;
    overviewTitle: string;
    overviewBody: string;
    devLabel: string;
    pubLabel: string;
    platformsLabel: string;
    platformsValue: string;
    modesLabel: string;
    modesValue: string;
    seekersTitle: string;
    compareClassesLink: string;
    videosTitle: string;
    videosHint: string;
    revealTrailerCaption: string;
    gameplayPreviewCaption: string;
    worldTitle: string;
    worldLink: string;
    guidesTitle: string;
    quickAnswersTitle: string;
    viewAllFaqs: string;
  };
  classes: {
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    headerLead: string;
    comparisonTitle: string;
    colSeeker: string;
    colRole: string;
    colRange: string;
    colWeapons: string;
    colPreview: string;
    weaponsPrefix: string;
    openClassPage: string;
    videoTitle: string;
    videoDesc: string;
    watchYoutube: string;
    readWarfiendNews: string;
    detail: {
      classProfile: string;
      combatRole: string;
      engagementRange: string;
      weaponsTools: string;
      previewStatus: string;
      combatFocus: string;
      pendingStatsNote: string;
      backToAll: string;
      exploreSystems: string;
      officialPreview: string;
      otherSeekers: string;
    };
  };
  world: {
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    headerLead: string;
    sourceNotePrefix: string;
    sourceNoteMid: string;
    sourceNoteSuffix: string;
    checkedLabel: string;
    systemsHeading: string;
    skillTreesTitle: string;
    skillTreesBody: string;
    charCreationTitle: string;
    charCreationBody: string;
    genreTitle: string;
    genreBody: string;
    connectTitle: string;
    connectBody: string;
    exploreSeekersBtn: string;
    officialPreviewBtn: string;
  };
  release: {
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    statusLeadPrefix: string;
    targetSuffix: string;
    headerBodyBeforeLink: string;
    revealTrailerLink: string;
    headerBodyAfterLink: string;
    sourcesChecked: string;
    cardTrailerWindow: string;
    cardTrailerNote: string;
    cardStoreStatus: string;
    cardStoreNote: string;
    cardLatestDemo: string;
    cardLatestDemoNote: string;
    timelineTitle: string;
    gamescomTitle: string;
    gamescomBody: string;
    gamescomLink: string;
    gstarTitle: string;
    gstarBody: string;
    gstarLink: string;
    publicDemoTitle: string;
    publicDemoBody: string;
    publicDemoLink: string;
    priceTitle: string;
    priceBody: string;
    priceLink: string;
    trailerTitle: string;
    trailerCaption: string;
  };
  platforms: {
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    headerLead: string;
    checkedLabel: string;
    pcTitle: string;
    pcBody: string;
    pcLink: string;
    psTitle: string;
    psBody: string;
    psLink: string;
    xboxTitle: string;
    xboxBody: string;
    xboxLink: string;
    unconfirmedTitle: string;
    unconfirmedLead: string;
    switchTitle: string;
    switchBody: string;
    ps4Title: string;
    ps4Body: string;
    mobileTitle: string;
    mobileBody: string;
    coopTitle: string;
    coopLead: string;
    crossplayTitle: string;
    crossplayBody: string;
    couchTitle: string;
    couchBody: string;
    offlineTitle: string;
    offlineBody: string;
    pvpTitle: string;
    pvpBody: string;
    linkMultiplayer: string;
    linkRelease: string;
    linkSpecs: string;
    linkWorld: string;
  };
  multiplayer: {
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    headerLead: string;
    checkedLabel: string;
    summaryTitle: string;
    statusLabels: Record<MultiplayerStatus, string>;
    items: readonly LocalizedMultiplayerItem[];
    relatedTitle: string;
    linkPlatforms: string;
    linkRelease: string;
    linkClasses: string;
    linkFaq: string;
  };
  specs: {
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    headerLead: string;
    checkedLabel: string;
    minTitle: string;
    recTitle: string;
    fields: readonly { label: string; value: string }[];
    whyTitle: string;
    whyBody1: string;
    whyBody2: string;
    linkSteam: string;
    linkNews: string;
    linkPlatforms: string;
  };
  faq: {
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    headerLeadBefore: string;
    steamLink: string;
    headerLeadMid: string;
    trailerLink: string;
    allCategory: string;
    searchPlaceholder: string;
    searchLabel: string;
    emptyState: string;
    categories: {
      general: string;
      gameplay: string;
      platforms: string;
      lore: string;
    };
  };
  about: {
    breadcrumb: string;
    metaTitle: string;
    metaDescription: string;
    headerLead: string;
    disclaimerTitle: string;
    disclaimerBody1: string;
    disclaimerBody2: string;
    policyTitle: string;
    policyBody1: string;
    policyBody2Prefix: string;
    sourcesTitle: string;
    sourceSteam: string;
    sourcePs: string;
    sourceGamescom: string;
    sourceGstar: string;
    sourceTrailer: string;
    sourcePreview: string;
    footerNotePrefix: string;
    footerNoteMid: string;
    footerNoteSuffix: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    body: string;
    backHome: string;
    exploreSeekers: string;
  };
  youtube: {
    watchOnYoutube: string;
    playPrefix: string;
  };
  seekers: readonly LocalizedSeeker[];
  worldSystems: readonly LocalizedWorldSystem[];
  faqs: readonly LocalizedFaqItem[];
}
