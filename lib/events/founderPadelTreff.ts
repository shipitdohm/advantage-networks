const BASE = "/events/founder-padel-treff";

export const FPT_VIDEO = `${BASE}/hero.mp4`;
export const FPT_POSTER = `${BASE}/img/hero-poster.webp`;

// Curated order; w/h are the pixel size of the -1400 file (sets tile width
// and prevents layout shift). Files live in public/events/founder-padel-treff/img.
export const FPT_PHOTOS = [
  { id: "01", w: 1400, h: 1750 },
  { id: "02", w: 1024, h: 1024 },
  { id: "03", w: 1400, h: 1750 },
  { id: "04", w: 1400, h: 1750 },
  { id: "05", w: 1400, h: 1750 },
  { id: "06", w: 1400, h: 1750 },
  { id: "07", w: 1400, h: 1750 },
  { id: "08", w: 1067, h: 1600 },
  { id: "09", w: 1400, h: 1750 },
  { id: "10", w: 1067, h: 1600 },
  { id: "11", w: 1400, h: 1750 },
  { id: "12", w: 1067, h: 1600 },
  { id: "13", w: 1067, h: 1600 },
  { id: "14", w: 1067, h: 1600 },
  { id: "15", w: 1400, h: 1750 },
  { id: "16", w: 1400, h: 1750 },
  { id: "17", w: 1400, h: 1750 },
];

export type EventPhoto = (typeof FPT_PHOTOS)[number];

export const photoSrc = (id: string, size: 640 | 1400) => `${BASE}/img/${id}-${size}.webp`;
