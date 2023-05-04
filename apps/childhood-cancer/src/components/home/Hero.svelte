<script lang="ts">
    import Button from "@components/Button.svelte"

</script>

<section class="
        w-full mb-16
        relative
        
        before:w-full before:h-full
        before:absolute before:top-0 before:left-0 before:-z-0
        before:bg-navy
        before:bg-[url('/childhood-cancer/images/landing-hero.jpg')] before:bg-cover before:bg-left sm:before:bg-center
        before:brightness-65 before:saturate-75">
    <div class="
            max-w-lg lg:max-w-3xl px-8 pt-24 pb-[30vw] xl:pb-48 mx-auto xl:ml-24
            flex flex-col items-center lg:items-start gap-4
            text-center lg:text-left
            relative">
        <h1 class="text-white">
            Helping Upper Peninsula families <span class="text-orange">fight</span> childhood cancer.
        </h1>
        <p class=" text-white">Since our program began, we have seen a rise in the number of families living in the Upper Peninsula of Michigan seeking help with a child battling cancer.</p>
        <p class="mb-2 text-lg font-bold text-white">As of December 2022, that number has increased by more <span class="text-orange">than twenty-fold!</span></p>
        <Button href="{import.meta.env.BASE_URL}/donate" alt="Visit our donate page to support our cause.">Join the fight</Button>
    </div>
    <div class="
            w-full xl:min-w-[1600px] -mt-[15rem]
            absolute bottom-24 xl:bottom-auto z-10 overflow-x-hidden 
            translate-y-32 xl:translate-y-0 2xl:-translate-y-1.5 scale-[3] sm:scale-[2] xl:scale-110 -rotate-9 -left-8
            pointer-events-none">
        <img src="{import.meta.env.BASE_URL}/graphics/swooshes/Asset 2.svg" alt="" class="select-none" />
    </div>
</section>