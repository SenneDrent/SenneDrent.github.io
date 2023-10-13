<script>
    import { expoOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import { YscrollStore, slides } from './+page.svelte';
    import "../app.css"
    import Navigator from '@components/navigator.svelte';
    let collapse = true;
    let burgerColour = "stroke-redBlack"

    function showCollapseNavBar() {
        collapse = !collapse;
        if (collapse) {
            burgerColour = "stroke-redBlack"
        } else {
            burgerColour = "stroke-warmWhite"
        }
    }

    let divSize = "";
</script>


<!-- navBar disabled,
    TODO::restyle navBar -->
<div>
    <div class='min-h-screen min-w-screen font-extrabold'> 
        <!-- <div class="top-0 z-50 bg-transparent sticky">
            <button id="burger" on:click={showCollapseNavBar} class="absolute top-0 p-5 z-50 bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:stroke-red {burgerColour}">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>                  
            </button>
        </div> -->

        <div class='flex items-stretch'>
            <!-- NavBar -->
            <!-- {#if collapse === false}
                <Navigator />
            {/if} -->
            <slot></slot>
        </div>
    </div>
</div>