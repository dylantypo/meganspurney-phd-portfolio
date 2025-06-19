<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<main>
	<h1>MS</h1>
	<p>...loading</p>
	<p>
		Visit <a href="https://meganspurney.github.io/">meganspurney.github.io</a> to see current work.
	</p>
</main>

<style>
	main {
		text-align: center;
		position: relative;
		width: 100%;
		min-height: 100dvh;
	}

	a {
		color: var(--color-secondary);
		text-decoration: none;
	}
</style>
