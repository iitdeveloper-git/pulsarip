import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0a1223 0%, #1c2c4a 100%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#c9a03e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "#0a1223",
            }}
          >
            P
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, maxWidth: 900, lineHeight: 1.15 }}>
          Protect Your Ideas. Strengthen Your Business.
        </div>
        <div style={{ fontSize: 26, marginTop: 24, color: "#aebdd9", maxWidth: 800 }}>{siteConfig.tagline}</div>
      </div>
    ),
    size,
  );
}
