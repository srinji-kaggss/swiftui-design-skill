<script lang="ts">
  import { scrollReveal, lineReveal } from '../actions/scroll';
</script>

<section class="intro" use:scrollReveal={{ parallax: 30, threshold: 0.15 }}>
  <div class="intro-inner">
    <span class="eyebrow">How we work</span>
    <h2 class="heading" use:lineReveal={0.08}>One team. One conversation. From day one.</h2>
    <p class="body">
      Most companies work with separate agencies and teams. When everything needs to
      come together, nothing quite fits. At Logical Works, strategy, design, and
      development work at the same table.
    </p>
    <p class="body">
      We start where you are — beginning with your constraints, your complexity,
      your teams. Discovery and research ground our decisions in insight, not
      assumptions. The result: systems that work now and adapt as your future unfolds.
    </p>
  </div>
</section>

<style>
  .intro {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-gutter);
  }

  .intro-inner {
    max-width: var(--content-max);
    padding: var(--space-section-y) 0;
  }

  .heading {
    font-family: var(--font-display);
    font-size: var(--fs-h1);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin-bottom: var(--space-12);
    text-wrap: pretty;
  }

  .heading :global(span) { display: inline-block; }

  .body {
    font-size: var(--fs-lg);
    line-height: 1.6;
    color: var(--paper-dim);
    margin-bottom: var(--space-6);
  }
</style>
