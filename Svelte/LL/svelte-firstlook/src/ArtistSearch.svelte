<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
  export let searchTerm;
</script>

<div class="row justify-content-center mt-2">
  <div class="col-12 cold-md-8 col-lg-6 border rouded bg-light p-3">
    <h4 class="mb-1">
      Search
      <small>
        {#if searchTerm} for {/if}
        {searchTerm}
      </small>
    </h4>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        aria-label="Search input.."
        bind:value={searchTerm}
        on:keyup={() => {
            dispatch('updateSearch')
        }}
      />
    </div>
  </div>
</div>
>
