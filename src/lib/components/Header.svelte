<script lang="ts">
  import { page } from '$app/stores';
  import DarkModeBtn from './buttons/DarkModeBtn.svelte';
  import Hamburger from './buttons/Hamburger.svelte';
</script>

<header class="shadow-custom w-full bg-white dark:bg-dmpaper">
  <nav class="center flex items-center justify-between">
    <a href="/" aria-label="logo" class="font-semibold">Dhub Gallery</a>
    <div class="flex items-center gap-8">
      <ul class="hidden md:flex items-center gap-4">
        <li class="w-full py-3 flex items-center justify-start"><a class="w-full h-full" href="/">Home</a></li>
        {#if !$page.data.user}
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        {:else}
          <li><a href="/profile">Profile</a></li>
          <li><a href="/upload">Upload</a></li>
          <li>
            <form action="/logout" method="post">
              <button type="submit">Logout</button>
            </form>
          </li>
        {/if}
      </ul>
      <div class="flex gap-4 items-center justify-between">
        <div>
          Welcome, { $page.data.user.name }
        </div>
        <DarkModeBtn />
        <Hamburger classes={['flex', 'md:hidden']} />
      </div>
    </div>
  </nav>
  
</header>