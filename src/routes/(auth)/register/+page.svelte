<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData
</script>

<h1>Register</h1>
<form action="?/register" method="post">
  <div>
    <label for="username">Username</label>
    <input type="text" name="username" id="username" placeholder="E.g. John Doe" required />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="E.g. john.doe@gmail.com" required />
  </div>
  <div>
    <label for="phoneNumber">Phone Number</label>
    <input type="text" name="phoneNumber" id="phoneNumber" placeholder="E.g. +1 832 310 8276" required />
  </div>
  <div>
    <label for="address">Address</label>
    <textarea name="address" id="address" placeholder="E.g. 5514 Griggs Rd. Houston TX, 77021 USA" rows="5"></textarea>
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