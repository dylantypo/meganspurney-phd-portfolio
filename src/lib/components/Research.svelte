<script lang="ts">
	import { ExternalLink, Brain, Activity, Microscope } from '@lucide/svelte';

	const researchData = {
		intro:
			'I am interested in studying developmental trajectories of cognition and mental health and how these paths interact. My work focuses on investigating how the hormonal changes that accompany adolescence and the pubertal transition influence the development of higher-order cognitive processes, such as decision making and cognitive control, and how this may confer risk for internalizing disorders, such as depression.',
		projects: [
			{
				id: 'brain-hormone',
				icon: Brain,
				title: 'How Brain-Hormone Interactions Impact Resting Regional Cerebral Blood Flow',
				period: '2023-2024'
			},
			{
				id: 'fmri-connectivity',
				icon: Activity,
				title: 'Functional MRI Connectivity Analyses',
				period: '2021-2023'
			}
		]
	};
</script>

<section class="research">
	<div class="container">
		<header class="research-header">
			<div class="header-icon">
				<Microscope size={32} />
			</div>
			<h1>Research</h1>
			<p class="intro">{researchData.intro}</p>
		</header>

		<div class="projects">
			{#each researchData.projects as project}
				<article class="project-card" id={project.id}>
					<div class="project-header">
						<div class="project-icon">
							<project.icon size={24} />
						</div>
						<div class="project-meta">
							<h2>{project.title}</h2>
							<span class="period">{project.period}</span>
						</div>
					</div>

					<div class="project-content">
						{#if project.id === 'brain-hormone'}
							<p class="description">
								In Dr. Karen Berman's lab, I worked to better characterize the intricate link
								between the endocrine and nervous systems. To measure brain function, I used PET
								imaging to extract measures of
								<a
									href="https://www.sciencedirect.com/topics/psychology/regional-cerebral-blood-flow"
									target="_blank"
									rel="noopener noreferrer"
								>
									resting regional cerebral blood flow
									<ExternalLink size={12} />
								</a>
								(rCBF) as well as an MRI method known as
								<a
									href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2999014/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Arterial Spin Labeling
									<ExternalLink size={12} />
								</a>. Resting rCBF has been shown to exhibit robust sex differences, as well as
								abnormalities in several neuropsychiatric illnesses where in sex differences occur,
								such as major depression and schizophrenia. The goal of my project was to evaluate
								the effects of hormone condition on brain function using measures of rCBF extracted
								from PET resting scans of healthy subjects done at the NIH Clinical Center. Our
								subjects included men, naturally cycling women, and women using oral contraceptives.
							</p>
						{:else if project.id === 'fmri-connectivity'}
							<p class="description">
								During my time in
								<a href="https://fim.nimh.nih.gov/" target="_blank" rel="noopener noreferrer">
									Dr. Peter Bandettini's lab
									<ExternalLink size={12} />
								</a>, I worked on a multitude of projects analyzing
								<a
									href="https://fim.nimh.nih.gov/projects/bold-connectivity-dynamics"
									target="_blank"
									rel="noopener noreferrer"
								>
									functional connectivity in resting-state fMRI
									<ExternalLink size={12} />
								</a>
								and how to leverage connectivity information to enhance brain-behavior predictions. The
								goal of my first project was to investigate the source of individual variability in resting-state
								fMRI in healthy adults. We hypothesized that a potential source of variability during
								rest is 'ongoing cognition' that subjects engage in over the course of the scan (<a
									href="https://www.pnas.org/doi/abs/10.1073/pnas.1501242112"
									target="_blank"
									rel="noopener noreferrer">a<ExternalLink size={12} /></a
								>,
								<a
									href="https://www.jneurosci.org/content/41/6/1130.abstract"
									target="_blank"
									rel="noopener noreferrer">b<ExternalLink size={12} /></a
								>). Ongoing cognition refers to everything from thinking about what to make for
								dinner to stressing about an upcoming meeting with your boss to daydreaming about a
								vacation and more. We used a
								<a
									href="https://www.nature.com/articles/sdata2018307"
									target="_blank"
									rel="noopener noreferrer"
								>
									publicly available dataset
									<ExternalLink size={12} />
								</a>
								that consisted of multiple resting-state scans per subject as well as responses to a
								post-scan questionnaire that asked subjects to characterize their in-scanner experience.
								We found significant associations between distinct patterns of thought and functional
								connectivity patterns, highlighting the potential need to account for these effects when
								examining resting-state fMRI data.
							</p>
							<p class="description">
								Next, I sought to investigate how to leverage connectivity information to boost
								brain-behavior predictions. I employed a new technique to compute
								<a
									href="https://www.nature.com/articles/s41593-020-00719-y"
									target="_blank"
									rel="noopener noreferrer"
								>
									'edge time series'
									<ExternalLink size={12} />
								</a>
								from traditional ROI time series to capture the co-fluctuation between any given pair
								of nodes at each point in time across the whole scan. Then, to summarize these co-fluctuations
								overtime, we computed multiple summary metrics, including time-insensitive metrics, such
								as mean, and time-sensitive metrics, such as autocorrelation and dynamic entropy, to
								form new ROIxROI matrices for each subject and evaluated their predictive ability. We
								found that mean co-fluctuation, i.e. static functional connectivity, proves to be the
								best predictor of cognitive traits using
								<a
									href="https://www.frontiersin.org/articles/10.3389/fnins.2012.00152/full"
									target="_blank"
									rel="noopener noreferrer"
								>
									this dataset
									<ExternalLink size={12} />
								</a>, so far!
							</p>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.research {
		padding: var(--spacing-16) var(--spacing-6);
		background: var(--color-bg);
		scroll-margin-top: 100px;
		border-radius: var(--radius-2xl);
	}

	.container {
		max-width: 56rem;
		margin: 0 auto;
	}

	.research-header {
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

	.intro {
		font-size: var(--font-size-lg);
		color: var(--color-text);
		line-height: var(--line-height-relaxed);
		max-width: 48rem;
		margin: 0 auto;
		font-family: var(--font-base);
		text-align: left;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-12);
	}

	.project-card {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(8px);
		border-radius: var(--radius-2xl);
		padding: var(--spacing-8);
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-lg);
		transition:
			transform var(--transition-normal),
			box-shadow var(--transition-normal);
	}

	.project-header {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-4);
		margin-bottom: var(--spacing-6);
	}

	.project-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3rem;
		height: 3rem;
		background: rgba(171, 91, 236, 0.1);
		border-radius: var(--radius-xl);
		color: var(--color-secondary);
		flex-shrink: 0;
	}

	.project-meta {
		flex: 1;
	}

	h2 {
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-semibold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-2);
		line-height: var(--line-height-tight);
		font-family: var(--font-base);
	}

	.period {
		font-size: var(--font-size-sm);
		color: var(--color-text-light);
		font-weight: var(--font-weight-medium);
		background: var(--color-bg-secondary);
		padding: var(--spacing-1) var(--spacing-3);
		border-radius: var(--radius-full);
		font-family: var(--font-base);
	}

	.project-content {
		color: var(--color-text);
		line-height: var(--line-height-relaxed);
	}

	.description {
		margin-bottom: var(--spacing-5);
		font-family: var(--font-base);
	}

	.project-content a {
		color: var(--color-secondary);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 2px;
		transition: all var(--transition-fast);
		border-bottom: 1px solid rgba(171, 91, 236, 0.3);
	}

	.project-content a:hover {
		color: var(--color-primary);
		border-bottom-color: var(--color-primary);
		transform: translateY(-1px);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.research {
			padding: var(--spacing-12) var(--spacing-4);
			scroll-margin-top: 80px;
		}

		.container {
			max-width: 100%;
		}

		h1 {
			font-size: var(--font-size-3xl);
		}

		.intro {
			font-size: var(--font-size-base);
		}

		.project-card {
			padding: var(--spacing-6);
		}

		.project-header {
			flex-direction: column;
			gap: var(--spacing-3);
		}

		.project-icon {
			align-self: flex-start;
		}

		h2 {
			font-size: var(--font-size-lg);
		}
	}
</style>