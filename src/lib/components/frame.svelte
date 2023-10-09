<script lang="ts">
    export let borderColour:string;
    export let bgColour:string;
</script>

<div class='flex flex-grow {borderColour} p-7 z-10 pt-12 border-l-8 border-redBlack'>
    <div class="flex-grow {bgColour} text-greenBlack p-3 pb-8">
        <slot></slot>
    </div>
</div>