export const config = {
    // Only run the middleware on the admin route
    matcher: [
        '/childhoodcancer', '/childhoodcancer/:path', '/cc', '/cc/:path', '/itrekkedtheup',
        '/dad',
    ],
};

export default function middleware(request: Request): Response {
    const url = new URL(request.url);

    url.pathname = url.pathname
        .replace(/\/(cc|childhoodcancer|itrekkedtheup)/, '/childhood-cancer')
        .replace(/\/dad/, '/defenseagainstdiabetes')

    return Response.redirect(url.toString());
}