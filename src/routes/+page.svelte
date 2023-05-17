<script>
    import Front from '@components/front.svelte'
    import HiHorizon from '@components/HiHorizon.svelte';
    import Contact from '@components/contact.svelte';
    let blocks = 
    [
        Front,
        HiHorizon,
        Contact,
    ]
</script>
<div class='flex-1 text-center flex-row items-center'>
    {#each blocks as block}
        <svelte:component this={block} />
    {/each}
</div>