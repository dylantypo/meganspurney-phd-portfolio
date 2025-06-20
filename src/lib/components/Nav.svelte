<script lang="ts">
	import { onMount } from 'svelte';
	import { Brain, X } from '@lucide/svelte';
	import { gsap } from 'gsap';
	import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

	gsap.registerPlugin(MorphSVGPlugin);

	let navElement: HTMLElement;
	let mobileMenuOpen = false;
	let scrolled = false;
	let activeSection = 'About Me';

	const navItems = [
		{ label: 'About Me', href: '#about' },
		{ label: 'Research', href: '#research' },
		{ label: 'Poster Presentations', href: '#posters' },
		{ label: 'Publications', href: '#publications' },
		{ label: 'Resume', href: '#resume' }
	];

	onMount(() => {
		const handleScroll = () => {
			const newScrolled = window.scrollY > 20;
			if (newScrolled !== scrolled) {
				scrolled = newScrolled;
			}

			// Update active section based on scroll position
			const sections = navItems.map(item => item.href.substring(1));
			let currentSection = 'About Me';

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const rect = element.getBoundingClientRect();
					// More precise section detection
					if (rect.top <= 120 && rect.bottom >= 120) {
						currentSection = navItems.find(item => item.href === `#${sectionId}`)?.label || 'About Me';
						break;
					}
				}
			}

			if (currentSection !== activeSection) {
				activeSection = currentSection;
			}
		};

		const animateNav = () => {
			gsap.fromTo(navElement, 
				{ y: -10, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
			);
		};

		const animateBrain = () => {
			const brain = navElement.querySelector('.brain-icon');
			if (brain) {
				gsap.set(brain, { transformOrigin: "center" });
				gsap.fromTo(brain, 
					{ scale: 0.8, opacity: 0 },
					{ scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
				);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		animateNav();
		setTimeout(animateBrain, 300);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
		
		const brainIcon = navElement.querySelector('.mobile-brand .brain-icon');
		const menu = navElement.querySelector('.mobile-menu');
		
		if (brainIcon) {
			if (mobileMenuOpen) {
				gsap.to(brainIcon, {
					rotation: 180,
					scale: 1.1,
					duration: 0.4,
					ease: "power2.out"
				});
			} else {
				gsap.to(brainIcon, {
					rotation: 0,
					scale: 1,
					duration: 0.4,
					ease: "power2.out"
				});
			}
		}
		
		if (menu) {
			if (mobileMenuOpen) {
				gsap.set(menu, { display: 'block', visibility: 'visible' });
				gsap.fromTo(menu, 
					{ opacity: 0, y: -20, scale: 0.98 },
					{ opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
				);
			} else {
				gsap.to(menu, { 
					opacity: 0, 
					y: -10, 
					scale: 0.98,
					duration: 0.2, 
					ease: "power2.in",
					onComplete: () => {
						gsap.set(menu, { display: 'none', visibility: 'hidden' });
					}
				});
			}
		}
	};

	const handleNavClick = (href: string) => {
		mobileMenuOpen = false;
		
		// Always close mobile menu with animation
		const brainIcon = navElement.querySelector('.mobile-brand .brain-icon');
		const menu = navElement.querySelector('.mobile-menu');
		
		if (brainIcon) {
			gsap.to(brainIcon, {
				rotation: 0,
				scale: 1,
				duration: 0.4,
				ease: "power2.out"
			});
		}
		
		if (menu) {
			gsap.to(menu, { 
				opacity: 0, 
				y: -10, 
				scale: 0.98,
				duration: 0.2, 
				ease: "power2.in",
				onComplete: () => {
					gsap.set(menu, { display: 'none', visibility: 'hidden' });
				}
			});
		}
		
		// Smooth scroll to section
		const sectionId = href.substring(1);
		const element = document.getElementById(sectionId);
		
		if (element) {
			const offsetTop = element.offsetTop - 90; // Account for nav height + spacing
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
		}
	};

	const handleBrandClick = () => {
		mobileMenuOpen = false;
		
		// Close mobile menu if open
		const brainIcon = navElement.querySelector('.mobile-brand .brain-icon');
		const menu = navElement.querySelector('.mobile-menu');
		
		if (brainIcon) {
			gsap.to(brainIcon, {
				rotation: 0,
				scale: 1,
				duration: 0.4,
				ease: "power2.out"
			});
		}
		
		if (menu) {
			gsap.to(menu, { 
				opacity: 0, 
				y: -10, 
				scale: 0.98,
				duration: 0.2, 
				ease: "power2.in",
				onComplete: () => {
					gsap.set(menu, { display: 'none' });
				}
			});
		}
		
		// Smooth scroll to top for user interactions
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
</script>

<nav bind:this={navElement} class="nav {scrolled ? 'scrolled' : ''}">
	<div class="nav-container">
		<div class="nav-brand-wrapper">
			<button 
				class="nav-brand desktop-brand" 
				onclick={handleBrandClick}
				aria-label="Go to top"
			>
				<div class="brain-icon">
					<Brain size={28} />
				</div>
				<span class="brand-text">Megan Spurney</span>
			</button>
			
			<button 
				class="mobile-brand mobile-only" 
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<div class="brain-icon">
					{#if mobileMenuOpen}
						<X size={28} />
					{:else}
						<Brain size={28} />
					{/if}
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

		<button class="brand-text mobile-only mobile-text" onclick={handleBrandClick}>
			Megan Spurney
		</button>
	</div>

	<div class="mobile-menu" style="display: none;">
		<ul class="mobile-nav-links">
			{#each navItems as item}
				<li>
					<button 
						class="mobile-nav-link" 
						onclick={() => handleNavClick(item.href)}
					>
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
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.85) 0%,
			rgba(255, 255, 255, 0.75) 70%,
			rgba(255, 255, 255, 0.6) 90%,
			rgba(255, 255, 255, 0.3) 100%
		);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		transition: all var(--transition-normal);
		box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
	}

	.nav.scrolled, .mobile-menu {
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.9) 0%,
			rgba(255, 255, 255, 0.8) 70%,
			rgba(255, 255, 255, 0.65) 90%,
			rgba(255, 255, 255, 0.4) 100%
		);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
		box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
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

	.nav-brand, .mobile-brand {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		color: var(--color-primary);
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-lg);
		text-decoration: none;
		transition: all var(--transition-fast);
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--spacing-2);
		border-radius: var(--radius-md);
	}

	.nav-brand:hover, .mobile-brand:hover {
		background: rgba(171, 91, 236, 0.1);
		transform: translateY(-1px);
	}

	.brain-icon {
		color: var(--color-secondary);
		display: flex;
		align-items: center;
		transition: transform var(--transition-fast);
	}

	.nav-brand:hover .brain-icon, .mobile-brand:hover .brain-icon {
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
		padding: var(--spacing-2) var(--spacing-3);
		border-radius: var(--radius-md);
		transition: all var(--transition-fast);
		position: relative;
		background: none;
		border: none;
		cursor: pointer;
		font-family: var(--font-base);
	}

	.nav-link:hover {
		color: var(--color-secondary);
		background: rgba(171, 91, 236, 0.1);
		transform: translateY(-1px);
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		width: 0;
		height: 2px;
		background: var(--color-secondary);
		transition: all var(--transition-fast);
		transform: translateX(-50%);
	}

	.nav-link:hover::after {
		width: 80%;
	}

	.nav-link.active {
		color: var(--color-secondary);
		background: rgba(171, 91, 236, 0.15);
		font-weight: var(--font-weight-semibold);
	}

	.nav-link.active::after {
		width: 80%;
	}

	.mobile-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		z-index: var(--z-dropdown);
		max-height: 80vh;
		overflow-y: auto;
	}

	.mobile-only {
		display: none;
	}

	.mobile-text {
		font-family: var(--font-base);
		font-size: var(--font-size-base);
		color: var(--color-primary);
		font-weight: var(--font-weight-semibold);
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--spacing-2);
		border-radius: var(--radius-md);
		transition: all var(--transition-fast);
	}

	.mobile-text:hover {
		background: rgba(171, 91, 236, 0.1);
		transform: translateY(-1px);
	}

	.mobile-nav-links {
		list-style: none;
		margin: 0;
		padding: 0;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--spacing-4);
	}

	.mobile-nav-link {
		display: block;
		color: var(--color-text);
		font-weight: var(--font-weight-medium);
		text-decoration: none;
		padding: var(--spacing-4) var(--spacing-4);
		border-radius: var(--radius-md);
		transition: all var(--transition-fast);
		margin-bottom: var(--spacing-2);
		background: rgba(255, 255, 255, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.3);
		cursor: pointer;
		font-family: var(--font-base);
		font-size: var(--font-size-base);
		width: 100%;
		text-align: left;
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
	}

	.mobile-nav-link:hover {
		color: var(--color-secondary);
		background: rgba(171, 91, 236, 0.15);
		border-color: rgba(171, 91, 236, 0.3);
		transform: translateX(4px);
		box-shadow: 0 2px 8px rgba(171, 91, 236, 0.2);
	}

	.mobile-nav-link:last-child {
		margin-bottom: 0;
	}

	.desktop-only {
		display: flex;
	}

	@media (max-width: 768px) {
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
		}

		.nav-brand-wrapper {
			order: 2;
		}

		.mobile-text {
			order: 1;
			flex: 1;
		}
	}

	@media (max-width: 480px) {
		.nav-container {
			padding: var(--spacing-3) var(--spacing-4);
		}

		.mobile-text {
			font-size: var(--font-size-sm);
		}
	}
</style>