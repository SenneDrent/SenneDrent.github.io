<script lang="ts">
    export let cardInfo: CardInfo
</script>

<div class="bg-warmWhite w-80 xl:w-96 border rounded text-center">
    <a href={cardInfo.contentLink}>
    <div>
       <img alt={cardInfo.contentLink} src={cardInfo.image} class="object-fit w-80 h-80 xl:w-96 xl:h-96 rounded-t bg-intenseWhite">
    </div>
    <div class="text-center p-2">{cardInfo.title}</div>
    </a>
</div>