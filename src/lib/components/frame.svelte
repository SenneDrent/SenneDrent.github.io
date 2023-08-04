<script lang="ts">
    export let borderColour:string;
    export let bgColour:string;
</script>

<div class='flex flex-grow {borderColour} p-5 z-10'>
    <div class="flex-grow {bgColour} text-greenBlack p-5" style="background-image: url('/pink_carpet_background.png'); background-attachment: fixed;">
        <slot></slot>
    </div>
</div>