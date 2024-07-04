<script lang="ts">
  import SearchPage from "$lib/SearchPage.svelte";

  let postcodedata = null;
</script>

<svelte:head>
  <title>Search for a postcode</title>
</svelte:head>
<SearchPage {postcodedata} />
