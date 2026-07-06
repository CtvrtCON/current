const headlessuiPlugin = require('@headlessui/tailwindcss')

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: 'var(--font-montserrat_alternates)',
        display: 'var(--font-montserrat_alternates)',
        mono: 'var(--font-montserrat_alternates)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        // http://sitehero.nl/uicolors/
        primary: {
          // #3eb0cf
          50: '#effafc',
          100: '#d6f1f7',
          200: '#b2e4ef',
          300: '#7dcfe3',
          400: '#3eb0cf',
          500: '#2594b5',
          600: '#217899',
          700: '#21627d',
          800: '#235167',
          900: '#214558',
          950: '#112c3b',
        },
        accent: {
          DEFAULT: '#217999',
          light: '#2b93b8',
          dark: '#1b6480',
          darker: '#164f64',
        },
        // Track colors from dev/mkt/dsn_symbol.svg. `*` = vivid (washes, rings),
        // `*-ink` = readable on white (text, borders).
        track: {
          dev: '#b2ff36',
          'dev-ink': '#4c7d10',
          mkt: '#ffab36',
          'mkt-ink': '#a55208',
          dsn: '#c9227c',
          'dsn-ink': '#a3156a',
        },
      },
      boxShadow: {
        card: '0 12px 40px -14px rgb(33 121 153 / 0.20)',
        glow: '0 0 90px -10px rgb(33 121 153 / 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(-2deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -2%, 0) scale(1.06)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6.5s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [headlessuiPlugin],
}
