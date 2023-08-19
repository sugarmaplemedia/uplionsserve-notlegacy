<script lang="ts">
  import Button from "../Button.svelte";
  import Icon from "../Icon.svelte";
  import { fade } from "svelte/transition";

  interface partner {
    organization: string;
    description?: string;
    logo: {
      src: string;
      alt: string;
      span?: number;
    };
    coverPhoto?: {
      src: string;
      alt: string;
    };
    link: string;
  }

  export let partners: partner[];
  let buttonBox: HTMLDivElement;
  let position = 0;
  $: spotlightPartner = partners[position];
  const setSpotlightPartner = (index: number) => (position = index);

  let clicked: "previous" | "next" | null = null;
  const nullifyClicked = () => setTimeout(() => (clicked = null), 150);
  const decSpotlightPartner = () => {
    position = (position - 1 + partners.length) % partners.length;
    clicked = "previous";
    nullifyClicked();
  };
  const incSpotlightPartner = () => {
    position = (position + 1) % partners.length;
    clicked = "next";
    nullifyClicked();
  };
</script>

<div class="lg:h-80 bg-white rounded-3xl shadow-lg lg:flex gap-4">
  <!-- Cover and logo -->
  {#key position}
    <div
      in:fade
      class="
            w-full h-48 lg:h-full px-8 py-4
            flex justify-center items-center overflow-hidden
            relative
            rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl"
    >
      <img
        src={spotlightPartner.coverPhoto?.src}
        alt={spotlightPartner.coverPhoto?.alt}
        width="512"
        height="512"
        class="absolute object-cover w-full h-full z-0 saturate-0 opacity-60"
      />
      <img
        src={spotlightPartner.logo.src}
        alt={spotlightPartner.logo.alt}
        class="
                max-h-40 lg:max-h-48 max-w-[12rem] z-10"
      />
    </div>
    <!-- Text -->
    <div
      in:fade
      class="h-96 sm:h-72 lg:h-auto px-4 pt-6 pb-8 flex flex-col gap-4"
    >
      <h3>{spotlightPartner.organization}</h3>
      <p class="grow">{spotlightPartner.description}</p>
      <Button href={spotlightPartner.link}>Learn more</Button>
    </div>
  {/key}
</div>
{#if partners.length > 1}
  <div bind:this={buttonBox} class="flex items-center gap-4 mt-4">
    <button
      tabindex="0"
      on:click={decSpotlightPartner}
      on:keypress={decSpotlightPartner}
      class="rotate-180 {clicked == 'previous'
        ? '-translate-x-2'
        : 'translate-x-0'} transition-all"
    >
      <Icon id="arrow" styling="w-6 h-6" />
    </button>

    {#each partners as partner, i}
      <button
        tabindex="0"
        on:click={() => setSpotlightPartner(i)}
        on:keypress={() => setSpotlightPartner(i)}
        class="
            block w-2 h-2
            {position != i ? 'bg-[rgba(0,0,0,0.2)]' : 'bg-orange'} rounded-full
            cursor-pointer
            transition-all"
      >
      </button>
    {/each}

    <button
      tabindex="0"
      on:click={incSpotlightPartner}
      on:keypress={incSpotlightPartner}
      class="{clicked == 'next'
        ? 'translate-x-2'
        : 'translate-x-0'} transition-all"
    >
      <Icon id="arrow" styling="w-6 h-6" />
    </button>
  </div>
{/if}
