/**
 * OG image color constants — mirrors murva-brand/tokens.css dark theme values.
 *
 * Satori (next/og engine) renders JSX to an image without a DOM, so CSS custom
 * properties (var(--color-*)) don't resolve here. Use JS constants instead and
 * keep in sync with murva-brand/tokens.css when brand colors change.
 */

/** Brand scale */
const BRAND = {
  950: '#0D0F1A', // bg
  900: '#12152A', // surface
  800: '#1E2240',
  300: '#9896C8',
  100: '#D8D0F0',
} as const;

export const OG_COLORS = {
  // Backgrounds
  bg:              BRAND[950],
  bgGradientStart: '#161A33', // between brand-900 and brand-800 for depth
  bgGradientEnd:   '#0B0D16', // deeper dark for gradient tail

  // Text
  textPrimary:  '#FFFFFF',
  textWordmark: '#EDEBF7', // brand-50 region
  textSubtitle: '#A6A2CE', // brand-300/400 region
  textDomain:   '#8E8AB8', // brand-400 region
  textEyebrow:  '#C9C5EC', // brand-100/200 region

  // Room/brand accent (logo glow + accent bar — perform → brand → arrange)
  glowViolet:   '#8b5cf6',
  glowPink:     '#ee5bb7', // perform-adjacent
  glowCyan:     '#3fc4dc', // arrange-adjacent

  // Radial glow background (pre-composed rgba for Satori gradient strings)
  glowGradient: 'radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(238,91,183,0.12) 45%, rgba(13,15,26,0) 70%)',

  // Eyebrow pill (violet tint — glowViolet #8b5cf6 with opacity)
  pillBorder:     'rgba(139, 92, 246, 0.55)',
  pillBackground: 'rgba(139, 92, 246, 0.14)',

  // Card borders (brand-300 #9896C8 with opacity)
  cardBorderSubtle: 'rgba(152, 150, 200, 0.25)',
  cardBorderStrong: 'rgba(152, 150, 200, 0.40)',

  // Card shadows (pure black — intentional for OG depth, not theme overlay)
  shadowSubtle: 'rgba(0, 0, 0, 0.50)',
  shadowStrong: 'rgba(0, 0, 0, 0.65)',
} as const;
