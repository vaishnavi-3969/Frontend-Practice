<script>
    import Face from './Face.svelte';
    import Container from './Container.svelte';
    import Header from './Header.svelte';
    let showHeader = false;
    setTimeout(() => {
        showHeader = true;
    }, 1000);
</script>


{#if showHeader}
    <Header />
{/if}
<Container>
    
</Container>

<!-- Challenge 2 - 
1. use an if statement and settimeout to make Header appear after 1 second (1000 milliseconds)
2. inside the header, make the face+sveltelogo repeat with #each  -->

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