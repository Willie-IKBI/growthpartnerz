/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#A42BF5", // Electric Purple
          pink: "#F72585",
          blue: "#4361EE",
          dark: "#0C0C1E", // Background Dark
          light: "#FFFFFF", // White
          grey: "#CCCCCC", // Secondary Text
        },
        glass: {
          card: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(164, 43, 245, 0.4)",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem",
        glass: "1.5rem",
      },
      backgroundImage: {
        'gradient-glass': "linear-gradient(to right, #A42BF5, #F72585, #4361EE)",
        'hero-radial': "radial-gradient(ellipse at center, rgba(164,43,245,0.4), rgba(12,12,30,1))",
      },
    },
  },
  plugins: [],
}; 