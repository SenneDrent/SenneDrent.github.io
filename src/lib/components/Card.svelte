<script lang="ts" context="module">
    import Frame from "$lib/components/frame.svelte";
</script>
<script lang="ts">
    export let cardInfo: CardInfo
</script>

<Frame>
    <div class="w-80 xl:w-96">
        <a href={cardInfo.contentLink}>
        {'{'}
        <div class="pl-3">
                "image":
                <div class="flex items-end">
                    <img alt={cardInfo.contentLink} src={cardInfo.image} class="object-fit w-80 h-80 xl:w-96 xl:h-96 rounded-t bg-intenseWhite o">
                    <div>,</div>
                </div>
            <div> "title": "{cardInfo.title}",</div>
            <div>
                "link": <span class="hover:text-wineRed italic hover:underline">"{cardInfo.contentLink}"</span>,
            </div>
            </div>
        {'}'}
        </a>
    </div>
</Frame>