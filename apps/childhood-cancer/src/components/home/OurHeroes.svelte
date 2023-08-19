<script lang="ts">
import { fade, fly } from "svelte/transition"
import Icon from "../Icon.svelte"
import Headline from "../_fragments/Headline.svelte"
import type { Hero } from "@appTypes/childhood-cancer"

export let heroes: Array<Hero> = []

let position = 0
let clicked: "previous" | "next" | null = null

$: currentHero = heroes[position]

const handleClick_previous = () => {
    position == 0 ? (position = heroes.length - 1) : position--
    clicked = "previous"
    setTimeout(() => (clicked = null), 200)
}
const handleClick_next = () => {
    position == heroes.length - 1 ? (position = 0) : position++
    clicked = "next"
    setTimeout(() => (clicked = null), 200)
}
</script>

<section class="w-full pt-96 lg:mb-24 lg:pt-16">
    {#key currentHero.image}
        <img
            transition:fade={{ duration: 400 }}
            src={currentHero.image.src}
            alt={currentHero.image.alt}
            class="absolute left-1/2 z-0 w-full max-w-md -translate-x-1/2 -translate-y-96 rounded-3xl lg:left-auto lg:right-0 lg:-translate-y-12 lg:translate-x-0 xl:w-auto"
        />
    {/key}
    <div
        class="lg:drop-shadow-blue relative z-10 flex w-screen justify-center rounded-t-3xl bg-white py-16 drop-shadow-[0_-7px_5px_rgba(70,70,155,0.1)] lg:w-[calc(100vw-26rem)] lg:rounded-r-3xl lg:rounded-tl-none lg:pl-16 lg:pr-16 2xl:pl-[25vw]"
    >
        <div class="max-w-xl">
            <div
                class="flex w-full items-center justify-center gap-4 pb-8 lg:w-auto xl:gap-8"
            >
                <button
                    aria-label="View previous hero"
                    on:click={handleClick_previous}
                    class="bg-orange-light hover:bg-orange flex h-12 w-12 items-center justify-center rounded-full transition-all
                        {clicked == 'previous'
                        ? 'scale-75 hover:scale-75'
                        : 'scale-100 hover:scale-95'}"
                >
                    <Icon
                        id="arrow"
                        styling="translate-y-0.5 scale-50 rotate-180"
                    />
                </button>
                <Headline inline>
                    Our <span class="text-orange">Heroes</span>
                </Headline>
                <button
                    aria-label="View next hero"
                    on:click={handleClick_next}
                    class="bg-orange-light hover:bg-orange flex h-12 w-12 items-center justify-center rounded-full transition-all
                        {clicked == 'next'
                        ? 'scale-75 hover:scale-75'
                        : 'scale-100 hover:scale-95'}"
                >
                    <Icon id="arrow" styling="-translate-y-0.5 scale-50" />
                </button>
            </div>
            {#key currentHero.name}
                <div
                    in:fly={{ y: 20, duration: 400 }}
                    class="w-full space-y-4 px-8"
                >
                    <h3 class="text-xl">{currentHero.name}</h3>
                    <p class="font-bold">{currentHero.heading}</p>
                    <p>{@html currentHero.story}</p>
                </div>
            {/key}
        </div>
    </div>
</section>
