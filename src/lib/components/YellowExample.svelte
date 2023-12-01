<script lang="ts" context="module">
    import Frame from "./frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>

<Frame id="YellowExample" borderColour="bg-yellow" bgColour="bg-warmWhite">
    <h1 class="text-2xl font-extrabold">My next adventure awaits!</h1>
    <p class="">
        I'm eager to seek a position at another project in the future, maybe this will be yours ;)
    </p>
</Frame>