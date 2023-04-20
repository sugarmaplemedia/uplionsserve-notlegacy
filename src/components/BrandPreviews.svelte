<script lang="ts">
    let scrollBackArrow: HTMLElement
    let scrollForwardArrow: HTMLElement
    let scrollContainer: HTMLElement
    const handleInput = (e: Event) => {
        if (e.target == scrollBackArrow) {
            if (scrollContainer.scrollLeft > 200) {
                scrollContainer.scrollBy({
                    left: -321,
                    behavior: 'smooth'
                })
            } else {
                scrollContainer.scrollTo({
                    left: 1076,
                    behavior: 'smooth'
                })
            }
        } else {
            if (scrollContainer.scrollLeft < 1000) {
                scrollContainer.scrollBy({
                    left: 321,
                    behavior: 'smooth'
                })
            } else {
                scrollContainer.scrollTo({
                    left: 113,
                    behavior: 'smooth'
                })
            }
        }
    }

</script>

<div class="
    max-w-full
    overflow-x-hidden
    flex flex-col items-center">
    <div class="
        md:hidden
        flex gap-3 items-center
        font-bold">
        <span bind:this={scrollBackArrow} on:click={handleInput} on:keypress={handleInput} class="block rotate-45 cursor-pointer">&#x221F;</span>
        <span>swipe</span>
        <span bind:this={scrollForwardArrow} on:click={handleInput} on:keypress={handleInput} class="block -rotate-[135deg] cursor-pointer">&#x221F;</span>
    </div>
    <div bind:this={scrollContainer} class="
        flex flex-row flex-nowrap items-center md:justify-center md:gap-8 lg:gap-12 lg:px-4
        relative overflow-x-scroll md:overflow-y-hidden
        snap-x snap-mandatory snap-center md:snap-none
        scroll-smooth scrollbar-hide">
        <a href={import.meta.env.PUBLIC_CHILDHOODCANCER_URL} class="
            m-12 ml-[50%] md:m-0
            block snap-center
            group">
            <img
                src="/graphics/brands/logo-cc-white.svg"
                alt="Childhood Cancer logo"
                class="
                    w-[60vw] max-w-sm max-h-52 sm:w-48 md:w-32 lg:w-44
                    block
                    hover:scale-110
                    duration-700 ease-[cubic-bezier(.61, .16, .07, 1.46)]"/>
        </a>
        <a href={import.meta.env.PUBLIC_DEFENSEAGAINSTDIABETES_URL} class="
            m-12 md:m-0
            block snap-center
            group">
            <img
                src="/graphics/brands/logo-dad-white.svg"
                alt="Defense Against Diabetes logo"
                class="
                    w-[60vw] max-w-sm max-h-52 sm:w-48 md:w-32 lg:w-44
                    block
                    hover:scale-110
                    duration-700 ease-[cubic-bezier(.61, .16, .07, 1.46)]"/>
        </a>
        <a href={import.meta.env.PUBLIC_PROJECTKIDSIGHT_URL} class="
            m-12 md:m-0
            block snap-center
            group">
            <img
                src="/graphics/brands/logo-pks-white.svg"
                alt="Project KidSight logo"
                class="
                    w-[60vw] max-w-sm max-h-52 sm:w-48 md:w-32 lg:w-44
                    block
                    hover:scale-110
                    duration-700 ease-[cubic-bezier(.61, .16, .07, 1.46)]"/>
        </a>
        <a href={import.meta.env.PUBLIC_HUNGER_URL} class="
            m-10 mr-[50%] md:mx-0
            block snap-center
            group">
            <img
                src="/graphics/brands/logo-hg-white.svg"
                alt="D10 Hunger logo"
                class="
                    w-[60vw] sm:w-48 md:w-20 lg:w-28 max-w-sm max-h-40
                    block
                    hover:scale-110
                    duration-700 ease-[cubic-bezier(.61, .16, .07, 1.46)]"/>
        </a>
    </div>
</div>