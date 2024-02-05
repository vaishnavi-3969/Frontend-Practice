<script lang="ts">
  import Game from "./Game.svelte";
  import "../styles.css";
  import { confetti } from "@neoconfetti/svelte";
  import Modal from "./Modal.svelte";
  import { levels } from "./levels";
  let state: "waiting" | "paused" | "playing" | "won" | "lost" = "waiting";
  let game: Game;
</script>

<Game
  bind:this={game}
  on:play={() => {
    state = "playing";
  }}
  on:pause={() => {
    state = "paused";
  }}
  on:win={() => {
    state = "won";
  }}
  on:lose={() => {
    state = "lost";
  }}
/>

{#if state !== "playing"}
  <Modal>
    <header>
      <h1>e<span>match</span>i</h1>
      <p>the emoji matching game</p>
    </header>
    {#if state === "won" || state === "lost"}
      <p>you {state} the game!</p>
    {:else if state === "paused"}
      <p>Game paused</p>
    {:else if state === "waiting"}
      <p>Choose a level</p>
    {/if}

    <div class="buttons">
      {#if state === "paused"}
        <button on:click={() => game.resume()}>resume</button>
        <button on:click={() => (state = "waiting")}> quit </button>
      {:else}
        {#each levels as level}
          <button
            on:click={() => {
              game.start(level);
              state = "playing";
            }}
          >
            {level.label}
          </button>
        {/each}
      {/if}
    </div>
  </Modal>
{/if}

{#if state === "won"}
  <div
    class="confetti"
    use:confetti={{
      stageHeight: innerHeight,
      stageWidth: innerWidth,
    }}
  ></div>
{/if}

<style>
  h1 {
    font-size: 4em;
  }
  span {
    color: darkmagenta;
  }
  p {
    font-family: Grandstander;
  }
  .confetti {
    position: fixed;
    top: 30%;
    left: 50%;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
