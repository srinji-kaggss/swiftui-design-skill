<script lang="ts">
  import { scrollParallax } from '../actions/scrollReveal';
</script>

<section id="top" class="hero">
  <div class="hero-content">
    <p class="kicker" use:scrollParallax={0.15}>Digital studio — Montreux</p>
    <h1 class="title" use:scrollParallax={0.25}>
      From idea<br>
      <span class="title-accent">to impact.</span>
    </h1>
    <p class="lede" use:scrollParallax={0.1}>
      We design, code, and ship custom websites, applications, and tools.
      Flat design, deep contrast, motion that moves with you.
    </p>
    <div class="actions" use:scrollParallax={0.05}>
      <a href="#work" class="btn-primary">See our work</a>
      <a href="#contact" class="btn-secondary">Start a project</a>
    </div>
  </div>
  <div class="hero-mark" use:scrollParallax={0.4}>
    <span class="mark-glyph">✦</span>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 var(--space-md);
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .hero-content {
    max-width: 48rem;
    z-index: 2;
  }

  .kicker {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent);
    margin-bottom: var(--space-sm);
  }

  .title {
    font-family: var(--font-display);
    font-size: clamp(4rem, 12vw, 10rem);
    line-height: 0.95;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: var(--space-md);
  }

  .title-accent {
    color: var(--accent);
  }

  .lede {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    line-height: 1.5;
    color: var(--paper-dim);
    max-width: 36rem;
    margin-bottom: var(--space-lg);
  }

  .actions {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
  }

  .btn-primary, .btn-secondary {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 0.9375rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s var(--ease-out);
  }

  .btn-primary {
    background: var(--accent);
    color: var(--ink);
  }

  .btn-primary:hover {
    background: var(--paper);
  }

  .btn-secondary {
    border: 1px solid var(--paper-faint);
    color: var(--paper);
  }

  .btn-secondary:hover {
    border-color: var(--paper);
  }

  .hero-mark {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    opacity: 0.08;
    pointer-events: none;
  }

  .mark-glyph {
    font-size: clamp(20rem, 40vw, 40rem);
    line-height: 1;
    color: var(--accent);
  }

  @media (max-width: 768px) {
    .hero-mark {
      display: none;
    }
  }
</style>
