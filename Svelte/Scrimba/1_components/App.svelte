<script>
    let say = 'hi';
    setTimeout(() => {
        say = 'bye';
    }, 1000)
</script>

<style>
    div {
        color: red;
    }
    :global(div) {
        background: blue;
    }
</style>

<div>
    Say: {say}
</div>