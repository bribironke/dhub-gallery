<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import "../app.css"
</script>

<svelte:head>
  <title>Gallery | Dhub</title>
</svelte:head>


<Header />
<section class="center">
  <slot />
</section>