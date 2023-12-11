<script>
    import Face from './Face.svelte';
    import Container from './Container.svelte';
    let say = false;
    setTimeout(() => {
        say = true;
    }, 1000)
</script>

<Container>
    {#if say}
        <div>
            Hi!
        </div>
    {:else if !say}
        not saying anything..
    {/if}
    {#each [2,1,0] as index}
        <Face {index} />
    {/each}
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