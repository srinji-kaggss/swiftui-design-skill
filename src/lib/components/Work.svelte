<script lang="ts">
  import { caseStudies } from '../data/content';
</script>

<section id="work" class="container">
  <div style="padding: var(--space-2xl) 0;">
    <div class="grid" style="margin-bottom: var(--space-xl);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>Selected work</span>
        <h2 class="section__headline" data-reveal>Work that moves the needle.</h2>
      </div>
    </div>
    <div class="home-work__grid">
      {#each caseStudies as cs, i (cs.slug)}
        <article class="archive-item-work" data-reveal data-reveal-batch="true" data-cursor data-cursor-text="View">
          <div class="archive-item-work__feat-media">
            <div class="work-media-placeholder" style="background: var(--color-sunken);">
              <span class="work-media-label">{cs.client}</span>
              <span class="work-media-tag">{cs.category}</span>
            </div>
          </div>
          <div class="archive-item-work__content">
            <div class="tag-list" style="margin-bottom: var(--space-xs)">
              <span>{cs.category}</span>
              <span>{cs.year}</span>
            </div>
            <h3 class="archive-item-work__title">{cs.client} — {cs.title}</h3>
            <p class="archive-item-work__description">{cs.body}</p>
            <details class="case-details">
              <summary class="btn btn--link btn--sm" style="margin-top: var(--space-2xs)">Read case study</summary>
              <div style="padding-top: var(--space-sm)">
                <div style="margin-bottom: var(--space-sm)">
                  <span class="is-style-eyebrow">Challenge</span>
                  <p style="color: var(--color-muted-ink); font-size: var(--text-body); line-height: var(--leading-body);">{cs.challenge}</p>
                </div>
                <div style="margin-bottom: var(--space-sm)">
                  <span class="is-style-eyebrow">Approach</span>
                  <p style="color: var(--color-muted-ink); font-size: var(--text-body); line-height: var(--leading-body);">{cs.solution}</p>
                </div>
                <div style="margin-bottom: var(--space-sm)">
                  <span class="is-style-eyebrow">Outcome</span>
                  <ul style="list-style: none; padding: 0;">
                    {#each cs.results as result (result)}
                      <li style="padding: var(--space-2xs) 0; border-top: 1px solid var(--color-hairline); color: var(--color-ink);">{result}</li>
                    {/each}
                  </ul>
                </div>
                {#if cs.testimonial}
                  <blockquote style="border-left: var(--rule-width) solid var(--color-brand); padding-left: var(--space-sm); margin-top: var(--space-sm);">
                    <p style="font-family: var(--font-display); font-size: var(--text-h3); font-weight: var(--weight-display); line-height: 1.4; color: var(--color-ink); margin-bottom: var(--space-2xs)">"{cs.testimonial}"</p>
                    <cite style="font-family: var(--font-mono); font-size: var(--text-caption); color: var(--color-muted-ink); font-style: normal;">— {cs.testimonialAttribution}</cite>
                  </blockquote>
                {/if}
              </div>
            </details>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .home-work__grid {
    display: grid; gap: var(--space-xl) var(--grid-gap);
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) { .home-work__grid { grid-template-columns: 1fr 1fr; } }

  .case-details summary { list-style: none; }
  .case-details summary::-webkit-details-marker { display: none; }
  .case-details[open] summary { margin-bottom: var(--space-2xs); }
</style>
