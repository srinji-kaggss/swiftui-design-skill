<script lang="ts">
  import { stats } from '../data/content';
</script>

<section class="container">
  <div style="padding: var(--space-2xl) 0;">
    <div class="grid" style="margin-bottom: var(--space-xl);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>Logical Works in numbers</span>
        <h2 class="section__headline" data-reveal>Our journey and impact.</h2>
      </div>
    </div>
    <div class="grid grid-columns--2" style="gap: var(--grid-gap);">
      {#each stats as stat (stat.label)}
        <div class="lw-card stat-card" data-reveal data-reveal-batch="true">
          <div class="stat-card__value">{stat.value}</div>
          <div class="stat-card__label">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .stat-card__value {
    font-family: var(--font-mono);
    font-size: var(--text-display-2);
    font-weight: var(--weight-medium);
    line-height: var(--leading-display);
    color: var(--color-brand);
    margin-bottom: var(--space-2xs);
    font-variant-numeric: tabular;
  }
  .stat-card__label {
    font-size: var(--text-body);
    line-height: var(--leading-body);
    color: var(--color-muted-ink);
    font-family: var(--font-body);
  }
</style>
