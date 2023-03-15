<script lang="ts">
export let customClasses: string|null = null
</script>

<section class="
    flex flex-col gap-8
    items-center pt-20 px-8 pb-16
    {customClasses}">
    <slot />
</section>