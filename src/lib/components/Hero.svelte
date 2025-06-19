<script lang="ts">
	import { onMount } from 'svelte';
	import { MapPin } from '@lucide/svelte';

	let heroSection: HTMLElement;

	onMount(() => {
		if (heroSection) {
			heroSection.style.opacity = '0';
			heroSection.style.transform = 'translateY(20px)';

			requestAnimationFrame(() => {
				heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
				heroSection.style.opacity = '1';
				heroSection.style.transform = 'translateY(0)';
			});
		}
	});
</script>

<section bind:this={heroSection} class="hero">
	<div class="container">
		<div class="profile-card">
			<div class="profile-image">
				<img src="/pics/Grad_Pic.jpg" alt="Megan Spurney" />
				<!-- Subtle floating accents -->
				<div class="accent accent-1"></div>
				<div class="accent accent-2"></div>
			</div>

			<div class="profile-info">
				<h1 class="name">Megan Spurney</h1>
				<p class="title">PhD Student in Cognitive and Affective Neuroscience</p>
				<div class="location">
					<MapPin size={14} />
					Northwestern University
				</div>
				<div class="location-detail">Chicago, IL</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 4rem 1.5rem;
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-bg);
	}

	.container {
		max-width: 32rem;
		margin: 0 auto;
		width: 100%;
	}

	.profile-card {
		text-align: center;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		border-radius: 1.5rem;
		padding: 2.5rem 2rem;
		border: 1px solid rgba(226, 232, 240, 0.3);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
	}

	.profile-image {
		position: relative;
		width: 10rem;
		height: 12rem;
		margin: 0 auto 1.5rem;
		border-radius: 1.25rem;
		background: var(--color-secondary);
		padding: 2px;
		overflow: hidden;
	}

	.profile-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		border-radius: calc(1.25rem - 2px);
	}

	.accent {
		position: absolute;
		border-radius: 50%;
	}

	.accent-1 {
		top: -0.5rem;
		right: -0.5rem;
		width: 1rem;
		height: 1rem;
		background: var(--color-secondary);
		opacity: 0.6;
	}

	.accent-2 {
		bottom: -0.375rem;
		left: -0.375rem;
		width: 0.75rem;
		height: 0.75rem;
		background: var(--color-primary);
		opacity: 0.4;
	}

	.name {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: 0.75rem;
		line-height: 1.2;
		font-family: var(--font-base);
	}

	.title {
		font-size: 1rem;
		color: var(--color-text);
		margin-bottom: 1rem;
		line-height: 1.5;
		font-family: var(--font-base);
		opacity: 0.8;
	}

	.location {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.375rem;
		font-size: 0.875rem;
		color: var(--color-text);
		font-weight: 500;
		margin-bottom: 0.25rem;
		font-family: var(--font-base);
		opacity: 0.7;
	}

	.location-detail {
		font-size: 0.75rem;
		color: var(--color-text);
		font-family: var(--font-base);
		opacity: 0.6;
	}

	@media (min-width: 768px) {
		.profile-card {
			padding: 3rem 2.5rem;
		}

		.name {
			font-size: 2.25rem;
		}

		.title {
			font-size: 1.125rem;
		}
	}
</style>
