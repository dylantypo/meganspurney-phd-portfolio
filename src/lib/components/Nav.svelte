<script lang="ts">
	import { onMount } from 'svelte';
	import { Brain } from '@lucide/svelte';
	import { gsap } from 'gsap';
	import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin';

	gsap.registerPlugin(MorphSVGPlugin);

	let navElement: HTMLElement;
	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let activeSection = $state('');

	const navItems = [
		{ label: 'About Me', href: '#about' },
		{ label: 'Research', href: '#research' },
		{ label: 'Poster Presentations', href: '#posters' },
		{ label: 'Publications', href: '#publications' },
		{ label: 'Resume', href: '#resume' }
	];

	onMount(() => {
		const setInitialSection = () => {
			const sections = navItems.map((item) => item.href.substring(1));
			const threshold = 100;
			let bestSection = 'About Me';

			for (let i = sections.length - 1; i >= 0; i--) {
				const sectionId = sections[i];
				const element = document.getElementById(sectionId);

				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= threshold && rect.bottom > threshold + 50) {
						bestSection = navItems[i].label;
						break;
					}
				}
			}

			activeSection = bestSection;
			console.log(`🎯 Initial section set to: ${bestSection}`);
		};

		// Set initial section after a brief delay for layout
		setTimeout(setInitialSection, 100);

		const handleScroll = () => {
			const newScrolled = window.scrollY > 20;
			if (newScrolled !== scrolled) {
				scrolled = newScrolled;
			}

			const sections = navItems.map((item) => item.href.substring(1));
			let currentSection = 'About Me';

			// Simple approach: find the section whose top is closest to but above the threshold
			const threshold = 100;
			let bestSection = 'About Me';
			let bestDistance = Infinity;

			for (let i = sections.length - 1; i >= 0; i--) {
				const sectionId = sections[i];
				const element = document.getElementById(sectionId);

				if (element) {
					const rect = element.getBoundingClientRect();

					// If section top is above threshold and bottom is below threshold
					if (rect.top <= threshold && rect.bottom > threshold + 50) {
						bestSection = navItems[i].label;
						break; // Take the first match (going backwards = priority to later sections)
					}

					// Fallback: find closest section to threshold
					const distance = Math.abs(rect.top - threshold);
					if (rect.bottom > 0 && distance < bestDistance) {
						bestDistance = distance;
						bestSection = navItems[i].label;
					}
				}
			}

			currentSection = bestSection;

			if (currentSection !== activeSection) {
				console.log(`🔄 Updating activeSection: "${activeSection}" → "${currentSection}"`);
				activeSection = currentSection;
			}
		};

		const animateNav = () => {
			gsap.fromTo(
				navElement,
				{ y: -10, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.4, ease: 'circ.out' }
			);
		};

		const animateBrain = () => {
			const brain = navElement.querySelector('.brain-icon');
			if (brain) {
				gsap.set(brain, { transformOrigin: 'center' });
				gsap.fromTo(
					brain,
					{ scale: 0.8, opacity: 0 },
					{ scale: 1, opacity: 1, duration: 0.5, ease: 'circ.out' }
				);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		setTimeout(() => {
			console.log('🔍 ON LOAD - Checking all sections:');
			const sections = navItems.map((item) => item.href.substring(1));

			sections.forEach((sectionId) => {
				const element = document.getElementById(sectionId);
				if (element) {
					const rect = element.getBoundingClientRect();
					console.log(`📍 ${sectionId}:`, {
						found: !!element,
						top: rect.top,
						bottom: rect.bottom,
						height: rect.height
					});
				} else {
					console.log(`❌ ${sectionId}: NOT FOUND`);
				}
			});
		}, 1000);
		animateNav();
		setTimeout(animateBrain, 300);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const toggleMobileMenu = () => {
		const brainButton = navElement.querySelector('.mobile-brand');
		const menu = navElement.querySelector('.mobile-menu');
		const brainPaths = navElement.querySelectorAll('.brain-path');

		if (!brainButton || !menu || !brainPaths.length) return;

		if (!(brainButton as HTMLElement).dataset.originalWidth) {
			const rect = brainButton.getBoundingClientRect();
			(brainButton as HTMLElement).dataset.originalWidth = `${rect.width}px`;
		}

		// Define the three brain states as path arrays
		const brainStates = {
			normal: [
				'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z',
				'M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z',
				'M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4',
				'M17.599 6.5a3 3 0 0 0 .399-1.375',
				'M6.003 5.125A3 3 0 0 0 6.401 6.5',
				'M3.477 10.896a4 4 0 0 1 .585-.396',
				'M19.938 10.5a4 4 0 0 1 .585.396',
				'M6 18a4 4 0 0 1-1.967-.516',
				'M19.967 17.484A4 4 0 0 1 18 18'
			],
			cog: [
				'M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771',
				'M17.998 5.125a4 4 0 0 1 2.525 5.771',
				'M19.505 10.294a4 4 0 0 1-1.5 7.706',
				'M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516',
				'M4.5 10.291A4 4 0 0 0 6 18',
				'M6.002 5.125a3 3 0 0 0 .4 1.375',
				'', // Empty paths for cog-specific elements
				'',
				''
			],
			circuit: [
				'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z',
				'M9 13a4.5 4.5 0 0 0 3-4',
				'M6.003 5.125A3 3 0 0 0 6.401 6.5',
				'M3.477 10.896a4 4 0 0 1 .585-.396',
				'M6 18a4 4 0 0 1-1.967-.516',
				'M12 13h4',
				'M12 18h6a2 2 0 0 1 2 2v1',
				'M12 8h8',
				'M16 8V5a2 2 0 0 1 2-2'
			]
		};

		if (!mobileMenuOpen) {
			// Opening animation with timeline
			mobileMenuOpen = true;

			// Calculate center position
			const windowWidth = window.innerWidth;
			const slideDistance = 0;
			// Create timeline for smooth morphing
			const tl = gsap.timeline();

			// Animate button position and size
			tl.to(brainButton, {
				x: slideDistance,
				width: windowWidth - 32,
				duration: 0.6,
				ease: 'circ.out'
			})
				.add(() => {
					brainPaths.forEach((path, i) => {
						gsap.to(path, {
							duration: 0.2,
							morphSVG: brainStates.cog[i] || brainStates.cog[0],
							ease: 'power2.out'
						});
					});
				}, 0.2)
				.add(() => {
					brainPaths.forEach((path, i) => {
						gsap.to(path, {
							duration: 0.2,
							morphSVG: brainStates.circuit[i] || brainStates.circuit[0],
							ease: 'power2.out'
						});
					});
				}, 0.4)
				// Show menu after expansion completes
				.set(menu, { display: 'block', visibility: 'visible' }, 0.6)
				.fromTo(
					menu,
					{ opacity: 0, y: -20, scale: 0.98 },
					{ opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'circ.out' },
					0.6
				);
		} else {
			// Closing animation with timeline
			mobileMenuOpen = false;

			const tl = gsap.timeline();

			// Hide menu first
			tl.to(menu, {
				opacity: 0,
				y: -10,
				scale: 0.98,
				duration: 0.2,
				ease: 'circ.in'
			})
				// Hide menu element
				.set(menu, { display: 'none', visibility: 'hidden' })
				// Contract and slide back
				.to(
					brainButton,
					{
						x: 0,
						width: (brainButton as HTMLElement).dataset.originalWidth,
						duration: 0.4,
						ease: 'circ.out'
					},
					0.2
				)
				// Reverse morph: BrainCircuit → BrainCog
				.add(() => {
					brainPaths.forEach((path, i) => {
						gsap.to(path, {
							duration: 0.2,
							morphSVG: brainStates.cog[i] || brainStates.cog[0],
							ease: 'power2.out'
						});
					});
				}, 0.4)
				.add(() => {
					brainPaths.forEach((path, i) => {
						gsap.to(path, {
							duration: 0.2,
							morphSVG: brainStates.normal[i] || brainStates.normal[0],
							ease: 'power2.out'
						});
					});
				}, 0.6);
		}
	};

	const handleNavClick = (href: string) => {
		if (mobileMenuOpen) {
			toggleMobileMenu();
		}

		const sectionId = href.substring(1);
		const element = document.getElementById(sectionId);

		if (element) {
			// Get element position relative to document
			const elementTop = element.getBoundingClientRect().top + window.scrollY;

			// Dynamic offset based on layout
			const isMobile = window.innerWidth <= 1024;
			let offset = isMobile ? 85 : 100;

			// For desktop, account for the fact that content is offset by sidebar
			if (!isMobile) {
				// Main content has margin-left: 25%, so we need to adjust
				offset = 100; // Keep existing desktop offset
			}

			const targetPosition = Math.max(0, elementTop - offset);

			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			});
		}
	};

	const handleBrandClick = () => {
		if (mobileMenuOpen) {
			toggleMobileMenu();
		}

		// Always scroll to top for brand click
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
</script>

<nav bind:this={navElement} class="nav {scrolled ? 'scrolled' : ''}">
	<div class="nav-container">
		<div class="nav-brand-wrapper">
			<button class="nav-brand desktop-brand" onclick={handleBrandClick} aria-label="Go to top">
				<div class="brain-icon">
					<Brain size={28} />
				</div>
				<span class="brand-text">Megan Spurney</span>
			</button>

			<button class="mobile-brand mobile-only" onclick={toggleMobileMenu} aria-label="Toggle menu">
				<div class="brain-icon">
					<svg
						width="28"
						height="28"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							class="brain-path"
							d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
						></path>
						<path
							class="brain-path"
							d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
						></path>
						<path class="brain-path" d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
						<path class="brain-path" d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
						<path class="brain-path" d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
						<path class="brain-path" d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
						<path class="brain-path" d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
						<path class="brain-path" d="M6 18a4 4 0 0 1-1.967-.516"></path>
						<path class="brain-path" d="M19.967 17.484A4 4 0 0 1 18 18"></path>
					</svg>
				</div>
			</button>
		</div>

		<ul class="nav-links desktop-only">
			{#each navItems as item}
				<li>
					<button
						class="nav-link {activeSection === item.label ? 'active' : ''}"
						onclick={() => handleNavClick(item.href)}
					>
						{item.label}
					</button>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mobile-menu" style="display: none;">
		<ul class="mobile-nav-links">
			{#each navItems as item}
				<li>
					<button class="mobile-nav-link" onclick={() => handleNavClick(item.href)}>
						{item.label}
					</button>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-fixed);
		background: transparent;
		transition: all var(--transition-normal);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--spacing-4) var(--spacing-6);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-brand-wrapper {
		display: flex;
		align-items: center;
	}

	.nav-brand,
	.mobile-brand {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-3);
		color: var(--color-primary);
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-lg);
		text-decoration: none;
		transition: all var(--transition-fast);
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid rgba(226, 232, 240, 0.3);
		cursor: pointer;
		padding: var(--spacing-3) var(--spacing-4);
		border-radius: var(--radius-2xl);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
	}

	.nav-brand:hover,
	.mobile-brand:hover {
		background: rgba(255, 255, 255, 0.85);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
	}

	.brain-icon {
		color: var(--color-secondary);
		display: flex;
		align-items: center;
		transition: transform var(--transition-fast);
	}

	.nav-brand:hover .brain-icon,
	.mobile-brand:hover .brain-icon {
		transform: scale(1.05);
	}

	.brand-text {
		font-family: var(--font-base);
	}

	.nav-links {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: var(--spacing-8);
	}

	.nav-link {
		color: var(--color-text);
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-sm);
		text-decoration: none;
		padding: var(--spacing-3) var(--spacing-4);
		border-radius: var(--radius-2xl);
		transition: all var(--transition-fast);
		position: relative;
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: none;
		cursor: pointer;
		font-family: var(--font-base);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	.nav-link:hover {
		color: var(--color-secondary);
		background: rgba(255, 255, 255, 0.85);
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.nav-link::after {
		display: none;
	}

	.nav-link.active {
		color: var(--color-secondary);
		background: rgba(171, 91, 236, 0.15);
		font-weight: var(--font-weight-semibold);
		box-shadow: 0 4px 18px rgba(171, 91, 236, 0.2);
	}

	.mobile-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		width: 100%;
		background: transparent;
		z-index: var(--z-dropdown);
		max-height: 80vh;
		overflow-y: auto;
		padding: var(--spacing-4) 0;
	}

	.mobile-only {
		display: none;
	}

	.mobile-nav-links {
		list-style: none;
		margin: 0;
		padding: 0;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--spacing-6);
	}

	.mobile-nav-link {
		display: block;
		color: var(--color-text);
		font-weight: var(--font-weight-medium);
		text-decoration: none;
		padding: var(--spacing-4) var(--spacing-4);
		border-radius: var(--radius-2xl);
		transition: all var(--transition-fast);
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		border: none;
		cursor: pointer;
		font-family: var(--font-base);
		font-size: var(--font-size-base);
		width: 100%;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	}

	.mobile-nav-link:hover {
		color: var(--color-secondary);
		background: rgba(171, 91, 236, 0.15);
		transform: translateX(4px) translateY(-1px);
		box-shadow: 0 4px 15px rgba(171, 91, 236, 0.2);
	}

	.mobile-nav-link:last-child {
		margin-bottom: var(--spacing-2);
	}

	.desktop-only {
		display: flex;
	}

	@media (max-width: 1024px) {
		.desktop-only {
			display: none;
		}

		.mobile-only {
			display: flex;
		}

		.desktop-brand {
			display: none;
		}

		.nav-container {
			padding: var(--spacing-4) var(--spacing-4);
			justify-content: flex-end;
			position: relative;
		}

		.mobile-brand {
			position: relative;
			z-index: 10;
		}
	}

	@media (max-width: 480px) {
		.nav-container {
			padding: var(--spacing-3) var(--spacing-4);
		}
	}
</style>
