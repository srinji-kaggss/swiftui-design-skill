<!-- LWDS Hero: echo layers (Pigment palette) + letter title + floating parallax -->
<script lang="ts">
  import { echoLayers, letterTitle, floatingParallax, type FloatingIconConfig } from '../motion/engine';
  import { siteConfig } from '../data/content';

  const icons: FloatingIconConfig[] = [
    { x: '5%', y: '10%', s: 76, r: 18, bg: 'var(--clay-500)', speed: 0.22, rot: 1 },
    { x: '82%', y: '6%', s: 52, r: 999, bg: 'var(--smoke-500)', speed: 0.38, rot: -1 },
    { x: '3%', y: '58%', s: 88, r: 22, bg: 'color-mix(in srgb, var(--color-bg) 82%, var(--clay-500))', speed: 0.14, rot: 1 },
    { x: '91%', y: '30%', s: 64, r: 16, bg: 'var(--sage-500)', speed: 0.30, rot: -1 },
    { x: '70%', y: '74%', s: 56, r: 14, bg: 'color-mix(in srgb, var(--color-bg) 82%, var(--smoke-500))', speed: 0.18, rot: 1 },
    { x: '18%', y: '80%', s: 44, r: 999, bg: 'var(--clay-400)', speed: 0.26, rot: -1 },
    { x: '88%', y: '60%', s: 80, r: 20, bg: 'var(--sage-400)', speed: 0.10, rot: 1 },
  ];
</script>

<section class="home-hero" id="top">
  <div class="home-hero__content" use:echoLayers={{ colors: ['var(--clay-500)', 'var(--smoke-500)', 'var(--sage-500)'], intensity: 1.2 }}>
    <div class="container">
      <div class="home-hero__inner">
        <span class="is-style-eyebrow" data-reveal>{siteConfig.name} · Toronto</span>
        <h1 class="home-hero__title" use:letterTitle={45}>{siteConfig.tagline}</h1>
        <p class="home-hero__body" data-reveal>{siteConfig.description}</p>
        <div class="home-hero__actions" data-reveal>
          <a href="#work" class="btn btn--primary" data-cursor data-cursor-text="See work">See our work</a>
          <a href="#contact" class="btn btn--secondary" data-cursor data-cursor-text="Start">Start a project</a>
        </div>
      </div>
    </div>
    <div class="floating-icons" use:floatingParallax={icons} aria-hidden="true"></div>
  </div>
</section>

<style>
  .home-hero__inner {
    position: relative; z-index: 2;
    padding: var(--space-3xl) 0 var(--space-2xl);
    max-width: 48rem;
  }
  .home-hero__body {
    font-size: var(--text-body);
    line-height: var(--leading-body);
    color: var(--color-muted-ink);
    max-width: 36rem;
    margin: var(--space-sm) 0 var(--space-xl);
    font-family: var(--font-body);
  }
  .home-hero__actions { display: flex; gap: var(--space-2xs); flex-wrap: wrap; }
</style>
