<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import MobileNav from '$lib/components/MobileNav.svelte';
  import Toast from '$lib/components/Toast.svelte'; 
  import { page } from '$app/stores';
  import "../app.css" 
</script>

<svelte:head>
  <title>Dhub</title>
</svelte:head>


<main class="text-font-color dark:text-white bg-light-bg dark:bg-dmbg h-full md:h-screen relative">
  <Toast />
  <Header />
  <section class="center">
    <slot />
  </section>
  <MobileNav />
</main>