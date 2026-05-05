// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import umami from "@yeskunall/astro-umami";
import { loadEnv } from "vite";

const { PUBLIC_UMAMI_WEBSITE_ID } = loadEnv(
  process.env.NODE_ENV ?? "production",
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: "https://laminediallo.me",
  integrations: PUBLIC_UMAMI_WEBSITE_ID
    ? [
        umami({
          id: PUBLIC_UMAMI_WEBSITE_ID,
          endpointUrl: "https://bip.laminediallo.me",
          trackerScriptName: "bip",
          domains: ["laminediallo.me"],
          autotrack: true,
        }),
      ]
    : [],
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
