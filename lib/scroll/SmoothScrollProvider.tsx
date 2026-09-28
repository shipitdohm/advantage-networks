"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Light inertial scroll — just enough smoothing to take the edge off native
 * scroll, without the heavy, laggy drag a longer duration/lower lerp gives.
 * No-ops under reduced-motion, falling back to native scrolling.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 0.7,
      easing: (t: number) => 1 - Math.pow(1 - t, 2),
      lerp: 0.16,
      wheelMultiplier: 1,
      touchMultiplier: 1.1,
    });

    // window.scrollY isn't reliably kept in sync while Lenis owns the scroll
    // loop, so anything that needs live scroll position (e.g. the header's
    // scrolled state) should listen for this instead of the native event.
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: scroll }));
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
