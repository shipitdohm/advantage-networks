"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 8l8.5-4 8.5 4-8.5 4-8.5-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M3.5 8v8l8.5 4 8.5-4V8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13v-1a8 8 0 0116 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 19v1a3 3 0 01-3 3h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const SERVICE_ICONS = [SearchIcon, BoxIcon, PinIcon, HeadsetIcon];

export default function ConsultingPage() {
  const { t } = useLanguage();
  const c = t.consultingPage;
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Advantage Networks — Consulting${interest ? `: ${interest}` : ""}`);
    const body = encodeURIComponent(`Email: ${email}\nInterested in: ${interest}`);
    window.location.href = `mailto:${t.contactPage.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24" data-od-id="consulting-hero">
        <div className="container-content">
          <span className="eyebrow">{c.eyebrow}</span>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-fg md:text-4xl">
            {c.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{c.intro}</p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-content">
          <div className="grid gap-4 sm:grid-cols-2">
            {c.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <Reveal
                  key={service.title}
                  delayMs={i * 80}
                  className="rounded-card border border-border-strong bg-surface-2 p-6"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon />
                  </div>
                  <h2 className="mt-4 font-display text-base font-medium text-fg">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.body}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delayMs={100} className="mt-14 border-t border-border pt-14 md:mt-16 md:pt-16">
            <div className="max-w-2xl text-center md:mx-auto">
              <span className="eyebrow">{c.collaboration.eyebrow}</span>
              <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.01em] text-fg md:text-2xl">
                {c.collaboration.heading}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{c.collaboration.intro}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-card border border-border-strong bg-surface-2 p-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                  {c.collaboration.ours.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {c.collaboration.ours.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-card border border-border-strong bg-surface-2 p-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  {c.collaboration.yours.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {c.collaboration.yours.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fg/30" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <p className="mt-8 text-xs text-muted">{c.note}</p>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28" data-od-id="consulting-cta">
        <div className="container-content">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-fg md:text-4xl">
              {c.cta.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{c.cta.body}</p>
          </Reveal>

          <Reveal delayMs={100} className="mx-auto mt-10 max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="card flex flex-col gap-4 p-6 md:flex-row md:items-end md:gap-3 md:p-4"
            >
              <div className="md:flex-1">
                <label htmlFor="consulting-cta-email" className="text-xs text-muted">
                  {c.cta.emailLabel}
                </label>
                <input
                  id="consulting-cta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.cta.emailPlaceholder}
                  className="mt-1.5 w-full rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
              <div className="md:flex-1">
                <label htmlFor="consulting-cta-interest" className="text-xs text-muted">
                  {c.cta.interestLabel}
                </label>
                <select
                  id="consulting-cta-interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm text-fg focus:border-accent focus:outline-none"
                >
                  <option value="" disabled>
                    {c.cta.interestPlaceholder}
                  </option>
                  {c.cta.interestOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn-primary justify-center whitespace-nowrap md:flex-none">
                {c.cta.submitLabel}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
