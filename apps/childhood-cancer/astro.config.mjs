import { defineConfig } from 'astro/config'

import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte(),
        tailwind({ config: { applyBaseStyles: false } })
    ],
    base: "/childhood-cancer",
    outDir: "../uplionsserve/.vercel/output/static/childhood-cancer",
    trailingSlash: "never",
});