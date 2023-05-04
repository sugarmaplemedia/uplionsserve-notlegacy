<script lang="ts">
    import NavLink from "./NavLink.svelte";

    export let page: string
    export let pageCheck: string
    export let href: string
    export let position: string

    let folderIsOpen = false
    const folderToggle = () => {
        folderIsOpen = !folderIsOpen
    }

    const handleClick = () => {
        folderToggle()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Enter" || e.key == " ") {
            e.preventDefault()
            folderToggle()
        }
    }

</script>

<li class="group
        relative">
    <div class="flex justify-center items-center gap-4 lg:block">
        <NavLink activePage={page == pageCheck} {href}>{pageCheck}</NavLink>
        <button
            on:click={handleClick}
            on:keydown={handleKeyDown}
            tabindex="0"
            class="
                w-6 h-6 p-1.5 lg:hidden
                rounded-md
                transition-all
                cursor-pointer
                {!folderIsOpen ? "-rotate-90 bg-navy fill-navy-light" : "rotate-0 bg-orange fill-orange-light"}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="-translate-y-[0.25rem]">
                    <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
        </button>
    </div>
    <ul class="
            pt-4 lg:m-16 lg:py-6
            lg:flex flex-col items-center justify-center gap-2
            lg:absolute -top-10 {position}
            lg:bg-white rounded-b-xl
            lg:invisible lg:opacity-0 group-hover:visible group-hover:opacity-100
            group-hover:translate-y-2
            transition-all origin-top
            {folderIsOpen ? 'visible scale-y-100 max-h-60 lg:max-h-none' : 'invisible scale-y-0 max-h-0 lg:max-h-none lg:scale-y-100 lg:visible'}">
        <slot />
    </ul>
</li>