<script lang=ts>
  import type { ActionData } from './$types'
  import { enhance } from '$app/forms';
  import { statusStore } from '$lib/stores';
  import { initial } from '$lib';

  export let form: ActionData

  $: $statusStore = form?.status

</script>
<svelte:head>
  <title>Login | Dhub</title>
</svelte:head>

<div class="w-full h-full flex justify-center items-center">
  <form action="?/login" method="post" class="mx-auto flex flex-col gap-4 dcard w-full max-w-[480px] md:w-[600px]" use:enhance>
    <h1 class="text-2xl font-semibold">Login</h1>
    <hr class="dark:opacity-40"/>
    <div class="flex flex-col w-full gap-1">
      <label for="email">Email</label>
      <input type="email" name="email" placeholder="E.g. john.doe@gmail.com" aria-label="emfield" id="email" class="input input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" />
    </div>
    <div class="flex flex-col w-full gap-1">
      <label for="password">Password</label>
      <input type="password" name="password" aria-label="pwfield" id="password" class="input input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" />
    </div>
    {#if form?.invalid}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*Email and password are required.</p>
    {/if}

    {#if form?.credentials}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*You have entered the wrong credentials</p>
    {/if}

    <button type="submit" class="bt bt-main outline-none" aria-label="submitbtn">Login</button>
    <hr class="dark:opacity-40"/>
    <div>
      <span>Don't have an account yet?</span>
      <a href="/register" class="underline">Register</a>
    </div>
  </form>
</div>