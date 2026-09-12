import type { Dictionary } from "./types";

// NOTE: "Sony" / "Cherry" are placeholder brand names used for internal
// development per the founding brief — confirm real partner names before
// public launch.

export const en: Dictionary = {
  meta: {
    title: "Advantage Networks — Private-network distribution for consumer electronics",
    description:
      "Advantage Networks distributes consumer electronics exclusively through private, invite-only member networks — better deals for members, exclusive trusted distribution for brands.",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Channels", href: "/channels" },
      { label: "Consulting", href: "/consulting" },
      { label: "Events", href: "/events" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    langLabel: "DE",
    shop: "Enter the Shop",
  },
  hero: {
    eyebrow: "Private-network distribution",
    headline: "Your network, your advantage.",
    subheadline:
      "We connect defined communities with exclusive conditions on premium technology products. Exclusive, smart, scalable.",
    ctaPrimary: "Enter the Shop",
    ctaSecondary: "Request Access",
    stats: [
      { target: 100, suffix: "+", label: "Successful activations" },
      { target: 500, suffix: "+", label: "Own network nodes" },
      { target: 3, suffix: "+", label: "Partner communities", startValue: 9 },
      { target: 1000, suffix: "+", label: "Products in range", formatThousands: true },
    ],
  },
  whatWeDo: {
    eyebrow: "What we do",
    heading: "We turn private communities into a distribution channel.",
    summary:
      "Advantage Networks partners with electronics brands to sell exclusively inside closed, login-gated member networks — so prices never leak into public comparison sites.",
    points: [
      {
        title: "Exclusive conditions",
        body: "Not public, not comparable. Prices for verified members only — up to 25% below market price thanks to direct partnerships with manufacturers.",
      },
      {
        title: "Community-focused",
        body: "Every community gets its own access, its own benefits, and its own story. Helium, Founders League, Alumni — tailored.",
      },
      {
        title: "Token-native payment",
        body: "For Helium users: HNT tokens redeemable directly for hardware. The first shop that turns earned crypto into real purchasing power.",
      },
      {
        title: "Scalable & expandable",
        body: "The model isn't limited to one community. Any organization with a defined member base can become a partner and get its own advantage.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    heading: "Four steps to your advantage.",
    intro: "From community membership to your first exclusive order — here's the path.",
    steps: [
      {
        title: "Be a network member",
        body: "Operate a Helium hotspot, belong to the Founders League, or be part of the Alumni Network — any of our partner communities opens the door to the shop.",
      },
      {
        title: "Request access",
        body: "After a quick verification of your membership, you get immediate access to the login-gated shop.",
      },
      {
        title: "Shop exclusively",
        body: "Hundreds of products from leading brands, at conditions you won't find in the public market.",
      },
      {
        title: "Strengthen the network",
        body: "Every purchase strengthens the ecosystem — better gear, stronger setups, a growing community.",
      },
    ],
  },
  partners: {
    eyebrow: "Partners & brands",
    heading: "Leading brands. Exclusive conditions.",
    intro: "Direct partnerships with manufacturers make prices possible that you won't find in the open market.",
    names: [
      "Razer",
      "Garmin",
      "Canon",
      "Google",
      "Samsung",
      "SanDisk",
      "Sony",
      "Corsair",
      "Skullcandy",
      "Microsoft",
      "Logitech",
      "D-Link",
      "Kyocera",
      "Dell",
      "Lenovo",
      "TP-Link",
      "Epson",
      "Kingston",
    ],
  },
  networks: {
    eyebrow: "The networks",
    heading: "Three networks. One distribution model.",
    intro:
      "Each network is its own closed community with its own login-gated shop — same negotiated deals, different membership.",
    activeLabel: "Active",
    launchingLabel: "Launching",
    websiteLabel: "Visit website",
    expandLabel: "Show details",
    collapseLabel: "Hide details",
    items: [
      {
        slug: "helium-network",
        name: "Helium Network",
        tagline: "Where it started",
        description:
          "The original network — the largest decentralized community we serve, and the one that proved the private-distribution model works.",
        status: "Founding network",
        href: "/channels#helium-network",
        accentColor: "#5E25FD",
        cardAbbr: "HNT",
        detail: {
          subheadline:
            "The fastest-growing decentralized IoT network in the world — and the starting point of Advantage Networks. It's where hotspot operators first turned earned HNT into real hardware value, and where our private-distribution model was born. Today it's still our founding and largest community.",
          bodyParagraphs: [
            "Helium is a decentralized IoT network operated by its community. Hotspot operators earn HNT tokens for providing network infrastructure.",
            "With Advantage Networks, Helium operators can redeem their earned HNT directly for premium IT hardware — at conditions that beat the open market.",
            "Advantage Networks started inside this community, built by and for Helium operators before expanding to Founders League and Alumni. That origin still shapes how closely we work with the network today.",
          ],
          ctaLabel: "Request Shop Access",
          ctaHref: "/shop",
          statsPanelTitle: "Helium Network Overview",
          stats: [
            { label: "Own hotspots (DE)", value: "250+" },
            { label: "States covered", value: "14 / 16" },
            { label: "Avg. uptime", value: "97.4%" },
            { label: "Blockchain", value: "Solana" },
            { label: "Token", value: "HNT" },
            { label: "Status", value: "Shop live" },
          ],
          embed: {
            title: "Live Helium Network Map",
            note: "Explore live hotspot coverage on Helium World — opens in a new tab.",
            url: "https://world.helium.com/en/network/mobile",
          },
          websiteUrl: "https://www.helium.com",
        },
      },
      {
        slug: "founders-league",
        name: "Founders League",
        tagline: "Founders & operators",
        description:
          "A curated network of founders and operators. Home to activations like the Founder Padel Treff, sponsored with Garmin.",
        status: "Active",
        href: "/channels#founders-league",
        accentColor: "#FF7D23",
        cardAbbr: "FL",
        detail: {
          subheadline:
            "Founding is hard enough. With Advantage Networks, Founders League members get conditions only volume can unlock. We work directly with the League to bring member-only hardware pricing into the benefits founders already rely on.",
          bodyParagraphs: [
            "Startups need the best equipment from day one — laptops, monitors, servers, networking. But without volume, they don't get enterprise-level conditions.",
            "With Advantage Networks, every Founders League member taps into the combined purchasing power of the whole community — and gets 15–25% off, automatically.",
            "It's a close, ongoing partnership: as the League grows, so does the community's combined purchasing power — and the conditions get better for everyone in it.",
          ],
          ctaLabel: "Request Partnership",
          ctaHref: "/contact",
          statsPanelTitle: "Partnership Status",
          stats: [
            { label: "Status", value: "In discussion" },
            { label: "Audience", value: "Founders & teams" },
            { label: "Savings", value: "15–25%" },
            { label: "Payment", value: "Invoice, card, VAT ID" },
            { label: "Model", value: "B2B procurement" },
          ],
          websiteUrl: "https://foundersleague.de",
        },
      },
      {
        slug: "alumni-network",
        name: "Alumni Network",
        tagline: "Newest channel",
        description:
          "Our newest network, extending member deals to alumni communities and their graduates. Onboarding underway.",
        status: "Onboarding",
        href: "/channels#alumni-network",
        accentColor: "#f5a623",
        cardAbbr: "ALU",
        isLaunching: true,
        detail: {
          subheadline:
            "Alumni membership with real value: exclusive IT conditions as a lasting, tangible benefit — for individuals and businesses. We partner directly with alumni organizations to turn membership into a benefit people actually use.",
          bodyParagraphs: [
            "Most alumni programs offer events and newsletters. That matters, but it's not enough. Advantage Networks gives alumni organizations a benefit that's relevant every single day.",
            "Exclusive hardware conditions for individuals and businesses — for as long as they're part of the alumni network.",
            "This is an early, hands-on partnership — we're building the model together with alumni organizations as the network grows.",
          ],
          ctaLabel: "Request Partnership",
          ctaHref: "/contact",
          statsPanelTitle: "Alumni Benefit Model",
          stats: [
            { label: "Model", value: "White-label / co-brand" },
            { label: "Audience", value: "Alumni & graduates" },
            { label: "Benefit type", value: "Ongoing" },
            { label: "Usable for", value: "Personal & professional" },
            { label: "Status", value: "In discussion" },
          ],
        },
      },
    ],
    cta: "See all channels",
  },
  trackRecord: {
    eyebrow: "Track record",
    heading: "What's already happened inside the networks.",
    intro: "A first entry — this list grows as more networks and brands come online.",
    caseStudies: [
      {
        partner: "Garmin",
        network: "Founders League",
        title: "Founder Padel Treff",
        description:
          "A community padel event for the Founders League network, held on the rooftop courts at TIO TIO in Berlin-Friedrichshain and sponsored with Garmin watches — brand activation and member deal-access in one event, without a single public listing.",
        tags: ["Founders League", "Community activation", "Brand sponsorship"],
        logos: [
          { name: "Founders League", src: "/brand/channels/founders-league.svg" },
          { name: "TIO TIO", src: "/brand/projects/TIO_TIO_Logo_White.png" },
        ],
      },
    ],
    moreLabel: "View all activations",
  },
  whyNow: {
    eyebrow: "Why this matters now",
    heading: "Public price comparison broke retail margins. Private networks fix the incentive.",
    body: "When every price is public, brands compete on discount, not relationship. Private, curated networks let brands protect pricing while still moving real volume — and let members access deals that would never survive being public.",
    points: [
      {
        title: "Retail margin is under permanent pressure",
        body: "Comparison sites force brands into a race to the bottom the moment a price goes public.",
      },
      {
        title: "Communities are already the distribution layer",
        body: "People already trust and buy through the networks they're part of — we formalize that as a channel.",
      },
      {
        title: "Decentralized origin, commercial application",
        body: "The model started in the Helium Network's decentralized community structure — now applied to consumer electronics.",
      },
    ],
  },
  finalCta: {
    heading: "Ready for your advantage?",
    body: "The Advantage Shop isn't publicly accessible. Request your access as a member of one of our partner communities.",
    perks: ["No annual fee", "Instant after verification", "Multiple payment options"],
    form: {
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      memberLabel: "I'm a member as…",
      memberPlaceholder: "Please choose",
      memberOptions: [
        "Helium hotspot operator",
        "Founders League member",
        "Alumni Network",
        "Business customer",
      ],
      submitLabel: "Request access now",
      loginPrompt: "Already a member?",
      loginLabel: "Log in",
    },
  },
  footer: {
    tagline: "Consumer electronics, distributed through the networks you trust.",
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Consulting", href: "/consulting" },
          { label: "Events", href: "/events" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Channels",
        links: [
          { label: "Helium Network", href: "/channels#helium-network" },
          { label: "Founders League", href: "/channels#founders-league" },
          { label: "Alumni Network", href: "/channels#alumni-network" },
        ],
      },
    ],
    legal: "Advantage Networks. All rights reserved.",
    legalLinks: [
      { label: "Imprint", href: "/imprint" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  shopPage: {
    eyebrow: "Coming soon",
    heading: "The shop is being built.",
    body: "Advantage Networks' login-gated shop is in development. Members of a private network will sign in here to access exclusive pricing — for now, this is a placeholder.",
    backLabel: "Back to home",
  },
  channelsPage: {
    eyebrow: "Channels",
    heading: "Every network, in depth.",
    intro:
      "Three private networks, one distribution model. Pick a network below for the full deep-dive — membership, benefits, and how to get in.",
    suggestChannel: {
      heading: "Got a network of your own?",
      body: "If you run a community, membership program, or network that could become a new distribution channel for us, we'd love to hear about it.",
      ctaLabel: "Get in touch",
    },
  },
  eventsPage: {
    eyebrow: "Events",
    heading: "Track record across every network.",
    intro: "Every activation we run inside a network, documented here as it happens.",
    emptyNote: "More events are added as networks and brand partnerships go live.",
    mediaLabel: "Event photos & video — coming soon",
    showMediaLabel: "Show photos & video",
    hideMediaLabel: "Hide photos & video",
  },
  consultingPage: {
    eyebrow: "Consulting",
    heading: "We help organizations navigate digital transformation.",
    intro:
      "Beyond the networks we run ourselves, we consult on and deploy decentralized network infrastructure directly for organizations — needs assessment through to ongoing support.",
    note: "These are client-confidential engagements — shown here by service type, not by name.",
    services: [
      {
        title: "Needs assessment & consulting",
        body: "We start with a thorough needs assessment — location, existing network availability, target coverage, and intended use — before designing a tailored solution.",
      },
      {
        title: "Custom hardware bundle",
        body: "A complete package built around that assessment: hotspot hardware, antennas, network cabling, power supply, plus configuration and training.",
      },
      {
        title: "On-site installation",
        body: "Our team installs and configures everything on site, so the deployment works correctly from day one.",
      },
      {
        title: "Ongoing support",
        body: "Phone support, remote maintenance, and on-site service keep every deployment running long after installation.",
      },
    ],
    collaboration: {
      eyebrow: "How we work together",
      heading: "Maximum impact, minimal internal lift.",
      intro: "The best results come from combining what we bring with what you already know.",
      ours: {
        title: "What we bring",
        points: [
          "Hands-on expertise from real deployments across industries",
          "Structured methods for fast, reliable execution",
          "Practical problem-solving from startup and operator experience",
        ],
      },
      yours: {
        title: "What your organization brings",
        points: [
          "Deep knowledge of your own systems and structure",
          "Direct access to the stakeholders who matter",
          "Business context that makes the solution actually work",
        ],
      },
    },
    cta: {
      heading: "Have a digital transformation project in mind?",
      body: "Tell us what you're working on — we'll get back to you to talk through the right engagement.",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      interestLabel: "I'm interested in…",
      interestPlaceholder: "Please choose",
      interestOptions: [
        "Needs assessment & consulting",
        "Custom hardware bundle",
        "On-site installation",
        "Ongoing support",
        "Something else",
      ],
      submitLabel: "Get in touch",
    },
  },
  aboutPage: {
    eyebrow: "About",
    heading: "From consulting, to Helium mining, to a distribution model.",
    intro:
      "Advantage Networks didn't start as a distribution company. The model came from watching what happened inside one specific decentralized network.",
    timeline: [
      {
        year: "Consulting",
        title: "Where it started",
        body: "The team began in consulting — working close to operators and communities, not building products of its own.",
      },
      {
        year: "Helium mining",
        title: "Building a private network",
        body: "A move into Helium mining meant building and operating a private network for resale — first-hand experience running a closed, member-based community.",
      },
      {
        year: "The insight",
        title: "Private networks change the economics",
        body: "Running that network surfaced a pattern: closed, trusted communities can support pricing and deals that public markets can't — for both sides of the trade.",
      },
      {
        year: "Today",
        title: "Consumer electronics distribution",
        body: "That insight became Advantage Networks — applying the same private-network model to distributing consumer electronics through the Helium Network, Founders League, and Alumni Network.",
      },
    ],
    locations: {
      eyebrow: "Where we are",
      heading: "Based in Munich, with a presence across Germany.",
      cities: [
        { name: "Munich", lat: 48.14, lon: 11.58, isPrimary: true },
        { name: "Berlin", lat: 52.52, lon: 13.405 },
        { name: "Düsseldorf", lat: 51.2277, lon: 6.7735 },
      ],
    },
  },
  contactPage: {
    eyebrow: "Contact",
    heading: "Brand, community, or member — let's talk.",
    intro:
      "Whether you're exploring a distribution partnership, running a community that could become a channel, or you're already a network member with a question — reach out.",
    emailLabel: "Email",
    email: "info@advantage-net.com",
    channels: [
      { label: "Brands & manufacturers", body: "Distribution partnership inquiries." },
      { label: "Network operators", body: "Bring your community on as a new channel." },
      { label: "Community members", body: "Questions about access or an existing network." },
    ],
    formNote: "We reply directly to the email address you enter above.",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      audienceLabel: "I'm reaching out as",
      messageLabel: "Message",
      submitLabel: "Send email",
    },
  },
};
