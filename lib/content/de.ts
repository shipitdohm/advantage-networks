import type { Dictionary } from "./types";

// HINWEIS: "Sony" / "Cherry" sind Platzhalter-Markennamen für die interne
// Entwicklung gemäß Briefing — vor Veröffentlichung mit echten Partnernamen
// bestätigen.

export const de: Dictionary = {
  meta: {
    title: "Advantage Networks — Vertrieb über private Netzwerke für Consumer Electronics",
    description:
      "Advantage Networks vertreibt Consumer-Electronics-Produkte exklusiv über private, Einladungs-basierte Mitglieder-Netzwerke — starke Konditionen für Mitglieder, exklusiver, vertrauensvoller Vertrieb für Marken.",
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
    shop: "Shop betreten",
  },
  hero: {
    eyebrow: "Vertrieb über private Netzwerke",
    headline: "Your network, your advantage.",
    subheadline:
      "Wir verbinden definierte Communities mit exklusiven Konditionen auf Premium-Technologieprodukte. Exklusiv, smart, skalierbar.",
    ctaPrimary: "Zum Shop",
    ctaSecondary: "Zugang beantragen",
    stats: [
      { target: 3, suffix: "+", label: "Partner-Communities" },
      { target: 1, suffix: "K+", label: "Produkte im Sortiment" },
      { target: 500, suffix: "+", label: "Aktive Netzwerk-Knoten" },
      { target: 100, suffix: "+", label: "Erfolgreiche Aktivierungen" },
    ],
  },
  whatWeDo: {
    eyebrow: "Was wir machen",
    heading: "Wir machen aus privaten Communities einen Vertriebskanal.",
    summary:
      "Advantage Networks arbeitet mit Elektronikmarken zusammen und verkauft exklusiv innerhalb geschlossener, Login-geschützter Mitglieder-Netzwerke — Preise gelangen so nie in öffentliche Vergleichsportale.",
    points: [
      {
        title: "Exklusive Konditionen",
        body: "Nicht öffentlich, nicht vergleichbar. Preise nur für verifizierte Mitglieder – bis zu 25% unter Marktpreis dank direkter Partnerschaften mit Herstellern.",
      },
      {
        title: "Community-fokussiert",
        body: "Jede Community bekommt ihren eigenen Zugang, ihre eigenen Vorteile und ihre eigene Story. Helium, Founders League, Alumni – maßgeschneidert.",
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
    intro: "Von der Community-Mitgliedschaft bis zur ersten exklusiven Bestellung — das ist der Weg.",
    steps: [
      {
        title: "Netzwerk-Mitglied sein",
        body: "Helium-Hotspot betreiben, Mitglied der Founders League oder Teil des Alumni-Netzwerks sein — jede unserer Partner-Communities öffnet die Tür zum Shop.",
      },
      {
        title: "Zugang beantragen",
        body: "Nach kurzer Verifizierung deiner Mitgliedschaft erhältst du sofort Zugang zum passwortgeschützten Shop.",
      },
      {
        title: "Exklusiv einkaufen",
        body: "Hunderte Produkte führender Marken zu Konditionen, die du öffentlich nicht findest.",
      },
      {
        title: "Netzwerk stärken",
        body: "Jeder Kauf stärkt das Ökosystem — bessere Hardware, stärkere Setups, eine wachsende Community.",
      },
    ],
  },
  partners: {
    eyebrow: "Partner & Marken",
    heading: "Führende Marken. Exklusive Konditionen.",
    intro: "Direkte Partnerschaften mit Herstellern ermöglichen Preise, die im freien Handel nicht verfügbar sind.",
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
    heading: "Drei Netzwerke. Ein Vertriebsmodell.",
    intro:
      "Jedes Netzwerk ist eine eigene geschlossene Community mit eigenem Login-geschütztem Shop — gleiche verhandelte Konditionen, unterschiedliche Mitgliedschaft.",
    activeLabel: "Aktiv",
    launchingLabel: "Startet bald",
    websiteLabel: "Website besuchen",
    expandLabel: "Details anzeigen",
    collapseLabel: "Details ausblenden",
    items: [
      {
        slug: "helium-network",
        name: "Helium Network",
        tagline: "Der Ursprung",
        description:
          "Das ursprüngliche Netzwerk — die größte dezentrale Community, die wir bedienen, und die, die das Modell des privaten Vertriebs bewiesen hat.",
        status: "Gründungsnetzwerk",
        href: "/channels#helium-network",
        accentColor: "#5E25FD",
        cardAbbr: "HNT",
        detail: {
          subheadline:
            "Das schnellstwachsende dezentrale IoT-Netzwerk der Welt – und der Ausgangspunkt von Advantage Networks. Hier haben Hotspot-Betreiber zum ersten Mal verdiente HNT in echten Hardware-Wert verwandelt, und hier ist unser Modell des privaten Vertriebs entstanden. Bis heute ist es unsere größte und ursprüngliche Community.",
          bodyParagraphs: [
            "Helium ist ein dezentrales IoT-Netzwerk, das von der Community betrieben wird. Hotspot-Betreiber verdienen HNT-Token für die Bereitstellung der Netzwerk-Infrastruktur.",
            "Mit Advantage Networks können Helium-Betreiber ihre verdiente HNT direkt gegen Premium-IT-Hardware einlösen – zu Konditionen, die den Markt schlagen.",
            "Advantage Networks ist innerhalb dieser Community entstanden — gebaut von und für Helium-Betreiber, bevor wir auf Founders League und Alumni erweitert haben. Dieser Ursprung prägt bis heute, wie eng wir mit dem Netzwerk zusammenarbeiten.",
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
            note: "Live-Hotspot-Abdeckung auf Helium World erkunden — öffnet sich in einem neuen Tab.",
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
        accentColor: "#FF7D23",
        cardAbbr: "FL",
        detail: {
          subheadline:
            "Gründen ist hart genug. Mit Advantage Networks bekommen Founders League Members Konditionen, die nur mit Volumen erreichbar sind. Wir arbeiten direkt mit der League zusammen, um Hardware-Konditionen für Members in die Benefits einzubauen, auf die Founder ohnehin schon zählen.",
          bodyParagraphs: [
            "Startups brauchen von Tag 1 das beste Equipment: Laptops, Monitore, Server, Netzwerk. Aber ohne Volumen kommen sie nicht an Unternehmenskonditionen.",
            "Mit Advantage Networks nutzen alle Founders League Members die gebündelte Kaufkraft der gesamten Community – und erhalten 15–25% Rabatt automatisch.",
            "Es ist eine enge, laufende Partnerschaft: Je mehr die League wächst, desto größer wird die gebündelte Kaufkraft der Community – und die Konditionen werden für alle besser.",
          ],
          ctaLabel: "Partnerschaft anfragen",
          ctaHref: "/contact",
          statsPanelTitle: "Partnership Status",
          stats: [
            { label: "Status", value: "In Gesprächen" },
            { label: "Zielgruppe", value: "Gründer & Teams" },
            { label: "Ersparnis", value: "15–25%" },
            { label: "Zahlungsarten", value: "Rechnung, Karte, USt-ID" },
            { label: "Modell", value: "B2B Procurement" },
          ],
          websiteUrl: "https://foundersleague.de",
        },
      },
      {
        slug: "alumni-network",
        name: "Alumni Network",
        tagline: "Neuester Channel",
        description:
          "Unser neuestes Netzwerk — erweitert Mitgliederkonditionen auf Alumni-Communities und deren Absolventen. Onboarding läuft.",
        status: "Im Aufbau",
        href: "/channels#alumni-network",
        accentColor: "#f5a623",
        cardAbbr: "ALU",
        isLaunching: true,
        detail: {
          subheadline:
            "Alumni-Mitgliedschaft mit echtem Mehrwert: Exklusive IT-Konditionen als dauerhafter Benefit für Privatpersonen und Unternehmen. Wir arbeiten direkt mit Alumni-Organisationen zusammen, um aus der Mitgliedschaft einen Benefit zu machen, den Menschen wirklich nutzen.",
          bodyParagraphs: [
            "Die meisten Alumni-Programme bieten Events und Newsletter. Das ist wichtig, reicht aber nicht. Advantage Networks gibt Alumni-Organisationen die Möglichkeit, ihren Mitgliedern einen Benefit zu bieten, der täglich relevant ist.",
            "Exklusive Hardware-Konditionen für Privatpersonen und Unternehmen – dauerhaft, solange sie im Alumni-Netzwerk sind.",
            "Das ist eine frühe, enge Partnerschaft — wir bauen das Modell gemeinsam mit Alumni-Organisationen auf, während das Netzwerk wächst.",
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
    intro: "Ein erster Eintrag — diese Liste wächst mit jedem neuen Netzwerk und jeder Markenpartnerschaft.",
    caseStudies: [
      {
        partner: "Garmin",
        network: "Founders League",
        title: "Founder Padel Treff",
        description:
          "Ein Community-Padel-Event für das Founders-League-Netzwerk, auf den Rooftop-Courts von TIO TIO in Berlin-Friedrichshain, unterstützt mit Garmin-Uhren — Markenaktivierung und Mitglieder-Zugang in einem Event, ganz ohne öffentliches Listing.",
        tags: ["Founders League", "Community-Aktion", "Marken-Sponsoring"],
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
    body: "Wenn jeder Preis öffentlich ist, konkurrieren Marken über Rabatt statt über Beziehung. Private, kuratierte Netzwerke lassen Marken Preise schützen und trotzdem echtes Volumen bewegen — und Mitglieder erhalten Konditionen, die öffentlich nie überleben würden.",
    points: [
      {
        title: "Handelsmargen stehen unter Dauerdruck",
        body: "Vergleichsportale zwingen Marken in ein Rennen nach unten, sobald ein Preis öffentlich wird.",
      },
      {
        title: "Communities sind bereits die Vertriebsebene",
        body: "Menschen kaufen bereits über Netzwerke, denen sie vertrauen — wir formalisieren das als Kanal.",
      },
      {
        title: "Dezentraler Ursprung, kommerzielle Anwendung",
        body: "Das Modell begann in der dezentralen Community-Struktur des Helium Network — heute angewendet auf Consumer Electronics.",
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
    tagline: "Consumer Electronics — vertrieben über die Netzwerke, denen du vertraust.",
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
    body: "Der Login-geschützte Shop von Advantage Networks befindet sich in Entwicklung. Mitglieder eines privaten Netzwerks melden sich hier für exklusive Preise an — aktuell ist dies ein Platzhalter.",
    backLabel: "Zurück zur Startseite",
  },
  channelsPage: {
    eyebrow: "Channels",
    heading: "Jedes Netzwerk im Detail.",
    intro:
      "Drei private Netzwerke, ein Vertriebsmodell. Wähl unten ein Netzwerk für den vollständigen Deep-Dive — Mitgliedschaft, Vorteile und wie man reinkommt.",
    suggestChannel: {
      heading: "Hast du selbst ein Netzwerk?",
      body: "Wenn du eine Community, ein Mitgliederprogramm oder ein Netzwerk betreibst, das ein neuer Vertriebskanal für uns werden könnte, freuen wir uns auf deine Nachricht.",
      ctaLabel: "Kontakt aufnehmen",
    },
  },
  eventsPage: {
    eyebrow: "Events",
    heading: "Track Record über alle Netzwerke.",
    intro: "Jede Aktion, die wir innerhalb eines Netzwerks durchführen, wird hier dokumentiert.",
    emptyNote: "Weitere Events kommen hinzu, sobald neue Netzwerke und Markenpartnerschaften live gehen.",
    mediaLabel: "Event-Fotos & Video — folgen in Kürze",
    showMediaLabel: "Fotos & Video anzeigen",
    hideMediaLabel: "Fotos & Video ausblenden",
  },
  consultingPage: {
    eyebrow: "Beratung",
    heading: "Wir navigieren Organisationen durch die Herausforderungen der digitalen Transformation.",
    intro:
      "Neben den Netzwerken, die wir selbst betreiben, beraten wir Organisationen auch direkt beim Aufbau dezentraler Netzwerk-Infrastruktur — von der Bedarfsanalyse bis zum laufenden Support.",
    note: "Das sind vertrauliche Kundenprojekte — hier nach Leistungsart gezeigt, nicht namentlich.",
    services: [
      {
        title: "Bedarfsanalyse & Beratung",
        body: "Wir starten mit einer gründlichen Bedarfsanalyse — Standort, vorhandene Netzwerkverfügbarkeit, gewünschte Abdeckung und geplante Anwendung — bevor wir eine maßgeschneiderte Lösung entwickeln.",
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
    cta: {
      heading: "Hast du ein Digitalisierungsprojekt im Kopf?",
      body: "Erzähl uns, woran du arbeitest — wir melden uns bei dir, um das passende Vorgehen zu besprechen.",
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
    heading: "Vom Consulting über Helium-Mining zum Vertriebsmodell.",
    intro:
      "Advantage Networks ist nicht als Vertriebsunternehmen gestartet. Das Modell entstand aus der Beobachtung eines einzelnen dezentralen Netzwerks.",
    timeline: [
      {
        year: "Consulting",
        title: "Der Anfang",
        body: "Das Team begann im Consulting — nah an Operatoren und Communities, ohne eigene Produkte zu bauen.",
      },
      {
        year: "Helium-Mining",
        title: "Aufbau eines privaten Netzwerks",
        body: "Der Einstieg ins Helium-Mining bedeutete den Aufbau und Betrieb eines privaten Netzwerks zum Wiederverkauf — erste Erfahrung mit einer geschlossenen, mitgliederbasierten Community.",
      },
      {
        year: "Die Erkenntnis",
        title: "Private Netzwerke verändern die Ökonomie",
        body: "Der Betrieb dieses Netzwerks zeigte ein Muster: geschlossene, vertrauensvolle Communities tragen Preise und Konditionen, die der öffentliche Markt nicht trägt — für beide Seiten des Handels.",
      },
      {
        year: "Heute",
        title: "Vertrieb von Consumer Electronics",
        body: "Aus dieser Erkenntnis wurde Advantage Networks — dasselbe Modell privater Netzwerke, angewendet auf den Vertrieb von Consumer Electronics über Helium Network, Founders League und Alumni Network.",
      },
    ],
    locations: {
      eyebrow: "Wo wir sind",
      heading: "Zuhause in München — mit Präsenz in Berlin und Düsseldorf.",
      cities: [
        { name: "München", lat: 48.14, lon: 11.58, isPrimary: true },
        { name: "Berlin", lat: 52.52, lon: 13.405 },
        { name: "Düsseldorf", lat: 51.2277, lon: 6.7735 },
      ],
    },
  },
  contactPage: {
    eyebrow: "Kontakt",
    heading: "Marke, Community oder Mitglied — sprich mit uns.",
    intro:
      "Egal ob du eine Vertriebspartnerschaft prüfst, eine Community betreibst, die zum Channel werden könnte, oder bereits Mitglied eines Netzwerks bist — melde dich.",
    emailLabel: "E-Mail",
    email: "info@advantage-net.com",
    channels: [
      { label: "Marken & Hersteller", body: "Anfragen zu Vertriebspartnerschaften." },
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
