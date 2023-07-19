<script lang="ts" context="module">
    export const YscrollStore = writable(0);
</script>
<script lang="ts">
    import Front from '@components/front.svelte'
    import HiHorizon from '@components/HiHorizon.svelte';
    import Contact from '@components/contact.svelte';
    
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let onLoad = false;

    onMount(() => onLoad = true);

    let Yscroll: any;
    $: YscrollStore.set(Yscroll);

    let blocks = 
    [
        Front,
        HiHorizon,
        Contact,
    ]

</script>

<svelte:window bind:scrollY={Yscroll}/>

<div class='flex-1 text-center flex-row items-center'>
        {#each blocks as block}
            <svelte:component this={block}/>
        {/each}
</div>