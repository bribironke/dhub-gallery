<script lang="ts">
  import { onMount } from "svelte";
	import CancelOrCloseBtn from "./buttons/CancelOrCloseBtn.svelte";
  import { addMobileNavListener, removeMobile, removeMobileNavListener } from "$lib";
	import { page } from "$app/stores";
  import DarkModeBtn from "./buttons/DarkModeBtn.svelte";
	import { navigating } from "$app/stores";

	let mobileNavRef: HTMLElement
	
	onMount(() => {
		addMobileNavListener(mobileNavRef)
		return removeMobileNavListener(mobileNavRef)
	});

	$: $navigating && removeMobile(mobileNavRef)
</script>
<div
	bind:this={mobileNavRef}
	aria-label="mobile-navigation"
	class="w-[290px] fixed top-0 right-0 h-screen z-10 bg-white dark:bg-dmpaper translate-x-[150%] transition-transform duration-200 p-4">
	<div class="flex items-center justify-between py-4">
		
		{#if $page.data.user}
		<div>
			<small>Welcome</small>
			<p>{ $page.data.user.name }</p>
		</div>
		{/if}
		<div class="flex items-center gap-2">
			<DarkModeBtn />
			<CancelOrCloseBtn />
		</div>
	</div>
	
	<hr class="dark:opacity-40"/>
	<ul class="flex flex-col items-center">
		<li class="border-b dark:border-opacity-40 w-full h-12"><a class="w-full h-full flex items-center justify-start" href="/">Home</a></li>
		{#if !$page.data.user}
			<li class="border-b dark:border-opacity-40 w-full h-12"><a class="w-full h-full flex items-center justify-start" href="/login">Login</a></li>
			<li class="border-b dark:border-opacity-40 w-full h-12"><a class="w-full h-full flex items-center justify-start" href="/register">Register</a></li>
		{:else}
			<li class="border-b dark:border-opacity-40 w-full h-12"><a class="w-full h-full flex items-center justify-start" href="/profile">Profile</a></li>
			<li class="border-b dark:border-opacity-40 w-full h-12"><a class="w-full h-full flex items-center justify-start" href="/upload">Upload</a></li>
			<li class="border-b dark:border-opacity-40 w-full h-12">
				<form action="/logout" method="post" class="w-full h-12 text-start">
					<button type="submit" class="w-full h-full text-start">Logout</button>
				</form>
			</li>
		{/if}
	</ul>
</div>