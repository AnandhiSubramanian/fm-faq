/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "project-palette": {
        white: "#ffffff",
        lightpink: "#f9f0ff",
        grayishpurple: "#8c6991",
        darkPurple: "#2f1533",
        myPurple: "#AD28EB",
      },
    },
    fontFamily: {
      "work-sans": ["Work Sans", "sans-serif"],
    },
  },
  plugins: [],
};
