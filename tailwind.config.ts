import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAFAF8',
          ambient: '#F0F0EE',
          primary: '#6B8E6B',
          secondary: '#C1CFC0',
          textBase: '#2D2D2D',
          textMuted: '#7A7A7A',
          btnRedText: '#B85454',
          btnRedBorder: '#E0B0B0'
        }
      },
      fontFamily: {
        vibes: ['"Great Vibes"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        georgia: ['"Georgia"', '"Noto Serif"', 'serif']
      },
      boxShadow: {
        'soft-card': '0 20px 40px -15px rgba(0,0,0,0.05), 0 0 20px rgba(107, 142, 107, 0.03)',
        'btn-hover': '0 10px 25px -5px rgba(107, 142, 107, 0.3)'
      }
    }
  }
} satisfies Config
