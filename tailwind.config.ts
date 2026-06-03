import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B1A5E',
          50: '#EEEEF7',
          100: '#D5D4ED',
          200: '#A8A6D6',
          300: '#7A78C0',
          400: '#4C4AA0',
          500: '#34337C',
          600: '#23226A',
          700: '#1B1A5E',
          800: '#13124A',
          900: '#0B0A30',
        },
        indigo: {
          DEFAULT: '#4F46E5',
          50: '#EEF0FF',
          100: '#E0E2FF',
          200: '#C7C9FF',
          300: '#A5A7FF',
          400: '#7C76EE',
          500: '#4F46E5',
          600: '#3F37C0',
          700: '#3128A0',
          800: '#241B82',
          900: '#191164',
        },
        violet: {
          DEFAULT: '#6D5FF5',
          400: '#8D82F8',
          500: '#6D5FF5',
          600: '#5246D8',
        },
        mist: '#EEF0FF',
        slate: {
          DEFAULT: '#3D3D52',
          ink: '#1F1F33',
          mute: '#6B6B82',
          line: '#E4E4EE',
        },
        cream: '#FAFBFD',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
        narrow: '880px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(27, 26, 94, 0.08)',
        lift: '0 18px 40px -12px rgba(27, 26, 94, 0.25)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
