<script>
  export let artists;
</script>

<div class="row justify-content-center">
  <div class="col-11 col-md-7 col-lg-5">
    <div class="list-group">
      {#each artists as artist}
        <div
          class="list-group-item d-flex w-100 list-group-item-action align-items-center"
        >
          <img
            class="rounded mr-3 d-block"
            src={artist.src}
            alt={`Photo of ${artist.name}`}
          />
          <div>
            <h4 class="mb-0">{artist.name}</h4>
            <small class="text-muted">{artist.reknown}</small>
          </div>
        </div>
      {:else}
        <p>No data</p>
      {/each}
    </div>
  </div>
</div>

<style>
  img {
    height: 80px;
  }
  h4 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
</style>
