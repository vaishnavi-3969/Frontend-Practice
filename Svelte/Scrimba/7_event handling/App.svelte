<script>
    import Face from './Face.svelte';
    import Container from './Container.svelte';
    import Header from './Header.svelte';
    import Button from './Button.svelte';
    let showHeader = false;
</script>


{#if showHeader}
    <Header />
{/if}
<Container>
    <Button on:click={() => {showHeader = true}}>showwwww</Button>
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