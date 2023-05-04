<script lang="ts">
    export let src: string;
    export let alt: string = "";
    export let caption: string = "";

    if (src.startsWith("/")) {
        src = `${import.meta.env.BASE_URL}${src}`;
    }
</script>

<figure class="w-full aspect-video mt-2 flex flex-col gap-2 md:items-start">
    {#if !src.includes("youtube")}
    <img {src} {alt} class="rounded-3xl drop-shadow-md" />
    {:else}
    <iframe
        width="560"
        height="355"
        src={src}
        title={alt}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-full aspect-video rounded-3xl drop-shadow-md">
    </iframe>
    {/if}
    <hr class="border-none w-2/3 h-0.5 rounded-full mt-2 mb-1 bg-orange" />
    <figcaption class="text-sm">{caption}</figcaption>
</figure>