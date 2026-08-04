<script lang="ts">
  import { stats } from '../data/content';
</script>

<section class="container">
  <div style="padding: var(--spacing-x-large) 0;">
    <div class="grid" style="margin-bottom: var(--spacing-medium-large);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>Logical Works in numbers</span>
        <h2 class="section__headline" data-reveal>Our journey and impact.</h2>
      </div>
    </div>
    <div class="grid">
      {#each stats as stat (stat.label)}
        <div class="stat-card col-3" data-reveal data-reveal-batch="true">
          <div class="stat-card__value">{stat.value}</div>
          <div class="stat-card__label">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .stat-card {
    background: var(--color-gray-100);
    border-radius: var(--site-content-border-radius);
    padding: var(--spacing-small);
    margin-bottom: var(--spacing-x-small);
  }
  .stat-card__value {
    font-family: var(--font-secondary);
    font-size: var(--font-size-display-2);
    font-weight: 600;
    letter-spacing: var(--letter-spacing-display-2);
    line-height: var(--line-height-display-2);
    color: var(--color-green);
    margin-bottom: var(--spacing-tiny);
  }
  .stat-card__label {
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: var(--color-gray-400);
  }
</style>
