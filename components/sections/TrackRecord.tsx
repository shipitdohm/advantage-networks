"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function TrackRecord() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28" data-od-id="track-record">
      <div className="container-content">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">{t.trackRecord.eyebrow}</span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">
              {t.trackRecord.heading}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{t.trackRecord.intro}</p>
          </div>
          <Link href="/events" className="btn-ghost hidden md:inline-flex">
            {t.trackRecord.moreLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {t.trackRecord.caseStudies.map((cs) => (
            <Reveal key={cs.title} className="card relative overflow-hidden p-9 md:p-12">
              <div className="grid-texture absolute inset-0 opacity-[0.35]" aria-hidden="true" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-border-strong px-2.5 py-1 text-[11px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-fg md:text-3xl">{cs.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">{cs.description}</p>
                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <p className="text-xs text-muted">Partner</p>
                    <p className="mt-1 font-display text-lg font-medium text-fg">{cs.partner}</p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <p className="text-xs text-muted">Network</p>
                    <p className="mt-1 font-display text-lg font-medium text-fg">{cs.network}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal
            delayMs={100}
            className="card flex flex-col justify-center gap-3 p-9 text-muted md:p-12"
          >
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted/70">
              {t.trackRecord.caseStudies.length}/∞
            </span>
            <p className="text-sm leading-relaxed">{t.eventsPage.emptyNote}</p>
            <Link href="/events" className="btn-ghost mt-2 self-start">
              {t.trackRecord.moreLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
