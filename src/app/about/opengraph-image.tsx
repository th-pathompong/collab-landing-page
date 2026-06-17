import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "@/lib/og";

export const alt = "About murva — the collaborative music platform";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "The story behind murva",
    subtitle:
      "A real-time, AI-native music ecosystem — built to make creating together effortless.",
    eyebrow: "ABOUT",
  });
}
