<script lang="ts">
    export let href: string|null = null
    export let text: string
    export let small: boolean = false

    let target: string = "_self"
    if (href && href.includes("http")) target = "_blank"
</script>

<a {href} {target} aria-label="button" class="
        relative
        {small ? 'w-40' : 'w-52'} p-3 bg-gradient-to-br from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0)]
        font-black uppercase {small ? 'text-base' : 'text-lg'} text-center
        {href ? '' : 'opacity-70 cursor-not-allowed'}

        before:absolute before:top-0 before:left-0
        before:w-full before:h-full
        before:border-[1px] before:border-solid before:border-white
        before:translate-x-[-6px] before:translate-y-[3px]
        {href ? 'hover:before:translate-x-0 hover:before:translate-y-0' : 'hover:before:translate-x-[6px] hover:before:translate-y-[-3px]'}
        before:duration-500 before:ease-[cubic-bezier(.61, .16, .07, 1.46)]

        after:absolute after:top-0 after:left-0
        after:w-full after:h-full
        after:border-[1px] after:border-solid after:border-white
        after:translate-x-[6px] after:translate-y-[-3px]
        {href ? 'hover:after:translate-x-0 hover:after:translate-y-0' : 'hover:after:translate-x-[-6px] hover:after:translate-y-[3px]'}
        after:duration-500 after:ease-[cubic-bezier(.61, .16, .07, 1.46)]">{href ? text : "Coming soon" }</a>