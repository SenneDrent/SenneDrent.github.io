<script lang="ts" context="module">
    import Frame from "./frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>

<div id="TuDelftContainer" class="flex p-16 py-8 pl-8 text-left space-y-4 z-10">
    <Frame borderColour="bg-yellow" bgColour="bg-warmWhite">
        <h1 class="text-2xl">My next adventure awaits!</h1>
        <p class="font-bold">
            I'm eager to seek a position at another project in the future, maybe this will be yours ;)
    </Frame>
</div>