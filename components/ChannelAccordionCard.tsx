"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NetworkItem } from "@/lib/content/types";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Typewriter } from "@/components/Typewriter";

const NUMERIC_STAT = /^(\d+)(?:([.,])(\d+))?([%+]?)$/;

// Renders nothing until the logo file is confirmed to load — checking
// client-side avoids a broken-image flash on the initial static-export HTML,
// since <img onError> fires before React hydrates and attaches the handler.
// Tinted to the network's own brand color via a CSS mask (works regardless
// of the source file's original colors), with a soft glow behind it and a
// bouncy pop-in once it's confirmed to exist.
function ChannelLogo({ slug, name, color }: { slug: string; name: string; color: string }) {
  const [loaded, setLoaded] = useState(false);
  const src = `/brand/channels/${slug}.svg`;

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(false);
    img.src = src;
  }, [src]);

  if (!loaded) return null;

  return (
    <div className="channel-logo-pop relative flex h-12 w-[170px] items-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-full"
        style={{
          background: `radial-gradient(closest-side, color-mix(in oklch, ${color} 30%, transparent), transparent)`,
        }}
      />
      <div
        role="img"
        aria-label={`${name} logo`}
        className="relative h-9 w-full"
        style={{
          backgroundColor: color,
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "left center",
          maskPosition: "left center",
        }}
      />
    </div>
  );
}

function StatValue({ value, startDelayMs }: { value: string; startDelayMs: number }) {
  const match = value.match(NUMERIC_STAT);
  if (!match) return <Typewriter text={value} startDelayMs={startDelayMs} />;

  const [, intPart, sep, fracPart, suffix] = match;
  const decimals = fracPart ? fracPart.length : 0;
  const target = parseFloat(`${intPart}.${fracPart ?? ""}`);

  return (
    <CountUp target={target} suffix={suffix} decimals={decimals} decimalSeparator={sep === "," ? "," : "."} />
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

export function ChannelAccordionCard({
  network,
  delayMs,
  expanded,
  onToggle,
}: {
  network: NetworkItem;
  delayMs: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { t } = useLanguage();
  const d = network.detail;
  const titleDelay = 0;
  const rowStagger = 160;
  const afterTitleDelay = 450;

  return (
    <Reveal
      id={network.slug}
      delayMs={delayMs}
      className="scroll-mt-28 py-14 md:py-16"
      data-od-id={`channel-card-${network.slug}`}
    >
      <div className="grid gap-8 md:grid-cols-[1fr_360px] md:items-start md:gap-16">
        <div className="max-w-md">
          <div className="flex flex-wrap items-center gap-4">
            <ChannelLogo slug={network.slug} name={network.name} color={network.accentColor} />
            {d.websiteUrl && (
              <a
                href={d.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-muted transition-colors hover:text-fg"
              >
                {t.networks.websiteLabel} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <span
            className={`mt-6 inline-flex px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${
              network.isLaunching ? "status-chip-launching" : "status-chip-active"
            }`}
          >
            {network.isLaunching ? t.networks.launchingLabel : t.networks.activeLabel}
          </span>

          <h2 className="mt-4 font-display text-2xl font-medium text-fg md:text-3xl">{network.name}</h2>

          <Link href={d.ctaHref} className="btn-secondary mt-8 inline-flex">
            {d.ctaLabel}
          </Link>

          <button type="button" onClick={onToggle} aria-expanded={expanded} className="btn-ghost mt-6 flex">
            {expanded ? t.networks.collapseLabel : t.networks.expandLabel}
            <ChevronIcon open={expanded} />
          </button>

          {expanded && (
            <Reveal className="mt-8">
              <p className="text-sm leading-relaxed text-muted md:text-base">{d.subheadline}</p>
              <div className="mt-5 flex flex-col gap-4">
                {d.bodyParagraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted md:text-base">
                    {p}
                  </p>
                ))}
              </div>

              {d.embed && (
                <a
                  href={d.embed.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 flex items-center justify-between gap-6 overflow-hidden rounded-card border border-border-strong bg-surface-2 p-6 transition-colors hover:border-fg/20 hover:bg-surface"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{d.embed.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{d.embed.note}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-fg/70 transition-colors group-hover:text-fg">
                    <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>
              )}
            </Reveal>
          )}
        </div>

        <div className="rounded-card border border-border-strong bg-surface-2 p-6 md:p-7">
          <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            <Typewriter text={d.statsPanelTitle} startDelayMs={titleDelay} />
          </h3>
          <dl className="mt-5 flex flex-col gap-4">
            {d.stats.map((stat, i) => {
              const rowDelay = afterTitleDelay + i * rowStagger;
              return (
                <div
                  key={stat.label}
                  className="flex items-center justify-between gap-4 border-t border-border pt-4 first:border-t-0 first:pt-0"
                >
                  <dt className="text-sm text-muted">
                    <Typewriter text={stat.label} startDelayMs={rowDelay} />
                  </dt>
                  <dd className="font-display text-sm font-medium text-fg">
                    <StatValue value={stat.value} startDelayMs={rowDelay + stat.label.length * 22 + 80} />
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Reveal>
  );
}
