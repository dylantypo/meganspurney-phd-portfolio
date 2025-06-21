<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	
	let { children } = $props();
</script>

<div class="app-layout">
	<Nav />
	
	<main class="main-content">
		{@render children()}
	</main>
</div>

<style>
	.app-layout {
		min-height: 100dvh;
	}

	/* Main content area when sidebar is present */
	.main-content {
		margin-left: 25%;
		padding: 2rem;
		padding-top: calc(65px + 1.25rem);
		min-height: 100dvh;
	}

	/* Mobile responsive */
	@media (max-width: 1024px) {
		.main-content {
			margin-left: 0;
			padding: 1rem;
		}
	}
</style>