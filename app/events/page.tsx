"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import type { CaseStudyLogo, Dictionary } from "@/lib/content/types";

// Renders nothing until the logo file is confirmed to load — checking
// client-side avoids a broken-image flash on the initial static-export HTML,
// since <img onError> fires before React hydrates and attaches the handler.
function SafeLogo({ src, name }: { src: string; name: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = src;
  }, [src]);

  if (!loaded) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand logo, no optimization needed
    <img
      src={src}
      alt={`${name} logo`}
      className="h-11 w-auto max-w-[160px] object-contain object-right md:h-12"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );
}

const TAG_COLORS = ["#8b5cf6", "#5b6eff", "#f5a623", "#22c55e", "#ec4899"];

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 15l-5.5-5.5L6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ease-out ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type CaseStudy = Dictionary["trackRecord"]["caseStudies"][number];

function CaseStudyCard({ cs, t }: { cs: CaseStudy; t: Dictionary }) {
  const [mediaOpen, setMediaOpen] = useState(false);

  return (
    <Reveal
      className="card overflow-hidden p-9 md:p-12"
      data-od-id={`case-study-${cs.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-wrap items-center gap-2">
          {cs.tags.map((tag, i) => {
            const color = TAG_COLORS[i % TAG_COLORS.length];
            return (
              <span
                key={tag}
                className="rounded-pill border px-2.5 py-1 text-[11px] font-medium"
                style={{
                  borderColor: `color-mix(in oklch, ${color} 45%, transparent)`,
                  backgroundColor: `color-mix(in oklch, ${color} 14%, transparent)`,
                  color,
                }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {cs.logos && cs.logos.length > 0 && (
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-5">
            {cs.logos.map((logo: CaseStudyLogo) => (
              <SafeLogo key={logo.name} src={logo.src} name={logo.name} />
            ))}
          </div>
        )}
      </div>

      <h2 className="mt-6 font-display text-2xl font-medium text-fg md:text-3xl">{cs.title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{cs.description}</p>
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

      <button
        type="button"
        onClick={() => setMediaOpen((v) => !v)}
        aria-expanded={mediaOpen}
        className="btn-ghost mt-6 flex"
      >
        {mediaOpen ? t.eventsPage.hideMediaLabel : t.eventsPage.showMediaLabel}
        <ChevronIcon open={mediaOpen} />
      </button>

      {mediaOpen && (
        <Reveal className="mt-6">
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-card border border-border-strong bg-surface-2">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, color-mix(in oklch, #8b5cf6 16%, transparent), transparent 65%)",
              }}
              aria-hidden="true"
            />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-fg/10 text-fg backdrop-blur-sm">
              <PlayIcon />
            </div>
            <span className="absolute bottom-4 left-4 text-xs font-medium text-muted">
              {t.eventsPage.mediaLabel}
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-card border border-border-strong bg-surface-2 text-muted/50"
              >
                <ImagePlaceholderIcon />
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </Reveal>
  );
}

export default function EventsPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24" data-od-id="events-hero">
        <div className="container-content">
          <span className="eyebrow">{t.eventsPage.eyebrow}</span>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-fg md:text-4xl">
            {t.eventsPage.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.eventsPage.intro}</p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-content flex flex-col gap-6">
          {t.trackRecord.caseStudies.map((cs) => (
            <CaseStudyCard key={cs.title} cs={cs} t={t} />
          ))}

          <Reveal delayMs={100} className="card p-9 text-center text-sm text-muted md:p-12">
            {t.eventsPage.emptyNote}
          </Reveal>
        </div>
      </section>
    </>
  );
}
