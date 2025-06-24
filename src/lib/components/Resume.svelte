<script lang="ts">
	import { Download, FileText, ExternalLink } from '@lucide/svelte';
</script>

<section class="resume">
	<div class="container">
		<header class="resume-header">
			<div class="header-icon">
				<FileText size={28} />
			</div>
			<h2>Resume</h2>
		</header>

		<div class="resume-content">
			<div class="resume-preview">
				<div class="resume-icon">
					<FileText size={48} />
				</div>
				<p>View my complete academic and research background</p>
			</div>

			<div class="resume-actions">
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
	</div>
</section>

<style>
	.resume {
		padding: var(--spacing-16) var(--spacing-6);
		background: var(--color-bg);
		scroll-margin-top: var(--scroll-offset-desktop);
		border-radius: var(--radius-2xl);
		/* Fixed height - no layout shifts possible */
		min-height: 400px;
	}

	.container {
		max-width: 56rem;
		margin: 0 auto;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.resume-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-12);
		color: var(--color-primary);
	}

	.resume-header h2 {
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-semibold);
		margin: 0;
	}

	.resume-content {
		text-align: center;
		padding: var(--spacing-12) var(--spacing-6);
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(8px);
		border-radius: var(--radius-2xl);
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-lg);
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--spacing-8);
	}

	.resume-preview {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-4);
	}

	.resume-icon {
		width: 80px;
		height: 80px;
		background: var(--color-secondary);
		border-radius: var(--radius-full);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		margin-bottom: var(--spacing-2);
	}

	.resume-content p {
		color: var(--color-text-light);
		font-size: var(--font-size-lg);
		margin: 0;
		max-width: 400px;
	}

	.resume-actions {
		display: flex;
		gap: var(--spacing-4);
		flex-wrap: wrap;
		justify-content: center;
	}

	.btn-primary,
	.btn-secondary {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-2);
		padding: var(--spacing-4) var(--spacing-6);
		border-radius: var(--radius-lg);
		text-decoration: none;
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-base);
		transition: all var(--transition-fast);
		border: 2px solid;
		min-width: 140px;
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

	@media (max-width: 1024px) {
		.resume {
			scroll-margin-top: var(--scroll-offset-mobile);
		}
	}

	@media (max-width: 768px) {
		.resume {
			padding: var(--spacing-12) var(--spacing-4);
		}

		.resume-header h2 {
			font-size: var(--font-size-2xl);
		}

		.resume-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
			max-width: 280px;
		}
	}
</style>