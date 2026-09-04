"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { NetworkGraph } from "@/components/NetworkGraph";

// Placeholder / coming-soon target for all "Enter the Shop" CTAs.
// The login-gated shop itself is a later build phase — see docs/brief.md.

export default function ShopPage() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden" data-od-id="shop-coming-soon">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-texture absolute inset-0 opacity-50" />
        <NetworkGraph className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg" />
      </div>

      <div className="container-content relative text-center">
        <span className="eyebrow">{t.shopPage.eyebrow}</span>
        <h1 className="mx-auto mt-5 max-w-xl font-display text-4xl font-medium tracking-[-0.02em] text-fg md:text-5xl">
          {t.shopPage.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">{t.shopPage.body}</p>

        <div className="mx-auto mt-10 inline-flex items-center gap-2 rounded-pill border border-accent/30 bg-accent-soft-2 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
          In development
        </div>

        <div className="mt-10">
          <Link href="/" className="btn-ghost">
            <span aria-hidden="true">←</span>
            {t.shopPage.backLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
