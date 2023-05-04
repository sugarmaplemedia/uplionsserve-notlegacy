<script lang="ts">
    type logo = {
        src: string
        alt: string
    }

    export let logo: logo = { src: "", alt: "" }
    export let span: number|string = 1
    export let href: string = "#"
    export let organization: string = "Organization"

    switch (span) {
        case 1:
            span = "col-span-1"
            break
        case 2:
            span = "col-span-2"
            break
    }
</script>

<a {href} class="
        px-8 py-4
        {span}
        flex flex-col gap-2 items-center justify-center
        bg-white rounded-lg shadow-md hover:shadow-[0_5px_7px_-1px_rgb(0_0_0_/_0.1)]
        no-underline font-bold
        hover:-translate-y-0.5 hover:scale-102
        transition-all">
    <img src={logo.src} alt={logo.alt} class="max-h-24">
    <p class="hidden">{organization}</p>
</a>