import { buildConfig } from "payload/config"
import path from "path"

import Users from "./collections/Users"
import Media from "./collections/Media"

import Home from "./collections/cc/pages/Home"

export default buildConfig({
	serverURL: `${process.env.URL || "http://localhost"}:${
		process.env.PORT || 3001
	}`,
	admin: {
		user: Users.slug,
	},
	collections: [Users, Media],
	globals: [Home],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
})
