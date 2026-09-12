"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  decimals?: number;
  decimalSeparator?: string;
  /** Animate from this value instead of 0 — pass a value above `target` to count down. */
  startValue?: number;
  /** Once the animating value reaches 1000+, display it divided by 1000 with a "K" appended. */
  formatThousands?: boolean;
}

/**
 * Ticks a number from `startValue` (default 0) to `target` once it scrolls
 * into view. Pass `decimals` for values like 97.4 — defaults to whole
 * numbers. Pass a `startValue` above `target` to count down instead of up.
 */
export function CountUp({
  target,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  decimals = 0,
  decimalSeparator = ".",
  startValue = 0,
  formatThousands = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const start = performance.now();
          const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

          const factor = Math.pow(10, decimals);

          function tick(now: number) {
            const progress = Math.min((now - start) / durationMs, 1);
            const eased = startValue + (target - startValue) * easeOutExpo(progress);
            setValue(Math.round(eased * factor) / factor);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs, decimals, startValue]);

  const showAsThousands = formatThousands && Math.abs(value) >= 1000;
  const displayValue = showAsThousands
    ? `${(value / 1000).toFixed(decimals).replace(".", decimalSeparator)}K`
    : decimals > 0
      ? value.toFixed(decimals).replace(".", decimalSeparator)
      : value;

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
