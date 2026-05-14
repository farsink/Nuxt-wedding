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
          bg: '#FBF7F1',
          ambient: '#F1E8DE',
          primary: '#8A1236',
          secondary: '#D8C5A8',
          textBase: '#521425',
          textMuted: '#6A4B4B',
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
        'soft-card': '0 20px 40px -15px rgba(70, 52, 31, 0.05), 0 0 20px rgba(201, 166, 107, 0.07)',
        'btn-hover': '0 10px 25px -5px rgba(201, 166, 107, 0.2)'
      }
    }
  }
} satisfies Config
