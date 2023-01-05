/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["src/{components,layouts,pages}/**/*.{astro,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-radix-colors"),
    require("@tailwindcss/typography"),
  ],
};
