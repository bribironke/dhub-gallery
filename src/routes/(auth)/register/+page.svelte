<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData
</script>
<svelte:head>
  <title>Register | Dhub</title>
</svelte:head>
<div class="w-full h-full flex justify-center items-center">

  <form action="?/register" method="post" class="mx-auto flex flex-col gap-4 dcard w-full max-w-[480px] md:w-[600px]">
    <h1 class="text-2xl font-semibold">Register</h1>
    <hr class="dark:opacity-40"/>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col w-full gap-1">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" placeholder="E.g. John Doe" class="input input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" />
      </div>
      <div class="flex flex-col w-full gap-1">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="E.g. john.doe@gmail.com" id="email" class="input input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" />
      </div>
      <div class="flex flex-col w-full gap-1">
        <label for="phoneNumber">Phone Number</label>
        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="E.g. +1 832 310 8276" class="input input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" />
      </div>
      <div>
        <label for="address" class="flex flex-col w-full gap-1">Address</label>
        <input type="text" name="address" id="address" placeholder="E.g. 5514 Griggs Rd. Houston TX, 77021" class="input input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" />
      </div>
    </div>
    <div class="flex flex-col w-full gap-1">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" class="input input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" />
    </div>
  
    {#if form?.user}
      <p class="error">Username or email is taken</p>
    {/if}
    <button type="submit" class="bt bt-main outline-none w-full md:w-fit self-center justify-self-center">Register</button>
    <hr class="dark:opacity-40"/>
    <div>
      <span>Already have an account?</span>
      <a href="/login" class="underline">Login</a>
    </div>
  </form>
</div>