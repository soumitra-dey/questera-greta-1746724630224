/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111111',
          light: '#1a1a1a',
          dark: '#0a0a0a'
        },
        secondary: {
          DEFAULT: '#ffffff',
          dark: '#f5f5f5'
        },
        accent: {
          DEFAULT: '#d4af37',
          light: '#e0b058',
          dark: '#b89530'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'accent': '0 8px 32px rgba(212, 175, 55, 0.3)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.15)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-fade': 'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8))',
        'glass-gradient': 'linear-gradient(120deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
      }
    },
  },
  plugins: [],
}