import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  site: 'https://uplionsserve.org',
  output: "server",
  adapter: vercel(),
  integrations: [svelte(), tailwind()],
});