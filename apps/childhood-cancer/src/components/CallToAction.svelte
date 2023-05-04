<script lang="ts">
    import Button from '@components/Button.svelte';

    export let src: string = "https://via.placeholder.com/1920x1080.jpg"
    export let alt: string = "Placeholder image"
    export let button: { text: string, href: string } = { text: "CTA Button", href: "#" }
    
</script>

<section 
    class="
        w-full
        relative">
    <img 
        {src} {alt}
        class="
            w-full h-full
            absolute top-0 left-0 z-0
            object-cover
            brightness-65 saturate-75"/>
    <div class="
            min-w-[1600px]
            absolute z-10 overflow-x-hidden
            -translate-y-24 xl:translate-x-12 rotate-180 scale-110
            pointer-events-none select-none">
        <img src={`${import.meta.env.BASE_URL}/graphics/swooshes/Asset 2.svg`} alt="" />
    </div>
    <div class="
        max-w-[540px] lg:max-w-xl px-8 lg:px-0 pb-16 pt-36 mx-auto md:mx-0 lg:ml-24
        relative
        flex flex-col gap-4">
        <h2 class="text-white">
            <slot name="title">Title</slot>
        </h2>
        <div class="flex flex-col gap-4 mb-2">
            <slot />
        </div>
        <Button href={button.href}>{button.text}</Button>
    </div>
</section>