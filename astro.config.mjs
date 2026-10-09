import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// Tailwind is wired through postcss.config.cjs (more reliable than the
// @astrojs/tailwind integration for honoring a custom `content` config).
export default defineConfig({
  site: "https://www.tahrioui.me",
  integrations: [
    sitemap({
      // Google uses lastmod to decide when to re-read a sitemap; the site is
      // only rebuilt when content changes, so the build date is accurate.
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
