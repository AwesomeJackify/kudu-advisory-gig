// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/services": "/#services",
    "/podcast": "/podcast/1",
  },

  integrations: [react(), icon()],
  adapter: netlify({
    imageCDN: false,
  }),
  output: "server",
});
