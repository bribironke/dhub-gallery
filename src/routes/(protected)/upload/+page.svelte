<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData

</script>
<svelte:head>
  <title>Upload | Dhub</title>
</svelte:head>

<div class="w-full h-full flex justify-center items-center">
  <form action="?/upload" method="post" class="mx-auto flex flex-col gap-4 dcard w-[300px] md:w-[480px]" enctype="multipart/form-data">
    <h1 class="text-2xl font-semibold">Upload Picture</h1>
    <hr class="dark:opacity-40"/>
    <div class="flex flex-col w-full gap-1">
      <input type="file" name="file" class="file-input file-input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" accept=".jpg, .png, .gif" />
    </div>
    {#if form?.maxSizeExceeded}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*Image is larger than 5MB. Reduce image size and re-upload</p>
    {/if}

    {#if form?.invalid}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*Wrong or No file uploaded. Re-upload correct image files</p>
    {/if}
    
    {#if form?.uploadError}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*{form?.errorMsg}</p>
    {/if}

    <button type="submit" class="bt bt-main outline-none">Upload</button>
  </form>
</div>