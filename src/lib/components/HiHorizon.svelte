<script lang="ts" context="module">
    import Frame from "./frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>
<script lang="ts">
    let HiHorizonContainerHeight: any;
    $: HiHorizonContainerHeightStore.set(HiHorizonContainerHeight);

    let HiHorizonTextHeight: any;
</script>

<!-- 
how to display:
if text larger than screen: side fit with space between images
if text smaller than screen: side fit that stretch until max-h-screen
-->

<div id="HihorizonContainer" class="flex flex-col lg:flex-row align py-8 text-left z-10">
    <div style="flex: 3 1 0;" class="">
    <Frame borderColour="bg-wineRed" bgColour="bg-warmWhite" id="HiHorizonTextContainer">
        <div id="HiHorizonTextHeightContainer" class="space-y-2" bind:clientHeight={HiHorizonTextHeight}>
            <h1 class="text-2xl font-extrabold">Hi-Horizon Racing Team</h1>
            <p class="italic">Software Engineer for a Boat driven by solar power.</p>
            <p class="">
                Hi-Horizon is a racing Team created from friends and we have been working on this since 2019. 
                We are competing in the Solar Sport One competition where the goal is to be the most efficient and fast Boat as possible.
                I'm in charge of programming for the embedded telemetry system inside the boat, as well as the data dashboard website. 
                On the side i'm doing some PCB design as well.
            </p>
            <h2 class="text-xl font-extrabold">Embedded telemetry</h2>
            <p class="">
                Part of my work is the Embedded telemetry systems placed onboard. The goal is to gather data which serves as information to the pilot
                as well as use the data in our racing strategy.
                <br>
                The system itself consist of multiple sensors coming from different components inside the boat,
                like the ESC, battery or solar panels.
                To gather data from all these sensors and proccess them we use STM32 microcontrollers as well as an ESP8266 to send data over the internet.
                These microcontrollers are programmed in C/C++. 
                To send/receive data to/from different components, communication Protocols like UART, I2C, SPI and CANBUS are used.
            </p>
            <h2 class="text-xl font-extrabold">Telemetry Dashboard</h2>
            <p class="">
                This Dashboard is able to view the live data collected from to boat. This is useful as we can calculate race strategy on land.
                An example of such strategy would be asking "for how long can we sail until the battery is empty?". 
                <br>
                The dashoard gets this data through the MQTT protocol in which it receives data from the ESP8266 inside the boat. 
                It's made in Sveltekit with a python script for handling the MQTT connection.
            </p>
        </div>
    </Frame>
    </div>    
    <!-- <div style="flex:1 1 0" class="h-[200px] lg:h-auto bg-[url(hi-horizon/me_working.jpg)] bg-cover bg-center"></div> -->
</div>