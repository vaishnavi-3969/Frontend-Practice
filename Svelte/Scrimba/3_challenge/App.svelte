<script>
    import Face from './Face.svelte';
    let say = 'hi';
    setTimeout(() => {
        say = 'bye';
    }, 1000)
</script>

<style>
    div {
        color: red;
    }
</style>

<div>
    Say: {say}
</div>

<Face index={0} />
<Face />
<Face index={2}/>

<!-- 
1. add a prop called index in Face.svelte
2. give it a default value
3. add a list of faces in Face.svelte
4. use the index in the list to choose the face
5. add three faces onto your page.
-->