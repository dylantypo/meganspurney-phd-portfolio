<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MorphSVGPlugin.min.js"></script>
</svelte:head>

<div class="app-layout">
	<Nav />
	
	<main class="main-content">
		{@render children()}
	</main>
</div>

<style>
	.app-layout {
		min-height: 100vh;
	}

	/* Main content area when sidebar is present */
	.main-content {
		margin-left: 25%;
		padding: 2rem;
		padding-top: calc(80px + 2rem); /* Account for fixed nav height + padding */
		min-height: 100vh;
	}

	/* Mobile responsive */
	@media (max-width: 1024px) {
		.main-content {
			margin-left: 0;
			padding: 1rem;
			padding-top: calc(70px + 1rem);
		}
	}
</style>