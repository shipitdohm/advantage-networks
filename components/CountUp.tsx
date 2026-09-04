"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  decimals?: number;
  decimalSeparator?: string;
}

/**
 * Ticks a number up from 0 to `target` once it scrolls into view. Pass
 * `decimals` for values like 97.4 — defaults to whole numbers.
 */
export function CountUp({
  target,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  decimals = 0,
  decimalSeparator = ".",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

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
            setValue(Math.round(easeOutExpo(progress) * target * factor) / factor);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? value.toFixed(decimals).replace(".", decimalSeparator) : value}
      {suffix}
    </span>
  );
}
