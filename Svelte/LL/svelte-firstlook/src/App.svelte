<script>
  import { onMount } from "svelte";
  import ArtistList from "./ArtistList.svelte";
  import ArtistSearch from "./ArtistSearch.svelte";
  let searchTerm = "";
  let artists = [];
  let displayList = [];

  function filterList(list, query) {
    return list.filterList((item) => {
      return (
		item.name.toLowerCase().match(query.toLowerCase()) ||
        item.bio.toLowerCase().match(query.toLowerCase())
		)
	})
}
    
  
  onMount(async () => {
    const res = await fetch(`data.json`);
    artists = await res.json();
    displayList = artists;
  });
</script>

<div class="container">
  <ArtistSearch
    bind:searchTerm
    on:updateSearch={() => {
      displayList = filterList(artists, searchTerm);
    }}
  />
  <ArtistList bind:artists={displayList} />
</div>

<style global lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
