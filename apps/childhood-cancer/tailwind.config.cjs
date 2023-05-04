/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#FFF',
          'offwhite': '#FBFBFB',
          'black': '#000',
          'orange': '#FFB419',
          'orange-light': '#FFE3A6',
          'orange-super-light': '#FFF7E6',
          'navy': '#4B6496',
          'navy-super-light': '#F0F5FE',
          'navy-light': '#85A7EB',
          'navy-dark': '#1F3155',
          'red': '#FF0000'
        },
        fontFamily: {
            sans: ['URW-Din', 'Arial'],
            menu: ['stencil-creek', 'Arial'],
            titles: ['grueber', 'Arial']
        },
        extend: {
            backgroundImage: {
                'landing-hero': "url('/images/landing-hero.jpg')"
            },
            brightness: {
                65: '.65'
            },
            dropShadow: {
                'blue': '0 2px 5px rgba(31, 49, 85, 0.20)',
                'blue-hover': '0 6px 8px rgba(31, 49, 85, 0.10)'
            },
            minWidth: {
                '2400px': '1800px'
            },
            rotate: {
                '9': '11deg',
            },
            saturate: {
                75: '.75'
            },
            spacing: {
                'button': '3.25rem',
                '22': '5.5rem',
                'programs': '10.5rem',
                'resources': '21rem',
            },
            scale: {
                '102': '1.02'
            },
            transitionTimingFunction: {
                'bounce': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
            },
        }
    },
	plugins: [],
}
