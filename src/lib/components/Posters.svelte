<script lang="ts">
	import { onMount } from 'svelte';
	import { ExternalLink, Presentation, Calendar, MapPin } from '@lucide/svelte';

	let postersSection: HTMLElement;

	onMount(() => {
		// Simple fade-in for entire section
		if (postersSection) {
			postersSection.style.opacity = '0';
			
			requestAnimationFrame(() => {
				postersSection.style.transition = 'opacity 0.3s ease';
				postersSection.style.opacity = '1';
			});
		}
	});

	const postersData = [
		{
			year: "2024",
			presentations: [
				{
					conference: "Postbaccalaureate Poster Days",
					location: "National Institutes of Health, Bethesda, MD, USA",
					authors: "Spurney, M.A., Wei, SM., Eisenberg, D.P., Kohn, P.D., Recto, C. Wilder, I.M., Mann, N.S., Schmidt, P.J., Berman, K.F.",
					title: "Resting Regional Cerebral Blood Flow Across Men, Naturally-Cycling Women, and Women using Oral Contraceptives Measured by [15O]-Water Positron Emission Tomography",
					link: "../files/PosterDay24_FINAL.pdf"
				},
				{
					conference: "Society of Biological Psychiatry Annual Meeting",
					location: "Austin, TX, USA",
					authors: "Spurney, M.A., Wei, SM., Eisenberg, D.P., Kohn, P.D., Recto, C. Wilder, I.M., Mann, N.S., Schmidt, P.J., Berman, K.F.",
					title: "[15O]-Water PET Regional Cerebral Blood Flow during Rest in Men, Naturally-Cycling Women, and Women using Oral Contraceptives",
					link: "../files/SOBP24_Poster.pdf"
				}
			]
		},
		{
			year: "2023",
			presentations: [
				{
					conference: "Postbaccalaureate Poster Days",
					location: "National Institutes of Health, Bethesda, MD, USA",
					authors: "Spurney, M.A., Faskowitz, J., Gonzalez-Castillo, J., Handwerker, D.A., Bandettini, P.A.",
					title: "Building brain-behavior predictions from multiple measures of fMRI connectivity dynamics",
					link: "../files/PosterDay_2023_final.pdf"
				},
				{
					conference: "Organization for Human Brain Mapping Annual Meeting",
					location: "Montreal, Canada",
					authors: "Spurney, M.A., Faskowitz, J., Gonzalez-Castillo, J., Handwerker, D.A., Bandettini, P.A.",
					title: "Edge-time series summary metrics: predictive value for demographics and cognitive traits",
					link: "../files/OHBM23_Poster_FINAL.pdf"
				},
				{
					conference: "NIMH Training Day",
					location: "National Institute of Mental Health, Bethesda, MD, USA",
					authors: "Spurney, M.A., Faskowitz, J., Gonzalez-Castillo, J., Handwerker, D.A., Bandettini, P.A.",
					title: "Exploring the landscape of brain-behavior predictions by leveraging dynamic connectivity information from resting-state fMRI",
					link: "../files/TraineeDayPoster23.pdf"
				},
				{
					conference: "Society for Neuroscience Annual Meeting",
					location: "Washington, DC, USA",
					authors: "Spurney, M.A., Faskowitz, J., Gonzalez-Castillo, J., Handwerker, D.A., Bandettini, P.A.",
					title: "Evaluating the predictive power of dynamic fMRI connectivity summary statistics",
					link: "../files/SFNPoster23_FINAL.pdf"
				}
			]
		},
		{
			year: "2022",
			presentations: [
				{
					conference: "Postbaccalaureate Poster Days",
					location: "National Institutes of Health, Bethesda, MD, USA",
					authors: "Spurney, M.A., Gonzalez-Castillo, J., Lam, K.C., Handwerker, D.A., Teves, J., Pereira, F., Bandettini, P.A.",
					title: "Content and Form of Conscious Thoughts Modulate Functional Connectivity",
					link: "../files/PosterDay2022.pdf"
				},
				{
					conference: "Organization for Human Brain Mapping Annual Meeting",
					location: "Glasgow, Scotland",
					authors: "Gonzalez-Castillo, J., Spurney, M.A., Lam, K.C., Handwerker, D.A., Teves, J., Pereira, F., Bandettini, P.A.",
					title: "How conscious thoughts during \"resting-state\" affect functional connectivity estimates"
				},
				{
					conference: "NIMH Training Day",
					location: "National Institute of Mental Health, Bethesda, MD, USA",
					authors: "Spurney, M.A., Gonzalez-Castillo, J., Lam, K.C., Handwerker, D.A., Teves, J., Pereira, F., Bandettini, P.A.",
					title: "Functional Connectivity Modulated by Conscious Thoughts During Resting-State fMRI",
					link: "../files/TraineeDay22_Poster.pdf"
				},
				{
					conference: "Society for Neuroscience Annual Meeting",
					location: "San Diego, CA, USA",
					authors: "Spurney, M.A., Gonzalez-Castillo, J., Lam, K.C., Handwerker, D.A., Teves, J., Pereira, F., Bandettini, P.A.",
					title: "How conscious in-scanner thoughts modulate functional connectivity during resting-state",
					link: "../files/SFN_Poster_2022.pdf"
				}
			]
		},
		{
			year: "2020",
			presentations: [
				{
					conference: "Children's National Research Institute Education and Innovation Week",
					location: "Washington, DC, USA",
					authors: "Spurney, M.A., Hamberger, S., Sinistierra, M., Tully, C., Streisand, R.",
					title: "Examining the Relationship Between Child Race, Income and Caregiver Psychosocial Functional in Families of Young Children with Diabetes"
				}
			]
		}
	];
</script>

<section bind:this={postersSection} class="posters">
	<div class="container">
		<header class="posters-header">
			<div class="header-icon">
				<Presentation size={32} />
			</div>
			<h1>Poster Presentations</h1>
		</header>

		<div class="timeline">
			{#each postersData as yearData}
				<div class="year-section">
					<div class="year-header">
						<div class="year-badge">
							<Calendar size={16} />
							{yearData.year}
						</div>
					</div>

					<div class="presentations">
						{#each yearData.presentations as presentation}
							<article class="presentation-card">
								<div class="presentation-header">
									<h3 class="conference">{presentation.conference}</h3>
									<div class="location">
										<MapPin size={14} />
										{presentation.location}
									</div>
								</div>

								<div class="presentation-content">
									<p class="authors">{presentation.authors}</p>
									<h4 class="title">{presentation.title}</h4>
									
									{#if presentation.link}
										<a 
											href={presentation.link} 
											class="poster-link"
											target="_blank" 
											rel="noopener noreferrer"
										>
											View Poster
											<ExternalLink size={14} />
										</a>
									{/if}
								</div>
							</article>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.posters {
		padding: var(--spacing-16) var(--spacing-6);
		background: var(--color-bg);
		min-height: 100vh;
	}

	.container {
		max-width: 56rem;
		margin: 0 auto;
	}

	.posters-header {
		text-align: center;
		margin-bottom: var(--spacing-16);
	}

	.header-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 4rem;
		height: 4rem;
		background: rgba(171, 91, 236, 0.1);
		border-radius: var(--radius-2xl);
		color: var(--color-secondary);
		margin-bottom: var(--spacing-6);
	}

	h1 {
		font-size: var(--font-size-4xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-6);
		font-family: var(--font-base);
	}

	.timeline {
		position: relative;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 2rem;
		top: 0;
		bottom: 0;
		width: 2px;
		background: linear-gradient(to bottom, var(--color-secondary), rgba(171, 91, 236, 0.3));
	}

	.year-section {
		position: relative;
		margin-bottom: var(--spacing-16);
	}

	.year-header {
		margin-bottom: var(--spacing-8);
		position: relative;
		z-index: 2;
	}

	.year-badge {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		background: var(--color-secondary);
		color: white;
		padding: var(--spacing-3) var(--spacing-5);
		border-radius: var(--radius-full);
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-lg);
		font-family: var(--font-base);
		box-shadow: var(--shadow-lg);
		position: relative;
	}

	.year-badge::before {
		content: '';
		position: absolute;
		left: -1.5rem;
		top: 50%;
		transform: translateY(-50%);
		width: 1rem;
		height: 1rem;
		background: var(--color-secondary);
		border-radius: 50%;
		border: 3px solid var(--color-bg);
	}

	.presentations {
		margin-left: var(--spacing-16);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-8);
	}

	.presentation-card {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(8px);
		border-radius: var(--radius-2xl);
		padding: var(--spacing-6);
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-md);
		transition: transform var(--transition-normal), box-shadow var(--transition-normal);
	}

	.presentation-header {
		margin-bottom: var(--spacing-4);
	}

	.conference {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-semibold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-2);
		font-family: var(--font-base);
	}

	.location {
		display: flex;
		align-items: center;
		gap: var(--spacing-2);
		font-size: var(--font-size-sm);
		color: var(--color-text-light);
		font-family: var(--font-base);
	}

	.presentation-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-3);
	}

	.authors {
		font-size: var(--font-size-sm);
		color: var(--color-text-light);
		font-family: var(--font-base);
		font-style: italic;
	}

	.title {
		font-size: var(--font-size-base);
		font-weight: var(--font-weight-medium);
		color: var(--color-text);
		line-height: var(--line-height-normal);
		font-family: var(--font-base);
	}

	.poster-link {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		color: var(--color-secondary);
		text-decoration: none;
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-sm);
		font-family: var(--font-base);
		padding: var(--spacing-2) var(--spacing-4);
		border: 1px solid var(--color-secondary);
		border-radius: var(--radius-lg);
		transition: all var(--transition-fast);
		align-self: flex-start;
	}

	.poster-link:hover {
		background: var(--color-secondary);
		color: white;
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.posters {
			padding: var(--spacing-12) var(--spacing-4);
		}

		.timeline::before {
			left: 1rem;
		}

		.year-badge::before {
			left: -1.25rem;
		}

		.presentations {
			margin-left: var(--spacing-8);
		}

		h1 {
			font-size: var(--font-size-3xl);
		}

		.presentation-card {
			padding: var(--spacing-5);
		}

		.conference {
			font-size: var(--font-size-base);
		}

		.year-badge {
			font-size: var(--font-size-base);
			padding: var(--spacing-2) var(--spacing-4);
		}
	}
</style>