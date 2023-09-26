<script lang="ts">
  import { page } from "$app/stores";
  import { Roles } from "$lib";

</script>

<h1>Admin</h1>

{#if $page.data.user}
  <p>Welcome { $page.data.user.name }</p>
{/if}

{#if $page.data.user.role === Roles.ADMIN}
  <form action="/logout" method="post">
    <button type="submit">Logout</button>
  </form>
{/if}