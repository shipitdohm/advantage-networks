"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  const { t } = useLanguage();
  const { form } = t.finalCta;

  return (
    <section id="access" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32" data-od-id="final-cta">
      <div className="container-content relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-fg md:text-5xl">
            {t.finalCta.heading}
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mx-auto mt-10 max-w-3xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="card flex flex-col gap-4 p-6 md:flex-row md:items-end md:gap-3 md:p-4"
          >
            <div className="md:flex-1">
              <label htmlFor="cta-email" className="text-xs text-muted">
                {form.emailLabel}
              </label>
              <input
                id="cta-email"
                type="email"
                placeholder={form.emailPlaceholder}
                className="mt-1.5 w-full rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </div>
            <div className="md:flex-1">
              <label htmlFor="cta-member" className="text-xs text-muted">
                {form.memberLabel}
              </label>
              <select
                id="cta-member"
                defaultValue=""
                className="mt-1.5 w-full rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm text-fg focus:border-accent focus:outline-none"
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
