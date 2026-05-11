// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://laminediallo.me",
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: "rewrite",
    },
    fallback: { fr: "en" },
  },
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.bunny(),
      weights: [400, 500, 600, 700],
      subsets: ["latin"],
      display: "swap",
    },
    {
      name: "Inknut Antiqua",
      cssVariable: "--font-inknut-antiqua",
      provider: fontProviders.bunny(),
      weights: [500, 600, 700],
      subsets: ["latin"],
      display: "swap",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
