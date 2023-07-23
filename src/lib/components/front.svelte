<script lang='ts'>
    import { YscrollStore } from '../../routes/+page.svelte'

    let innerHeight: any;
    let containerHeight: any;
    let textboxHeight: any;

    let toAdjust = 0;
    let distanceToBorder = 0;
    let opacity = 1;
    let isHidden = "";

    //calculates the animation for scrolling away and to this component
    $: {
        //distance between the bottom of the container and the bottom of the textBox
        distanceToBorder = containerHeight - (Math.floor(textboxHeight/2)) - Math.floor($YscrollStore*2);
        if( distanceToBorder < 0) {
            console.log(-distanceToBorder)
            if (-distanceToBorder < 400) toAdjust = -distanceToBorder * 1.5;
            if (-distanceToBorder > 400) opacity = 0
            else opacity = 1 - (-distanceToBorder/400);
        }
        else {
            toAdjust = 0
            opacity = 1
        }
    }
</script>

<svelte:window bind:innerHeight={innerHeight} />

<div bind:clientHeight={containerHeight} id="introContainer" class="flex justify-center items-center h-screen p-12">
    <h1 bind:clientHeight={textboxHeight} style="margin-bottom: {toAdjust}px; opacity: {opacity}" class="fixed inline-block align-middle text-3xl p-5 overflow-hidden">
        Welcome to the Portfolio of Senne Drent
    </h1>
</div>