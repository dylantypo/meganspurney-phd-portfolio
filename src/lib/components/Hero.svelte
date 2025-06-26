<script lang="ts">
	import { MapPin, Github, GraduationCap } from '@lucide/svelte';
</script>

<aside class="hero-sidebar">
	<div class="sidebar-content">
		<div class="profile-card">
			<div class="profile-image">
				<div class="border-blur"></div>
				<img src="/pics/Grad_Pic.webp" alt="Megan Spurney" />
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
		background: var(--color-bg);
		z-index: var(--z-sticky);
		overflow-y: auto;
	}

	.sidebar-content {
		padding: var(--spacing-12) var(--spacing-8);
		height: 100%;
		min-height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.profile-card {
		text-align: center;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		border-radius: var(--radius-2xl);
		padding: var(--spacing-8) var(--spacing-6);
		border: 1px solid rgba(226, 232, 240, 0.3);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
		width: 100%;
		max-width: 24rem;
	}

	.profile-image {
		position: relative;
		width: 18rem;
		height: 21rem;
		margin: 0 auto var(--spacing-6);
		border-radius: var(--spacing-5);
		padding: 4px;
		background: linear-gradient(
			45deg,
			rgba(183, 91, 236, 0.75),
			rgba(248, 145, 205, 0.55),
			rgba(171, 60, 223, 0.55),
			rgba(192, 124, 247, 0.75)
		);
		background-size: 300% 300%;
		animation: neuralFlow 30s ease-in-out infinite;
	}

	.border-blur {
		position: absolute;
		inset: 0;
		border-radius: var(--radius-2xl);
		background: inherit;
		filter: blur(18px);
		opacity: 1.5;
		z-index: 1;
	}

	.profile-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		border-radius: var(--radius-xl);
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

	.name {
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-semibold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-3);
		line-height: var(--line-height-tight);
		font-family: var(--font-base);
	}

	.title {
		font-size: 0.9rem;
		color: var(--color-text);
		margin-bottom: var(--spacing-4);
		line-height: var(--line-height-normal);
		font-family: var(--font-base);
		opacity: 0.8;
	}

	.location {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-1);
		font-size: 0.8rem;
		color: var(--color-text);
		font-weight: var(--font-weight-medium);
		margin-bottom: var(--spacing-1);
		font-family: var(--font-base);
		opacity: 0.7;
	}

	.location-detail {
		font-size: 0.7rem;
		color: var(--color-text);
		font-family: var(--font-base);
		opacity: 0.6;
		margin-bottom: var(--spacing-6)
	}

	.social-links {
		display: flex;
		gap: var(--spacing-3);
		justify-content: center;
		flex-wrap: wrap;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-2) var(--spacing-3);
		background: rgba(255, 255, 255, 0.5);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-2xl);
		font-size: 0.8rem;
		font-weight: var(--font-weight-medium);
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

	@media (max-width: 1375px) {
		.profile-image {
			width: 8rem;
			height: 10rem;
		}

		.name {
			font-size: var(--font-size-2xl);
		}

		.title {
			font-size: var(--font-size-sm);
		}

		.location {
			font-size: var(--font-size-xs);
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
			padding: var(--spacing-1) var(--spacing-2);
			height: auto;
			min-height: 95dvh;
			padding-top: 0;
		}

		.profile-image {
			width: 15rem;
			height: 18rem;
		}

		.name {
			font-size: var(--font-size-4xl);
		}

		.title {
			font-size: var(--font-size-base);
		}

		.location {
			font-size: var(--font-size-sm);
		}

		.location-detail {
			font-size: var(--font-size-xs);
		}

		.social-link {
			font-size: var(--font-size-base);
		}
	}

	@media (max-width: 768px) {
		.sidebar-content {
			padding: var(--spacing-3) var(--spacing-5);
			height: auto;
			min-height: 95dvh;
			padding-top: 0;
		}
		.profile-image {
			width: 12rem;
			height: 15rem;
		}
		.social-links {
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-2);
		}

		.social-link {
			width: 100%;
			max-width: 12rem;
			justify-content: center;
		}
	}
</style>
