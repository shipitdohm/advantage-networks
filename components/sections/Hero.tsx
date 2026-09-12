"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { FabricWaves } from "@/components/FabricWaves";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden" data-od-id="hero">
      <div className="pointer-events-none absolute inset-0">
        <FabricWaves className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="container-content relative flex min-h-screen flex-col items-center justify-center py-20 text-center">
        <h1
          className="max-w-2xl text-balance font-display text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-fg md:text-7xl"
          data-od-id="hero-headline"
        >
          {t.hero.headline}
        </h1>

        <p
          className="mt-5 max-w-lg text-balance text-sm leading-relaxed text-muted md:text-base"
          data-od-id="hero-subheadline"
        >
          {t.hero.subheadline}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href="/shop" className="btn-primary px-4 py-2.5" data-od-id="hero-cta-primary">
            {t.hero.ctaPrimary}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11l8-8M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="#access" className="btn-secondary px-4 py-2.5" data-od-id="hero-cta-secondary">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <Reveal className="relative mt-12 w-full bg-accent-dim py-8 md:mt-16 md:py-10" data-od-id="hero-stats-bar">
        <div className="container-content">
          <dl
            className="grid grid-cols-4 gap-x-5 gap-y-8 text-center sm:gap-x-8 md:gap-x-10"
            data-od-id="hero-stats"
          >
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="transition-transform duration-200 ease-out hover:-translate-y-0.5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-medium tracking-[-0.02em] text-accent-on sm:text-3xl md:text-5xl">
                  <CountUp
                    target={stat.target}
                    suffix={stat.suffix}
                    startValue={stat.startValue}
                    formatThousands={stat.formatThousands}
                  />
                </dd>
                <p className="mt-2 text-[10px] text-accent-on/70 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
