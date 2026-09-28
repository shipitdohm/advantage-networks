"use client";

import { photoSrc, type EventPhoto } from "@/lib/events/founderPadelTreff";

interface PhotoMarqueeProps {
  photos: EventPhoto[];
  alt: string;
}

// Slow, endless strip of square-cornered tiles sitting edge to edge (two
// copies back to back, translated -50%). Purely decorative motion: it never
// pauses and the photos are not interactive.
export function PhotoMarquee({ photos, alt }: PhotoMarqueeProps) {
  const track = [...photos, ...photos];

  return (
    <div className="photo-marquee relative w-full overflow-hidden motion-reduce:overflow-x-auto">
      <div className="photo-marquee-track flex w-max motion-reduce:[animation:none]">
        {track.map((photo, i) => {
          const isCopy = i >= photos.length;
          return (
            <div
              key={`${photo.id}-${i}`}
              aria-hidden={isCopy || undefined}
              className="h-[240px] shrink-0 overflow-hidden bg-surface-2 md:h-[320px]"
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
                draggable={false}
                className="h-full w-full select-none object-cover"
              />
            </div>
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
  );
}
