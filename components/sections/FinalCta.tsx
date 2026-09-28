"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  const { t } = useLanguage();
  const { form } = t.finalCta;
  const [email, setEmail] = useState("");
  const [member, setMember] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Advantage Networks: ${member || form.memberPlaceholder}`);
    const body = encodeURIComponent(`Email: ${email}\n${form.memberLabel} ${member || "—"}`);
    window.location.href = `mailto:${t.contactPage.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="access" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32" data-od-id="final-cta">
      <div className="container-content relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-[1.15] tracking-[-0.01em] text-fg md:text-4xl">
            {t.finalCta.heading}
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mx-auto mt-14 max-w-3xl md:mt-16">
          <form
            onSubmit={handleSubmit}
            className="card flex flex-col gap-4 p-6 md:flex-row md:items-end md:gap-3 md:p-4"
          >
            <div className="md:flex-1">
              <label htmlFor="cta-email" className="text-xs text-muted">
                {form.emailLabel}
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={form.emailPlaceholder}
                className="mt-1.5 w-full rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>
            <div className="md:flex-1">
              <label htmlFor="cta-member" className="text-xs text-muted">
                {form.memberLabel}
              </label>
              <div className="relative mt-1.5">
                <select
                  id="cta-member"
                  required
                  value={member}
                  onChange={(e) => setMember(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-border-strong bg-surface px-4 py-2.5 pr-9 text-sm text-fg focus:border-accent focus:outline-none"
                >
                  <option value="" disabled>
                    {form.memberPlaceholder}
                  </option>
                  {form.memberOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted"
                >
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <button type="submit" className="btn-primary justify-center whitespace-nowrap md:flex-none">
              {form.submitLabel}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-muted">
            {form.loginPrompt}{" "}
            <Link href="/contact" className="font-medium text-fg underline-offset-4 hover:underline">
              {form.loginLabel} →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
