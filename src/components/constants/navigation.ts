// Application URL (the murva app itself)
// Set NEXT_PUBLIC_APP_URL in .env to override; falls back to the beta domain.
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://murva-beta.themiddnight.dev";

// Site URL (this landing page)
// Set NEXT_PUBLIC_SITE_URL in .env to override (e.g. for preview deploys).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://murva.themiddnight.dev";

// Section items that will be in the dropdown
export const SECTION_MENU_ITEMS = [
  {
    label: 'How it Works',
    href: '/#how-it-works'
  },
  {
    label: 'Experience',
    href: '/#experience'
  },
  {
    label: 'Built for Creators',
    href: '/#use-cases'
  },
  {
    label: 'Instruments',
    href: '/#instruments'
  },
  {
    label: 'AI Features',
    href: '/#ai-features'
  },
  {
    label: 'Music Theory',
    href: '/#music-theory'
  },
  {
    label: 'Roadmap',
    href: '/#roadmap'
  },
  {
    label: 'Tech Specs',
    href: '/#technical-requirements'
  },
  {
    label: 'FAQ',
    href: '/#faq'
  },
  {
    label: 'Pricing',
    href: '/#pricing'
  }
] as const;

// About page section items for dropdown
export const ABOUT_SECTION_ITEMS = [
  {
    label: 'Our Story',
    href: '/about#our-story'
  },
  {
    label: 'What is murva?',
    href: '/about#what-is-murva'
  },
  {
    label: 'Roadmap',
    href: '/about#roadmap'
  },
  {
    label: 'Join the Mission',
    href: '/about#join-mission'
  },
  {
    label: 'Technology',
    href: '/about#tech-stack'
  }
] as const;

// Main navigation items
export const NAVIGATION_MENU_ITEMS = [
  {
    label: 'Home',
    href: '/',
    hasDropdown: true,
    dropdownItems: SECTION_MENU_ITEMS
  },
  {
    label: 'About',
    href: '/about',
    hasDropdown: true,
    dropdownItems: ABOUT_SECTION_ITEMS
  },
  { label: 'Instructions',
    href: '/instructions',
    hasDropdown: false
  },
  {
    label: 'Feedback',
    href: '/feedback',
    hasDropdown: false
  }
] as const; 
 