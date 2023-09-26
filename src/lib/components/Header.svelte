<script lang="ts">
  import { page } from '$app/stores';
  import DarkModeBtn from './buttons/DarkModeBtn.svelte';
  import Hamburger from './buttons/Hamburger.svelte';
</script>

<header class="shadow-custom w-full bg-white dark:bg-dmpaper">
  <nav class="center flex items-center justify-between">
    <a href="/"><strong>Dhub</strong></a>
    <div class="flex items-center gap-4">
      <ul class="hidden md:flex items-center gap-4">
        {#if !$page.data.user}
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        {:else}
          <li><a href="/profile">Profile</a></li>
          <li><a href="/upload">Upload Photo</a></li>
          <li>
            <form action="/logout" method="post">
              <button type="submit">Logout</button>
            </form>
          </li>
        {/if}
      </ul>
      <div class="flex gap-4 items-center justify-between">
        <DarkModeBtn />
        <Hamburger classes={['flex', 'md:hidden']} />
      </div>
    </div>
  </nav>
  
</header>