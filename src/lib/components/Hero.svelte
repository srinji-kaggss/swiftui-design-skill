<script lang="ts">
  import { lineReveal, echoLayers, scrollParallax } from '../actions/scroll';
  import { siteConfig } from '../data/content';
</script>

<section id="top" class="hero">
  <div class="hero-echo" use:echoLayers={{ colors: ['var(--echo-1)', 'var(--echo-2)', 'var(--echo-3)'], intensity: 1.2 }}>
    <div class="hero-inner">
      <p class="kicker" use:scrollParallax={0.1}>{siteConfig.name}</p>
      <h1 class="title" use:lineReveal={0.12}>{siteConfig.tagline}</h1>
      <p class="lede" use:scrollParallax={0.06}>{siteConfig.description}</p>
      <div class="actions" use:scrollParallax={0.03}>
        <a href="#work" class="btn-primary">See our work</a>
        <a href="#contact" class="btn-secondary">Start a project</a>
      </div>
    </div>
  </div>
  <div class="hero-spacer" aria-hidden="true"></div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .hero-echo {
    position: sticky;
    top: 4rem;
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-gutter);
    border-radius: 0.75rem;
    overflow: visible;
  }

  .hero-inner {
    position: relative;
    z-index: 2;
    max-width: 48rem;
    padding: var(--space-24) 0;
  }

  .kicker {
    font-family: var(--font-mono);
    font-size: var(--fs-sm);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent);
    margin-bottom: var(--space-6);
  }

  .title {
    font-family: var(--font-display);
    font-size: var(--fs-display);
    line-height: 1.05;
    letter-spacing: -0.05em;
    font-weight: 700;
    margin-bottom: var(--space-8);
    text-wrap: pretty;
  }

  .title :global(span) {
    display: inline-block;
  }

  .lede {
    font-size: var(--fs-xl);
    line-height: 1.5;
    color: var(--paper-dim);
    max-width: 36rem;
    margin-bottom: var(--space-16);
  }

  .actions {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: var(--fs-base);
    font-weight: 600;
    text-decoration: none;
    letter-spacing: -0.02em;
    transition: all var(--dur-fast) var(--ease-default);
  }

  .btn-primary {
    background: var(--accent);
    color: var(--ink);
  }

  .btn-primary:hover { background: var(--paper); }

  .btn-secondary {
    border: 1px solid var(--paper-faint);
    color: var(--paper);
  }

  .btn-secondary:hover { border-color: var(--paper); }

  .hero-spacer {
    height: 30vh;
  }

  @media (max-width: 640px) {
    .hero-spacer { height: 20vh; }
    .title { font-size: var(--fs-h1); }
  }
</style>
