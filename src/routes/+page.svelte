<script lang="ts">
  import { searchPostcode } from "$lib/postcodes";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Map from "$lib/map.svelte";
  import { goto } from "$app/navigation";

  let postcodedata: any;
  let searchText: string = "";
  let errorText = "";

  onMount(async () => {
    const postcode = $page.url.searchParams.get("postcode");
    if (postcode) {
      searchText = postcode.toUpperCase();
      await search();
    }
  });

  async function search() {
    try {
      errorText = "";
      postcodedata = null;
      const data = await searchPostcode(searchText);
      postcodedata = data;

      const newUrl = new URL($page.url);
      newUrl?.searchParams?.set("postcode", searchText);
      goto(newUrl);

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
    on:keyup={(e) => {
      if (e.key === "Enter") search();
    }}
    placeholder="Search for postcode"
  />
  <button on:click={search}>Search</button>
  {#if errorText}
    <p class="error-text">{errorText}</p>
  {/if}

  {#if postcodedata}
    <div class="flex-grid">
      <div class="col">
        <h2>Information for Postcode: {postcodedata.postcode}</h2>
        <p>Country: {postcodedata.country || "Unknown"}</p>
        <p>Region: {postcodedata.region || "Unknown"}</p>
        <p>District: {postcodedata.admin_district || "Unknown"}</p>
        <p>Ward: {postcodedata.admin_ward || "Unknown"}</p>
        <p>
          Constituency: {postcodedata.parliamentary_constituency || "Unknown"}
        </p>
        <p>Latitude: {postcodedata.latitude || "Unknown"}</p>
        <p>Longitude: {postcodedata.longitude || "Unknown"}</p>
      </div>
      <div class="col">
        <h2>Map Information</h2>
        <Map
          latitude={postcodedata?.latitude}
          longitude={postcodedata?.longitude}
        />
      </div>
    </div>
  {/if}
</div>

<style>
  h1 {
    font-size: 1.5em;
  }

  input {
    margin: 0.5em;
  }

  button {
    margin: 0.5em;
  }

  p {
    margin: 0.5em;
  }

  .flex-grid {
    display: flex;
  }
  .col {
    flex: 1;
  }
  .error-text {
    color: red;
  }
</style>
