<script lang="ts">
    export let borderColour:string;
    export let bgColour:string;
</script>

<div class="bg-warmWhite border rounded font-mono font-normal text-darkShade h-full">
    <div class="h-4 bg-darkShade"></div>
    <div class="p-4">
        <slot></slot>
    </div>
</div>