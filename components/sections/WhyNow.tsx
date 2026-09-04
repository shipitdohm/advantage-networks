"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function WhyNow() {
  const { t } = useLanguage();

  return (
    <section className="bg-surface py-20 md:py-28" data-od-id="why-now">
      <div className="container-content grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">{t.whyNow.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] tracking-[-0.01em] text-fg md:text-4xl">
            {t.whyNow.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">{t.whyNow.body}</p>
        </Reveal>

        <div className="flex flex-col">
          {t.whyNow.points.map((point, i) => (
            <Reveal key={point.title} delayMs={i * 90} className="flex gap-6 py-5 first:pt-0">
              <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-lg font-medium text-fg">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
