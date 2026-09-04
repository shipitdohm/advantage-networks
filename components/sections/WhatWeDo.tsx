"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

const ICON_META = [
  {
    color: "#2dd4bf",
    path: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    color: "#fb7185",
    path: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    color: "#f5a623",
    path: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </>
    ),
  },
  {
    color: "#95f496",
    path: (
      <>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </>
    ),
  },
];

export function WhatWeDo() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28" data-od-id="what-we-do">
      <div className="container-content">
        <Reveal>
          <span className="eyebrow">{t.whatWeDo.eyebrow}</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-[-0.01em] text-fg md:text-4xl">
            {t.whatWeDo.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{t.whatWeDo.summary}</p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 md:grid-cols-4">
          {t.whatWeDo.points.map((point, i) => {
            const icon = ICON_META[i % ICON_META.length];
            return (
              <Reveal key={point.title} delayMs={i * 150} className="bg-surface">
                <div
                  className="group h-full p-8 transition-colors duration-300"
                  style={{ "--item-color": icon.color } as React.CSSProperties}
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${icon.color}20` }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={icon.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {icon.path}
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-fg transition-colors duration-300 group-hover:text-[var(--item-color)]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{point.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
