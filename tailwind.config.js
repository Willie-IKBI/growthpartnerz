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
          primary: '#A42BF5',
          accent: '#F72585',
          indigo: '#4361EE',
          background: '#0C0C1E',
          card: 'rgba(255,255,255,0.05)',
          text: {
            primary: '#FFFFFF',
            secondary: '#CCCCCC',
          },
          ctaHover: '#D946EF',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '2xl': '1rem',
        full: '9999px',
      },
      boxShadow: {
        glass: '0 4px 32px 0 rgba(164,43,245,0.10)',
      },
      ringColor: {
        fuchsia: 'rgba(217,70,239,0.4)',
      },
    },
  },
  plugins: [],
}; 