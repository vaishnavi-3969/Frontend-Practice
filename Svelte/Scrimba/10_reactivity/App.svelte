<script>
    import Face from './Face.svelte';
    import Container from './Container.svelte';
    import Header from './Header.svelte';
    import Buttons from './Buttons.svelte';
    import story from './story';
    
    let showHeader = false;
    let score = 0;
    $: smileySays = 'Hi there, your score is: ' + score;
    $: if (score < -4) smileySays = 'Wow your score is low!'
    let buttons = story[0].buttons;
</script>


{#if showHeader}
    <Header />
{/if}
<Container>
    <h1>{smileySays}</h1>
    <Face index={2} />
    <Buttons {buttons} on:click={(e) => {score += e.detail.value}} />
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