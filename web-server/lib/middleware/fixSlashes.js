export default function (req, res, next) {
	// Remove any double slashes from Astro errors
	req.url = req.url.replace(/([^:]\/)\/+/g, "$1")

	// Add a trailing slash
	req.url.substring(-1) === "/" ? req.url : `${req.url}/`

	console.log(req.url)

	next()
}
