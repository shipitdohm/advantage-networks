"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const CONTENT = {
  en: {
    eyebrow: "Legal",
    heading: "Privacy Policy",
    note: "Placeholder content — to be finalized and reviewed with legal counsel before launch.",
    sections: [
      {
        title: "1. Overview",
        body: [
          "This page explains, in general terms, what happens to your personal data when you visit this website. Personal data is any data that could identify you personally.",
        ],
      },
      {
        title: "2. Data controller",
        body: [
          "Advantage Networks GmbH",
          "Ickstattstraße 32, 80469 Munich, Germany",
          "Email: info@advantage-net.com",
        ],
      },
      {
        title: "3. Data collection on this website",
        body: [
          "Hosting & server log files: Technical data such as browser type, operating system, and access time may be collected automatically when you visit the site.",
          "Contact form: If you contact us via a form on this site, the data you provide is stored for the purpose of processing your inquiry and in case of follow-up questions.",
          "Cookies & analytics: Details on any cookies or analytics tools used will be listed here once finalized.",
        ],
      },
      {
        title: "4. Your rights",
        body: [
          "You have the right to request information about the origin, recipients, and purpose of your stored personal data, free of charge, at any time. You also have the right to request correction, restriction, or deletion of this data, and the right to lodge a complaint with the competent supervisory authority.",
        ],
      },
      {
        title: "5. SSL/TLS encryption",
        body: ["This site uses SSL/TLS encryption for all data transmitted between your browser and our servers."],
      },
    ],
  },
  de: {
    eyebrow: "Rechtliches",
    heading: "Datenschutzerklärung",
    note: "Platzhalter-Inhalt — vor Veröffentlichung final zu prüfen, idealerweise mit rechtlicher Beratung.",
    sections: [
      {
        title: "1. Datenschutz auf einen Blick",
        body: [
          "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
        ],
      },
      {
        title: "2. Verantwortliche Stelle",
        body: [
          "Advantage Networks GmbH",
          "Ickstattstraße 32, 80469 München",
          "E-Mail: info@advantage-net.com",
        ],
      },
      {
        title: "3. Datenerfassung auf dieser Website",
        body: [
          "Hosting & Server-Log-Dateien: Beim Besuch der Website können technische Daten wie Browsertyp, Betriebssystem und Zugriffszeit automatisch erfasst werden.",
          "Kontaktformular: Wenn Sie uns über ein Formular kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage und für eventuelle Anschlussfragen gespeichert.",
          "Cookies & Analyse-Tools: Details zu eingesetzten Cookies oder Analyse-Tools werden hier ergänzt, sobald final festgelegt.",
        ],
      },
      {
        title: "4. Ihre Rechte",
        body: [
          "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie ein Recht auf Berichtigung, Einschränkung oder Löschung dieser Daten sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.",
        ],
      },
      {
        title: "5. SSL-/TLS-Verschlüsselung",
        body: ["Diese Seite nutzt SSL-/TLS-Verschlüsselung für die gesamte Datenübertragung zwischen Ihrem Browser und unseren Servern."],
      },
    ],
  },
};

export default function PrivacyPage() {
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
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
