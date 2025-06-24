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

	/* Main content area when sidebar is present */
	.main-content {
		margin-left: 25%;
		padding: var(--spacing-10);
		padding-top: calc(var(--nav-height) + var(--spacing-5));
	}

	/* Mobile responsive */
	@media (max-width: 1024px) {
		.main-content {
			margin-left: 0;
			padding: 1rem;
			padding-top: calc(var(--nav-height));
		}
	}
</style>