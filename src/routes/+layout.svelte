<script lang="ts">
  import '@picocss/pico'
  import { applyAction, enhance } from '$app/forms';
  import { invalidateAll } from '$app/navigation';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Gallery | Dhub</title>
</svelte:head>

<div class="container">
  <nav>
    <ul>
      <li><a href="/"><strong>Dhub</strong></a></li>
    </ul>
    <ul>
      
      {#if !$page.data.user}
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      {:else}
        <li><a href="/admin">Admin</a></li>
        <li>
          <form action="/logout" method="post" use:enhance={() => {
            return async ({ result }) => {
              invalidateAll()
              await applyAction(result)
            }
          }}>
            <button type="submit">Logout</button>
          </form>
        </li>
      {/if}
    </ul>
  </nav>
  <slot />
</div>