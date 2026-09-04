"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  "data-od-id"?: string;
}

/**
 * Scroll-triggered fade/slide-up reveal. One decisive, restrained motion
 * moment reused everywhere instead of a different animation per section.
 */
export function Reveal({ children, className = "", delayMs = 0, as = "div", ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Tag = as as any;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
