import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [solid(), tailwind()],
  site: "https://tailwindcss-radix-colors.mrcai.dev",
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
