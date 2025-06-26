<script lang="ts">
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Research from '$lib/components/Research.svelte';
	import Posters from '$lib/components/Posters.svelte';
	import Publications from '$lib/components/Publications.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		if (!window.location.hash || window.location.hash === '#') {
			window.scrollTo({ top: 0 });
		}
	});
</script>

<section id="home" class="hero-section">
	<Hero />
</section>

<section id="about" class="section">
	<AboutMe />
</section>

<section id="research" class="section">
	<Research />
</section>

<section id="posters" class="section">
	<Posters />
</section>

<section id="publications" class="section">
	<Publications />
</section>

<section id="resume" class="section">
	<Resume />
</section>

<section id="footer" class="section">
	<p>Site in active development.</p>
	<Footer />
</section>

<style>
	.hero-section {
		margin: 0;
	}
	.section {
		margin-bottom: 6rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		border-radius: var(--radius-2xl);
	}

	#footer {
		text-align: center;
		background: rgba(171, 91, 236, 0.1);
		border: 1px solid rgba(171, 91, 236, 0.2);
		padding: var(--spacing-8);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
	}

	#footer p {
		font-size: var(--font-size-lg);
		color: var(--color-secondary);
		padding: var(--spacing-8);
		font-weight: var(--font-weight-medium);
	}

	@media (max-width: 1024px) {
		.section,
		#footer {
			margin-bottom: var(--spacing-6);
			padding: var(--spacing-6);
		}
	}
</style>
