<script lang="ts">
type photo = {
    alt: string
    src: string,
    thumbnailSrc: string,
}

let lightBoxActive = false
const lightBoxToggle = () => lightBoxActive = !lightBoxActive

let currentPhoto: photo = {
    alt: "",
    src: "",
    thumbnailSrc: ""
}
$: currentPhoto.src.length != 0 && lightBoxToggle()

const handleKeyPress = (photo: photo) => currentPhoto = photo
const handleClick = (photo: photo) => currentPhoto = photo

export let photos: photo[]
</script>

<!-- Gallery -->
<div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4">
    {#each photos as photo}
    <button tabindex="0"
        on:keypress={() => handleKeyPress(photo)}
        on:click={() => handleClick(photo)}
        class="
            w-2/3 sm:w-full aspect-square
            rounded-lg drop-shadow-md hover:drop-shadow-xl
            hover:-translate-y-1
            cursor-pointer
            transition-all ease-out">
        <img class="w-full h-full object-cover rounded-lg" src={photo.thumbnailSrc} alt={photo.alt} />
    </button>
    {/each}
</div>

<!-- Lightbox -->
<div
    on:keypress={lightBoxToggle}
    on:click={lightBoxToggle} 
    class="
        {lightBoxActive ? 'visible opacity-100' : 'invisible opacity-0'} w-screen h-screen
        fixed top-0 left-0 z-[300]
        flex justify-center items-center
        cursor-pointer
        transition-all">
    <div class="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-70"></div>
    <div class="relative z-10 px-8 sm:px-16 max-w-3xl xl:max-w-4xl">
        <img src={currentPhoto.src} alt={currentPhoto.alt}
            class="max-h-[calc(100vh-16rem)] rounded-lg">
    </div>
</div>