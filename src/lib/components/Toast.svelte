<script lang="ts">
  import Close from "./icons/Close.svelte";
  import { color, formatDate, icon, type iStatus } from "$lib";

  let toastRef: HTMLElement;
  let show = false;
  
  export let status: iStatus
  
  $: component = icon(status.type);
  $: className = color(status.type);
  $: {
    if (status.type != "info") {
      show = true;
      setTimeout(() => show = false, 4000);
    }
  }

</script>

<div
class={`pointer-events-auto mx-auto mb-4 w-[calc(100%-32px)] max-w-sm rounded-lg bg-primary-100 bg-clip-padding text-sm text-primary-700 shadow-custom dark:bg-dmpaper ${className} fixed left-1/2 bottom-2 -translate-x-1/2 translate-y-[calc(120%+8px)] transition-all duration-500 ease-in-out`}
id="toast"
role="alert"
aria-live="assertive"
aria-atomic="true"
class:show
bind:this={toastRef}>
<div
  class="flex items-center justify-between rounded-t-lg border-primary-200 bg-primary-100 bg-clip-padding px-4 pb-2 pt-2.5 text-primary-700"
>
  <p class="flex items-center font-bold text-primary-700">
    <svelte:component this={component} />
    <span class="capitalize">{status.type}</span>
  </p>
  <div class="flex items-center">
    <p class="text-xs text-primary-700">{ formatDate(new Date()) }</p>
    <button
      type="button"
      class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
      on:click={() => (show = false)}
      aria-label="Close"
    >
      <span
        class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
      >
        <Close />
      </span>
    </button>
  </div>
</div>
<hr class="dark:opacity-40" />
<div
  class="break-words rounded-b-lg bg-primary-100 px-4 py-4 text-primary-700"
>
  {status.message}
</div>
</div>
