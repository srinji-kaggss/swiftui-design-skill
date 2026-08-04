<!-- Afternow section structure + lgwks services data -->
<script lang="ts">
  import { services } from '../data/content';
</script>

<section id="services" class="container">
  <div style="padding: var(--spacing-x-large) 0;">
    <div class="grid" style="margin-bottom: var(--spacing-medium-large);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>What we do</span>
        <h2 class="section__headline" data-reveal>Capabilities built for the full arc of a product.</h2>
      </div>
    </div>
    <div class="grid grid-columns--3" style="gap: var(--spacing-x-small);">
      {#each services as service, i (service.slug)}
        <article class="service-card" data-reveal data-reveal-batch="true">
          <span class="service-card__eyebrow">{service.eyebrow}</span>
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
  .service-card {
    background: var(--color-gray-100);
    border-radius: var(--site-content-border-radius);
    padding: var(--spacing-small);
    margin-bottom: var(--spacing-x-small);
    transition: background 0.35s var(--default-transition-easing);
  }
  .service-card:hover { background: var(--color-gray-200); }
  .service-card__eyebrow {
    font-family: var(--font-mono);
    font-size: var(--font-size-x-small);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--color-gray-400);
    display: block;
    margin-bottom: var(--spacing-tiny);
  }
  .service-card__title {
    font-size: var(--font-size-h3);
    letter-spacing: var(--letter-spacing-h3);
    line-height: var(--line-height-h3);
    font-weight: 500;
    margin-bottom: var(--spacing-tiny);
  }
  .service-card__desc {
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
    color: var(--color-gray-400);
    margin-bottom: var(--spacing-small);
  }
  .service-card__features { list-style: none; margin-bottom: var(--spacing-small); }
  .service-card__features li {
    font-size: var(--font-size-base);
    padding: var(--spacing-tiny) 0;
    border-top: 1px solid var(--color-gray-300);
    color: var(--color-white);
  }
  .step-num {
    font-family: var(--font-mono);
    font-size: var(--font-size-x-small);
    color: var(--color-green);
    width: 1.5rem;
    flex-shrink: 0;
  }
  .service-card__process ol { list-style: none; }
  .service-card__process li {
    display: flex; align-items: baseline; gap: var(--spacing-tiny);
    font-size: var(--font-size-base); color: var(--color-gray-400);
    padding: var(--spacing-x-tiny) 0;
  }
</style>
