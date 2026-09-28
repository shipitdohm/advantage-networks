import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "Advantage Networks — Elevate your Connectivity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static export renders this once at build time, so reading the logo file
// directly and inlining it as a data URI is simpler and more reliable than
// an <img src="/..."> fetch, which has no server to resolve against here.
export default function OpengraphImage() {
  const logoSvg = fs.readFileSync(path.join(process.cwd(), "public/brand/logo/Logo-White.svg"), "utf-8");
  const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0b11",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 900,
            height: 900,
            borderRadius: 9999,
            background: "radial-gradient(closest-side, rgba(39,0,255,0.38), rgba(39,0,255,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og ImageResponse, not a DOM <img> */}
          <img src={logoDataUri} width={320} height={150} alt="" />
          <div style={{ display: "flex", width: 64, height: 3, borderRadius: 2, backgroundColor: "#2700ff" }} />
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 600,
              letterSpacing: -0.5,
              color: "#f5f4f2",
            }}
          >
            Elevate your Connectivity
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
