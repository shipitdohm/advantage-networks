"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { LocationsMap } from "@/components/LocationsMap";

function ImagePlaceholderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 15l-5.5-5.5L6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24" data-od-id="about-hero">
        <div className="container-content">
          <span className="eyebrow">{t.aboutPage.eyebrow}</span>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-fg md:text-4xl">
            {t.aboutPage.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.aboutPage.intro}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-content">
          <div className="relative flex flex-col">
            <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block" aria-hidden="true" />
            {t.aboutPage.timeline.map((item, i) => (
              <Reveal
                key={item.title}
                delayMs={i * 90}
                className="relative flex flex-col gap-2 py-8 first:pt-0 sm:flex-row sm:gap-10 sm:py-10"
              >
                <div className="relative flex items-center gap-4 sm:w-48 sm:flex-none">
                  <span className="relative z-10 hidden h-3.5 w-3.5 flex-none rounded-full border-2 border-accent bg-bg sm:block" />
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{item.year}</span>
                </div>
                <div className="max-w-xl flex-1">
                  <h2 className="font-display text-xl font-medium text-fg">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{item.body}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex aspect-[4/3] items-center justify-center rounded-card border border-border-strong bg-surface-2 text-muted/50"
                      >
                        <ImagePlaceholderIcon />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32" data-od-id="about-locations">
        <div className="container-content">
          <span className="eyebrow">{t.aboutPage.locations.eyebrow}</span>
          <h2 className="mt-4 max-w-xl font-display text-2xl font-medium tracking-[-0.01em] text-fg md:text-3xl">
            {t.aboutPage.locations.heading}
          </h2>

          <Reveal className="mt-10" as="div">
            <LocationsMap cities={t.aboutPage.locations.cities} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
