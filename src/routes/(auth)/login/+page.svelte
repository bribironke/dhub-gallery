<script lang=ts>
  import type { ActionData } from './$types'

  export let form: ActionData
</script>


<div class="w-full h-full flex justify-center items-center">
  <form action="?/login" method="post" class="mx-auto flex flex-col gap-4 dcard w-[300px]">
    <h1 class="text-2xl font-semibold">Login</h1>
    <hr class="dark:opacity-40"/>
    <div class="flex flex-col w-full gap-1">
      <label for="email">Email</label>
      <input type="email" name="email" placeholder="E.g. john.doe@gmail.com" id="email" class="input input-bordered w-full max-w-xs bg-transparent border-font-color/40 dark:border-white/40" />
    </div>
    <div class="flex flex-col w-full gap-1">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" class="input input-bordered w-full max-w-xs bg-transparent border-font-color/40 dark:border-white/40" />
    </div>
    {#if form?.invalid}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*Email and password are required.</p>
    {/if}

    {#if form?.credentials}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*You have entered the wrong credentials</p>
    {/if}

    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</div>