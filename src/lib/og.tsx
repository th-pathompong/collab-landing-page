import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Shared config + renderer for the file-convention OG images (home, about, feedback). */
export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const ROOT = process.cwd();

const SHOTS = {
  arrange: "public/images/og/app-arrange.jpg",
  perform: "public/images/og/app-perform.jpg",
} as const;

interface OgOptions {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

export async function renderOgImage({
  title = "Jam Live. Produce Together.",
  subtitle = "Real-time collaborative music — as easy as sharing a link.",
  eyebrow = "PUBLIC BETA",
}: OgOptions = {}) {
  const [figtree400, figtree700, logoBuf, arrangeBuf, performBuf] =
    await Promise.all([
      readFile(join(ROOT, "src/assets/fonts/Figtree-400.ttf")),
      readFile(join(ROOT, "src/assets/fonts/Figtree-700.ttf")),
      readFile(join(ROOT, "public/images/logo/logo_color.svg")),
      readFile(join(ROOT, SHOTS.arrange)),
      readFile(join(ROOT, SHOTS.perform)),
    ]);

  const logoDataUri = `data:image/svg+xml;base64,${logoBuf.toString("base64")}`;
  const arrangeDataUri = `data:image/jpeg;base64,${arrangeBuf.toString("base64")}`;
  const performDataUri = `data:image/jpeg;base64,${performBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Figtree",
          backgroundColor: "#0D0F1A",
          backgroundImage:
            "linear-gradient(135deg, #161A33 0%, #0D0F1A 55%, #0B0D16 100%)",
        }}
      >
        {/* Brand gradient glow */}
        <div
          style={{
            position: "absolute",
            top: "-220px",
            left: "-160px",
            width: "720px",
            height: "720px",
            borderRadius: "9999px",
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(238,91,183,0.12) 45%, rgba(13,15,26,0) 70%)",
          }}
        />

        {/* Arrange room — stacked behind, peeking out top/right */}
        <div
          style={{
            position: "absolute",
            top: "58px",
            left: "735px",
            width: "680px",
            display: "flex",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(152,150,200,0.25)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={arrangeDataUri} width={680} alt="" />
        </div>

        {/* Perform room — in front */}
        <div
          style={{
            position: "absolute",
            top: "232px",
            left: "628px",
            width: "760px",
            display: "flex",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(152,150,200,0.4)",
            boxShadow: "0 45px 100px rgba(0,0,0,0.65)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={performDataUri} width={760} alt="" />
        </div>

        {/* Left content column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            width: "650px",
            height: "100%",
            padding: "72px",
          }}
        >
          {/* Wordmark */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoDataUri} height={52} alt="" />
            <span
              style={{
                marginLeft: "16px",
                fontSize: "46px",
                fontWeight: 700,
                color: "#EDEBF7",
                letterSpacing: "-0.5px",
              }}
            >
              murva
            </span>
          </div>

          {/* Eyebrow pill */}
          {eyebrow ? (
            <div style={{ display: "flex", marginBottom: "22px" }}>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  color: "#C9C5EC",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(139,92,246,0.55)",
                  backgroundColor: "rgba(139,92,246,0.14)",
                }}
              >
                {eyebrow}
              </span>
            </div>
          ) : null}

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: "62px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              marginTop: "22px",
              fontSize: "26px",
              fontWeight: 400,
              lineHeight: 1.35,
              color: "#A6A2CE",
              maxWidth: "500px",
            }}
          >
            {subtitle}
          </div>

          {/* Accent bar + domain */}
          <div style={{ display: "flex", alignItems: "center", marginTop: "44px" }}>
            <div
              style={{
                width: "54px",
                height: "6px",
                borderRadius: "9999px",
                marginRight: "18px",
                backgroundImage:
                  "linear-gradient(90deg, #ee5bb7 0%, #8b5cf6 50%, #3fc4dc 100%)",
              }}
            />
            <span style={{ fontSize: "22px", fontWeight: 600, color: "#8E8AB8" }}>
              murva.themiddnight.dev
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Figtree", data: figtree400, weight: 400, style: "normal" },
        { name: "Figtree", data: figtree700, weight: 700, style: "normal" },
      ],
    },
  );
}
