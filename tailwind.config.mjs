/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": [
          "Bebas Neue",
          "Impact",
          "Arial Black",
          "Helvetica",
          "sans-serif",
        ],
        bebas: [
          "Bebas Neue",
          "Impact",
          "Arial Black",
          "Helvetica",
          "sans-serif",
        ],
      },
      colors: {
        gold: "#b9963d",
        "gold-light": "#caa342",
      },
    },
  },
  plugins: [],
};
