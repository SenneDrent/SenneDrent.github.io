<script lang="ts" context="module">
    export const YscrollStore = writable(0);

    export let slides = 
    [
        [Front],
        [HiHorizon],
        [TuDelft, YellowExample],
        [Contact],
    ]
</script>
<script lang="ts">
    import Front from '@components/front.svelte'
    import HiHorizon from '@components/HiHorizon.svelte';
    import TuDelft from '@components/TuDelft.svelte';
    import YellowExample from '@components/YellowExample.svelte';
    import Contact from '@components/contact.svelte';
    
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let onLoad = false;

    onMount(() => onLoad = true);

    let Yscroll: any;
    $: YscrollStore.set(Yscroll);    
</script>

<svelte:window bind:scrollY={Yscroll}/>

<div class='flex text-center flex-col items-center'>
        {#each slides as slide}
            {#if slide.length === 1}
                <svelte:component this={slide[0]} />
            {:else if slide.length === 2}
                <div class="flex">
                    <svelte:component this={slide[0]}/>
                    <svelte:component this={slide[1]}/>
                </div>
            {/if}
        {/each}
</div>