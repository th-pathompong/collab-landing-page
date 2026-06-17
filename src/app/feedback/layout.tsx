import type { Metadata } from 'next';
import { SITE_URL } from '@/components/constants/navigation';

export const metadata: Metadata = {
  title: "Feedback - murva | Help Us Improve",
  description: "Share your feedback, report bugs, or request new features for murva. Your input helps us create a better music collaboration experience for all musicians.",
  openGraph: {
    title: "Feedback - murva | Help Us Improve",
    description: "Share your feedback, report bugs, or request new features for murva. Your input helps us create a better music collaboration experience for all musicians.",
    type: "website",
    url: `${SITE_URL}/feedback`,
    siteName: "murva",
    locale: "en_US",
    images: [
      {
        url: "/images/og/cover-feedback.webp",
        width: 1200,
        height: 630,
        alt: "Feedback - murva | Help Us Improve",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feedback - murva | Help Us Improve",
    description: "Share your feedback, report bugs, or request new features for murva. Your input helps us create a better music collaboration experience for all musicians.",
    images: ["/images/og/cover-feedback.webp"],
    creator: "@murva_app",
    site: "@murva_app",
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 