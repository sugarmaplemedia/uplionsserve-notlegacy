<script lang="ts">
export let customClasses: string|null = null
export let id: string|null = null
</script>

<section {id} class="
    flex flex-col gap-8
    items-center pt-20 pb-16
    {customClasses}">
    <slot />
</section>