"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden" data-od-id="not-found">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-texture absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg" />
      </div>

      <div className="container-content relative text-center">
        <span className="eyebrow">{t.notFoundPage.eyebrow}</span>
        <h1 className="mx-auto mt-5 max-w-xl font-display text-4xl font-medium tracking-[-0.02em] text-fg md:text-5xl">
          {t.notFoundPage.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">{t.notFoundPage.body}</p>

        <div className="mt-10">
          <Link href="/" className="btn-ghost">
            <span aria-hidden="true">←</span>
            {t.notFoundPage.backLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
