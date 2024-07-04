<script lang="ts">
  import SearchPage from "$lib/SearchPage.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title
    >{data.postcodedata?.postcode
      ? `${data.postcodedata?.postcode} Information`
      : "Search for a postcode"}</title
  >
</svelte:head>

<SearchPage postcodedata={data.postcodedata} />
