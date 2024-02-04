<script lang="ts">
  import Square from "./Square.svelte";
  export let grid: string[];
</script>

<div class="grid">
  {#each grid as emoji}
    <Square {emoji} on:click={() => {
      
    }}/>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 0.5em;
    height: 100%;
  }
</style>
