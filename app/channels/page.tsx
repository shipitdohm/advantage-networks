"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { ChannelAccordionCard } from "@/components/ChannelAccordionCard";

export default function ChannelsPage() {
  const { t } = useLanguage();
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const match = t.networks.items.find((n) => n.slug === hash);
    if (!match) return;
    setExpandedSlug(hash);
    document.getElementById(hash)?.scrollIntoView({ block: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount, react to the URL only
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24" data-od-id="channels-hero">
        <div className="container-content">
          <span className="eyebrow">{t.channelsPage.eyebrow}</span>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-fg md:text-4xl">
            {t.channelsPage.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.channelsPage.intro}</p>
        </div>
      </section>

      <section className="pb-32 md:pb-44">
        <div className="container-content flex flex-col divide-y divide-border">
          {t.networks.items.map((network, i) => (
            <ChannelAccordionCard
              key={network.slug}
              network={network}
              delayMs={i * 90}
              expanded={expandedSlug === network.slug}
              onToggle={() =>
                setExpandedSlug((prev) => (prev === network.slug ? null : network.slug))
              }
            />
          ))}
        </div>

        <Reveal className="container-content mt-14 border-t border-border pt-14 md:mt-16 md:pt-16">
          <div className="max-w-xl">
            <h2 className="font-display text-xl font-medium text-fg md:text-2xl">
              {t.channelsPage.suggestChannel.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              {t.channelsPage.suggestChannel.body}
            </p>
            <Link href="/contact" className="btn-secondary mt-6 inline-flex">
              {t.channelsPage.suggestChannel.ctaLabel}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
