<script>
    import Icon from "@components/Icon.svelte"

    let content = [
        {
            icon: "car",
            title: "Travel Costs",
            description: "To receive care, our families must travel long distances. Our grants assist with travel costs, such as gas, food, and accomodations."
        },
        {
            icon: "bill",
            title: "Household Bills",
            description: "Fighting cancer is expensive. Our grants help with bills, such as rent, utilities, groceries, and other housing related fees."
        },
        {
            icon: "hospital",
            title: "Medical Bills",
            description: "Our grants help with medical bills, such as co-pays, deductibles, and other expenses that are not covered by insurance."
        }
    ]
</script>

<div class="w-full max-w-xs">
    <div class="
            w-full overflow-x-hidden
            relative
            flex flex-col items-center justify-center gap-8">
        {#each content as current, i}
        <div class="flex flex-col items-center gap-4">
            <Icon id={current.icon} />
            <h4>{current.title}</h4>
            <p class="text-center">{current.description}</p>
        </div>
        {#if i != content.length - 1}
        <hr class="
                w-36 h-0
                border-0 border-b-[6px] border-dotted border-navy-light
                -translate-y-2" />
        {/if}
        {/each}
    </div>
</div>