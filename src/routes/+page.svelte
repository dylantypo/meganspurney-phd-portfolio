<script lang="ts">
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Research from '$lib/components/Research.svelte';
	import Posters from '$lib/components/Posters.svelte';
	import Publications from '$lib/components/Publications.svelte';
	import Resume from '$lib/components/Resume.svelte';

	onMount(() => {
		// Reset scroll position on page load
		if (window.location.hash === '' || window.location.hash === '#') {
			window.scrollTo(0, 0);
		}

		// Handle hash navigation on initial load
		if (window.location.hash) {
			// Wait for layout to fully settle
			setTimeout(() => {
				const element = document.getElementById(window.location.hash.substring(1));
				if (element) {
					// Use same logic as nav for consistency
					const elementTop = element.getBoundingClientRect().top + window.scrollY;
					const isMobile = window.innerWidth <= 1024;
					const offset = isMobile ? 85 : 100;
					const targetPosition = Math.max(0, elementTop - offset);

					window.scrollTo({
						top: targetPosition,
						behavior: 'smooth'
					});
				}
			}, 500); // Longer delay for complex layouts
		}
	});
</script>

<Hero />

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

<section class="dev-notice">
	<p>
		Site in active development. <br />
		© Megan Spurney 2025
	</p>
</section>

<style>
	.section {
		margin-bottom: 6rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		border-radius: var(--radius-2xl);
	}

	.dev-notice {
		text-align: center;
		background: rgba(171, 91, 236, 0.1);
		border: 1px solid rgba(171, 91, 236, 0.2);
		margin-bottom: 4rem;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		scroll-margin-top: 100px;
	}

	.dev-notice p {
		font-size: 1.2rem;
		color: var(--color-secondary);
		font-weight: 500;
	}

	@media (max-width: 1024px) {
		.section,
		.dev-notice {
			margin-bottom: 2rem;
			padding: 1.5rem;
			scroll-margin-top: 80px;
		}
	}
</style>
