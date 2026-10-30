<script lang="ts" context="module">
    import Frame from "../../../lib/components/frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>

<Frame borderColour="bg-blue" bgColour="bg-warmWhite" id="TuDelftContainer">
    <h1 class="text-2xl font-extrabold">College</h1>
    <p class="">
        1st year MSc computer science at TU delft unversity of technology
        <br>
        graduate BSc computer science at TU delft unversity of technology in 2026
        <br>
        more info coming soon
    </p>
</Frame>