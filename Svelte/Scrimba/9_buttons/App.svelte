<script>
    import Face from './Face.svelte';
    import Container from './Container.svelte';
    import Header from './Header.svelte';
    import Buttons from './Buttons.svelte';
    let showHeader = false;
    
    const buttons = [
        {value: 0,  text: 'ummmmmm......'},
        {value: 1,  text: 'I sure do!'},
        {value: -2, text: 'gross!'}
    ]
    let score = 0;
</script>


{#if showHeader}
    <Header />
{/if}
<Container>
    Do you like pizza? Score: {score}
    <Buttons {buttons} on:click={(e) => {score += e.detail.value}} />
</Container>

<!-- Challenge 3 - 
1. add a prop in Buttons.svelte called buttons which is a list of objects like:
[{value: '', text: ''}, ...etc]
2. use #each to turn all the objects into buttons that
    a. have innerHTML equal to the .text of the object
    b. dispatch a click event that passes the .value of the object 
3. Handle the event in App.svelte to update the score
-->

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