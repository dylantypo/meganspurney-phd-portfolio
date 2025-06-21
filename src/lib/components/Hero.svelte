<script lang="ts">
	import { MapPin, Github, GraduationCap } from '@lucide/svelte';
</script>

<aside class="hero-sidebar">
	<div class="sidebar-content">
		<div class="profile-card">
			<div class="profile-image">
				<img src="/pics/Grad_Pic.jpg" alt="Megan Spurney" />
			</div>

			<div class="profile-info">
				<h1 class="name">Megan Spurney</h1>
				<p class="title">PhD Student in Cognitive and Affective Neuroscience</p>
				<div class="location">
					<MapPin size={14} />
					Northwestern University
				</div>
				<div class="location-detail">Chicago, IL</div>

				<div class="social-links">
					<a
						href="https://github.com/meganspurney"
						target="_blank"
						rel="noopener noreferrer"
						class="social-link"
						aria-label="GitHub Profile"
					>
						<Github size={18} />
						GitHub
					</a>
					<a
						href="https://scholar.google.com/citations?user=xeTU8s4AAAAJ&hl=en"
						target="_blank"
						rel="noopener noreferrer"
						class="social-link"
						aria-label="Google Scholar Profile"
					>
						<GraduationCap size={18} />
						Scholar
					</a>
				</div>
			</div>
		</div>
	</div>
</aside>

<style>
	.hero-sidebar {
		position: fixed;
		left: 0;
		top: 0;
		width: 25%;
		height: 100dvh;
		background: var(--color-bg);
		z-index: var(--z-sticky);
		overflow-y: auto;
	}

	.sidebar-content {
		padding: 2rem 1.5rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.profile-card {
		text-align: center;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		border-radius: var(--radius-2xl);
		padding: 2rem 1.5rem;
		border: 1px solid rgba(226, 232, 240, 0.3);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
		width: 100%;
		max-width: 24rem;
	}

	.profile-image {
		position: relative;
		width: 18rem;
		height: 21rem;
		margin: 0 auto 1.5rem;
		border-radius: 1.25rem;
		padding: 4px;
		background: linear-gradient(
			45deg,
			rgba(171, 91, 236, 0.6),
			rgba(224, 59, 246, 0.4),
			rgba(185, 16, 114, 0.4),
			rgba(171, 91, 236, 0.6)
		);
		background-size: 300% 300%;
		animation: neuralFlow 8s ease-in-out infinite;
	}

	.profile-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		border-radius: 1rem;
		position: relative;
		z-index: 2;
		display: block;
	}

	@keyframes neuralFlow {
		0%,
		100% {
			background-position: 0% 50%;
		}
		25% {
			background-position: 100% 25%;
		}
		50% {
			background-position: 50% 100%;
		}
		75% {
			background-position: 25% 0%;
		}
	}

	@keyframes neuralPulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.15;
		}
		33% {
			transform: scale(1.008);
			opacity: 0.25;
		}
		66% {
			transform: scale(1.012);
			opacity: 0.2;
		}
	}
	.name {
		font-size: 1.75rem;
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: 0.75rem;
		line-height: 1.2;
		font-family: var(--font-base);
	}

	.title {
		font-size: 0.9rem;
		color: var(--color-text);
		margin-bottom: 1rem;
		line-height: 1.4;
		font-family: var(--font-base);
		opacity: 0.8;
	}

	.location {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.375rem;
		font-size: 0.8rem;
		color: var(--color-text);
		font-weight: 500;
		margin-bottom: 0.25rem;
		font-family: var(--font-base);
		opacity: 0.7;
	}

	.location-detail {
		font-size: 0.7rem;
		color: var(--color-text);
		font-family: var(--font-base);
		opacity: 0.6;
		margin-bottom: 1.5rem;
	}

	.social-links {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: rgba(255, 255, 255, 0.5);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-lg);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--color-text);
		transition: all var(--transition-fast);
		text-decoration: none;
		backdrop-filter: blur(4px);
	}

	.social-link:hover {
		background: var(--color-secondary);
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(171, 91, 236, 0.3);
		opacity: 1;
	}

	@media (max-width: 1585px) {
		.profile-image {
			width: 14rem;
			height: 18rem;
		}
	}

	@media (max-width: 1275px) {
		.profile-image {
			width: 10rem;
			height: 12rem;
		}

		.name {
			font-size: 1.5rem;
		}

		.title {
			font-size: 0.875rem;
		}

		.location {
			font-size: 0.75rem;
		}

		.location-detail {
			font-size: 0.625rem;
		}
	}

	@media (max-width: 1024px) {
		.hero-sidebar {
			position: relative;
			width: 100%;
			height: auto;
		}

		.sidebar-content {
			padding: 2rem 1.5rem;
			height: auto;
		}

		.profile-image {
			width: 15rem;
			height: 18rem;
		}

		.name {
			font-size: 2rem;
		}

		.title {
			font-size: 1rem;
		}

		.location {
			font-size: 0.875rem;
		}

		.location-detail {
			font-size: 0.75rem;
		}

		.social-link {
			font-size: 0.875rem;
		}
	}

	@media (max-width: 768px) {
		.profile-image {
			width: 12rem;
			height: 15rem;
		}
		.social-links {
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
		}

		.social-link {
			width: 100%;
			max-width: 12rem;
			justify-content: center;
		}
	}
</style>
