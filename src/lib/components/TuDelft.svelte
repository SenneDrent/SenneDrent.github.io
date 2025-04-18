<script lang="ts" context="module">
    import Frame from "./frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>

<Frame borderColour="bg-blue" bgColour="bg-warmWhite" id="TuDelftContainer">
    <h1 class="text-2xl font-extrabold">College</h1>
    <p class="">
        3nd year student Bachelor of Computer Science and Engineering at the Technical University of Delft
        <br>
        (NL) In bezit van mijn propedeuse
    </p>
</Frame>