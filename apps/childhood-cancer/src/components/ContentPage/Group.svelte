<script lang="ts">
    export let row: boolean = false
    export let width: "small"|"base"|"large"|"full" = "base"
    export let style: string = ""
</script>

<section class="
        w-full {width != 'full' && 'px-8 sm:px-16'} max-w-2xl 
        { width == 'small' ? 'lg:max-w-2xl'
        : width == 'base' ? 'lg:max-w-3xl' 
        : width == 'large' ? 'lg:max-w-4xl'
        : 'max-w-full' }
        relative z-20
        flex {row ? "flex-row" : "flex-col"} items-center gap-4 {style}">
    <slot />
</section>