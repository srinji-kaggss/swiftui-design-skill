<script lang="ts">
  import { stats } from '../data/content';
  import { scrollReveal } from '../actions/scroll';
</script>

<section class="stats" use:scrollReveal={{ parallax: 30, threshold: 0.2 }}>
  <div class="container">
    <div class="section-header">
      <span class="section-number">03</span>
      <h2 class="section-title">Impact</h2>
    </div>
    <div class="stats-grid">
      {#each stats as stat, i (stat.label)}
        <div class="stat" use:scrollReveal={{ parallax: 25, threshold: 0.15 }}>
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .stats {
    padding: var(--space-section-y) 0;
    border-top: 1px solid var(--paper-faint);
  }

  .container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-gutter);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  @media (min-width: 768px) {
    .stats-grid { grid-template-columns: 1fr 1fr; }
  }

  .stat {
    padding: var(--space-8) var(--space-6);
    background: var(--ink-2);
    border: 1px solid var(--paper-faint);
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: var(--fs-display-2);
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 1;
    color: var(--accent);
    display: block;
    margin-bottom: var(--space-4);
  }

  .stat-label {
    font-size: var(--fs-base);
    color: var(--paper-dim);
    line-height: 1.5;
    display: block;
  }
</style>
