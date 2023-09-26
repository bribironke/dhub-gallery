<script lang="ts">
  import { onMount } from "svelte";
	import CancelOrCloseBtn from "./buttons/CancelOrCloseBtn.svelte";
  import { addMobileNavListener, removeMobileNavListener } from "$lib";

	let mobileNavRef: HTMLElement
	
	onMount(() => {
		addMobileNavListener(mobileNavRef)
		return removeMobileNavListener(mobileNavRef)
	});
</script>
<div
	bind:this={mobileNavRef}
	aria-label="mobile-navigation"
	class="w-[290px] fixed top-0 right-0 h-screen z-10 bg-white dark:bg-dmpaper translate-x-[150%] transition-transform duration-200">
	<div class="flex items-center justify-end my-2 py-2 px-4">
		<CancelOrCloseBtn />
	</div>
	mobile nav
</div>