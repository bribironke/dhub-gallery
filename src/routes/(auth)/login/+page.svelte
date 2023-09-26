<script lang=ts>
  import type { ActionData } from './$types'
  import { applyAction, enhance } from '$app/forms';
  import { invalidateAll } from '$app/navigation';

  export let form: ActionData
</script>


<h1>Login</h1>
<form action="?/login" method="post" use:enhance={() => {
  return async ({ result }) => {
    invalidateAll()
    await applyAction(result)
  }
}}>
  <div>
    <label for="username">Username</label>
    <input type="text" name="username" id="username"/>
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password"/>
  </div>
  {#if form?.invalid}
    <p>Username and password are required.</p>
  {/if}

  {#if form?.credentials}
    <p>You have entered the wrong credentials</p>
  {/if}

  <button type="submit">Log in</button>
</form>