import { OG_SIZE, OG_CONTENT_TYPE, renderOgImage } from "@/lib/og";

export const alt = "Help shape murva — share your feedback";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: "Help shape murva",
    subtitle:
      "Tell us what to build next. Your feedback steers the beta.",
    eyebrow: "FEEDBACK",
  });
}
