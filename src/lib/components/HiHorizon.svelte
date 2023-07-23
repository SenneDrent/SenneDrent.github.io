<script lang="ts" context="module">
    import Frame from "./frame.svelte";
    import { writable } from "svelte/store";
    export const HiHorizonContainerHeightStore = writable(0);
</script>
<script lang="ts">
    let HiHorizonContainerHeight: any;
    $: HiHorizonContainerHeightStore.set(HiHorizonContainerHeight);
</script>

<div id="HiHorizonContainer" class="flex min-h-screen px-16 py-8 text-left space-y-4 z-10">
    <Frame borderColour="bg-red" bgColour="bg-white">
        <h1 class="text-2xl">Hi-Horizon Racing Team</h1>
        <p class="font-bold">
            Software programmer for a Boat driven by solarPower.
            This project has been started with friends and we have been working since 2019. We are competing in the Solar Sport One races
            were the goal is to make your Boat as efficient and fast as possible
            I am in charge of programming for the embedded telemetry system inside the boat, as well as the data dashboard website.
        </p>
        <h2 class="text-xl">On board telemetry</h2>
        <p class="font-bold">
            Part of my work is the on board telemetry systems, which gathers data from multiple sensors, and saves these locally on a SD card and
            display it on a screen inside the boat, but also sends data to an telemetry website through internet.
            <br>
            The system itself consist of multiple sensors coming from different components inside the boat,
            like the motorcontroller, battery or solar panels.
            These are connected to microcontrollers through a variety of connections with different data Protocols like UART, I2C, SPI and CANBUS.
            THe microcontrollers used include boards which use the Arduino framework based on C++, like Teensy or ESP, but there is also being worked on using stm32
            boards, using the stm32_HAL based on C.
        </p>
        <h2 class="text-xl">Telemetry Website</h2>
        <p class="font-bold">
            This website is able to view the data collected from to boat on a dashboard. This is useful for strategy calculations we make on land,
            think of for example "for long can we drive until the battery is empty?". The data is displayed asynchronously through AJAX request with the database.
            Other features include being able to record periods of time so it can be viewed at with a graph.
            <br>
            The website gets this data through the MQTT protocol in which it receives data from the esp inside the boat.
            The website itself is made with PHP, javascript and sqllite.
        </p>
    </Frame>
</div>