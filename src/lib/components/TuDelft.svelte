<script lang="ts" context="module">
    import Frame from "./frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>

<div id="TuDelftContainer" class="flex p-16 py-8 pr-8 text-left space-y-4 z-10">
    <Frame borderColour="bg-blue" bgColour="bg-warmWhite">
        <h1 class="text-2xl">College</h1>
        <p class="font-bold">
            2nd year student Bachelor of Computer Science and Engineering at the Technical University of Delft
            <br>
            (NL) In bezit van mijn propedeuse
        </p>
    </Frame>
</div>