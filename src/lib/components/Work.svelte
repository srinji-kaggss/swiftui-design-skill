<script lang="ts">
  import { caseStudies } from '../data/content';
  import { scrollReveal } from '../actions/scroll';
</script>

<section id="work" class="work">
  <div class="container">
    <div class="section-header">
      <span class="section-number">02</span>
      <h2 class="section-title">Selected Work</h2>
    </div>
    <p class="section-intro">Work that moves the needle. Every engagement grounded in research, executed with craft.</p>
    <div class="case-list">
      {#each caseStudies as cs, i (cs.slug)}
        <article
          class="case"
          use:scrollReveal={{ parallax: 50, rotation: i % 2 === 0 ? -1 : 1, scale: [0.96, 1], threshold: 0.1 }}
        >
          <div class="case-header">
            <span class="case-num">{String(i + 1).padStart(2, '0')}</span>
            <div class="case-meta">
              <span class="case-category">{cs.category}</span>
              <span class="case-year">{cs.year}</span>
            </div>
          </div>
          <h3 class="case-client">{cs.client}</h3>
          <h4 class="case-title">{cs.title}</h4>
          <p class="case-body">{cs.body}</p>
          <details class="case-details">
            <summary>Read the case study</summary>
            <div class="case-detail-body">
              <div class="detail-block">
                <span class="detail-label">Challenge</span>
                <p>{cs.challenge}</p>
              </div>
              <div class="detail-block">
                <span class="detail-label">Approach</span>
                <p>{cs.solution}</p>
              </div>
              <div class="detail-block">
                <span class="detail-label">Outcome</span>
                <ul>
                  {#each cs.results as result (result)}
                    <li>{result}</li>
                  {/each}
                </ul>
              </div>
              {#if cs.testimonial}
                <blockquote class="testimonial">
                  <p>"{cs.testimonial}"</p>
                  <cite>— {cs.testimonialAttribution}</cite>
                </blockquote>
              {/if}
            </div>
          </details>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .work {
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

  .case-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  @media (min-width: 1024px) {
    .case-list { grid-template-columns: 1fr 1fr; }
  }

  .case {
    position: relative;
    background: var(--ink-2);
    border: 1px solid var(--paper-faint);
    padding: var(--space-8);
    overflow: hidden;
    transition: border-color var(--dur-base) var(--ease-default), background var(--dur-base) var(--ease-default);
  }

  .case:hover {
    border-color: var(--accent);
    background: var(--ink-3);
  }

  .case-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-6);
  }

  .case-num {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--paper-faint);
  }

  .case-meta {
    display: flex;
    gap: var(--space-4);
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
  }

  .case-category { color: var(--paper-dim); }
  .case-year { color: var(--paper-faint); }

  .case-client {
    font-family: var(--font-display);
    font-size: var(--fs-display-2);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
    margin-bottom: var(--space-2);
  }

  .case-title {
    font-family: var(--font-display);
    font-size: var(--fs-h5);
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: var(--paper-dim);
    margin-bottom: var(--space-4);
  }

  .case-body {
    font-size: var(--fs-base);
    color: var(--paper-dim);
    line-height: 1.55;
    margin-bottom: var(--space-6);
  }

  .case-details summary {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    cursor: pointer;
    user-select: none;
    padding: var(--space-2) 0;
    border-top: 1px solid var(--paper-faint);
  }

  .case-detail-body {
    padding-top: var(--space-6);
  }

  .detail-block {
    margin-bottom: var(--space-6);
  }

  .detail-label {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    display: block;
    margin-bottom: var(--space-2);
  }

  .detail-block p {
    font-size: var(--fs-base);
    color: var(--paper-dim);
    line-height: 1.6;
  }

  .detail-block ul {
    list-style: none;
    padding: 0;
  }

  .detail-block li {
    font-size: var(--fs-base);
    color: var(--paper);
    padding: var(--space-2) 0;
    border-bottom: 1px solid var(--paper-faint);
  }

  .testimonial {
    border-left: 2px solid var(--accent);
    padding-left: var(--space-6);
    margin-top: var(--space-8);
  }

  .testimonial p {
    font-family: var(--font-display);
    font-size: var(--fs-h6);
    font-style: italic;
    line-height: 1.4;
    color: var(--paper);
    margin-bottom: var(--space-3);
  }

  .testimonial cite {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--paper-dim);
    font-style: normal;
  }
</style>
