<script lang="ts">
  import { services } from '../data/content';
</script>

<section id="services" class="container">
  <div style="padding: var(--space-2xl) 0;">
    <div class="grid" style="margin-bottom: var(--space-xl);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>What we do</span>
        <h2 class="section__headline" data-reveal>Capabilities built for the full arc of a product.</h2>
      </div>
    </div>
    <div class="grid grid-columns--3" style="gap: var(--grid-gap);">
      {#each services as service, i (service.slug)}
        <article class="lw-card {i > 0 ? 'lw-card--seam' : ''}" data-reveal data-reveal-batch="true">
          <span class="is-style-eyebrow">{service.eyebrow}</span>
          <h3 class="service-card__title">{service.title}</h3>
          <p class="service-card__desc">{service.description}</p>
          <ul class="service-card__features">
            {#each service.features as feature (feature)}
              <li>{feature}</li>
            {/each}
          </ul>
          <div class="service-card__process">
            <span class="is-style-eyebrow">Process</span>
            <ol>
              {#each service.processSteps as step, j (step)}
                <li><span class="step-num">{j + 1}</span>{step}</li>
              {/each}
            </ol>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .service-card__title {
    font-size: var(--text-h2);
    font-weight: var(--weight-display);
    line-height: var(--leading-display);
    margin-bottom: var(--space-2xs);
  }
  .service-card__desc {
    font-size: var(--text-body);
    line-height: var(--leading-body);
    color: var(--color-muted-ink);
    margin-bottom: var(--space-sm);
  }
  .service-card__features { list-style: none; margin-bottom: var(--space-sm); }
  .service-card__features li {
    font-size: var(--text-body);
    padding: var(--space-2xs) 0;
    border-top: 1px solid var(--color-hairline);
    color: var(--color-ink);
    font-family: var(--font-body);
  }
  .step-num {
    font-family: var(--font-mono);
    font-size: var(--text-caption);
    color: var(--color-brand);
    width: 1.5rem;
    flex-shrink: 0;
    font-variant-numeric: tabular;
  }
  .service-card__process ol { list-style: none; }
  .service-card__process li {
    display: flex; align-items: baseline; gap: var(--space-2xs);
    font-size: var(--text-body); color: var(--color-muted-ink);
    padding: var(--space-3xs) 0;
    font-family: var(--font-body);
  }
</style>
