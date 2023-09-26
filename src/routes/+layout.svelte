<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import "../app.css"
</script>

<svelte:head>
  <title>Gallery | Dhub</title>
</svelte:head>


<main class="text-font-color dark:text-white bg-light-bg dark:bg-dmbg h-screen">
  <Header />
  <section class="center">
    <slot />
  </section>
</main>