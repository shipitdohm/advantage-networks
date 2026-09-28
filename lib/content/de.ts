import type { Dictionary } from "./types";

// HINWEIS: "Sony" / "Cherry" sind Platzhalter-Markennamen für die interne
// Entwicklung gemäß Briefing — vor Veröffentlichung mit echten Partnernamen
// bestätigen.

export const de: Dictionary = {
  meta: {
    title: "Advantage Networks",
    description:
      "Advantage Networks bietet exklusiven Zugang zu Consumer-Electronics-Produkten über private, einladungsbasierte Mitglieder-Netzwerke.",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Channels", href: "/channels" },
      { label: "Beratung", href: "/consulting" },
      { label: "Events", href: "/events" },
      { label: "Über uns", href: "/about" },
      { label: "Kontakt", href: "/contact" },
    ],
    langLabel: "EN",
    shop: "Entdecke deinen Advantage",
  },
  hero: {
    eyebrow: "Exklusiver Zugang über private Netzwerke",
    headline: "Your network, your advantage.",
    subheadline:
      "Wir verbinden definierte Communities mit exklusiven Konditionen auf Premium-Technologieprodukte. Exklusiv, smart, skalierbar.",
    ctaPrimary: "Entdecke deinen Advantage",
    ctaSecondary: "Zugang beantragen",
    stats: [
      { target: 100, suffix: "+", label: "Erfolgreiche Aktivierungen" },
      { target: 500, suffix: "+", label: "Eigene Netzwerk-Knoten" },
      { target: 3, suffix: "+", label: "Partner-Communities", startValue: 100 },
      { target: 1000, suffix: "+", label: "Produkte im Sortiment", formatThousands: true },
    ],
  },
  whatWeDo: {
    eyebrow: "Was wir machen",
    heading: "Wir verwandeln private Communities in echte Vorteile.",
    summary:
      "Advantage Networks arbeitet mit Elektronikmarken zusammen und verkauft exklusiv innerhalb geschlossener, Login-geschützter Mitglieder-Netzwerke.",
    points: [
      {
        title: "Exklusive Konditionen",
        body: "Nicht öffentlich, nicht vergleichbar. Attraktive Preise nur für verifizierte Mitglieder.",
      },
      {
        title: "Community-fokussiert",
        body: "Jede Community bekommt ihren eigenen Zugang, ihre eigenen Vorteile und ihre eigene Story.",
      },
      {
        title: "Token-native Zahlung",
        body: "Für Helium-Nutzer: HNT-Token direkt gegen Hardware einlösbar. Der erste Shop, der earned crypto in echten Einkaufswert verwandelt.",
      },
      {
        title: "Skalierbar & erweiterbar",
        body: "Das Modell ist nicht auf eine Community beschränkt. Jede Organisation mit einer definierten Basis kann Partner werden und ihren eigenen Advantage erhalten.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "So funktioniert's",
    heading: "In vier Schritten zu deinem Vorteil.",
    intro: "Von der Community-Mitgliedschaft bis zur ersten exklusiven Bestellung.",
    steps: [
      {
        title: "Netzwerk-Mitglied sein",
        body: "Jede unserer Partner-Communities öffnet dir die Tür zum Shop.",
      },
      {
        title: "Zugang beantragen",
        body: "Nach kurzer Verifizierung deiner Mitgliedschaft erhältst du sofort Zugang zum passwortgeschützten Shop.",
      },
      {
        title: "Exklusiv einkaufen",
        body: "Hunderte Produkte führender Marken zu attraktiven Mitgliederkonditionen.",
      },
      {
        title: "Netzwerk stärken",
        body: "Jeder Kauf stärkt das Ökosystem.",
      },
    ],
  },
  partners: {
    eyebrow: "Partner & Marken",
    heading: "Führende Marken. Exklusive Konditionen.",
    intro: "Direkte Partnerschaften mit Herstellern ermöglichen attraktive Konditionen für unsere Mitglieder.",
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
    eyebrow: "Die Netzwerke",
    heading: "Drei Netzwerke. Ein Zugang.",
    intro:
      "Jedes Netzwerk ist eine eigene geschlossene Community mit eigenem Login-geschütztem Shop.",
    activeLabel: "Aktiv",
    launchingLabel: "Startet bald",
    websiteLabel: "Website besuchen",
    items: [
      {
        slug: "helium-network",
        name: "Helium Network",
        tagline: "Der Ursprung",
        description:
          "Das ursprüngliche Netzwerk: die größte dezentrale Community, die wir bedienen, und die, die unser Modell des privaten Zugangs bewiesen hat.",
        status: "Gründungsnetzwerk",
        href: "/channels#helium-network",
        detail: {
          subheadline:
            "Das schnellstwachsende dezentrale IoT-Netzwerk der Welt. Hier haben Hotspot-Betreiber zum ersten Mal verdiente HNT in echten Hardware-Wert verwandelt, und hier ist unser Modell des privaten Zugangs entstanden. Bis heute ist es unsere größte und ursprüngliche Community.",
          bodyParagraphs: [
            "Helium ist ein dezentrales IoT-Netzwerk, das von der Community betrieben wird. Hotspot-Betreiber verdienen HNT-Token für die Bereitstellung der Netzwerk-Infrastruktur.",
            "Mit Advantage Networks können Helium-Betreiber ihre verdiente HNT direkt gegen Premium-IT-Hardware einlösen.",
            "Advantage Networks ist innerhalb dieser Community entstanden. Dieser Ursprung prägt bis heute, wie eng wir mit dem Netzwerk zusammenarbeiten.",
          ],
          ctaLabel: "Shop-Zugang beantragen",
          ctaHref: "/shop",
          statsPanelTitle: "Helium-Netzwerk Übersicht",
          stats: [
            { label: "Eigene Hotspots (DE)", value: "250+" },
            { label: "Abgedeckte Bundesländer", value: "14 / 16" },
            { label: "Ø Uptime", value: "97,4%" },
            { label: "Blockchain", value: "Solana" },
            { label: "Token", value: "HNT" },
            { label: "Status", value: "Shop live" },
          ],
          embed: {
            title: "Live Helium Network Map",
            note: "Live-Hotspot-Abdeckung auf Helium World erkunden.",
            url: "https://world.helium.com/en/network/mobile",
          },
          websiteUrl: "https://www.helium.com",
        },
      },
      {
        slug: "founders-league",
        name: "Founders League",
        tagline: "Founder & Operator",
        description:
          "Ein kuratiertes Netzwerk aus Foundern und Operatoren. Heimat von Aktionen wie dem Founder Padel Treff, unterstützt mit Garmin.",
        status: "Aktiv",
        href: "/channels#founders-league",
        detail: {
          subheadline:
            "Gründen ist hart genug. Mit Advantage Networks bekommen Founders League Members Konditionen, die nur mit Volumen erreichbar sind. Wir arbeiten direkt mit der League zusammen, um Hardware-Konditionen für Members in die Benefits einzubauen, auf die Founder ohnehin schon zählen.",
          bodyParagraphs: [
            "Startups brauchen von Tag 1 das beste Equipment: Laptops, Monitore, Server, Netzwerk. Aber ohne Volumen kommen sie nicht an Unternehmenskonditionen.",
            "Mit Advantage Networks nutzen alle Founders League Members die gebündelte Kaufkraft der gesamten Community.",
            "Es ist eine enge, laufende Partnerschaft: Je mehr die League wächst, desto größer wird die gebündelte Kaufkraft der Community.",
          ],
          ctaLabel: "Partnerschaft anfragen",
          ctaHref: "/contact",
          statsPanelTitle: "Partnership Status",
          stats: [
            { label: "Status", value: "Aktiv" },
            { label: "Zielgruppe", value: "Gründer & Teams" },
            { label: "Vorteil", value: "Gebündelte Kaufkraft" },
            { label: "Zahlungsarten", value: "Rechnung, Karte, USt-ID" },
            { label: "Modell", value: "Team-Einkauf" },
          ],
          websiteUrl: "https://foundersleague.de",
        },
      },
      {
        slug: "alumni-network",
        name: "Alumni Network",
        tagline: "Neuester Channel",
        description:
          "Unser neuestes Netzwerk. Es erweitert Mitgliederkonditionen auf Alumni-Communities und deren Absolventen. Onboarding läuft.",
        status: "Im Aufbau",
        href: "/channels#alumni-network",
        isLaunching: true,
        detail: {
          subheadline:
            "Alumni-Mitgliedschaft mit echtem Mehrwert: Exklusive IT-Konditionen als dauerhafter Benefit für Privatpersonen und Unternehmen. Wir arbeiten direkt mit Alumni-Organisationen zusammen, um aus der Mitgliedschaft einen Benefit zu machen, den Menschen wirklich nutzen.",
          bodyParagraphs: [
            "Die meisten Alumni-Programme bieten Events und Newsletter. Das ist wichtig, reicht aber nicht. Advantage Networks gibt Alumni-Organisationen die Möglichkeit, ihren Mitgliedern einen Benefit zu bieten, der täglich relevant ist.",
            "Exklusive Hardware-Konditionen für Privatpersonen und Unternehmen.",
            "Das ist eine frühe, enge Partnerschaft.",
          ],
          ctaLabel: "Partnerschaft anfragen",
          ctaHref: "/contact",
          statsPanelTitle: "Alumni Benefit Modell",
          stats: [
            { label: "Modell", value: "White-Label / Co-Brand" },
            { label: "Zielgruppe", value: "Alumni & Absolventen" },
            { label: "Benefit-Typ", value: "Dauerhaft" },
            { label: "Nutzbar für", value: "Privat & Beruflich" },
            { label: "Status", value: "In Gesprächen" },
          ],
        },
      },
    ],
    cta: "Alle Channels ansehen",
  },
  trackRecord: {
    eyebrow: "Track Record",
    heading: "Was in den Netzwerken bereits passiert ist.",
    intro: "Diese Liste wächst mit jedem neuen Netzwerk und jeder Markenpartnerschaft.",
    caseStudies: [
      {
        partner: "Garmin",
        network: "Founders League",
        title: "Founder Padel Treff",
        description:
          "Ein Community-Padel-Event für das Founders-League-Netzwerk, auf den Rooftop-Courts von TIO TIO in Berlin-Friedrichshain, unterstützt mit Garmin-Uhren.",
        tags: ["Founders League", "Community-Aktion", "Marken-Sponsoring"],
        location: "TIO TIO · Berlin-Friedrichshain",
        stats: [
          { label: "Teilnehmer" },
          { label: "Courts" },
          { label: "Stunden Programm" },
          { label: "Preise vergeben" },
        ],
        logos: [
          { name: "Founders League", src: "/brand/channels/founders-league.svg" },
          { name: "TIO TIO", src: "/brand/projects/TIO_TIO_Logo_White.png" },
        ],
      },
    ],
    moreLabel: "Alle Aktivierungen ansehen",
  },
  whyNow: {
    eyebrow: "Warum jetzt",
    heading: "Öffentlicher Preisvergleich hat Handelsmargen zerstört. Private Netzwerke korrigieren den Anreiz.",
    body: "Wenn jeder Preis öffentlich ist, konkurrieren Marken über Rabatt statt über Beziehung. Private, kuratierte Netzwerke lassen Marken Preise schützen und trotzdem echtes Volumen bewegen.",
    points: [
      {
        title: "Handelsmargen stehen unter Dauerdruck",
        body: "Vergleichsportale zwingen Marken in ein Rennen nach unten, sobald ein Preis öffentlich wird.",
      },
      {
        title: "Communities sind längst der Zugangsweg",
        body: "Menschen kaufen bereits über Netzwerke, denen sie vertrauen.",
      },
      {
        title: "Dezentraler Ursprung, kommerzielle Anwendung",
        body: "Das Modell begann in der dezentralen Community-Struktur des Helium Network. Heute wird es auf Consumer Electronics angewendet.",
      },
    ],
  },
  finalCta: {
    heading: "Bereit für deinen Vorteil?",
    body: "Der Advantage Shop ist nicht öffentlich zugänglich. Beantrage deinen Zugang als Mitglied einer unserer Partner-Communities.",
    perks: ["Kein Jahresbeitrag", "Sofort nach Verifikation", "Mehrere Zahlungsmöglichkeiten"],
    form: {
      emailLabel: "E-Mail",
      emailPlaceholder: "du@email.com",
      memberLabel: "Ich bin Mitglied als…",
      memberPlaceholder: "Bitte wählen",
      memberOptions: [
        "Helium Hotspot-Betreiber",
        "Founders League Member",
        "Alumni Netzwerk",
        "Unternehmenskunde",
      ],
      submitLabel: "Jetzt Zugang beantragen",
      loginPrompt: "Bereits Mitglied?",
      loginLabel: "Login",
    },
  },
  footer: {
    tagline: "Consumer Electronics, exklusiver Zugang über die Netzwerke, denen du vertraust.",
    columns: [
      {
        title: "Unternehmen",
        links: [
          { label: "Über uns", href: "/about" },
          { label: "Beratung", href: "/consulting" },
          { label: "Events", href: "/events" },
          { label: "Kontakt", href: "/contact" },
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
    legal: "Advantage Networks. Alle Rechte vorbehalten.",
    legalLinks: [
      { label: "Impressum", href: "/imprint" },
      { label: "Datenschutz", href: "/privacy" },
    ],
  },
  shopPage: {
    eyebrow: "Demnächst",
    heading: "Der Shop wird gerade gebaut.",
    body: "Der Login-geschützte Shop von Advantage Networks befindet sich in Entwicklung. Mitglieder eines privaten Netzwerks melden sich hier für exklusive Preise an.",
    backLabel: "Zurück zur Startseite",
  },
  notFoundPage: {
    eyebrow: "404",
    heading: "Diese Seite gibt es nicht.",
    body: "Der Link ist entweder veraltet oder falsch geschrieben. Von der Startseite aus findest du alles.",
    backLabel: "Zurück zur Startseite",
  },
  channelsPage: {
    eyebrow: "Channels",
    heading: "Jedes Netzwerk im Detail",
    intro:
      "Drei private Netzwerke, ein Zugang. Wähl unten ein Netzwerk für den vollständigen Deep-Dive. Und beantrage direkt deinen Shop-Zugang.",
    suggestChannel: {
      heading: "Hast du selbst ein Netzwerk?",
      body: "Wenn du eine Community, ein Mitgliederprogramm oder ein Netzwerk betreibst, das ein neuer Channel für uns werden könnte, freuen wir uns auf deine Nachricht.",
      ctaLabel: "Kontakt aufnehmen",
    },
  },
  eventsPage: {
    heading: "Aktivierungen in unseren Netzwerken",
    intro: "Jede Aktion, die wir innerhalb eines Netzwerks durchführen, wird hier dokumentiert.",
    emptyNote: "Weitere Events kommen hinzu, sobald neue Netzwerke und Markenpartnerschaften live gehen.",
    labels: {
      network: "Netzwerk",
      partner: "Hauptpartner",
      location: "Location",
      date: "Datum",
      pending: "Folgt",
    },
    galleryTitle: "Impressionen",
    cta: {
      heading: "Aktivierung für dein Netzwerk oder deine Marke?",
      body: "Wir entwickeln Events wie dieses gemeinsam mit Communities und Marken.",
      button: "Gespräch anfragen",
    },
    sound: { on: "Ton an", off: "Ton aus" },
  },
  consultingPage: {
    eyebrow: "Beratung",
    heading: "Wir navigieren Organisationen durch die Herausforderungen der digitalen Transformation.",
    intro:
      "Neben den Netzwerken, die wir selbst betreiben, beraten wir Organisationen auch direkt beim Aufbau dezentraler Netzwerk-Infrastruktur.",
    note: "Das sind vertrauliche Kundenprojekte, hier nach Leistungsart gezeigt, nicht namentlich.",
    services: [
      {
        title: "Bedarfsanalyse & Beratung",
        body: "Wir starten mit einer gründlichen Bedarfsanalyse zu Standort, vorhandener Netzwerkverfügbarkeit, gewünschter Abdeckung und geplanter Anwendung, bevor wir eine maßgeschneiderte Lösung entwickeln.",
      },
      {
        title: "Individuelles Hardware-Bundle",
        body: "Ein komplettes Paket auf Basis dieser Analyse: Hotspot-Hardware, Antennen, Netzwerkkabel, Netzteil, plus Konfiguration und Schulung.",
      },
      {
        title: "Installation vor Ort",
        body: "Unser Team installiert und konfiguriert alles vor Ort, damit der Aufbau von Tag eins an einwandfrei funktioniert.",
      },
      {
        title: "Laufender Support",
        body: "Telefonischer Support, Fernwartung und Vor-Ort-Service halten jede Installation auch langfristig am Laufen.",
      },
    ],
    collaboration: {
      eyebrow: "So arbeiten wir zusammen",
      heading: "Maximale Wirkung, minimaler interner Aufwand.",
      intro: "Die besten Ergebnisse entstehen, wenn wir das, was wir mitbringen, mit dem verbinden, was Sie bereits wissen.",
      ours: {
        title: "Das bringen wir mit",
        points: [
          "Praxiserfahrung aus echten Projekten über verschiedene Branchen hinweg",
          "Strukturierte Methoden für schnelle, verlässliche Umsetzung",
          "Pragmatisches Problemlösen aus Startup- und Operator-Erfahrung",
        ],
      },
      yours: {
        title: "Das bringt Ihre Organisation mit",
        points: [
          "Tiefes Wissen über die eigenen Systeme und Strukturen",
          "Direkter Zugang zu den relevanten Entscheidern",
          "Business-Kontext, der die Lösung erst funktionieren lässt",
        ],
      },
    },
    caseStudies: {
      eyebrow: "Referenzen",
      heading: "Ausgewählte Projekte.",
      placeholders: ["Logistik", "Gastronomie", "Coworking"],
    },
    cta: {
      heading: "Hast du ein Digitalisierungsprojekt im Kopf?",
      body: "Erzähl uns, woran du arbeitest.",
      emailLabel: "E-Mail",
      emailPlaceholder: "du@unternehmen.de",
      interestLabel: "Ich interessiere mich für…",
      interestPlaceholder: "Bitte wählen",
      interestOptions: [
        "Bedarfsanalyse & Beratung",
        "Individuelles Hardware-Bundle",
        "Installation vor Ort",
        "Laufender Support",
        "Etwas anderes",
      ],
      submitLabel: "Kontakt aufnehmen",
    },
  },
  aboutPage: {
    eyebrow: "Über uns",
    heading: "Vom Consulting über Helium-Mining zu privaten Netzwerken.",
    intro:
      "Advantage Networks ist nicht so gestartet, wie es heute aussieht. Das Modell entstand aus der Beobachtung eines einzelnen dezentralen Netzwerks.",
    timeline: [
      {
        year: "Consulting",
        title: "Der Anfang",
        body: "Das Team begann im Consulting.",
      },
      {
        year: "Helium-Mining",
        title: "Aufbau eines privaten Netzwerks",
        body: "Der Einstieg ins Helium-Mining bedeutete den Aufbau und Betrieb eines privaten Netzwerks zum Wiederverkauf.",
      },
      {
        year: "Die Erkenntnis",
        title: "Private Netzwerke verändern die Ökonomie",
        body: "Der Betrieb dieses Netzwerks zeigte ein Muster: geschlossene, vertrauensvolle Communities ermöglichen Preise und Konditionen, von denen beide Seiten profitieren.",
      },
      {
        year: "Heute",
        title: "Zugang zu Consumer Electronics",
        body: "Aus dieser Erkenntnis wurde Advantage Networks: dasselbe Modell privater Netzwerke, jetzt angewendet auf den Zugang zu Consumer Electronics über Helium Network, Founders League und Alumni Network.",
      },
    ],
    team: {
      eyebrow: "Das Team",
      heading: "Die Menschen hinter Advantage Networks.",
      members: [
        { name: "Konrad Rettig", role: "CEO & Founder", photo: "/team/konrad-rettig.svg", linkedin: "https://www.linkedin.com/in/konrad-rettig-540720227/" },
      ],
    },
    locations: {
      eyebrow: "Wo wir sind",
      heading: "Zuhause in München.",
      cities: [
        { name: "München", lat: 48.14, lon: 11.58, isPrimary: true },
        { name: "Berlin", lat: 52.52, lon: 13.405 },
        { name: "Düsseldorf", lat: 51.2277, lon: 6.7735 },
      ],
    },
  },
  contactPage: {
    eyebrow: "Kontakt",
    heading: "Marke, Community oder Mitglied: sprich mit uns.",
    intro:
      "Egal ob du eine Partnerschaft prüfst, eine Community betreibst, die zum Channel werden könnte, oder bereits Mitglied eines Netzwerks bist, melde dich.",
    emailLabel: "E-Mail",
    email: "info@advantage-net.com",
    channels: [
      { label: "Marken & Hersteller", body: "Anfragen zu Partnerschaften." },
      { label: "Netzwerk-Betreiber", body: "Bring deine Community als neuen Channel ein." },
      { label: "Community-Mitglieder", body: "Fragen zu Zugang oder einem bestehenden Netzwerk." },
    ],
    formNote: "Wir antworten direkt an die oben eingegebene E-Mail-Adresse.",
    form: {
      nameLabel: "Name",
      emailLabel: "E-Mail",
      audienceLabel: "Ich melde mich als",
      messageLabel: "Nachricht",
      submitLabel: "E-Mail senden",
    },
  },
};
