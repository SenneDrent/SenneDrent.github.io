<script lang="ts" context="module">
    import Frame from "./frame.svelte";

    export let contactContainerHeight: any;
</script>

<div class="h-screen flex items-center">
<div id='contactContainer' class='y-8 space-y-4 font-bold'>
    <Frame borderColour="bg-wineRed" bgColour="bg-warmWhite" id="contactTextContainer">
        {'{'}
        <div class="pl-2 sm:pl-3">
            <h1 class="text-2xl text-left align-middle">"Interested in working with me? Reach out to me through"<span class="text-base">: {'{'}</span></h1>
            <div class="pl-3 sm:pl-8 flex-1 grid grid-cols-1 sm:grid-cols-2">
                <div>"Email":</div>
                <a href='mailto:sennedrent@gmail.com' class="hover:text-wineRed pb-2 sm:pb-0 italic pl-5 sm:pl-0">"sennedrent@gmail.com",</a>

                <div>"Or find me at": <span class="sm:hidden">[</span></div>
                <div class="flex flex-col sm:flex-row space-x-5 pl-5 sm:pl-0">
                    <div class="collapse sm:visible">[</div>
                    <a target="_blank" rel='noopener noreferrer' href='https://github.com/SenneDrent' class="hover:text-wineRed italic hover:underline">"Github",</a>
                    <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/SenneDrent' class="hover:text-wineRed italic hover:underline">"LinkedIn"</a>
                    <div class="collapse sm:visible">],</div>
                </div>
                <span class="sm:hidden">],</span>
            </div>
            <div class="text-base">{'}'},</div>
        </div>
        <div>{'}'}</div>
    </Frame>
</div>
</div>