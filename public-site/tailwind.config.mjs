/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ===========================================
        // PRIMARY BRAND COLORS - Edit these hex values to change theme
        // ===========================================

        // Primary Blue - #182B65
        primary: {
          DEFAULT: '#182B65',
          dark: '#0f1d45',
          light: '#2a4085',
        },

        // Accent Red - #BC2931
        accent: {
          DEFAULT: '#BC2931',
          dark: '#9a2229',
          light: '#d64550',
        },

        // Teal - #6AA0B1
        teal: {
          DEFAULT: '#6AA0B1',
          dark: '#5a8a9a',
          light: '#8bb6c3',
        },

        // Extended palette based on primary blue
        navy: {
          50: '#e8ecf4',
          100: '#c5cfe4',
          200: '#9fb0d2',
          300: '#7891bf',
          400: '#5b77b1',
          500: '#3e5da3',
          600: '#182B65',
          700: '#142452',
          800: '#0f1d45',
          900: '#0a1433',
        },
      },
      fontFamily: {
        heading: ['Lato', 'sans-serif'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [],
}
