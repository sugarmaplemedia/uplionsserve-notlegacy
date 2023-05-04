<script lang="ts">
    export let activePage: boolean
    export let href: string
    export let dropdown: boolean = false

</script>

<li 
    on:click on:keypress
    class="
        -mb-2 lg:pt-1
        flex justify-center
        relative z-10
        text-3xl lg:text-xl xl:text-2xl xl:leading-7
        {dropdown && "font-bold lg:w-[16rem] lg:font-medium xl:w-[20rem]"}
        {!dropdown && !activePage ? "md:hover:translate-y-0.5 md:transition-all" : ""}">
    <a 
        href={activePage ? "#top" : href}
        class="
            text-center no-underline
            {!dropdown
                ? `after:block after:h-0.5 after:mx-2 prefers
                   after:rounded-full
                   after:transition-all`
                : `w-full px-6 pt-4 pb-2
                   flex justify-center
                   rounded-md hover:bg-navy-super-light
                   transition-all duration-75`}
            {activePage
                ? `text-orange after:bg-orange after:scale-x-[1.25]`
                : `after:bg-navy-light after:scale-x-0 md:hover:after:scale-x-100`}">
        <slot />
    </a>
</li>