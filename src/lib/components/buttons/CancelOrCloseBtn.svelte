<script lang="ts">
  import { btnClasses } from "$lib";

  const className = "fill-dmpaperx2 dark:fill-white cursor-pointer h-[40px] w-[40px] flex items-center justify-center relative" + btnClasses.join(" ")
</script>
<button on:click class={className}>
  <div class="-clickable" data-type="close-mobile-nav"></div>
  <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
  </svg>
</button>