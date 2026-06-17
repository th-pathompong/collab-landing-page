import type { Metadata } from "next";
import { Figtree, Anuphan } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/components/constants/navigation";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const anuphan = Anuphan({
  subsets: ["latin", "thai"],
  variable: "--font-anuphan",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "murva | Real-time Collaborative Music Platform",
    template: "%s | murva",
  },
  description:
    "Create music together in real-time with virtual instruments, ultra-low latency voice chat, and synchronized metronome. Perfect for remote jam sessions, virtual music brainstorming, and collaborative music production. No installation required - jam directly in your browser.",
  keywords: [
    "music collaboration",
    "virtual instruments",
    "real-time music",
    "jam session",
    "online music",
    "web audio",
    "virtual jamming",
    "music production",
    "collaborative music",
    "remote music",
    "digital audio workstation",
    "DAW",
    "music software",
    "online collaboration",
    "music technology",
    "web-based music",
    "browser music",
    "real-time audio",
    "music streaming",
    "virtual band",
    "online rehearsal",
    "music education",
    "music learning",
    "interactive music",
    "social music",
    "creative collaboration",
    "music innovation",
    "cross-platform music",
    "accessible music",
    "inclusive music",
    "music democratization",
    "WebRTC music",
    "synchronized metronome",
    "step sequencer",
    "MIDI support",
    "Tone.js",
    "collaborative jamming",
    "virtual music studio",
  ],
  authors: [{ name: "murva Team" }],
  creator: "murva Team",
  publisher: "murva",
  category: "Music Application",
  classification: "Music Software",
  other: {
    "application-name": "murva",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "murva",
    "msapplication-TileColor": "#3D3A6B",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#3D3A6B",
  },
  openGraph: {
    title: "murva | Real-time Collaborative Music Platform",
    description:
      "Create music together in real-time with virtual instruments, ultra-low latency voice chat, and synchronized metronome. Perfect for remote jam sessions, virtual music brainstorming, and collaborative music production. No installation required - jam directly in your browser.",
    type: "website",
    url: SITE_URL,
    siteName: "murva",
    locale: "en_US",
    images: [
      {
        url: "/images/og/cover-index.webp",
        width: 1200,
        height: 630,
        alt: "murva | Real-time Collaborative Music Platform - Virtual instruments, voice chat, synchronized metronome",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "murva | Real-time Collaborative Music Platform",
    description:
      "Create music together in real-time with virtual instruments, ultra-low latency voice chat, and synchronized metronome. No installation required - jam directly in your browser.",
    images: ["/images/og/cover-index.webp"],
    creator: "@murva_app",
    site: "@murva_app",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "JZvGAackfa_KIrMmkf0uFmBYnU1XWEE0VBSkJYNhsJw",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "murva",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${figtree.variable} ${anuphan.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <NavigationWrapper />
            <main className="flex flex-col flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
