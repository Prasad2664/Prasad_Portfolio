/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#dbe7fe',
          200: '#bfd6fe',
          300: '#93bafd',
          400: '#6094fa',
          500: '#3b6ff6',
          600: '#2350eb',
          700: '#1d3dd8',
          800: '#1e33af',
          900: '#1e2f8a',
          950: '#161d54',
        },
        surface: {
          light: '#f6f8fc',
          dark: '#0b1220',
        },
        panel: {
          light: '#ffffff',
          dark: '#111a2e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px rgba(30, 51, 175, 0.06)',
        cardHover: '0 12px 30px rgba(30, 51, 175, 0.14)',
        sidebar: '2px 0 24px rgba(15, 23, 42, 0.04)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
