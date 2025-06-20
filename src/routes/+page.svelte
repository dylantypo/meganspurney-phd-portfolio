<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Research from '$lib/components/Research.svelte';
	import Posters from '$lib/components/Posters.svelte';
	import Publications from '$lib/components/Publications.svelte';
	import Resume from '$lib/components/Resume.svelte';
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

<section id="resume" class="section resume-section">
	<Resume />
</section>

<section class="dev-notice">
	<p>
		Site in active development. <br>
		© Megan Spurney 2025
	</p>
</section>

<style>
	.section {
		margin-bottom: 5rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
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

	.resume-section {
		padding: 1.5rem;
	}

	@media (max-width: 1024px) {
		.section, .dev-notice {
			padding: 1.5rem;
			scroll-margin-top: 80px;
		}
	}
</style>