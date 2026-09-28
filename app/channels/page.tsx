"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { ChannelSection } from "@/components/ChannelSection";

export default function ChannelsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    document.getElementById(hash)?.scrollIntoView({ block: "start" });
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24" data-od-id="channels-hero">
        <div className="container-content">
          <h1 className="max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-fg md:text-4xl">
            {t.channelsPage.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.channelsPage.intro}</p>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container-content flex flex-col">
          {t.networks.items.map((network, i) => (
            <ChannelSection key={network.slug} network={network} delayMs={i * 90} />
          ))}
        </div>

        <Reveal className="container-content mt-14 border-t border-border pt-14 md:mt-16 md:pt-16">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">
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
