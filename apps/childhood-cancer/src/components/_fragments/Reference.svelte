<script lang="ts">
    export let href: string = "#"
</script>

<sup class="underline visited:text-navy-light">
    <a {href}><slot /></a>
</sup>