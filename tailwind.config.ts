import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FBFBF9',
          light: '#FBFBF9',
          surface: '#F5F4EF',
          dark: '#0E0E0E',
          'dark-surface': '#161616',
        },
        ink: {
          primary: '#111111',
          secondary: '#666664',
          'two-tone': '#9E9E9C',
          muted: '#8C8B88',
          'dark-main': '#F7F7F5',
          'dark-muted': '#8E8E89',
        },
        line: {
          hairline: '#E8E7E1',
          subtle: '#D2D1CA',
          dark: '#262624',
        },
        accent: {
          bronze: '#967D69',
          stone: '#C49B76',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Space Mono', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      transitionTimingFunction: {
        architectural: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        widest: '0.08em',
        technical: '0.12em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      screens: {
        'xs': '420px',
      },
    },
  },
  plugins: [],
};

export default config;
