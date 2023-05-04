<script lang="ts">
    export let swooshNum: number = 0
    export let transform: string = ""
    export let position: string = ""

    let src: string;
    if (swooshNum > 0 && swooshNum < 16) {
        src = `${import.meta.env.BASE_URL}/graphics/swooshes/Asset ${swooshNum}.svg`
    }

    // switch (swooshNum) {
    //     case 2:
    //         position = "min-w-2400px"
    //         break
    //     case 10:
    //         position = "scale-110"
    // }
</script>

<div class="overflow-x-hidden {position} min-w-[1600px]">
    <img {src} alt="" draggable="false" class={transform}/>
</div>