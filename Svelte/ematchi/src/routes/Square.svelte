<script lang="ts">
  import {send} from './transition';

  export let emoji: string;
  export let selected: boolean;
  export let found: boolean;
  export let group: 'a' | 'b';

</script>

<div class="square" class:flipped={selected || found}>
  <button on:click></button>
  <div class="background"></div>
  {#if !found}
    <span 
    out:send={{key: `${emoji}:${group}`}}
    >{emoji}</span>
  {/if}
</div>

<style>
  .square {
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.4s;
    transform-style: preserve-3d;
  }
  span {
    font-size: 20em;
    pointer-events: none;
  }
  button {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: #eee;
    border: 0;
    border-radius: 2em;
    font-size: inherit;
  }
  .background{
    position: absolute;
    background: white;
    border: 2em solid #eee;
    border-radius: 2em;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    width: 100%;
    height: 100%;

  }
  .flipped {
    /* background: #eee; */
    transform: rotateY(180deg);

  }
  span {
    backface-visibility: hidden;
  }
  .background {
    background: #eee;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }

</style>
