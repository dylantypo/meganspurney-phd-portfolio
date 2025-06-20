<script lang="ts">
	import { Download, ExternalLink } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let isMobile = $state(false);
	let isLoaded = $state(false);

	onMount(() => {
		// Check if mobile on mount
		const checkMobile = () => {
			isMobile = window.innerWidth < 1024;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		// Set loaded state for smooth transitions
		setTimeout(() => {
			isLoaded = true;
		}, 100);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<div class="resume-wrapper" class:loaded={isLoaded}>
	{#if isMobile}
		<!-- Mobile: Show download links instead of iframe -->
		<div class="mobile-resume">
			<div class="resume-preview">
				<div class="resume-icon">
					<Download size={48} />
				</div>
				<h3>Download Resume</h3>
				<p>View my complete academic and research background</p>
			</div>

			<div class="download-actions">
				<a
					href="/MeganSpurney_CV_EndOf2024.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-primary"
				>
					<ExternalLink size={16} />
					View PDF
				</a>
				<a href="/MeganSpurney_CV_EndOf2024.pdf" download class="btn-secondary">
					<Download size={16} />
					Download
				</a>
			</div>
		</div>
	{:else}
		<!-- Desktop: Clean PDF viewer with default controls -->
		<div class="resume-container">
			<iframe
				src="/MeganSpurney_CV_EndOf2024.pdf#view=FitH"
				title="Megan Spurney Resume"
				class="resume-iframe"
				loading="lazy"
			></iframe>

			<div class="resume-fallback">
				<p>
					Unable to display PDF?
					<a href="/MeganSpurney_CV_EndOf2024.pdf" target="_blank" rel="noopener noreferrer">
						Open in new tab
					</a>
				</p>
			</div>
		</div>
	{/if}
</div>

<style>
	/* Desktop PDF Viewer */
	.resume-container {
		position: relative;
		width: 100%;
		height: 85vh;
		min-height: 700px;
		border-radius: var(--radius-lg);
		overflow: hidden;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
	}

	.resume-iframe {
		width: 100%;
		height: 100%;
		border: none;
		background: white;
	}

	.resume-fallback {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: -1;
		padding: 2rem;
		opacity: 0.7;
	}

	.resume-fallback a {
		color: var(--color-secondary);
		text-decoration: underline;
		font-weight: var(--font-weight-medium);
		transition: opacity var(--transition-fast);
	}

	.resume-fallback a:hover {
		opacity: 0.8;
	}

	/* Mobile Resume View */
	.mobile-resume {
		text-align: center;
		padding: 3rem 1.5rem;
	}

	.resume-preview {
		margin-bottom: 2rem;
	}

	.resume-icon {
		margin: 0 auto 1rem;
		width: 80px;
		height: 80px;
		background: var(--color-secondary);
		border-radius: var(--radius-full);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.mobile-resume h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--color-primary);
	}

	.mobile-resume p {
		color: var(--color-text-light);
		margin-bottom: 2rem;
	}

	.download-actions {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 280px;
		margin: 0 auto;
	}

	.btn-primary,
	.btn-secondary {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem 1.5rem;
		border-radius: var(--radius-lg);
		text-decoration: none;
		font-weight: var(--font-weight-medium);
		transition: all var(--transition-fast);
		border: 2px solid;
	}

	.btn-primary {
		background: var(--color-secondary);
		color: white;
		border-color: var(--color-secondary);
	}

	.btn-primary:hover {
		background: transparent;
		color: var(--color-secondary);
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(171, 91, 236, 0.3);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-primary);
		border-color: var(--color-border);
	}

	.btn-secondary:hover {
		background: var(--color-primary);
		color: white;
		border-color: var(--color-primary);
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(24, 24, 27, 0.2);
	}

	@media (min-width: 1024px) and (max-width: 1200px) {
		.resume-container {
			height: 80vh;
			min-height: 600px;
		}
	}
</style>
