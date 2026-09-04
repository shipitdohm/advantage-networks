"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export default function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [audience, setAudience] = useState(t.contactPage.channels[0]?.label ?? "");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Advantage Networks — ${audience}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested as: ${audience}\n\n${message}`
    );
    window.location.href = `mailto:${t.contactPage.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24" data-od-id="contact-hero">
        <div className="container-content">
          <span className="eyebrow">{t.contactPage.eyebrow}</span>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-fg md:text-4xl">
            {t.contactPage.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.contactPage.intro}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <div>
              <p className="text-xs text-muted">{t.contactPage.emailLabel}</p>
              <a
                href={`mailto:${t.contactPage.email}`}
                className="mt-1 inline-block font-display text-xl font-medium text-accent hover:text-accent-hover"
              >
                {t.contactPage.email}
              </a>
            </div>

            <div className="flex flex-col gap-1">
              {t.contactPage.channels.map((ch) => (
                <div key={ch.label} className="py-4">
                  <h3 className="text-sm font-semibold text-fg">{ch.label}</h3>
                  <p className="mt-1 text-sm text-muted">{ch.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={90} className="card p-8 md:p-10" data-od-id="contact-form">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted">{t.contactPage.form.nameLabel}</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    data-od-id="contact-input-name"
                    className="rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-fg outline-none transition-colors focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted">{t.contactPage.form.emailLabel}</span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-od-id="contact-input-email"
                    className="rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-fg outline-none transition-colors focus:border-accent"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted">{t.contactPage.form.audienceLabel}</span>
                <select
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  data-od-id="contact-input-audience"
                  className="rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-fg outline-none transition-colors focus:border-accent"
                >
                  {t.contactPage.channels.map((ch) => (
                    <option key={ch.label} value={ch.label}>
                      {ch.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted">{t.contactPage.form.messageLabel}</span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  data-od-id="contact-input-message"
                  className="resize-none rounded-lg border border-border-strong bg-surface-2 px-3.5 py-2.5 text-fg outline-none transition-colors focus:border-accent"
                />
              </label>

              <button type="submit" className="btn-primary self-start" data-od-id="contact-submit">
                {t.contactPage.form.submitLabel}
              </button>
              <p className="text-xs text-muted">{t.contactPage.formNote}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
