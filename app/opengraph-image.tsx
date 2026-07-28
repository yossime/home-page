import { ImageResponse } from "next/og";

export const alt = "Yossi Mendelovitz — Full-Stack Developer, Jerusalem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#131722",
          color: "#e7e9ee",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#9aa0ad",
            letterSpacing: 4,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              backgroundColor: "#97a5ff",
            }}
          />
          FULL-STACK DEVELOPER — JERUSALEM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 1.05 }}>
            Yossi Mendelovitz
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 36,
              color: "#97a5ff",
            }}
          >
            Products that read left-to-right, and right-to-left.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9aa0ad" }}>
          github.com/yossime
        </div>
      </div>
    ),
    size
  );
}
