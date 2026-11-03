<script lang="ts" context="module">
    import Frame from "../../../lib/components/frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>

<div class="xl:px-40 lg:px-20">
<Frame borderColour="bg-blue" bgColour="bg-warmWhite" id="TuDelftContainer">
    <h1 class="text-2xl font-extrabold">College</h1>
    <p class="">
        Starting out in 2022, I did my BSc computer science at TU Delft university of technology.
        graduating in 2026 with my research "Graph pre-processing strategies for minimum flow decomposition in haplotype
aware genome assembly". 
        <br>
        <br>
        In the later half of 2026 I continued at TU delft unversity of technology and started MSc computer science. 
        Which i'm currently following as of now.
    </p>
</Frame>
</div>