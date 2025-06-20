<script lang="ts">
	import { ExternalLink, FileText, Calendar } from '@lucide/svelte';
</script>

<section class="publications">
	<div class="container">
		<div class="header">
			<FileText size={28} />
			<h2>Publications</h2>
		</div>

		<div class="publications-grid">
			<!-- Under Review Publication -->
			<article class="publication-card featured">
				<div class="status-badge under-review">
					<Calendar size={14} />
					Under Review
				</div>
				
				<h3 class="title">
					In-Scanner Thoughts Shape Resting-state Functional Connectivity: how participants rest matters
				</h3>
				
				<p class="authors">
					Gonzalez-Castillo, J., <strong>Spurney, M.A.</strong>, Lam, K.C., Pereira, F., Handwerker, D.A., Bandettini, P.A.
				</p>
				
				<p class="journal">Nature Neuroscience</p>
				
				<div class="publication-footer">
					<a 
						href="https://doi.org/10.1101/2024.06.05.596482" 
						class="link-button primary"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ExternalLink size={16} />
						View Preprint
					</a>
				</div>
			</article>

			<!-- Published Paper -->
			<article class="publication-card">
				<div class="status-badge published">
					<Calendar size={14} />
					2023
				</div>
				
				<h3 class="title">
					The art and science of using quality control to understand and improve fMRI data
				</h3>
				
				<p class="authors">
					Teves, J., Gonzalez-Castillo, J., Holness, M., <strong>Spurney, M.A.</strong>, Bandettini, P.A., Handwerker, D.A.
				</p>
				
				<p class="journal">Frontiers in Neuroscience, Vol. 17</p>
				
				<p class="description">
					This paper describes the authors' approach on how to best quality control fMRI data.
				</p>
				
				<div class="publication-footer">
					<a 
						href="https://www.frontiersin.org/articles/10.3389/fnins.2023.1100544/full" 
						class="link-button"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ExternalLink size={16} />
						Read Paper
					</a>
				</div>
			</article>
		</div>
	</div>
</section>

<style>
	.publications {
		padding: var(--spacing-16) var(--spacing-6);
		background: var(--color-bg-secondary);
		border-radius: 1.5rem;
	}

	.container {
		max-width: 56rem;
		margin: 0 auto;
	}

	.header {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		margin-bottom: var(--spacing-12);
		color: var(--color-primary);
	}

	.header h2 {
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-semibold);
		margin: 0;
	}

	.publications-grid {
		display: grid;
		gap: var(--spacing-8);
	}

	.publication-card {
		background: var(--color-bg);
		border-radius: var(--radius-xl);
		padding: var(--spacing-8);
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-sm);
		transition: all var(--transition-normal);
		position: relative;
	}

	.publication-card.featured {
		border-color: var(--color-secondary);
		background: linear-gradient(135deg, rgba(171, 91, 236, 0.02) 0%, var(--color-bg) 100%);
	}

	.status-badge {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-1);
		padding: var(--spacing-1) var(--spacing-3);
		border-radius: var(--radius-full);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		margin-bottom: var(--spacing-4);
		text-transform: uppercase;
		letter-spacing: 0.025em;
	}

	.status-badge.under-review {
		background: rgba(251, 191, 36, 0.1);
		color: rgb(180, 83, 9);
		border: 1px solid rgba(251, 191, 36, 0.2);
	}

	.status-badge.published {
		background: rgba(34, 197, 94, 0.1);
		color: rgb(22, 101, 52);
		border: 1px solid rgba(34, 197, 94, 0.2);
	}

	.title {
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-semibold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-4);
		line-height: var(--line-height-tight);
	}

	.authors {
		font-size: var(--font-size-sm);
		color: var(--color-text-light);
		margin-bottom: var(--spacing-2);
		line-height: var(--line-height-relaxed);
	}

	.authors strong {
		color: var(--color-primary);
		font-weight: var(--font-weight-semibold);
	}

	.journal {
		font-size: var(--font-size-sm);
		color: var(--color-secondary);
		font-weight: var(--font-weight-medium);
		font-style: italic;
		margin-bottom: var(--spacing-4);
	}

	.description {
		font-size: var(--font-size-sm);
		color: var(--color-text);
		line-height: var(--line-height-relaxed);
		margin-bottom: var(--spacing-6);
	}

	.publication-footer {
		margin-top: var(--spacing-6);
		padding-top: var(--spacing-4);
		border-top: 1px solid var(--color-border);
	}

	.link-button {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		padding: var(--spacing-2) var(--spacing-4);
		background: var(--color-bg-secondary);
		color: var(--color-text);
		border-radius: var(--radius-lg);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		text-decoration: none;
		transition: all var(--transition-fast);
		border: 1px solid var(--color-border);
	}

	.link-button:hover {
		background: var(--color-secondary);
		color: white;
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	.link-button.primary {
		background: var(--color-secondary);
		color: white;
		border-color: var(--color-secondary);
	}

	.link-button.primary:hover {
		background: rgba(171, 91, 236, 0.9);
		transform: translateY(-1px);
		box-shadow: var(--shadow-lg);
	}

	@media (min-width: 768px) {
		.publications {
			padding: var(--spacing-20) var(--spacing-8);
		}

		.header h2 {
			font-size: var(--font-size-4xl);
		}

		.title {
			font-size: var(--font-size-2xl);
		}

		.authors, .journal, .description {
			font-size: var(--font-size-base);
		}
	}
</style>