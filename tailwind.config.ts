import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-figtree)', 'var(--font-anuphan)', 'sans-serif'],
        display: ['var(--font-figtree)', 'var(--font-anuphan)', 'sans-serif'],
        brand: ['var(--font-figtree)', 'var(--font-anuphan)', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#3D3A6B',
          light: '#9896c8',
          dark: '#2e2b52',
          50: '#EBEBF5',
          100: '#D8D0F0',
          200: '#B4AEDE',
          300: '#9896c8',
          400: '#7A77B0',
          500: '#5C5998',
          600: '#3D3A6B',
          700: '#2e2b52',
          800: '#1E2240',
          900: '#12152A',
          950: '#0D0F1A',
        },
        perform: {
          DEFAULT: '#D43F93',
          50: '#FBE9F4',
          100: '#F6CDE7',
          200: '#EFA3D2',
          300: '#E777BC',
          400: '#E25BA8',
          500: '#D43F93',
          600: '#B33179',
          700: '#8C2660',
          800: '#651B45',
          900: '#45142F',
        },
        amber: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
        arrange: {
          DEFAULT: '#2AA7BE',
          50: '#E7F6F9',
          100: '#C6EAF0',
          200: '#97D9E4',
          300: '#66C6D6',
          400: '#40BBD0',
          500: '#2AA7BE',
          600: '#22899C',
          700: '#1B6B7A',
          800: '#154E5A',
          900: '#103A43',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'music-bounce': 'music-bounce 0.6s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(61, 58, 107, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(61, 58, 107, 0.7)' },
        },
        'slide-in-left': {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          from: {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'music-bounce': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '25%': { transform: 'scale(1.1) rotate(5deg)' },
          '50%': { transform: 'scale(1.05) rotate(-3deg)' },
          '75%': { transform: 'scale(1.1) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 