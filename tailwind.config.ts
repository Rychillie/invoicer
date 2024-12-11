import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      }
    }
  },
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
} satisfies Config;
