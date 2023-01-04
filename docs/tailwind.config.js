/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["src/{components,layouts,pages}/**/*.{astro,tsx}"],
  darkMode: "class",
  plugins: [require("tailwindcss-radix-colors")],
};
