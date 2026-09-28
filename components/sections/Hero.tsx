"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { completeIntro, isIntroDone } from "@/lib/intro";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

// Intro timeline: background alone -> headline types in -> (beat) header
// fades in -> (beat) subtitle, then the buttons.
const START_DELAY_MS = 1100;
const HEADER_AFTER_TYPED_MS = 600;
const CONTENT_AFTER_HEADER_MS = 900;
const BUTTONS_AFTER_SUBTITLE_MS = 350;
const CHAR_DELAY_MS = 65;
const LINE_PAUSE_MS = 600;
const CARET_LINGER_MS = 1800;

// Types the headline in like a keyboard: the first clause, a beat, then the
// second. Every line reserves its full width up front (invisible copy) so
// nothing shifts while it types, and the full sentence stays in the DOM as
// screen-reader text.
function TypedHeadline({ text, instant, onDone }: { text: string; instant: boolean; onDone: () => void }) {
  const split = text.indexOf(", ");
  const lines = split === -1 ? [text] : [text.slice(0, split + 1), text.slice(split + 2)];
  const total = lines.reduce((sum, l) => sum + l.length, 0);
  const firstLen = lines[0].length;

  const [count, setCount] = useState(instant ? total : 0);
  const [caretVisible, setCaretVisible] = useState(!instant);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (instant || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      setCaretVisible(false);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= total; i++) {
      const delay = START_DELAY_MS + i * CHAR_DELAY_MS + (i > firstLen ? LINE_PAUSE_MS : 0);
      timers.push(setTimeout(() => setCount(i), delay));
    }
    const typedAt = START_DELAY_MS + total * CHAR_DELAY_MS + LINE_PAUSE_MS;
    timers.push(setTimeout(() => onDoneRef.current(), typedAt));
    timers.push(setTimeout(() => setCaretVisible(false), typedAt + CARET_LINGER_MS));
    return () => timers.forEach(clearTimeout);
  }, [instant, total, firstLen]);

  const caretLine = count <= firstLen ? 0 : 1;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {lines.map((line, li) => {
          const typed = li === 0 ? Math.min(count, firstLen) : Math.max(0, count - firstLen);
          return (
            <span key={li} className="relative mx-auto block w-fit whitespace-nowrap">
              <span className="invisible">{line}</span>
              <span className="absolute inset-0 text-left">
                {line.slice(0, typed)}
                {caretVisible && caretLine === li && <span className="caret" />}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}

export function Hero() {
  const { t } = useLanguage();
  // Only the first arrival on the landing page plays the intro; coming back
  // to it later via the nav shows everything immediately.
  const [instant] = useState(() => isIntroDone());
  const [showContent, setShowContent] = useState(instant);

  useEffect(() => {
    if (instant) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      completeIntro();
      setShowContent(true);
    }
  }, [instant]);

  function handleTyped() {
    setTimeout(completeIntro, HEADER_AFTER_TYPED_MS);
    setTimeout(() => setShowContent(true), HEADER_AFTER_TYPED_MS + CONTENT_AFTER_HEADER_MS);
  }

  const reveal = (delayMs: number) => ({
    className: `transition-all duration-700 ease-out ${showContent ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`,
    style: { transitionDelay: showContent ? `${delayMs}ms` : "0ms" },
  });

  return (
    <section className="relative overflow-hidden" data-od-id="hero">
      <div className="container-content relative flex min-h-screen flex-col items-center justify-center py-20 text-center">
        <h1
          className="font-display text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.03em] text-fg md:text-7xl"
          data-od-id="hero-headline"
        >
          <TypedHeadline text={t.hero.headline} instant={instant} onDone={handleTyped} />
        </h1>

        <p
          className={`mt-5 max-w-lg text-balance text-sm leading-relaxed text-muted md:text-base ${reveal(0).className}`}
          style={reveal(0).style}
          data-od-id="hero-subheadline"
        >
          {t.hero.subheadline}
        </p>

        <div
          className={`mt-7 flex flex-wrap items-center justify-center gap-3 ${reveal(BUTTONS_AFTER_SUBTITLE_MS).className}`}
          style={reveal(BUTTONS_AFTER_SUBTITLE_MS).style}
        >
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

      <Reveal className="container-content relative pb-24 pt-4 md:pb-32" data-od-id="hero-stats-bar">
        <dl
          className="mx-auto grid w-full max-w-4xl grid-cols-4 gap-x-5 gap-y-8 text-center sm:gap-x-8 md:gap-x-10"
          data-od-id="hero-stats"
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="transition-transform duration-200 ease-out hover:-translate-y-0.5">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-xl font-medium tracking-[-0.02em] text-fg sm:text-3xl md:text-5xl">
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  startValue={stat.startValue}
                  formatThousands={stat.formatThousands}
                />
              </dd>
              <p className="mt-2 text-[10px] text-muted sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
