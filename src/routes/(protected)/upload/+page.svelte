<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData

</script>

<h1>Upload Picture</h1>
<form action="?/upload" method="post">
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" placeholder="E.g. john.doe@gmail.com" id="email"/>
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" id="password"/>
  </div>
  
  <button type="submit">Login</button>
</form>