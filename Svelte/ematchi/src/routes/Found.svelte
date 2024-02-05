<script lang="ts">
  import { receive } from "./transition";

  export let found: String;
</script>

<div class="found">
  {#each found as emoji (emoji)}
  <div class="pair">
    <span
    in:receive={{key: `${emoji}:a`}}
    >{emoji}</span>
    <span
    in:receive={{key: `${emoji}:b`}}
    >{emoji}</span>
</div>
  {/each}
</div>

<style>
    .pair {
        display: flex;
        gap: 0.5em;
        background: white;
        padding: 1em;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0 0 0.5em #000);
    }
    .found {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        filter: drop-shadow(0 0 0.5em #000);
    }
    span{
        position:relative;
        /* left: 0;
        top: 0; */
        font-size: 20em;
    }
</style>