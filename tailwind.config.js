/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}"],
  theme: {
    screens: {
      sm: { min: "100px", max: "767px" },

      md: { min: "768px", max: "1023px" },

      lg: { min: "1024px", max: "1279px" },
    },
    extend: {
      fontFamily: {
        Monstserrat: ["Monstserrat", "sans-serif"],
        Coiny: ["Coiny", "sans"],
      },
      listStyleImage: {
        checkmark: 'url("/assets/Subtract.png")',
      },
    },
  },
  plugins: [],
};
