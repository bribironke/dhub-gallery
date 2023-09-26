<script lang="ts">
  import { page } from '$app/stores';
  import DarkModeBtn from './buttons/DarkModeBtn.svelte';
  import Hamburger from './buttons/Hamburger.svelte';
</script>

<header class="shadow-custom w-full bg-white dark:bg-dmpaper">
  <nav class="center flex flex-col items-center md:flex-row gap-2 justify-between">
    <a href="/"><strong>Dhub</strong></a>
    <ul class="flex flex-col md:flex-row items-center justify-center gap-1">
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
      <li>
        <DarkModeBtn />
      </li>
      <li>
        <Hamburger />
      </li>
    </ul>
  </nav>
  
</header>