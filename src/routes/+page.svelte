<script lang="ts" context="module">
    export const YscrollStore = writable(0);
    export const onLoad = writable(false);

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

    onMount(() => onLoad.set(true));

    let Yscroll: any;
    $: YscrollStore.set(Yscroll);    
</script>

<svelte:window bind:scrollY={Yscroll}/>

<div class='container flex text-center flex-col items-stretch w-full px-2 md:px-8 lg:px-16'>
        {#each slides as slide}
            {#if slide.length === 1}
                <svelte:component this={slide[0]} />
            {:else if slide.length === 2}
                <div class="flex gap-8 justify-between flex-wrap">
                    <div class="flex-1 flex">
                        <svelte:component this={slide[0]}/>
                    </div>
                    <div class="flex-1 flex">
                        <svelte:component this={slide[1]}/>
                    </div>
                </div>
            {/if}
        {/each}
</div>