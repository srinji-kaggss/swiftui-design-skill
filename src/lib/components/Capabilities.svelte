<script lang="ts">
  import { services } from '../data/content';
  import { scrollReveal } from '../actions/scroll';
</script>

<section id="services" class="capabilities">
  <div class="container">
    <div class="section-header">
      <span class="section-number">01</span>
      <h2 class="section-title">Capabilities</h2>
    </div>
    <p class="section-intro">Five practices. One integrated team. No handoffs between agencies that don't know each other's work.</p>
    <div class="services-grid">
      {#each services as service, i (service.slug)}
        <article
          class="service"
          use:scrollReveal={{ parallax: 40, rotation: i % 2 === 0 ? -0.8 : 0.8, threshold: 0.1 }}
        >
          <span class="service-eyebrow">{service.eyebrow}</span>
          <h3 class="service-title">{service.title}</h3>
          <p class="service-desc">{service.description}</p>
          <ul class="service-features">
            {#each service.features as feature (feature)}
              <li>{feature}</li>
            {/each}
          </ul>
          <div class="service-process">
            <span class="process-label">Process</span>
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
  .capabilities {
    padding: var(--space-section-y) 0;
    border-top: 1px solid var(--paper-faint);
  }

  .container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-gutter);
  }

  .section-intro {
    font-size: var(--fs-xl);
    color: var(--paper-dim);
    max-width: 42rem;
    margin-bottom: var(--space-24);
    line-height: 1.5;
  }

  .services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  @media (min-width: 768px) {
    .services-grid { grid-template-columns: 1fr 1fr; }
  }

  .service {
    position: relative;
    background: var(--ink-2);
    border: 1px solid var(--paper-faint);
    padding: var(--space-10) var(--space-8);
    transition: border-color var(--dur-base) var(--ease-default), background var(--dur-base) var(--ease-default);
  }

  .service:hover {
    border-color: var(--accent);
    background: var(--ink-3);
  }

  .service-eyebrow {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--paper-dim);
    display: block;
    margin-bottom: var(--space-2);
  }

  .service-title {
    font-family: var(--font-display);
    font-size: var(--fs-h3);
    font-weight: 600;
    letter-spacing: -0.03em;
    margin-bottom: var(--space-4);
  }

  .service-desc {
    font-size: var(--fs-lg);
    color: var(--paper-dim);
    line-height: 1.55;
    margin-bottom: var(--space-8);
  }

  .service-features {
    list-style: none;
    margin-bottom: var(--space-10);
  }

  .service-features li {
    font-size: var(--fs-base);
    color: var(--paper);
    padding: var(--space-2) 0;
    border-bottom: 1px solid var(--paper-faint);
  }

  .service-features li:last-child { border-bottom: none; }

  .process-label {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    display: block;
    margin-bottom: var(--space-4);
  }

  .service-process ol { list-style: none; counter-reset: none; }

  .service-process li {
    display: flex;
    align-items: baseline;
    gap: var(--space-3);
    font-size: var(--fs-base);
    color: var(--paper-dim);
    padding: var(--space-1) 0;
  }

  .step-num {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--accent);
    flex-shrink: 0;
    width: 1.5rem;
  }
</style>
