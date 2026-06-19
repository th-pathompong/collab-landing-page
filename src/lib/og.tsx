import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { OG_COLORS } from "./og-colors";

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
          backgroundColor: OG_COLORS.bg,
          backgroundImage:
            `linear-gradient(135deg, ${OG_COLORS.bgGradientStart} 0%, ${OG_COLORS.bg} 55%, ${OG_COLORS.bgGradientEnd} 100%)`,
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
            backgroundImage: OG_COLORS.glowGradient,
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
            border: `1px solid ${OG_COLORS.cardBorderSubtle}`,
            boxShadow: `0 30px 70px ${OG_COLORS.shadowSubtle}`,
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
            border: `1px solid ${OG_COLORS.cardBorderStrong}`,
            boxShadow: `0 45px 100px ${OG_COLORS.shadowStrong}`,
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
                color: OG_COLORS.textWordmark,
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
                  color: OG_COLORS.textEyebrow,
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  border: `1px solid ${OG_COLORS.pillBorder}`,
                  backgroundColor: OG_COLORS.pillBackground,
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
              color: OG_COLORS.textPrimary,
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
              color: OG_COLORS.textSubtitle,
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
                  `linear-gradient(90deg, ${OG_COLORS.glowPink} 0%, ${OG_COLORS.glowViolet} 50%, ${OG_COLORS.glowCyan} 100%)`,
              }}
            />
            <span style={{ fontSize: "22px", fontWeight: 600, color: OG_COLORS.textDomain }}>
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
