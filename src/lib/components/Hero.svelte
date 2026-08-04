<!-- Ported from afternow home.js hero structure + lgwks AnimatedHeroTitle -->
<script lang="ts">
  import { echoLayers, letterTitle } from '../actions/scroll';
  import { siteConfig } from '../data/content';
  import { floatingParallax, type FloatingIconConfig } from '../actions/scroll';

  const icons: FloatingIconConfig[] = [
    { x: '5%', y: '10%', s: 76, r: 18, bg: 'var(--color-green)', speed: 0.22, rot: 1 },
    { x: '82%', y: '6%', s: 52, r: 999, bg: 'var(--color-gray-300)', speed: 0.38, rot: -1 },
    { x: '3%', y: '58%', s: 88, r: 22, bg: 'color-mix(in srgb, var(--color-black) 82%, var(--color-green))', speed: 0.14, rot: 1 },
    { x: '91%', y: '30%', s: 64, r: 16, bg: 'var(--color-green)', speed: 0.30, rot: -1 },
    { x: '70%', y: '74%', s: 56, r: 14, bg: 'color-mix(in srgb, var(--color-black) 82%, var(--color-green))', speed: 0.18, rot: 1 },
    { x: '18%', y: '80%', s: 44, r: 999, bg: 'var(--color-gray-300)', speed: 0.26, rot: -1 },
    { x: '88%', y: '60%', s: 80, r: 20, bg: 'var(--color-green)', speed: 0.10, rot: 1 },
  ];
</script>

<section class="home-hero" id="top">
  <!-- echo layers sit on .home-hero itself, not clipped by overflow -->
  <div class="home-hero__content" use:echoLayers={{ colors: ['var(--color-purple)', 'var(--color-yellow)', 'var(--color-green)'], intensity: 1.2 }}>
    <div class="container">
      <div class="home-hero__inner">
        <span class="is-style-eyebrow" data-reveal>{siteConfig.name}</span>
        <h1 class="home-hero__title" use:letterTitle={45}>{siteConfig.tagline}</h1>
        <p class="home-hero__body" data-reveal>{siteConfig.description}</p>
        <div class="home-hero__actions" data-reveal>
          <a href="#work" class="btn btn-color--green" data-cursor data-cursor-text="See work">See our work</a>
          <a href="#contact" class="btn btn--outline no-icon" data-cursor data-cursor-text="Start">Start a project</a>
        </div>
      </div>
    </div>
    <div class="floating-icons" use:floatingParallax={icons} aria-hidden="true"></div>
  </div>
  <div class="home-hero-pin-spacer" aria-hidden="true"></div>
</section>

<style>
  /* FIX: removed overflow:hidden — it was clipping echo layers */
  .home-hero__content {
    border-radius: 0.75rem;
    position: relative;
  }
  /* FIX: widened from 768px to 48rem to match original hero max-width */
  .home-hero__inner {
    position: relative; z-index: 2;
    padding: var(--spacing-x-large) 0 var(--spacing-large);
    max-width: 48rem;
  }
  .home-hero__body {
    font-size: var(--font-size-x-large);
    line-height: var(--line-height-x-large);
    color: var(--color-gray-400);
    max-width: 36rem;
    margin: var(--spacing-small) 0 var(--spacing-medium-large);
  }
  .home-hero__actions { display: flex; gap: var(--spacing-tiny); flex-wrap: wrap; }
  .home-hero-pin-spacer { display: none; }
  @media (min-width: 768px) {
    .home-hero-pin-spacer { display: block; height: 60vh; }
  }
</style>
