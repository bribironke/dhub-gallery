<script lang="ts">
  import { page } from '$app/stores';
  import Toast from '$lib/components/Toast.svelte';
  import type { ActionData } from './$types'

  export let form: ActionData

  async function imageUrlToBlob(imageUrl: string): Promise<string> {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  }
</script>
<svelte:head>
  <title>Upload | Dhub</title>
</svelte:head>

<div class="w-full h-full flex flex-col gap-4 justify-center items-center">
  <form action="?/upload" method="post" class="mx-auto flex flex-col gap-4 dcard w-[300px] md:w-[480px]" enctype="multipart/form-data">
    <h1 class="text-2xl font-semibold" aria-label="upload hero">Upload Picture</h1>
    <hr class="dark:opacity-40"/>

    <div class="flex flex-col w-full gap-1">
      <input type="file" name="file" class="file-input file-input-bordered w-full bg-transparent border-font-color/40 dark:border-white/40" accept=".jpg, .png, .gif" />
    </div>
    {#if form?.maxSizeExceeded}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*Image is larger than 5MB</p>
    {/if}

    {#if form?.invalid}
      <p class="text-red-500 dark:text-white text-sm font-semibold">*Wrong or No file uploaded.</p>
    {/if}

    <button type="submit" class="bt bt-main outline-none">Upload</button>
  </form>
  <section class="bg-white dark:bg-dmpaper shadow-custom rounded-lg p-4 flex flex-col gap-2">
    <h2 class="font-semibold">Your uploaded pictures</h2>
    <div class="overflow-auto grid grid-cols-3 gap-2 w-full">
      {#if $page.data.user}
        {#each $page.data.user.images as image}
        {#await imageUrlToBlob(image.url) then value}
          <div class="w-20 h-20 bg-no-repeat rounded-full bg-cover shadow-custom bg-center" style="{`background-image: url(${value})`}"></div>
          <!-- <img src="{value}" alt=""/> -->
        {/await}
        {/each}
      {/if}
    </div>
  </section>
</div>
{#if form?.status}
   <Toast status={form.status} />
{/if}