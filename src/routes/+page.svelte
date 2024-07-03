<script lang="ts">
  import { searchPostcode } from "$lib/postcodes";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let postcodedata: any;
  let searchText: string = "";
  let errorText = "";

  onMount(async () => {
    const postcode = $page.url.searchParams.get("postcode");
    if (postcode) {
      searchText = postcode.toUpperCase();
      postcodedata = await search(postcode);
    }
  });

  async function search(postcode: string) {
    try {
      errorText = "";
      postcodedata = null;
      const data = await searchPostcode(postcode);
      postcodedata = data;
    } catch (error: any) {
      errorText = error.message;
    }
  }
</script>

<div>
  <h1>{postcodedata?.postcode || "Search for a postcode"}</h1>
  <input
    type="text"
    id="search"
    bind:value={searchText}
    placeholder="Search for postcode"
  />
  <button on:click={() => search(searchText)}>Search</button>
  {#if errorText}
    <p>{errorText}</p>
  {/if}
</div>
