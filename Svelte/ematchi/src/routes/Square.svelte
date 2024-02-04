<script lang="ts">
    export let emoji:string;
</script>
<div class="square">
    <!-- <button on:click={}></button> -->
    <span>{emoji}</span>
</div>

<style>
    .square{
        background: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span{
        font-size: 5em;
    }
    button{
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>