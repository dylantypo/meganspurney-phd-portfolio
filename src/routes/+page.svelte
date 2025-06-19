<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo(0, 0);
	});
</script>

<Hero />

<p>
	Site in development. <br>
	Visit <a href="https://meganspurney.github.io/">meganspurney.github.io</a> to see current work.
</p>

<style>
	p {
		text-align: center;
		font-size: 1.2rem;
		margin-top: 2rem;
	}
</style>
