/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: "'Jost', sans-serif;",
        niconne: "'Niconne', cursive;",
        rancho:"'Rancho', cursive;",
        playFair:" 'Playfair Display', serif;"
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

