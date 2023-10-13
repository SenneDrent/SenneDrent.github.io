<script>
    import { expoOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import Frame from "./frame.svelte";
</script>

<header transition:fly|local={{duration: 150, opacity: 1, easing: expoOut, x:-150}} class="sticky h-screen flex top-0 z-20 p-2">
    <Frame borderColour='bg-redBlack' bgColour='bg-warmWhite'>
        <div class="flex flex-col flex-grow text-redBlack">
            <nav class="flex flex-grow flex-col space-y-4">
                <a href="/" class="hover:text-red">Start</a>
                <a href="/#HiHorizonContainer" class="hover:text-red">Hi-Horizon racing team</a>
                <a href="/#TuDelftContainer" class="hover:text-red">College</a>
                <a href="/#contactContainer" class="hover:text-red">Contact Info</a>
            </nav>
            <div class="text-sm text-bold space-y-2">
                <p>this website is made with:</p>
                <div class="flex justify-around">
                    <a target="_blank" rel='noopener noreferrer' href='https://svelte.dev' class="hover:text-red">Svelte</a>
                    <a target="_blank" rel='noopener noreferrer' href='https://tailwindcss.com' class="hover:text-red">TailwindCSS</a>
                </div>
            </div>
        </div>
    </Frame>
</header>