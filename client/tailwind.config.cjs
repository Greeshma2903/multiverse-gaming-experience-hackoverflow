/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", ...defaultTheme.fontFamily.sans],
        head: ["Bungee Inline", "Aria", "sans-serif"],
        game: ["VT323", "JetBrains Mono", "consolas", "monospace"],
        "game-head": ["Silkscreen", "JetBrains Mono", "consolas", "monospace"],
      },
      colors: {
        darkBlue: "#261461",
        customPurple: "#4D267C",
        customPink: "#AB2CA0",
        brick: "#954140",
        peach: "#F26B79",
      },
    },
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: false,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
