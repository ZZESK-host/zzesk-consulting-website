import { ImageResponse } from "next/og";

export const alt = "ZZESK Consulting, custom AI dashboards and business automation.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#050810",
          color: "#f7fbff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            gap: 34,
            height: "100%",
            justifyContent: "space-between",
            padding: 58,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", fontSize: 42, fontWeight: 700, letterSpacing: 6 }}>
              <span style={{ color: "#9bbcff" }}>ZZ</span>ESK
            </div>
            <div style={{ color: "#95a3b8", fontSize: 18, fontWeight: 600, letterSpacing: 8 }}>CONSULTING</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 820 }}>
            <div style={{ color: "#9bbcff", fontSize: 22, fontWeight: 700, letterSpacing: 4 }}>
              CUSTOM AI DASHBOARDS FOR REAL BUSINESSES
            </div>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.02 }}>
              Custom dashboards. Connected AI agents. Less repetitive work.
            </div>
          </div>
          <div style={{ color: "#cbd5e5", fontSize: 24 }}>zzesk.com</div>
        </div>
      </div>
    ),
    size,
  );
}
