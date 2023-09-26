<script lang="ts">
  import { page } from "$app/stores";
  import { Roles } from "$lib";

</script>

<svelte:head>
  <title>Profile | Dhub</title>
</svelte:head>
<h1>Profile</h1>

{#if $page.data.user}
  <p>Welcome { $page.data.user.name }</p>
{/if}

{#if $page.data.user.role === Roles.ADMIN}
  <form action="/logout" method="post">
    <button type="submit">Logout</button>
  </form>
{/if}