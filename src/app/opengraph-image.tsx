import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "@/lib/og";

export const alt = "murva — Jam Live. Produce Together.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Jam Live. Produce Together.",
    subtitle: "Real-time collaborative music — as easy as sharing a link.",
    eyebrow: "PUBLIC BETA",
  });
}
