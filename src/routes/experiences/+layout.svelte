<script>
    import ArrowBack from "@components/icons/ArrowBack.svelte";
</script>
<div class="xl:px-40 lg:px-20 flex flex-col">
    <a href="/" class="text-xl self-start">
        <div class="p-1 mb-3 hover:bg-darkShade text-warmDark hover:text-intenseWhite rounded">
            <ArrowBack/>
        </div>
    </a>
    <slot></slot>
</div>