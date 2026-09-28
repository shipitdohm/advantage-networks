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
      <section className="pt-32 pb-24 md:pt-40 md:pb-36" data-od-id="channels-hero">
        <div className="container-content">
          <h1 className="max-w-2xl font-display text-3xl font-medium tracking-[-0.02em] text-fg md:text-4xl">
            {t.channelsPage.heading}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.channelsPage.intro}</p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-content flex flex-col gap-20 md:gap-28">
          {t.networks.items.map((network, i) => (
            <ChannelSection key={network.slug} network={network} delayMs={i * 90} />
          ))}
        </div>
      </section>

      <section className="pt-4 pb-20 md:pt-8 md:pb-28" data-od-id="channels-cta">
        <div className="container-content">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">
              {t.channelsPage.suggestChannel.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{t.channelsPage.suggestChannel.body}</p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              {t.channelsPage.suggestChannel.ctaLabel}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
