<script lang="ts">
export let direction: string = "center"
export let inline: boolean = false
export let id: string|null = null

switch (direction) {
    case "left":
        direction = "items-start"
        break
    case "center":
        direction = "items-center"
        break
    case "right":
        direction = "items-end"
        break
}

</script>

<div class="{inline ? 'w-auto' : 'w-full'} flex flex-col {direction}">
    <h2 {id} class="text-3xl scroll-mt-36 md:scroll-mt-32">
        <slot>Section <span class="text-orange">Headline</span></slot>
    </h2>
    <div class="
            py-2 space-y-2
            flex flex-col {direction}">
        <hr class="
                w-40 h-0.5
                bg-orange rounded-full
                border-none"/>
        <hr class="
                w-24 h-0.5
                bg-orange-light rounded-full
                border-none"/>
    </div>
</div>