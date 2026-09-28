"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { photoSrc, type EventPhoto } from "@/lib/events/founderPadelTreff";

interface PhotoMarqueeProps {
  photos: EventPhoto[];
  alt: string;
  labels: { close: string; prev: string; next: string };
}

// Slow, endless strip of tiles (two copies back to back, translated -50%).
// Square-cornered tiles sit edge to edge at each photo's own aspect ratio. Clicking one
// opens it large; the strip pauses on hover/focus.
export function PhotoMarquee({ photos, alt, labels }: PhotoMarqueeProps) {
  const [open, setOpen] = useState<number | null>(null);
  const track = [...photos, ...photos];

  return (
    <>
      <div
        className="photo-marquee relative w-full overflow-hidden motion-reduce:overflow-x-auto"
      >
        <div className="photo-marquee-track flex w-max motion-reduce:[animation:none]">
          {track.map((photo, i) => {
            const isCopy = i >= photos.length;
            return (
              <button
                key={`${photo.id}-${i}`}
                type="button"
                onClick={() => setOpen(i % photos.length)}
                tabIndex={isCopy ? -1 : 0}
                aria-hidden={isCopy || undefined}
                aria-label={`${alt} ${(i % photos.length) + 1}`}
                className="block h-[240px] shrink-0 overflow-hidden bg-surface-2 md:h-[320px]"
                style={{ aspectRatio: `${photo.w} / ${photo.h}` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized responsive WebP */}
                <img
                  src={photoSrc(photo.id, 640)}
                  srcSet={`${photoSrc(photo.id, 640)} 640w, ${photoSrc(photo.id, 1400)} ${photo.w}w`}
                  sizes="(min-width: 768px) 256px, 192px"
                  width={photo.w}
                  height={photo.h}
                  loading="lazy"
                  decoding="async"
                  alt={isCopy ? "" : `${alt} ${(i % photos.length) + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
        {/* Solid dark fade at both ends */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent md:w-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent md:w-40"
        />
      </div>

      {open !== null && (
        <Lightbox photos={photos} index={open} alt={alt} labels={labels} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  );
}

function Lightbox({
  photos,
  index,
  alt,
  labels,
  onChange,
  onClose,
}: {
  photos: EventPhoto[];
  index: number;
  alt: string;
  labels: { close: string; prev: string; next: string };
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = photos.length;
  const step = useCallback((dir: 1 | -1) => onChange((index + dir + count) % count), [index, count, onChange]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, step]);

  const photo = photos[index];
  const navButton =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/75";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-10"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized responsive WebP */}
      <img
        key={photo.id}
        src={photoSrc(photo.id, 1400)}
        alt={`${alt} ${index + 1}`}
        className="max-h-full max-w-full rounded-card object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        ref={closeRef}
        type="button"
        aria-label={labels.close}
        onClick={onClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/75 md:right-8 md:top-8"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label={labels.prev}
        onClick={(e) => {
          e.stopPropagation();
          step(-1);
        }}
        className={`${navButton} left-3 md:left-8`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label={labels.next}
        onClick={(e) => {
          e.stopPropagation();
          step(1);
        }}
        className={`${navButton} right-3 md:right-8`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
