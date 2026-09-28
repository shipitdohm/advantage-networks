"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

// Only the brands we have an actual logo file for get an <img> — everything
// else in t.partners.names still renders as a text wordmark until its file
// arrives in /public/brand/partners.
const LOGO_FILES: Record<string, string> = {
  Razer: "razer-1.svg",
  Garmin: "garmin-2.svg",
  Canon: "canon-wordmark-1.svg",
  Samsung: "samsung-8.svg",
  Sony: "sony-logo-1.svg",
  Corsair: "corsair-2.svg",
  Skullcandy: "skullcandy.svg",
  Logitech: "logitech-2-1.svg",
  Dell: "dell-computer.svg",
  Lenovo: "lenovo-1.svg",
  Epson: "epson-3.svg",
  Google: "google-6.svg",
  Kingston: "kingston-3.svg",
  Kyocera: "kyocera-logo.svg",
  Microsoft: "microsoft-6.svg",
  "TP-Link": "tp-link.svg",
  SanDisk: "sandisk-logo-2007.svg",
  "D-Link": "d-link-logo-1.svg",
};

const BRAND_URLS: Record<string, string> = {
  Razer: "https://www.razer.com",
  Garmin: "https://www.garmin.com",
  Canon: "https://www.canon.com",
  Google: "https://www.google.com",
  Samsung: "https://www.samsung.com",
  SanDisk: "https://www.westerndigital.com/brand/sandisk",
  Sony: "https://www.sony.com",
  Corsair: "https://www.corsair.com",
  Skullcandy: "https://www.skullcandy.com",
  Microsoft: "https://www.microsoft.com",
  Logitech: "https://www.logitech.com",
  "D-Link": "https://www.dlink.com",
  Kyocera: "https://www.kyocera.com",
  Dell: "https://www.dell.com",
  Lenovo: "https://www.lenovo.com",
  "TP-Link": "https://www.tp-link.com",
  Epson: "https://www.epson.com",
  Kingston: "https://www.kingston.com",
};

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28" data-od-id="partners">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">
            {t.partners.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{t.partners.intro}</p>
        </Reveal>

        <Reveal
          delayMs={100}
          className="mt-14 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 md:grid-cols-6 md:gap-x-12 md:gap-y-14 lg:grid-cols-9"
        >
          {t.partners.names.map((name) => {
            const file = LOGO_FILES[name];
            const url = BRAND_URLS[name];
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-9 items-center justify-center"
              >
                {file ? (
                  // eslint-disable-next-line @next/next/no-img-element -- brand SVG, no optimization needed
                  <img
                    src={`/brand/partners/${file}`}
                    alt={name}
                    className="partner-logo h-full w-auto object-contain"
                  />
                ) : (
                  <span className="font-display text-lg font-medium tracking-tight text-white transition-opacity hover:opacity-75">
                    {name}
                  </span>
                )}
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
