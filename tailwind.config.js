/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
    './docs/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F121A',
          blue: '#4C00FF',
          pink: '#FF00C8',
          purple: '#8A00FF',
          light: '#F5F6FA',
        },
        'brand-blue': '#4C00FF',
        'brand-pink': '#FF00C8',
        'brand-purple': '#8A00FF',
        'brand-dark': '#0F121A',
        'brand-light': '#F5F6FA',
      },

      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif'],
      },

      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #4C00FF 0%, #FF00C8 50%, #8A00FF 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
      },

      fontSize: {
        'hero-xl': ['3rem', { lineHeight: '1.2' }],
        'hero-2xl': ['4rem', { lineHeight: '1.2' }],
      },

      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },

      borderRadius: {
        '2xl': '1rem',
        full: '9999px',
      },

      boxShadow: {
        glass: '0 8px 30px rgba(255, 255, 255, 0.05)',
      },

      ringColor: {
        fuchsia: 'rgba(217,70,239,0.4)',
      },

      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
