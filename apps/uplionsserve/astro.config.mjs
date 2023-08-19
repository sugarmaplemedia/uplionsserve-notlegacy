import { defineConfig } from "astro/config"
import node from "@astrojs/node"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), tailwind()],
	site: "https://uplionsserve.org",
	output: "server",
	adapter: node({
		mode: "middleware",
	}),
	build: {
		server: "../../web-server/src/uplionsserve/server",
		client: "../../web-server/src/uplionsserve/client",
	},
})
