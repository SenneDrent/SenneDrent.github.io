<script lang="ts" context="module">
    import Frame from "$lib/components/frame.svelte";
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
            <!-- <p class="italic">Software Engineer for a Boat driven by solar power.</p> -->

            <p class="">
                Hi-horizon racing team is a hobby project me and friends from highschool work on.
                We build a one person solar powered boat, in which we perform races each year at Akkrum in the Netherlands and at Balaton in Hungary.
                The team has been founded in 2019 and 
                for me this was a great place to learn some practical skills in webdev, embedded and even some electrical design.
            </p>
            <div class="w-full flex flex-col lg:flex-row justify-center py-5">
                <div class="pr-5">
                    <h2 class="text-xl font-extrabold">Battery</h2>
                    <p>
                        One of the biggest projects for me was the battery. This 60V li-ion battery is a 1.5 Kwh buffer for when the sun is not shining as much.
                        I did a large part of the electrical design. 
                        which involved creating PCBs for precharge, power distribution and other control signals.
                        But also choosing components such as relays and dc-converters.
                        On the software side, I programmed the BMS firmware, making sure the control circuits go on and off correctly.
                    </p>
                </div>
                <img src="/hi-horizon/battery.jpeg" class="lg:w-1/2"/>
            </div>
            <div class="w-full flex justify-center py-5">
                <div class="pr-5">
                    <h2 class="text-xl font-extrabold">Embedded telemetry</h2>
                    <p class="">
                        Part of my work is the Embedded telemetry systems placed onboard. The goal is to gather data which serves as information to the pilot
                        as well as use the data in our racing strategy.
                        <br>
                        We gather data from a lot of different sensors and components, such as the battery, ESC, GPS and so on. 
                        The telemetry system logs data to an SD card, displays information to the pilot and sends data to land so we can monitor it for strategy.
                    </p>
                </div>
                <img src="/hi-horizon/MTU.jpeg" class="lg:w-1/2"/>
            </div>
            <div class="w-full flex justify-center py-5">
                <div class="pr-5">
                    <h2 class="text-xl font-extrabold">Telemetry Dashboard</h2>
                    <p class="">
                        The dashboard for viewing the boat data was one of my earliest responsibilities. 
                        I did a few revisions, going from PHP website to Svelte and ending up making a Svelte + Tauri application. 
                        The Dashboard connects with the boat through MQTT and in the future should also be able to connect with a SocketCan device.
                    </p>
                </div>
                <img src="/hi-horizon/dashboard.png" class="lg:w-1/2"/>
            </div>
        </div>
    </Frame>
    </div>    
    <!-- <div style="flex:1 1 0" class="h-[200px] lg:h-auto bg-[url(hi-horizon/me_working.jpg)] bg-cover bg-center"></div> -->
</div>