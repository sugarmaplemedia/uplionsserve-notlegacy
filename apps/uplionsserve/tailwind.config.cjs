/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        colors: {
            'white': '#FFFFFF',
            'upls-light-orange': '#FFCC4E',
            'upls-orange': '#F15D3F',
            'cc-light-gold': '#FFFA87',
            'cc-gold': '#FFB100',
            'dad-light-blue': '#C1D7FF',
            'dad-blue': '#0055B7',
            'pks-light-pink': '#F1CF97',
            'pks-pink': '#EE2A7B',
            'hg-light-green': '#D6CE2E',
            'hg-green': '#39B54A'
        },
        fontFamily: {
            'sans': ['Sen', 'Arial', 'system-ui']
        },
		extend: {
            dropShadow: {
                'white': '0 10px 15px rgba(255,255,255,0.8)',
                'menu': '0 5px 20px #FFFFFF'
            }
        },
	},
	plugins: [
        require('tailwind-scrollbar-hide')
    ],
}
