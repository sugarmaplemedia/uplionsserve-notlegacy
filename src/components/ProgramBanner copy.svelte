<script lang="ts">
    import Banner from "./Banner.svelte";
    import Button from "./Button.svelte";

    export let title: string
    export let description: string|null = null
    export let link: string|null = null
    export let src: string
    export let bg: string[]
</script>

<Banner customClasses={`bg-gradient-to-t ${bg[0]} ${bg[1]} bg-no-repeat`}>
    <div class="
        max-w-lg lg:max-w-4xl
        flex flex-col gap-8 lg:flex-row-reverse lg:justify-between
        items-center">
        {#if link}
        <a href={link} class="flex-shrink-0 lg:w-2/5">
            <img
                {src}
                alt={`${title} logo`}
                class="w-64 h-24 ml-auto lg:w-3/4 lg:h-auto lg:max-h-48" />
        </a>
        {:else}
        <span class="flex-shrink-0 lg:w-2/5">
            <img
                {src}
                alt={`${title} logo`}
                class="w-64 h-24 ml-auto lg:w-3/4 lg:h-auto lg:max-h-48" />
        </span>
        {/if}
        <div class="
            flex flex-col gap-8 items-center lg:items-start
            flex-shrink-1">
            <h2 class="text-3xl font-black text-center">{title}</h2>
            {#if description}
            <p class="font-bold">{description}</p>
            {/if}
            
            <Button href={link} text="Learn More" />
        </div>
    </div>
</Banner>

<!-- <section class="
    flex flex-col gap-8
    items-center pt-20 px-8 pb-10
    {`bg-gradient-to-t ${bg[0]} ${bg[1]}`} bg-no-repeat">

    {#if link}
    <a href={link}>
        <img 
            {src}
            alt={`${title} logo`} 
            class="w-64 h-24 m-auto" />
    </a>
    {:else}
    <span>
        <img 
            {src}
            alt={`${title} logo`} 
            class="w-64 h-24 m-auto" />
    </span>
    {/if}

    <h2 class="text-3xl font-black text-center">{title}</h2>
    {#if description}
    <p class="font-bold">{description}</p>
    {/if}
    
    <Button href={link} text="Learn More" />
</section> -->