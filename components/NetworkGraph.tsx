"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  accent: boolean;
}

const NODE_COUNT = 46;
const LINK_DISTANCE = 150;
const CURSOR_RADIUS = 220;

/**
 * Ambient node/graph canvas for the hero — a restrained nod to the Helium
 * Network origin. Nodes drift slowly; links brighten near the cursor.
 * Renders a single static frame when the user prefers reduced motion.
 */
export function NetworkGraph({ className = "" }: { className?: string }) {
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
    let nodes: Node[] = [];
    let mouse = { x: -9999, y: -9999 };
    let raf = 0;

    const accentColor = "39, 0, 255"; // #2700ff
    const lineColor = "255, 255, 255"; // near-white, matches --fg on the dark canvas

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

    function seed() {
      const count = Math.max(18, Math.min(NODE_COUNT, Math.floor((width * height) / 26000)));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() < 0.12 ? 2.6 : 1.6,
        accent: i % 11 === 0,
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > LINK_DISTANCE) continue;

          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const mdx = midX - mouse.x;
          const mdy = midY - mouse.y;
          const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy);
          const proximityBoost = mouseDist < CURSOR_RADIUS ? 1 - mouseDist / CURSOR_RADIUS : 0;

          const baseOpacity = (1 - dist / LINK_DISTANCE) * 0.16;
          const opacity = baseOpacity + proximityBoost * 0.28;
          const useAccent = (a.accent || b.accent) && proximityBoost > 0.15;

          ctx!.strokeStyle = `rgba(${useAccent ? accentColor : lineColor}, ${opacity.toFixed(3)})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      for (const n of nodes) {
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const boost = dist < CURSOR_RADIUS ? 1 - dist / CURSOR_RADIUS : 0;
        ctx!.fillStyle = n.accent
          ? `rgba(${accentColor}, ${(0.55 + boost * 0.4).toFixed(3)})`
          : `rgba(${lineColor}, ${(0.28 + boost * 0.3).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r + boost * 1.2, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handlePointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    seed();

    if (prefersReduced) {
      step();
      cancelAnimationFrame(raf);
      // draw one static frame only
      raf = 0;
    } else {
      step();
      canvas.addEventListener("pointermove", handlePointerMove);
      canvas.addEventListener("pointerleave", handlePointerLeave);
    }

    const handleResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
