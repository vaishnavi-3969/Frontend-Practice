<script>
    import Face from './Face.svelte';
    import Container from './Container.svelte';
    import Header from './Header.svelte';
    import Buttons from './Buttons.svelte';
    let showHeader = false;
</script>


{#if showHeader}
    <Header />
{/if}
<Container>
    <Buttons on:click={(e) => {showHeader = e.detail}} />
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