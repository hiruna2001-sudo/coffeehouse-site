/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coffee-inspired color palette
        coffee: {
          primary: "#6F4E37",    // Coffee
          secondary: "#D2B48C",  // Tan
          background: "#FDF5E6", // Old Lace
          dark: "#3E2723",       // Dark brown
          light: "#EFEBE9",      // Light brown
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
