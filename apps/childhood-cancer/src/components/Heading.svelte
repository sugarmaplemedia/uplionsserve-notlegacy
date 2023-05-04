<script lang="ts">
    import Icon from "./Icon.svelte";

    export let size: number

    export let color: "orange"|"orange-light"|"navy"|"white" = "navy"
    let textColor: string
    switch (color) {
        case "orange":
            textColor = "text-orange"
            break
        case "orange-light":
            textColor = "text-orange-light"
            break
        case "navy":
            textColor = "text-navy"
            break
        case "white":
            textColor = "text-white"
            break
    }

    export let align: "left"|"center"|"right" = "left"
    let textAlign: string
    switch(align) {
        case "left":
            textAlign = "justify-start"
            break
        case "center":
            textAlign = "justify-center"
            break
        case "right":
            textAlign = "justify-end"
            break
    }

    export let icon: string|null = null
</script>

<span class="flex items-center {textAlign} gap-4">
    {#if icon}
        <Icon id={icon} color={color} styling="w-8 h-8" />
    {/if}
    
    {#if size == 1}
    <h1 class={textColor}><slot /></h1>
    {:else if size == 2}
    <h2><slot /></h2>
    {:else if size == 3}
    <h3><slot /></h3>
    {:else if size == 4}
    <h4><slot /></h4>
    {:else if size == 6}
    <h6><slot /></h6>
    {/if}
</span>