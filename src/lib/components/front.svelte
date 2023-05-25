<script lang='ts'>
    import {fade} from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    let ready = false;
    let onLoad = false;
    onMount(() => onLoad = true);

    let Yscroll: any;
    let introBlockHeigth: any;

    function slidefade(node: Element, params: { delay:any, duration:any, easing:any, y:any}) {
        const existingTransform = getComputedStyle(node).transform.replace('none', '');

        return {
            delay: params.delay || 0,
            duration: params.duration || 400,
            easing: params.easing || cubicOut,
            css: (t:any, u:any) => `transform-origin: top left; transform: ${existingTransform} translateY(${params.y*u*2}px); opacity: ${t};`
        };
    }

    $: {
        if (introBlockHeigth - (Yscroll * 2) <= 0) {
            ready = false;
        }
        else {
            ready = true;
        };
    }
</script>

<svelte:window bind:scrollY={Yscroll}/>

<div bind:clientHeight={introBlockHeigth} id="introContainer" class="flex justify-center items-center h-screen p-12">
    {#if ready && onLoad}
    <h1 in:slidefade={{delay: 0,duration: 1000, easing: cubicOut, y:-10}} out:slidefade={{delay: 0,duration: 200, easing: cubicOut, y:-40}} class="fixed inline-block align-middle text-3xl">
        Welcome to the Portfolio of Senne Drent
    </h1>
    {/if}
</div>