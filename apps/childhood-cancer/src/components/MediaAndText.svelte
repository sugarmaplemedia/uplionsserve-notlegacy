<script lang="ts">
    import Headline from "@components/_fragments/Headline.svelte"
    import Button from "@components/Button.svelte"

    export let src: string = "https://via.placeholder.com/640x480.jpg"
    export let alt: string = "Placeholder image"
    export let reverse: boolean = false
</script>

<section class="
        w-5/6 max-w-4xl xl:px-0 mb-16
        flex flex-col items-center justify-center gap-8
        {!reverse ? 'lg:flex-row' : 'lg:flex-row-reverse'}">
    {#if src.startsWith('/') || !src.includes("youtube")}
    <img
        {src}
        {alt}
        width="640" height="480" 
        class="
            w-full max-w-md
            rounded-3xl
            drop-shadow-blue" />
    {:else if src.includes("youtube")}
    <iframe 
        {src} 
        width="640" height="480" 
        title={alt}
        frameborder="0"
        allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        class="
            w-full h-auto max-w-md aspect-[4/3]
            rounded-3xl
            drop-shadow-blue"></iframe>
    {/if}
    <div class="max-w-xl">
        <Headline direction="left"><slot name="headline">Media <span class="text-orange">And Text</span></slot></Headline>
        <div class="py-2 flex flex-col gap-4">
            <slot>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate impedit, cumque consectetur itaque recusandae ipsam ut omnis ex distinctio repellat beatae tempora accusamus aut quae dolore, alias quam temporibus unde?</p>
                <Button href="#">Button Text</Button>
            </slot>
        </div>
    </div>
</section>

