<script lang="ts">
  import Button from "./Button.svelte";
  import Card from "./_fragments/Card.svelte";
  import Headline from "./_fragments/Headline.svelte";

  type Card = {
    src: string;
    alt: string;
    href: string;
    title: string;
    text: string;
  };

  export let content: Card[];
  export let button: { text: string; href: string } | null = null;
</script>

<section
  class="
        mb-16 px-12
        relative
        flex flex-col items-center"
>
  {#if $$slots.headline}
    <Headline><slot name="headline" /></Headline>
  {/if}
  {#if $$slots.text}
    <p class="pt-2 pb-6 text-center"><slot name="text" /></p>
  {/if}
  <div
    class="
            max-w-4xl w-full mb-8
            flex lg:flex-row flex-wrap flex-col grid-cols-3 items-center justify-center lg:items-stretch gap-6"
  >
    {#each content as card}
      <Card
        src={`${import.meta.env.BASE_URL}/${card.src}`}
        alt={card.alt}
        href={card.href}
      >
        <span slot="title">{card.title}</span>
        <span slot="text">{card.text}</span>
      </Card>
    {/each}
  </div>
  {#if button}
    <Button href={button.href}>{button.text}</Button>
  {/if}
</section>
