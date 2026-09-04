"use client";

import { useEffect, useRef } from "react";

/**
 * Cratered, moon-surface-like halftone dot field for the hero backdrop.
 * Height comes from four summed sine octaves (a cheap value-noise stand-in)
 * so the terrain has bumps at several scales instead of one or two clean
 * bands. Very dark by design — only the raised terrain catches any light,
 * and that light is a blue tint baked into each dot's own color, so the
 * accent visibly rides along with the terrain as it drifts rather than
 * sitting on top as a separate glow.
 */
export function FabricWaves({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    let raf = 0;

    const ROW_SPACING = 6;
    const DOT_SPACING = 5;

    function resize() {
      const rect = canvas!.parentElement?.getBoundingClientRect();
      width = rect?.width ?? canvas!.clientWidth;
      height = rect?.height ?? canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // Four octaves of sine noise, each higher-frequency and lower-amplitude
    // than the last — a cheap fractal-noise stand-in that reads as an
    // organic, cratered surface rather than a couple of clean wave bands.
    const OCTAVES = [
      { fx: 0.0014, fy: 0.0011, speed: 0.4, phase: 0.0, amp: 1.0 },
      { fx: 0.0032, fy: -0.0027, speed: 0.65, phase: 1.7, amp: 0.55 },
      { fx: -0.0061, fy: 0.0052, speed: 0.9, phase: 3.4, amp: 0.3 },
      { fx: 0.0115, fy: 0.0098, speed: 1.2, phase: 5.1, amp: 0.16 },
    ];
    const AMP_SUM = OCTAVES.reduce((s, o) => s + o.amp, 0);

    function heightAt(x: number, y: number, t: number) {
      let total = 0;
      for (const o of OCTAVES) {
        total += Math.sin(x * o.fx + y * o.fy + t * o.speed + o.phase) * o.amp;
      }
      return total / AMP_SUM; // -1..1
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, width, height);

      for (let y = -ROW_SPACING; y < height + ROW_SPACING; y += ROW_SPACING) {
        for (let x = -DOT_SPACING; x < width + DOT_SPACING; x += DOT_SPACING) {
          const h = heightAt(x, y, t);
          const norm = (h + 1) / 2; // 0..1
          const lit = Math.pow(norm, 1.6); // dark overall, but peaks stay legible

          // A floor high enough to actually read as "present", not just
          // technically non-zero — independent of how the octaves happen to
          // be interfering right now. The field can dim, but it stays alive.
          const radius = 0.6 + lit * 1.4;
          const opacity = 0.1 + lit * 0.28;

          // Dark navy in the valleys, drifting up to a light accent-blue on
          // the raised terrain — the color itself IS the height map.
          const r = Math.round(18 + lit * 90);
          const g = Math.round(16 + lit * 100);
          const b = Math.round(50 + lit * 195);

          ctx!.fillStyle = `rgb(${r},${g},${b})`;
          ctx!.globalAlpha = opacity;
          ctx!.beginPath();
          ctx!.arc(x, y + h * 6, radius, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      ctx!.globalAlpha = 1;
    }

    resize();

    if (prefersReduced) {
      draw(0);
    } else {
      let start = performance.now();
      function loop(now: number) {
        const t = ((now - start) / 1000) * 0.3;
        draw(t);
        raf = requestAnimationFrame(loop);
      }
      raf = requestAnimationFrame(loop);
    }

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
