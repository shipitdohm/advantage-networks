"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { HeroVideo } from "@/components/events/HeroVideo";
import { PhotoMarquee } from "@/components/events/PhotoMarquee";
import { FPT_PHOTOS, FPT_POSTER, FPT_VIDEO } from "@/lib/events/founderPadelTreff";
import type { CaseStudy } from "@/lib/content/types";

const TAG_COLORS = ["#8b5cf6", "#5b6eff", "#f5a623", "#22c55e", "#ec4899"];

// Renders nothing until the logo file is confirmed to load — checking
// client-side avoids a broken-image flash on the initial static-export HTML,
// since <img onError> fires before React hydrates and attaches the handler.
function SafeLogo({ src, name, className }: { src: string; name: string; className: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = src;
  }, [src]);

  if (!loaded) return <span className={`block ${className}`} aria-hidden="true" />;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand logo, no optimization needed
    <img
      src={src}
      alt={`${name} logo`}
      className={`w-auto object-contain object-left ${className}`}
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );
}

function MetaCell({
  label,
  children,
  emphasis = false,
}: {
  label: string;
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div className={`flex flex-col justify-between gap-5 px-6 py-6 md:px-8 md:py-8 ${emphasis ? "bg-surface" : ""}`}>
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted">{label}</span>
      <div className="flex min-h-[44px] items-end">{children}</div>
    </div>
  );
}

function EventFeature({ cs }: { cs: CaseStudy }) {
  const { t } = useLanguage();
  const e = t.eventsPage;
  const logo = (name: string) => cs.logos?.find((l) => l.name === name);
  const network = logo(cs.network);
  const venue = logo("TIO TIO");

  return (
    <article data-od-id="event-founder-padel-treff">
      {/* Hero: story left, portrait video right */}
      <section className="pb-16 md:pb-24">
        <div className="container-content grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal className="lg:pr-6">
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
            <h2 className="mt-6 font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">{cs.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{cs.description}</p>
          </Reveal>

          <Reveal delayMs={120} className="max-lg:order-first">
            <HeroVideo
              src={FPT_VIDEO}
              poster={FPT_POSTER}
              soundOnLabel={e.sound.on}
              soundOffLabel={e.sound.off}
            />
          </Reveal>
        </div>
      </section>

      {/* Who / where / when */}
      <section className="pb-16 md:pb-24">
        <div className="container-content">
          <Reveal className="grid overflow-hidden rounded-card border border-border-strong sm:grid-cols-2 lg:grid-cols-4 [&>*]:border-border-strong max-lg:[&>*:not(:first-child)]:border-t sm:max-lg:[&>*:nth-child(even)]:border-l sm:max-lg:[&>*:nth-child(2)]:border-t-0 lg:[&>*:not(:first-child)]:border-l">
            <MetaCell label={e.labels.network}>
              <a href="https://foundersleague.de" target="_blank" rel="noopener noreferrer" aria-label={cs.network}>
                {network ? (
                  <SafeLogo src={network.src} name={network.name} className="h-9" />
                ) : (
                  <span className="font-display text-xl text-fg">{cs.network}</span>
                )}
              </a>
            </MetaCell>
            <MetaCell label={e.labels.partner} emphasis>
              <a href="https://www.garmin.com" target="_blank" rel="noopener noreferrer" aria-label={cs.partner}>
                <SafeLogo src="/brand/partners/garmin-2.svg" name={cs.partner} className="h-11" />
              </a>
            </MetaCell>
            <MetaCell label={e.labels.location}>
              <div className="flex flex-col gap-2">
                {venue && <SafeLogo src={venue.src} name={venue.name} className="h-7" />}
                <span className="text-sm text-fg">{cs.location}</span>
              </div>
            </MetaCell>
            <MetaCell label={e.labels.date}>
              <span className={`font-display text-xl ${cs.date ? "text-fg" : "text-muted"}`}>
                {cs.date ?? e.labels.pending}
              </span>
            </MetaCell>
          </Reveal>
        </div>
      </section>

      {/* Numbers */}
      <section className="pb-16 md:pb-24">
        <div className="container-content">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {cs.stats.map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 90}>
                <dd className={`font-display text-5xl font-medium tracking-[-0.02em] md:text-6xl ${stat.value === undefined ? "text-muted/40" : "text-fg"}`}>
                  {stat.value === undefined ? "—" : <CountUp target={stat.value} suffix={stat.suffix} />}
                </dd>
                <dt className="mt-3 text-sm text-muted">{stat.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Quote */}
      <section className="pb-16 md:pb-24">
        <div className="container-content">
          <Reveal className="mx-auto max-w-3xl text-center">
            {cs.quote ? (
              <figure>
                <blockquote className="font-display text-2xl font-medium leading-snug text-fg md:text-3xl">
                  „{cs.quote.text}“
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted">{cs.quote.author}</figcaption>
              </figure>
            ) : (
              <p className="rounded-card border border-dashed border-border-strong px-6 py-8 text-sm text-muted">
                {e.quotePending}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 md:pb-28">
        <div className="container-content">
          <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">{e.galleryTitle}</h2>
        </div>
        <div className="mt-10">
          <PhotoMarquee photos={FPT_PHOTOS} alt={`${cs.title} — ${e.galleryTitle}`} labels={e.lightbox} />
        </div>
      </section>
    </article>
  );
}

export default function EventsPage() {
  const { t } = useLanguage();
  const e = t.eventsPage;

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20" data-od-id="events-hero">
        <div className="container-content">
          <h1 className="max-w-2xl font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">
            {e.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{e.intro}</p>
        </div>
      </section>

      {t.trackRecord.caseStudies.map((cs) => (
        <EventFeature key={cs.title} cs={cs} />
      ))}

      <section className="border-t border-border py-20 md:py-28" data-od-id="events-cta">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">{e.cta.heading}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{e.cta.body}</p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              {e.cta.button}
            </Link>
            <p className="mt-10 text-sm text-muted">{e.emptyNote}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
