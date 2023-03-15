<script lang="ts">
    import { debounce } from 'lodash-es'

// Functionality for opening/closing hamburger menu
/* ... */


// Functionality for bg color switch on scroll
type scrollClassesType = {
    header: string,
    image: string,
    before: string
}
let scrollClasses: scrollClassesType = {
    header: "py-6",
    image: "",
    before: "before:h-0"
}
let atTop: boolean = true
const handleScroll = () => {
    const scrollPos: number = window.scrollY
    if (scrollPos <= 50 && atTop) {
        atTop = false
        scrollClasses.header = "py-3"
        scrollClasses.image = "brightness-100 invert-0"
        scrollClasses.before = "before:h-full"
    } else if (scrollPos <= 50 && !atTop) {
        atTop = true
        scrollClasses.header = "py-6"
        scrollClasses.image = ""
        scrollClasses.before = "before:h-0"
    }
}
</script>

<svelte:window on:scroll={debounce(handleScroll, 100, {leading: true})} />
<header class="
    w-full px-4
    fixed z-20
    flex justify-between items-center
    transition-all
    {scrollClasses.header}
    
    before:w-full
    before:absolute before:left-0 before:bottom-0
    before:bg-white before:drop-shadow-menu
    {scrollClasses.before}
    before:transition-al before:duration-500">
    <div class="flex items-center gap-2 h-16">
        <img
            src="/graphics/brands/logo-lions-uplscolor.svg"
            alt="Lions Clubs International logo"
            class="
                 w-16
                brightness-0 invert
                {scrollClasses.image}"/>
        <img
            src="/graphics/brands/logo-upls-short-uplscolor.svg"
            alt="U.P. Lions Serve abbreviated logo"
            class="
                w-28
                brightness-0 invert
                {scrollClasses.image}"/>
    </div>
    <div class="fill-white">
        <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="15" rx="8"></rect>
            <rect y="30" width="100" height="15" rx="8"></rect>
            <rect y="60" width="100" height="15" rx="8"></rect>
        </svg>
    </div>
    <menu class="hidden">
        <a href={import.meta.env.PUBLIC_CHILDHOODCANCER_URL}>Childhood Cancer</a>
        <a href={import.meta.env.PUBLIC_DEFENSEAGAINSTDIABETES_URL}>Defense Against Diabetes</a>
        <a href={import.meta.env.PUBLIC_PROJECTKIDSIGHT_URL}>Project Kidsight</a>
        <a href={import.meta.env.PUBLIC_D10HUNGER_URL}>D10 Hunger</a>
    </menu>
</header>