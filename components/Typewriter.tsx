"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  startDelayMs?: number;
  charDelayMs?: number;
  className?: string;
}

/**
 * Reveals `text` one character at a time once it scrolls into view, like it's
 * being typed live. `startDelayMs` staggers multiple instances against each other.
 */
export function Typewriter({ text, startDelayMs = 0, charDelayMs = 22, className }: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          let timeouts: ReturnType<typeof setTimeout>[] = [];
          const startTimeout = setTimeout(() => {
            for (let i = 1; i <= text.length; i++) {
              timeouts.push(setTimeout(() => setCount(i), i * charDelayMs));
            }
          }, startDelayMs);
          timeouts.push(startTimeout);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [text, startDelayMs, charDelayMs]);

  return (
    <span ref={ref} className={className}>
      {text.slice(0, count)}
    </span>
  );
}
