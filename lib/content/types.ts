export type Locale = "en" | "de";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface WhatWeDoPoint {
  title: string;
  body: string;
}

export interface SidePanel {
  title: string;
  eyebrow: string;
  points: string[];
}

export interface NetworkDetailStat {
  label: string;
  value: string;
}

export interface NetworkDetailEmbed {
  title: string;
  note: string;
  url: string;
}

export interface NetworkDetail {
  subheadline: string;
  bodyParagraphs: string[];
  ctaLabel: string;
  ctaHref: string;
  statsPanelTitle: string;
  stats: NetworkDetailStat[];
  embed?: NetworkDetailEmbed;
  websiteUrl?: string;
}

export interface NetworkItem {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  href: string;
  accentColor: string;
  cardAbbr: string;
  isLaunching?: boolean;
  detail: NetworkDetail;
}

export interface CaseStudyLogo {
  name: string;
  src: string;
}

export interface CaseStudy {
  partner: string;
  network: string;
  title: string;
  description: string;
  tags: string[];
  logos?: CaseStudyLogo[];
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: NavLink[];
    langLabel: string;
    shop: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Stat[];
  };
  whatWeDo: {
    eyebrow: string;
    heading: string;
    summary: string;
    points: WhatWeDoPoint[];
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: WhatWeDoPoint[];
  };
  partners: {
    eyebrow: string;
    heading: string;
    intro: string;
    names: string[];
  };
  networks: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: NetworkItem[];
    cta: string;
    activeLabel: string;
    launchingLabel: string;
    websiteLabel: string;
    expandLabel: string;
    collapseLabel: string;
  };
  trackRecord: {
    eyebrow: string;
    heading: string;
    intro: string;
    caseStudies: CaseStudy[];
    moreLabel: string;
  };
  whyNow: {
    eyebrow: string;
    heading: string;
    body: string;
    points: WhatWeDoPoint[];
  };
  finalCta: {
    heading: string;
    body: string;
    perks: string[];
    form: {
      emailLabel: string;
      emailPlaceholder: string;
      memberLabel: string;
      memberPlaceholder: string;
      memberOptions: string[];
      submitLabel: string;
      loginPrompt: string;
      loginLabel: string;
    };
  };
  footer: {
    tagline: string;
    columns: FooterColumn[];
    legal: string;
    legalLinks: NavLink[];
  };
  shopPage: {
    eyebrow: string;
    heading: string;
    body: string;
    backLabel: string;
  };
  channelsPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    suggestChannel: {
      heading: string;
      body: string;
      ctaLabel: string;
    };
  };
  eventsPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    emptyNote: string;
    mediaLabel: string;
    showMediaLabel: string;
    hideMediaLabel: string;
  };
  consultingPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    note: string;
    services: { title: string; body: string }[];
    collaboration: {
      eyebrow: string;
      heading: string;
      intro: string;
      ours: { title: string; points: string[] };
      yours: { title: string; points: string[] };
    };
    cta: {
      heading: string;
      body: string;
      emailLabel: string;
      emailPlaceholder: string;
      interestLabel: string;
      interestPlaceholder: string;
      interestOptions: string[];
      submitLabel: string;
    };
  };
  aboutPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    timeline: { year: string; title: string; body: string }[];
    locations: {
      eyebrow: string;
      heading: string;
      cities: { name: string; lat: number; lon: number; isPrimary?: boolean }[];
    };
  };
  contactPage: {
    eyebrow: string;
    heading: string;
    intro: string;
    emailLabel: string;
    email: string;
    channels: { label: string; body: string }[];
    formNote: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      audienceLabel: string;
      messageLabel: string;
      submitLabel: string;
    };
  };
}
