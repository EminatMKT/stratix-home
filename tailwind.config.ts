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
        teal: {
          DEFAULT: '#5CC6CD',
          50: '#EAF7F8',
          100: '#CEEEF0',
          200: '#A6E0E4',
          300: '#7ED3D8',
          400: '#5CC6CD',
          500: '#3DB6BE',
          600: '#2A9098',
          700: '#1F6B71',
        },
        deep: {
          DEFAULT: '#065e55',
          50: '#E6F0EF',
          100: '#B7D5D2',
          500: '#0A776C',
          700: '#065e55',
          900: '#03342F',
        },
        slate: {
          DEFAULT: '#4A5A64',
          ink: '#1F2A30',
          mute: '#6B7A84',
          line: '#E2E7EA',
        },
        accent: {
          DEFAULT: '#F25E0D',
          dark: '#C94B07',
          light: '#FFE5D4',
        },
        cream: '#FAFBFB',
        soft: '#CEEEF0',
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
        card: '0 4px 24px rgba(6, 94, 85, 0.08)',
        lift: '0 18px 40px -12px rgba(6, 94, 85, 0.25)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
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
