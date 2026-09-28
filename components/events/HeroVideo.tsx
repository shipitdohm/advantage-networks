"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
  soundOnLabel: string;
  soundOffLabel: string;
}

// Phone footage is portrait, so it lives in a tall frame instead of being
// cropped into a wide banner.
export function HeroVideo({ src, poster, soundOnLabel, soundOffLabel }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) ref.current?.pause();
  }, []);

  function toggleSound() {
    const video = ref.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted) video.play().catch(() => undefined);
  }

  return (
    <div className="relative mx-auto w-full max-w-[300px] md:max-w-[340px] lg:ml-auto lg:mr-0">
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="aspect-[9/16] w-full rounded-card border border-border-strong bg-surface object-cover"
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={!muted}
        className="absolute bottom-3 right-3 inline-flex h-9 items-center gap-2 rounded-pill border border-white/20 bg-black/55 px-3.5 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-black/75"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          {muted ? (
            <path d="M22 9l-6 6M16 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M15.5 8.5a5 5 0 010 7M18.5 5.5a9 9 0 010 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
        {muted ? soundOnLabel : soundOffLabel}
      </button>
    </div>
  );
}
