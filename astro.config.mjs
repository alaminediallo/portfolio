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
  redirects: {
    "/li": "/?utm_source=linkedin&utm_medium=bio",
    "/gh": "/?utm_source=github&utm_medium=profile",
    "/gl": "/?utm_source=gitlab&utm_medium=bio",
    "/dc": "/?utm_source=discord&utm_medium=bio",
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
