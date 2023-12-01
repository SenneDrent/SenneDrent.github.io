<script>
    import { expoOut } from 'svelte/easing';
    import { fly } from 'svelte/transition';
    import { YscrollStore, slides } from './+page.svelte';
    import "../app.css"
    import Navigator from '@components/navigator.svelte';
</script>

<div>
    <div class='min-h-screen min-w-screen font-semibold text-base md:text-lg lg:text-xl'> 
        <div class='flex justify-center'>
            <slot></slot>
        </div>
    </div>
</div>