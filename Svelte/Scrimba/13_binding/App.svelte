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
    let name = '';
</script>


{#if showHeader}
    <Header />
{/if}
<Container>
    <input type="text" bind:value={name}>
    <h1>{name}, {smileySays}</h1>
    <Face {happyScore} size={storyIndex+1} />
    <Buttons {buttons} on:click={clickHandler} />
</Container>


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