<script lang="ts" context="module">
    export const YscrollStore = writable(0);
    export const onLoad = writable(false);


    // have simple way of content display, based on json format
    const experienceCards: CardInfo[] = [
        {
            title: "Hi-Horizon Racing Team",
            image: "/hi-horizon/me_working.png",
            contentLink: "/experiences/hi-horizon-racing-team"
        },
        {
            title: "Lagersmit",
            image: "/lagersmit/Logo.jpeg",
            contentLink: "/experiences/lagersmit"
        },
        {
            title: "Education",
            image: "/education/logo_rgb.svg",
            contentLink: "/experiences/education"
        },

    ]

</script>
<script lang="ts">
    import Front from '@components/front.svelte'
    import Contact from "@components/contact.svelte";

    import Card from "@components/Card.svelte";
    import { writable } from "svelte/store";
    import { onMount } from 'svelte';

    onMount(() => onLoad.set(true));

    let Yscroll: any;
    $: YscrollStore.set(Yscroll);    
</script>

<svelte:window bind:scrollY={Yscroll}/>

<Front/>
<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
{#each experienceCards as card} 
    <Card cardInfo={card} ></Card>
{/each}
</div>
<Contact/>
