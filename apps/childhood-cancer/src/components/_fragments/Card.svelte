<script lang="ts">
  export let src: string = "https://via.placeholder.com/360x144.jpg";
  export let alt: string = "placeholder";
  export let href: string = "#";
  export let style: string = "";
</script>

<a
  {href}
  class="
    w-[17.6rem] max-w-xs flex flex-col items-center justify-between
    overflow-hidden
    bg-white rounded-3xl
    drop-shadow-blue
    no-underline
    
    hover:-translate-y-2 hover:scale-102
    hover:drop-shadow-blue-hover
    transition-all
    {style}"
>
  <img {src} {alt} />
  <div
    class="pt-8 w-full
        flex flex-col items-center grow"
  >
    <h3 class="text-xl"><slot name="title">Card Title</slot></h3>
    <p class="py-6 px-8 text-left">
      <slot name="text"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad facilis
        deserunt sed sunt illo rem magni debitis reiciendis nesciunt
        repellendus, culpa a, veritatis voluptatem dignissimos! Reiciendis
        eligendi blanditiis architecto reprehenderit optio voluptas facilis
        tenetur nemo quia recusandae vitae nostrum consequatur repudiandae
        consectetur iste quibusdam dicta perspiciatis, quas quis! Autem,
        voluptatum?</slot
      >
    </p>
  </div>
  <span class="pb-4">
    <p class="text-sm text-navy-dark opacity-60">
      Click to view more information.
    </p>
  </span>
  <div class="w-full">
    <hr
      class="h-4
            bg-orange-light
            border-none"
    />
    <hr
      class="h-6
                bg-orange
                border-none"
    />
  </div>
</a>
