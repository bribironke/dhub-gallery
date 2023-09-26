<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData

</script>
<svelte:head>
  <title>Upload | Dhub</title>
</svelte:head>
<div class="w-full h-full flex justify-center items-center">
  <form action="?/upload" method="post" class="mx-auto flex flex-col gap-4 dcard w-[300px] md:w-[480px]">
    <h1 class="text-2xl font-semibold">Upload Picture</h1>
    <hr class="dark:opacity-40"/>
    <div class="flex flex-col w-full gap-1">
      <input type="file" class="file-input file-input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" />
    </div>
    <!-- {#if form?.invalid}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*Image is larger than 5MB. Reduce image size and re-upload</p>
    {/if} -->


    <button type="submit" class="bt bt-main outline-none">Upload</button>
  </form>
</div>