<script lang='ts'>
    import { draw, fade, type FadeParams } from 'svelte/transition';
    import { YscrollStore } from '../../routes/+page.svelte'
    import { onMount } from 'svelte';

    let innerHeight: any;
    let containerHeight: any;
    let textboxHeight: any;

    let toAdjust = 0;
    let distanceToBorder = 0;
    let opacity = 1;
    let onLoad = false;
    let display = "inline-block";

    //calculates the animation for scrolling away and to this component
    $: {
        //distance between the bottom of the container and the bottom of the textBox
        distanceToBorder = containerHeight - (Math.floor(textboxHeight/2)) - Math.floor($YscrollStore*2);
        if( distanceToBorder < 0) {
            if (-distanceToBorder < 400) toAdjust = -distanceToBorder * 1.5;
            if (-distanceToBorder > 400) opacity = 0;
            else opacity = 1 - (-distanceToBorder/400);
        }
        else {
            toAdjust = 0;
            opacity = 1;
        }
        if (opacity === 0) {
            display = "hidden";
        }
        else {
            display = "inline-block"
        }
    }

    onMount(()=> onLoad = true)
</script>

<svelte:window bind:innerHeight={innerHeight} />

<div bind:clientHeight={containerHeight} id="introContainer" class="flex justify-center items-center h-screen p-12">
    {#if onLoad === true}
        <h1 in:fade={{duration: 1250}} bind:clientHeight={textboxHeight} style="margin-bottom: {toAdjust}px; opacity: {opacity};" class="fixed {display} align-middle text-3xl p-5 font-extrabold overflow-hidden opacity-0">
            Welcome to the Portfolio of Senne Drent
        </h1>
    {/if}
</div>