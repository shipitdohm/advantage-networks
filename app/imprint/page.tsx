"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const CONTENT = {
  en: {
    eyebrow: "Legal",
    heading: "Imprint",
    note: "Placeholder content — to be finalized and reviewed with legal counsel before launch.",
    sections: [
      {
        title: "Information pursuant to § 5 TMG",
        body: [
          "Advantage Networks GmbH",
          "Ickstattstraße 32",
          "80469 Munich, Germany",
          "",
          "Commercial register: HRB 294056",
          "Register court: Munich",
          "",
          "Represented by: Konrad Rettig",
        ],
      },
      {
        title: "Contact",
        body: ["Email: info@advantage-net.com"],
      },
      {
        title: "EU dispute resolution",
        body: [
          "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr. Our email address can be found above.",
        ],
      },
      {
        title: "Dispute resolution before a consumer arbitration board",
        body: ["We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."],
      },
      {
        title: "Liability for content",
        body: [
          "As a service provider, we are responsible for our own content on these pages in accordance with general laws. We are not obligated to monitor transmitted or stored third-party information, or to investigate circumstances indicating unlawful activity.",
        ],
      },
      {
        title: "Liability for links",
        body: [
          "Our site contains links to external third-party websites over whose content we have no influence. We therefore cannot accept liability for this external content — the respective provider or operator is always responsible.",
        ],
      },
      {
        title: "Copyright",
        body: [
          "Content created by the site operators is subject to German copyright law. Reproduction, editing, distribution, or any use outside the scope of copyright law requires the written consent of the respective author.",
        ],
      },
    ],
  },
  de: {
    eyebrow: "Rechtliches",
    heading: "Impressum",
    note: "Platzhalter-Inhalt — vor Veröffentlichung final zu prüfen, idealerweise mit rechtlicher Beratung.",
    sections: [
      {
        title: "Angaben gemäß § 5 TMG",
        body: [
          "Advantage Networks GmbH",
          "Ickstattstraße 32",
          "80469 München",
          "",
          "Handelsregister: HRB 294056",
          "Registergericht: München",
          "",
          "Vertreten durch: Konrad Rettig",
        ],
      },
      {
        title: "Kontakt",
        body: ["E-Mail: info@advantage-net.com"],
      },
      {
        title: "EU-Streitschlichtung",
        body: [
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben.",
        ],
      },
      {
        title: "Verbraucherstreitbeilegung",
        body: ["Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."],
      },
      {
        title: "Haftung für Inhalte",
        body: [
          "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Zur Überwachung übermittelter oder gespeicherter fremder Informationen sind wir nicht verpflichtet.",
        ],
      },
      {
        title: "Haftung für Links",
        body: [
          "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir daher keine Gewähr übernehmen — verantwortlich ist stets der jeweilige Anbieter der Seite.",
        ],
      },
      {
        title: "Urheberrecht",
        body: [
          "Die durch die Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.",
        ],
      },
    ],
  },
};

export default function ImprintPage() {
  const { locale } = useLanguage();
  const c = CONTENT[locale];

  return (
    <section className="py-20 md:py-28">
      <div className="container-content">
        <span className="eyebrow">{c.eyebrow}</span>
        <h1 className="mt-5 font-display text-4xl font-medium tracking-[-0.02em] text-fg md:text-5xl">
          {c.heading}
        </h1>
        <p className="mt-5 max-w-xl rounded-lg border border-border-strong bg-surface px-4 py-3 text-sm text-muted">
          {c.note}
        </p>

        <div className="mt-12 flex max-w-2xl flex-col gap-10">
          {c.sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-lg font-medium text-fg">{section.title}</h2>
              <div className="mt-3 flex flex-col gap-1">
                {section.body.map((line, i) =>
                  line === "" ? (
                    <div key={i} className="h-2" />
                  ) : (
                    <p key={i} className="text-sm leading-relaxed text-muted">
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
