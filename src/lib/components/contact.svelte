<script lang="ts" context="module">
    import Frame from "./frame.svelte";

    export let contactContainerHeight: any;
</script>

<div id="HihorizonContainer" class="flex flex-col lg:flex-row align  text-left z-10"></div>
<div id='contactContainer' class='flex items-center h-screen py-8 space-y-4 font-bold'>
    <Frame borderColour="bg-wineRed" bgColour="bg-warmWhite" id="contactTextContainer">
        <div class="flex flex-col flex-grow p-5 py-10 items-center">
            <div class="space-y-4">
                <div class="inline-block text-left border-b-2">
                    <h1 class="text-2xl text-center">Interested in working with me? Reach out to me through:</h1>
                    <ul class="py-6 space-y-2">
                        <li>Email: &nbsp&nbsp&nbsp<a href='mailto:sennedrent@gmail.com' class="hover:text-wineRed">sennedrent@gmail.com</a></li>
                        <li>Phone: &nbsp<a href='tel:+31612242235' class="hover:text-wineRed">+31 6 12 24 22 35</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Or find me at:</h2>
                    <div class="pt-5 flex space-x-5">
                        <a target="_blank" rel='noopener noreferrer' href='https://github.com/SenneDrent' class="hover:text-wineRed">Github</a>
                        <a target="_blank" rel='noopener noreferrer' href='https://www.linkedin.com/in/SenneDrent' class="hover:text-wineRed">Linkedn</a>
                    </div>
                </div>
            </div>
        </div>
    </Frame>
</div>