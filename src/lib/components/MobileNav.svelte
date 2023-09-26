<script lang="ts">
  import { onMount } from "svelte";
	import CancelOrCloseBtn from "./buttons/CancelOrCloseBtn.svelte";
  import { addMobileNavListener, removeMobileNavListener } from "$lib";
	import { page } from "$app/stores";
  import DarkModeBtn from "./buttons/DarkModeBtn.svelte";

	let mobileNavRef: HTMLElement
	
	onMount(() => {
		addMobileNavListener(mobileNavRef)
		return removeMobileNavListener(mobileNavRef)
	});
</script>
<div
	bind:this={mobileNavRef}
	aria-label="mobile-navigation"
	class="w-[290px] fixed top-0 right-0 h-screen z-10 bg-white dark:bg-dmpaper translate-x-[150%] transition-transform duration-200 p-4">
	<div class="flex items-center justify-between my-2 py-2">
		<DarkModeBtn />
		<CancelOrCloseBtn />
	</div>
	
	<hr class="dark:opacity-40"/>
	<ul class="flex flex-col items-center">
		<li class="border-b border-opacity-40 w-full py-3 flex items-center justify-start"><a class="w-full h-full" href="/">Home</a></li>
		{#if !$page.data.user}
			<li class="border-b border-opacity-40 w-full py-3 flex items-center justify-start"><a class="w-full h-full" href="/login">Login</a></li>
			<li class="border-b border-opacity-40 w-full py-3 flex items-center justify-start"><a class="w-full h-full" href="/register">Register</a></li>
		{:else}
			<li class="border-b border-opacity-40 w-full py-3 flex items-center justify-start"><a class="w-full h-full" href="/profile">Profile</a></li>
			<li class="border-b border-opacity-40 w-full py-3 flex items-center justify-start"><a class="w-full h-full" href="/upload">Upload</a></li>
			<li class="border-b border-opacity-40 w-full py-3">
				<form action="/logout" method="post">
					<button type="submit">Logout</button>
				</form>
			</li>
		{/if}
	</ul>
</div>