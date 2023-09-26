<script lang=ts>
  import type { ActionData } from './$types'

  export let form: ActionData
</script>


<form action="?/login" method="post">
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