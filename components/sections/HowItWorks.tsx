"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="scroll-mt-20 py-20 md:scroll-mt-24 md:py-28" data-od-id="how-it-works">
      <div className="container-content">
        <Reveal>
          <span className="eyebrow">{t.howItWorks.eyebrow}</span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-[-0.01em] text-fg md:text-5xl">
            {t.howItWorks.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{t.howItWorks.intro}</p>
        </Reveal>

        <div className="relative mt-16 grid gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-x-8">
          <div
            className="pointer-events-none absolute inset-x-0 top-[7px] hidden h-px bg-border-strong md:block"
            aria-hidden="true"
          />
          {t.howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delayMs={i * 150} className="relative text-center md:text-left">
              <span className="relative z-10 mx-auto block h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg md:mx-0" />
              <h3 className="mt-5 font-display text-lg font-medium text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
