<script lang="ts" context="module">
    import Frame from "./frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>

<div class="pt-8">
    <Frame id="YellowExample" borderColour="bg-lightGreen" bgColour="bg-warmWhite">
        <h1 class="text-2xl font-extrabold">My next adventure awaits!</h1>
        <p class="h-20">
        </p>
    </Frame>
</div>