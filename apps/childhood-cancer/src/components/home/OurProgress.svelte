<script lang="ts">
import Headline from "@components/_fragments/Headline.svelte";
</script>

<section class="w-full px-8 mb-20 flex flex-col items-center gap-8">
    <Headline>Our <span class="text-orange">Progress</span></Headline>
    <img 
        src="{import.meta.env.BASE_URL}/graphics/data/cc-data-family-map.svg"
        alt="A map of the Upper Peninsula showcasing amount of recognized families per county."
        class="max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
    <p class="text-center max-w-md">These numbers represent the families we recognize who are fighting childhood cancer. <span class="font-bold">Every dollar earned goes directly to the families and to the programs that serve them.</span></p>
</section>