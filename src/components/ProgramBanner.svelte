<script lang="ts">
    import Banner from "./Banner.svelte";
    import Button from "./Button.svelte";

    export let title: string
    export let id: string|null = null
    export let description: string|null = null
    export let link: string|null = null
    export let src: string
    export let bg: string[]

</script>

<Banner {id} customClasses={`
    px-8
    bg-gradient-to-t lg:bg-gradient-to-r ${bg[0]} ${bg[1]} bg-no-repeat
    group hover:brightness-105 duration-500`}>
    <div class="
        max-w-lg lg:w-3/4 lg:max-w-4xl lg:py-8 xl:py-32 xl:max-w-5xl
        flex flex-col gap-8 lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-0
        items-center">
        {#if link}
        <a href={link} class="
            lg:col-start-4 lg:col-end-6
            group-hover:scale-110
            duration-1000 ease-[cubic-bezier(.29, 1.47, .47, 1)]">
            <img
                {src}
                alt={`${title} logo`}
                class="w-64 h-24 ml-auto lg:w-3/4 lg:h-auto lg:max-h-48" />
        </a>
        {:else}
        <span class="
            lg:col-start-4 lg:col-end-6
            group-hover:scale-110
            duration-1000 ease-[cubic-bezier(.29, 1.47, .47, 1)]">
            <img
                {src}
                alt={`${title} logo`}
                class="w-64 max-h-64 ml-auto lg:w-3/4 lg:h-auto" />
        </span>
        {/if}
        <div class="
            flex flex-col gap-8 items-center lg:items-start
            lg:col-start-1 lg:col-end-4 lg:row-start-1">
            <h2 class="text-3xl font-black text-center lg:text-4xl lg:text-left">{title}</h2>
            {#if description}
            <p class="font-bold">{description}</p>
            {/if}
            
            <Button href={link} text="Learn More" />
        </div>
    </div>
</Banner>