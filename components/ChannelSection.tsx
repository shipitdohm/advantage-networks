"use client";

import { useEffect, useState } from "react";
import type { NetworkItem } from "@/lib/content/types";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { MetaCell } from "@/components/MetaCell";

const NUMERIC_STAT = /^(\d+)(?:([.,])(\d+))?([%+]?)$/;

// Renders nothing until the logo file is confirmed to load — checking
// client-side avoids a broken-image flash on the initial static-export HTML,
// since <img onError> fires before React hydrates and attaches the handler.
// Plain white mark, same treatment as the partner/network logos on the
// Events page — no per-brand color tint or glow behind it. Renders nothing
// at all (not a reserved-space placeholder) while unresolved, so a network
// that has no logo yet — like Alumni — doesn't leave a gap pushing its
// status pill out of left alignment.
function ChannelLogo({ slug, name }: { slug: string; name: string }) {
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
    // eslint-disable-next-line @next/next/no-img-element -- brand logo, no optimization needed
    <img
      src={src}
      alt={`${name} logo`}
      className="h-8 w-auto object-contain object-left"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );
}

// Numeric values still count up; word values render as plain, static text.
// They used to type letter by letter, but that let the cell's line count
// flip between one and two lines mid-animation (whichever cell happened to
// wrap at that instant), nudging the whole grid — the "verschieben sich ein
// bisschen" the layout used to do while it loaded.
function StatValue({ value }: { value: string }) {
  const match = value.match(NUMERIC_STAT);
  if (!match) return <>{value}</>;

  const [, intPart, sep, fracPart, suffix] = match;
  const decimals = fracPart ? fracPart.length : 0;
  const target = parseFloat(`${intPart}.${fracPart ?? ""}`);

  return (
    <CountUp target={target} suffix={suffix} decimals={decimals} decimalSeparator={sep === "," ? "," : "."} />
  );
}

// One network, always fully shown — no click-to-expand. At three networks
// total, hiding detail behind an accordion made the page read as empty; a
// full block per network, text beside its own stat grid, reads as
// substantial instead.
export function ChannelSection({ network, delayMs }: { network: NetworkItem; delayMs: number }) {
  const { t } = useLanguage();
  const d = network.detail;

  return (
    <Reveal
      id={network.slug}
      delayMs={delayMs}
      as="article"
      className="scroll-mt-28"
      data-od-id={`channel-${network.slug}`}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <ChannelLogo slug={network.slug} name={network.name} />
            <span
              className={`inline-flex px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${
                network.isLaunching ? "status-chip-launching" : "status-chip-active"
              }`}
            >
              {network.isLaunching ? t.networks.launchingLabel : t.networks.activeLabel}
            </span>
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

          <h2 className="mt-6 font-display text-2xl font-medium tracking-[-0.01em] text-fg md:text-3xl">
            {network.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{d.subheadline}</p>

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
        </div>

        {/* flex + flex-grow (not a fixed-column grid) so a trailing partial
            row — e.g. 5 stats — stretches to fill the width instead of
            leaving an empty cell. Each cell fades in on its own (opacity/
            transform only, text already at full size) instead of typing
            its text out, so nothing changes line count mid-animation. */}
        <div className="flex flex-wrap gap-px overflow-hidden rounded-card border border-border-strong bg-border">
          {d.stats.map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 70} className="min-w-[45%] flex-1">
              <MetaCell label={stat.label} className="h-full">
                <span className="font-display text-lg font-medium text-fg">
                  <StatValue value={stat.value} />
                </span>
              </MetaCell>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
