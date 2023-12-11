<script>
    import Face from './Face.svelte';
    import Container from './Container.svelte';
    import Header from './Header.svelte';
    import Buttons from './Buttons.svelte';
    import story from './story';
    
    let showHeader = false;
    let happyScore = 0;
    let storyIndex = 0;
    $: smileySays = story[storyIndex].smileySays;
    $: buttons = story[storyIndex].buttons;
    function clickHandler(e) {
        storyIndex += 1;
        happyScore += e.detail.value;
    }
</script>


{#if showHeader}
    <Header />
{/if}
<Container>
    <h1>{smileySays}</h1>
    <Face index={2} />
    <Buttons {buttons} on:click={clickHandler} />
</Container>

<!-- Challenge 4 - 
1. add happyScore and storyIndex (both equal 0)
2. smileySays and buttons get updated whenever storyIndex changes
3. add clickHandler function that increments storyIndex and adds e.detail.value to the happyScore -->

<style>
    div {
        color: red;
    }
    :global(*) {
		box-sizing: border-box;
	}
	:global(body, html) {
		margin: 0;
		height: 100vh;
		overflow: hidden;
	}
</style>