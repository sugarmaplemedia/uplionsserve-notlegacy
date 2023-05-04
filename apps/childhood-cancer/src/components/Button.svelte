<script lang="ts">
    export let href: string = "#"
    export let alt: string = ""
    export let newtab: boolean = false
    export let width: "fit"|"fill" = "fit"
    export let styling: string = ""
</script>

<a
    {href}
    aria-label={alt}
    target={newtab ? "_blank noreferrer" : "_self"}
    class="group
        px-6 py-4 overflow-hidden
        relative inline-block
        bg-orange-light rounded-xl
        text-navy-dark font-sans font-semibold uppercase no-underline
        hover:scale-95
        transition-all
        {width == 'fit' ? 'w-fit' : 'w-full'}
        {styling}">
    <span class="
        relative z-10
        flex items-center justify-center gap-2
        group-hover:text-white text-sm">
        <slot />
    </span>
    <hr class="
        absolute left-0 bottom-0 z-0
        w-full h-1 group-hover:h-button
        bg-orange border-orange
        transition-all"/>
</a>