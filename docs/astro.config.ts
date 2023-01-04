import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tailwindcss-radix-colors.mrcai.dev",
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
