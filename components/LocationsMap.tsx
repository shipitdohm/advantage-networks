"use client";

import { GERMANY_LAND_DOTS } from "@/lib/data/germanyLandDots";

interface City {
  name: string;
  lat: number;
  lon: number;
  isPrimary?: boolean;
}

// Crops the projection to the DACH region — Germany plus a bit of Austria,
// Switzerland, and neighboring countries — since all three offices are
// German. Degree ranges are picked 1:1 with pixel ranges (no cos-latitude
// correction) since this is a decorative backdrop, not a survey map.
const LAT_MIN = 45.5;
const LAT_MAX = 55.5;
const LON_MIN = 2;
const LON_MAX = 18;
const VIEW_W = 1200;
const VIEW_H = 750;

function project(lat: number, lon: number) {
  const x = ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * VIEW_W;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * VIEW_H;
  return { x, y };
}

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const midX = (a.x + b.x) / 2;
  const midY = Math.min(a.y, b.y) - 60;
  return `M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`;
}

// Every city connected to every other city (a full mesh, not just a chain).
function pairs<T>(items: T[]): [T, T][] {
  const out: [T, T][] = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      out.push([items[i], items[j]]);
    }
  }
  return out;
}

export function LocationsMap({ cities }: { cities: City[] }) {
  const points = cities.map((c) => ({ ...c, ...project(c.lat, c.lon) }));
  const connections = pairs(points);

  return (
    <div
      className="relative h-[280px] w-full overflow-hidden rounded-card bg-surface md:h-[360px]"
      style={{
        maskImage: "radial-gradient(ellipse 90% 88% at center, black 55%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 88% at center, black 55%, transparent 100%)",
      }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {GERMANY_LAND_DOTS.map(([lat, lon], i) => {
          const { x, y } = project(lat, lon);
          return <circle key={i} cx={x} cy={y} r="2.6" fill="var(--fg)" opacity="0.16" />;
        })}

        {connections.map(([a, b]) => (
          <path
            key={`arc-${a.name}-${b.name}`}
            className="map-connection-line"
            d={arcPath(a, b)}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="3 7"
          />
        ))}

        {points.map((p) => (
          <g key={p.name}>
            <circle cx={p.x} cy={p.y} r={p.isPrimary ? 22 : 14} fill="var(--accent)" opacity="0.16">
              <animate
                attributeName="r"
                values={p.isPrimary ? "16;30;16" : "10;20;10"}
                dur="3.2s"
                repeatCount="indefinite"
              />
              <animate attributeName="opacity" values="0.22;0.05;0.22" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx={p.x} cy={p.y} r={p.isPrimary ? 7 : 4.5} fill="var(--accent)" />
            <circle
              cx={p.x}
              cy={p.y}
              r={p.isPrimary ? 7 : 4.5}
              fill="none"
              stroke="var(--bg)"
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>

      {points.map((p) => (
        <span
          key={`label-${p.name}`}
          className={`pointer-events-none absolute -translate-x-1/2 whitespace-nowrap font-display uppercase tracking-[0.1em] text-fg ${
            p.isPrimary ? "text-sm font-semibold" : "text-xs font-medium"
          }`}
          style={{
            left: `${(p.x / VIEW_W) * 100}%`,
            top: `${(p.y / VIEW_H) * 100}%`,
            marginTop: p.isPrimary ? "18px" : "14px",
          }}
        >
          {p.name}
          {p.isPrimary && <span className="text-accent"> · HQ</span>}
        </span>
      ))}
    </div>
  );
}
