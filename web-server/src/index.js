import express from "express"
import { handler as uplsHandler } from "./uplionsserve/server/entry.mjs"
import { handler as ccHandler } from "./childhood-cancer/server/entry.mjs"

const app = express()
const PORT = process.env.PORT || 3000

function start() {
	// Serve UPLS website
	app.use("/", express.static("./uplionsserve/client/"))
	app.use(uplsHandler)

	// Serve CC website
	app.use("/childhood-cancer", express.static("./childhood-cancer/client/"))
	app.use(ccHandler)

	app.listen(PORT, () => {
		console.log(`⚡ [server]: Now listening on port ${PORT}!`)
	})
}

start()
