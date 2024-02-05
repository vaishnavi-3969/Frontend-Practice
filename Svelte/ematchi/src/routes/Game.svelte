<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import Countdown from "./Countdown.svelte";
  import Found from "./Found.svelte";
  import Grid from "./Grid.svelte";
  import { levels } from "./levels";
  import type { Level } from "./levels";
  import { shuffle } from "./utils";

  //   const level = levels[0];

  let size: number;
  let grid: string[] = [];
  let found: string[] = [];
  let remaining: number = 0;
  let duration: number = 0;
  let playing: boolean = false;

  const dispatch = createEventDispatcher();

  export function start(level: Level) {
    size = level.size;
    grid = create_grid(level);
    remaining = duration = level.duration;

    resume();
  }
  function resume() {
    playing = true;
    countdown();
    dispatch("play");
  }
  function create_grid(level: Level) {
    const copy = level.emojis.slice();
    const pairs: string[] = [];
    for (let i = 0; i < level.size ** 2 / 2; i++) {
      const index = Math.floor(Math.random() * copy.length);
      const emoji = copy.splice(index, 1)[0];
      pairs.push(emoji);
    }
    pairs.push(...pairs);
    return shuffle(pairs);
  }

  function countdown() {
    const start = Date.now();
    let remaining_at_start = remaining;

    function loop() {
      if (!playing) return;
      requestAnimationFrame(loop);
      remaining = remaining_at_start - start;

      if (remaining <= 0) {
        // TODO the game has been lost
        dispatch('lose')
        playing = false;
      }
    }
    loop();
  }
//   onMount(countdown);
</script>

<div class="game" style="--size: {size}">
  <div class="info">
    {#if playing}
      <Countdown
        {remaining}
        {duration}
        on:click={() => {
          // TODO pause the game
            playing = false;
            dispatch('pause');
        }}
      />
    {/if}
  </div>
  <div class="grid-container">
    <Grid
      {grid}
      on:found={(e) => {
        found = [...found, e.detail.emoji];

        if (found.length === (size * size) / 2) {
          //TODO win the game
          dispatch('win');
        }
      }}
      {found}
    />
  </div>
  <div class="info">
    <!-- <button on:click={() => {
            grid = create_grid(level);
            found = [];
        }}>Reset</button> -->
    <Found {found} />
  </div>
</div>

<style>
  .game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: min(1vmin, 0.1rem);
  }
  .info {
    width: 80vmin;
    height: 10vmin;
    background: #ccc;
  }
  .grid-container {
    width: 80vmin;
    height: 80vmin;
    background: #999;
  }
</style>
