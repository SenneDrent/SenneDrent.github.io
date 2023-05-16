<script>
    import { expoOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import "../app.css"
    let collapse = false;

    function showCollapseNavBar() {
        collapse = !collapse;
    }
</script>

<div class=''>
    <div class='min-h-screen min-w-screen bg-white dark:bg-mainSand dark:text-stone-200 font-extrabold'>
        <div class="sticky top-0 z-50 bg-transparent">
            <button id="burger" on:click={showCollapseNavBar} class="absolute top-0 p-5 z-50 bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:stroke-red-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>                  
            </button>
        </div>
        <div class='flex items-stretch'>
            <!-- NavBar -->
            {#if collapse === false}
            <header transition:fly|local={{duration: 150, opacity: 1, easing: expoOut, x:-150}} class="sticky flex top-0 z-20 h-screen">
                <div class="flex flex-col flex-grow bg-green text-black  p-3 pt-16 m-3">
                    <nav class="flex flex-grow flex-col space-y-4">
                        <a href="/" class="hover:text-red-100">Start</a>
                        <a href="/#HiHorizonContainer" class="hover:text-red-100">Hi-Horizon racing team</a>
                        <a href="/#contactContainer" class="hover:text-red-100">Contact Info</a>
                    </nav>
                    <div class="text-sm text-bold space-y-2">
                        <p>this website is made with:</p>
                        <div class="flex justify-around">
                            <a target="_blank" rel='noopener noreferrer' href='https://svelte.dev' class="hover:text-red-100">Svelte</a>
                            <a target="_blank" rel='noopener noreferrer' href='https://tailwindcss.com' class="hover:text-red-100">TailwindCSS</a>
                        </div>
                    </div>
                </div>
            </header>
            {/if}
        
<slot></slot>
        </div>
    </div>
</div>

