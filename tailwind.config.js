/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  fontFamily: {
    sans: ["MontserratVariable", "system-ui"],
    serif: ["Remingo", "serif"],
  },
  colors: {
    sunray: "#D9B959",
    almond: "#F2E2CE",
    raisin: "#29241E",
  },
},

  },
  plugins: [],
};
