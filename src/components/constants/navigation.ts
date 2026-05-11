// Application URL (The Jam App)
export const APP_URL = "https://collab-stg.up.railway.app/";

// Site URL (This Landing Page)
export const SITE_URL = "https://jam-band-landing-page.vercel.app";

// Section items that will be in the dropdown
export const SECTION_MENU_ITEMS = [
  {
    label: 'Features',
    href: '/#features'
  },
  {
    label: 'Experience',
    href: '/#experience'
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
    label: 'Instruments',
    href: '/#instruments'
  },
  {
    label: 'Technical Requirements',
    href: '/#technical-requirements'
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
    label: 'What is COLLAB?',
    href: '/about#what-is-collab'
  },
  {
    label: 'Roadmap',
    href: '/about#roadmap'
  },
  {
    label: 'Tech Stack',
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
 