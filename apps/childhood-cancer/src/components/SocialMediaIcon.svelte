<script lang="ts">
    import Icon from "./Icon.svelte"

    type iconObj = {
        id: string,
        href: string
    }

    export let service: string = ""
    export let styling: string = ""
    
    let icon: iconObj
    switch(service) {
        case "fb":
            icon ={
                id: "facebook",
                href: "https://facebook.com/uplionsserve"
            }
            break
        case "mail":
            icon ={
                id: "mail",
                href: "/contact-us"
            }
            break
    }
</script>

<a href={icon.href} class="group
    w-12 h-12 
    flex items-center justify-center space-x-2
    rounded-full
    bg-white
    border-2 border-white
    
    hover:bg-orange-light hover:border-orange-light
    
    transition-all
    
    {styling}">
    <Icon id={icon.id} color="fill-navy" styling="scale-75"/>
</a>