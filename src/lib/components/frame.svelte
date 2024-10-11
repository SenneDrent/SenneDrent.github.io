<script lang="ts">
    export let borderColour:string;
    export let bgColour:string;
</script>

<div class='w-full {borderColour} text-left space-y-4 p-7 z-10 pt-12 rounded-sm border-l-8 border-darkShade' {...$$restProps}>
    <div class="flex flex-col {bgColour} rounded-sm text-greenBlack p-8 pt-4 h-full">
        <slot></slot>
    </div>
</div>