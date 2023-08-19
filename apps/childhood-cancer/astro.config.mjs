import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  trailingSlash: "always",
  site: "https://uplionsserve.org",
  base: "/childhood-cancer",
  output: "server",
  adapter: node({
    mode: "middleware",
  }),
  build: {
    server: "../../web-server/src/childhood-cancer/server",
    client: "../../web-server/src/childhood-cancer/client",
  },
});
