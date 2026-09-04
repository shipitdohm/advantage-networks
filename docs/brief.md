# Advantage Networks — Website Briefing

Stand: 2026-08-31. Dieses Dokument ist die gemeinsam erarbeitete Grundlage für den späteren
Bau-Prompt. Es wird laufend aktualisiert, bis wir bereit sind, die erste Version bauen zu lassen.

## Unternehmen

**Advantage Networks** kommt ursprünglich aus dem Consulting. Über den Einstieg ins Helium-Mining
(Helium Miner/Gruta, Aufbau eines privaten Netzwerks zum Wiederverkauf) hat das Team erkannt, wie
wertvoll private, kuratierte Netzwerke/Communities sind — daraus ist das heutige Geschäftsmodell
entstanden.

**Heute:** Advantage Networks vertreibt Consumer-Electronics-Produkte (Bildschirme, Mäuse,
Router-Zubehör etc.) exklusiv über private Channels/Netzwerke an deren Mitglieder.

## Geschäftsmodell

Zwei-/dreiseitiger Markt:

- **Hersteller/Marken** (z.B. Sony, Cherry) geben Produkte exklusiv in einen privaten Channel.
  Vorteile für sie:
  1. Kein öffentlicher Preisvergleich (privater, Login-geschützter Webshop) → bessere
     Konditionen verhandelbar.
  2. Marketing-Nutzen durch Community-Effekte (organisches Teilen/Empfehlen innerhalb der
     Community, gemeinsame Aktionen/Events).
  3. Marken können eigene Marketingbudgets einbringen, wodurch Produkte für die Community noch
     günstiger werden.
- **Community-Mitglieder/Konsumenten** kaufen im privaten Webshop des jeweiligen Channels zu
  starken Konditionen.
- **Channel-/Netzwerk-Betreiber** (dritte Zielgruppe): andere Communities/Netzwerke, die als
  neuer Vertriebschannel mit Advantage Networks zusammenarbeiten könnten.

Advantage Networks verdient an der Marge zwischen Einkauf (verhandelt dank Exklusivität) und
Verkauf an die Community.

### Bestehende/vergangene Channels

1. **Helium Network** — der erste und ursprüngliche Channel; größtes dezentrales Netzwerk,
   Ursprung des Geschäftsmodells.
2. **Founders League** — z.B. Projekt "Founder Paddle Treff" unterstützt mit Garmin-Uhren.
3. **Alumni Network** — Details folgen.

## Zielgruppen

1. Hersteller/Marken mit Consumer-Electronics-Produkten
2. Konsumenten/Mitglieder der jeweiligen privaten Netzwerke
3. Betreiber anderer Netzwerke/Communities (potenzielle neue Channel-Partner)

## Ziel der Website (Phase 1 — ohne Shop)

- Schnelle, überzeugende Erklärung des Business Case — v.a. für Leute, die man z.B. auf Messen
  trifft.
- Klarer Funnel: Was machen wir? Was ist der Nutzen (für beide/alle Seiten)? Was haben wir schon
  gemacht (Track Record)?
- Der gesamte Funnel/CTA führt konzeptionell zum **Shop** — dieser existiert in Phase 1 noch
  nicht. CTA-Buttons ("Enter the Shop" / Nav-Button "Shop") sind Platzhalter (Coming-Soon /
  toter Link), werden aber optisch bereits fest eingebaut.
- Shop-System selbst kommt erst in einer späteren Phase.

## Sprache

- Primär **Englisch** (Standard), mit Umschaltmöglichkeit auf **Deutsch**.

## Seitenstruktur (Hybrid-Ansatz)

**Home** (One-Pager-Funnel, der Haupteindruck z.B. bei Messekontakten):

1. Hero — großer, starker Claim + Sub-Claim, primärer CTA "Enter the Shop" (Platzhalter)
2. Was wir machen — kurz verdichtet (1–2 Sätze + Kernpunkte)
3. Wie es funktioniert / Vorteil für beide Seiten — Hersteller vs. Community nebeneinander
4. Die Netzwerke/Channels — Helium Network, Founders League, Alumni Network als Kacheln mit
   Link zur Detailseite
5. Track Record / Case Studies (z.B. Founder Paddle Treff x Garmin)
6. Industrie-Kontext — warum private Netzwerke gerade jetzt relevant sind
7. Finaler CTA — "Join the Network" / "Enter the Shop"
8. Footer

Weitere Seiten:

- **/channels** — vertiefte Seite pro Netzwerk
- **/case-studies** — alle Projekte im Detail
- **/about** — Firmengeschichte (Consulting → Helium Mining → Netzwerk-Erkenntnis → heute)
- **/contact**

**Nav:** Logo | Home | Channels | Case Studies | About | Contact — rechts: Sprachumschalter
(EN/DE) + hervorgehobener "Shop"-Button (Platzhalter-Link)

Herstellernamen (Sony, Cherry, …) werden vorerst für die Entwicklung verwendet — **vor
Veröffentlichung** wird final geklärt, ob sie öffentlich genannt werden dürfen.

*Offen: Weitere Case-Study-Details zum Alumni Network folgen noch.*

## Design-Richtung

- **Stil:** clean, hochwertig, Dark-Mode-first — Anspruch: neueste Best Practices moderner
  Software-/Tech-Startups. Soll sich nicht wie eine generische, schnell erstellte
  "KI-Website" anfühlen.
- **Thematik:** soll visuell an Handel/Commerce UND an den Netzwerk-Gedanken (Knoten,
  Verbindungen, Dezentralität — Anspielung auf Helium-Network-Ursprung) anknüpfen.
- **Lebendigkeit:** ein bis zwei starke, hochwertige Animationen/Interaktionen gewünscht — die
  Seite soll sich lebendig, techy, modern anfühlen ("man will sich zu Hause fühlen").

### Brand Assets

- Logo-Dateien liegen in [`brand/logo/`](../brand/logo/):
  - `IconBlack.svg` / `IconWhite.svg` — nur das AN-Mark (bevorzugte Variante lt. Konrad)
  - `Logo-Black.svg` / `Logo-White.svg` — AN-Mark + Schriftzug "Advantage Networks"
- **Akzentfarbe:** `#2596be` — sparsam einsetzen (z.B. Buttons, Akzente), nicht flächig.
- **Typografie:**
  - Headlines: **Space Grotesk**
  - Fließtext/UI: **Inter**

## Technik

- Hosting: **GitHub Repo** → **Vercel** (Deploy bei jedem Push)
- Tech-Stack: Entscheidung liegt bei Claude — Empfehlung Next.js oder Astro (beide
  Vercel-optimiert)
- Shop-System: erst in späterer Phase, kein Teil des ersten Builds

## Workflow

1. Erste Grundlagen/Foundations werden mit **Open Design** erzeugt (auf Basis des gemeinsam
   erarbeiteten Prompts, siehe [`docs/build-prompt.md`](build-prompt.md)).
2. Danach wird das Ergebnis in dieses Repo geholt und hier mit Claude Code weiterentwickelt,
   verfeinert und gepflegt.
3. Repo wird laufend aktuell gehalten und auf GitHub gepusht.
4. Hosting später über Vercel (Deploy aus dem GitHub-Repo).
