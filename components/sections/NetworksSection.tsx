"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

export function NetworksSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28" data-od-id="networks">
      <div className="container-content">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">{t.networks.eyebrow}</span>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">
              {t.networks.heading}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{t.networks.intro}</p>
          </div>
          <Link href="/channels" className="btn-ghost hidden md:inline-flex">
            {t.networks.cta}
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.networks.items.map((network, i) => (
            <Reveal key={network.slug} delayMs={i * 90}>
              <Link
                href={network.href}
                data-od-id={`network-card-${network.slug}`}
                className="group relative block h-full overflow-hidden rounded-card border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-fg/20 hover:bg-surface-2 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-pill border border-border-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                    {network.status}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {network.tagline}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-medium text-fg">{network.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{network.description}</p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg/70 transition-colors group-hover:text-fg">
                  <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link href="/channels" className="btn-ghost mt-8 inline-flex md:hidden">
          {t.networks.cta}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
