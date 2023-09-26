<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from './$types'

  export let form: ActionData
</script>

<h1>Register</h1>
<form action="?/register" method="post">
  <div>
    <label for="username">Username</label>
    <input type="text" name="username" id="username" required />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" required />
  </div>

  {#if form?.user}
    <p class="error">Username is taken</p>
  {/if}
  <button type="submit">Register</button>
</form>