<script lang="ts">
	import { ExternalLink } from '@lucide/svelte';
</script>

<section class="about">
	<div class="container">
		<div class="content-card">
			<h2>About Me</h2>
			
			<div class="text-block">
				<p>
					I am a first-year
					<a href="https://psychology.northwestern.edu/graduate/program-areas/cognitive-affective-neuroscience/" target="_blank" rel="noopener">
						Cognitive and Affective Neuroscience <ExternalLink size={14} />
					</a> 
					Ph.D. Student in the Department of Psychology at Northwestern University. I am working with 
					<a href="https://psychology.northwestern.edu/people/faculty/core/profiles/katie-insel.html" target="_blank" rel="noopener">
						Dr. Katie Insel <ExternalLink size={14} />
					</a> 
					in the 
					<a href="https://nucatslab.com/#page-0" target="_blank" rel="noopener">
						Child & Adolescent Translational Science Lab <ExternalLink size={14} />
					</a> 
					for my research training. I conduct research using brain imaging and behavioral data to study patterns of adolescents' executive function and cognitive control and how this may be related to the development of psychopathology during this critical time of brain maturation.
				</p>
			</div>

			<div class="text-block">
				<p>
					I spent three years following my undergraduate education as a post-baccalaureate fellow at the National Institute of Mental Health. I worked in the 
					<a href="https://fim.nimh.nih.gov/" target="_blank" rel="noopener">
						Section on Functional Imaging Methods <ExternalLink size={14} />
					</a> 
					under 
					<a href="https://www.nimh.nih.gov/research/research-conducted-at-nimh/principal-investigators/peter-bandettini" target="_blank" rel="noopener">
						Dr. Peter Bandettini <ExternalLink size={14} />
					</a> 
					analyzing functional connectivity in resting-state fMRI and how to leverage connectivity information to enhance brain-behavior predictions. I also had the opportunity to work in the Clinical & Translational Neuroscience Branch under 
					<a href="https://www.nimh.nih.gov/research/research-conducted-at-nimh/principal-investigators/karen-berman" target="_blank" rel="noopener">
						Dr. Karen Berman <ExternalLink size={14} />
					</a>. 
					There, I conducted research using brain imaging to investigate the relationship between gonadal hormone fluctuations and the brain at rest in healthy women, men, and women using oral contraceptives.
				</p>
			</div>

			<div class="image-grid">
				<img src="/pics/shannon-building-nih.jpg" alt="NIH Shannon Building" loading="lazy" />
				<img src="/pics/scan.png" alt="Brain scan imagery" loading="lazy" />
			</div>

			<div class="text-block">
				<p>
					I received a B.A. in Psychology from 
					<a href="https://www.cornell.edu/" target="_blank" rel="noopener">
						Cornell University <ExternalLink size={14} />
					</a> 
					in 2021, where I found my love for neuroscience and coding. I worked as an undergraduate research assistant in the 
					<a href="https://blogs.cornell.edu/davidsmithlab/" target="_blank" rel="noopener">
						Laboratory of the Neurobiology of Learning and Memory <ExternalLink size={14} />
					</a> 
					under 
					<a href="https://psychology.cornell.edu/david-m-smith" target="_blank" rel="noopener">
						Dr. David Smith <ExternalLink size={14} />
					</a>, 
					studying the anterior nucleus of the hippocampus using opto-genetics and chemo-genetics.
				</p>
			</div>

			<div class="image-grid">
				<img src="/pics/Cornell-University-Ithaca-NY-1024x576.jpg" alt="Cornell University campus" loading="lazy" />
				<img src="/pics/ithaca.jpg" alt="Ithaca scenery" loading="lazy" />
			</div>

			<div class="text-block personal">
				<p>
					Outside of the lab, I love a good brunch, reading, and watching sports with my family.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		background: var(--color-bg);
		padding: 2rem 1rem;
		border-radius: var(--radius-2xl);
	}

	.container {
		max-width: 48rem;
		margin: 0 auto;
		width: 100%;
	}

	.content-card {
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		border-radius: var(--radius-2xl);
		border: 1px solid rgba(226, 232, 240, 0.3);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
		margin-bottom: 0.25rem;
	}

	h2 {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: 2rem;
		text-align: center;
		font-family: var(--font-base);
	}

	.text-block {
		margin-bottom: 2rem;
	}

	.text-block.personal {
		margin-bottom: 0;
		text-align: center;
		font-style: italic;
		opacity: 0.8;
	}

	p {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-text);
		font-family: var(--font-base);
		margin: 0;
	}

	a {
		color: var(--color-secondary);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		transition: opacity var(--transition-fast);
		font-weight: 500;
	}

	a:hover {
		opacity: 0.7;
	}

	.image-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin: 2rem 0;
		border-radius: 1rem;
		overflow: hidden;
	}

	.image-grid img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		transition: transform var(--transition-normal);
	}

	.image-grid img:hover {
		transform: scale(1.02);
	}

	@media (min-width: 768px) {
		.content-card {
			padding: 3rem 3rem;
		}

		h2 {
			font-size: 2.5rem;
			margin-bottom: 2.5rem;
		}

		p {
			font-size: 1.125rem;
		}

		.image-grid {
			gap: 1.5rem;
			margin: 2.5rem 0;
		}

		.image-grid img {
			height: 240px;
		}
	}

	@media (max-width: 640px) {
		.content-card {
			padding: 2rem 1.5rem;
		}

		h2 {
			font-size: 1.75rem;
		}

		.image-grid img {
			height: 125px;
		}
	}
</style>