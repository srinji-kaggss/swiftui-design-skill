<!-- Afternow archive-item-work structure + lgwks case data -->
<script lang="ts">
  import { caseStudies } from '../data/content';
</script>

<section id="work" class="container">
  <div style="padding: var(--spacing-x-large) 0;">
    <div class="grid" style="margin-bottom: var(--spacing-medium-large);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>Selected work</span>
        <h2 class="section__headline" data-reveal>Work that moves the needle.</h2>
      </div>
    </div>
    <div class="home-work__grid">
      {#each caseStudies as cs, i (cs.slug)}
        <article class="archive-item-work" data-reveal data-reveal-batch="true" data-cursor data-cursor-text="View">
          <div class="archive-item-work__feat-media">
            <div class="work-media-placeholder" style="background: hsl({i * 45}, 20%, 14%);">
              <span class="work-media-label">{cs.client}</span>
              <span class="work-media-tag">{cs.category}</span>
            </div>
          </div>
          <div class="archive-item-work__content">
            <div class="tag-list" style="margin-bottom: var(--spacing-3-x-small)">
              <span>{cs.category}</span>
              <span>{cs.year}</span>
            </div>
            <h3 class="archive-item-work__title">{cs.client} — {cs.title}</h3>
            <p class="archive-item-work__description">{cs.body}</p>
            <details class="case-details">
              <summary class="btn btn--link btn-sm" style="margin-top: var(--spacing-tiny)">Read case study</summary>
              <div style="padding-top: var(--spacing-small)">
                <div style="margin-bottom: var(--spacing-small)">
                  <span class="is-style-eyebrow">Challenge</span>
                  <p style="color: var(--color-gray-400); font-size: var(--font-size-base); line-height: 1.6;">{cs.challenge}</p>
                </div>
                <div style="margin-bottom: var(--spacing-small)">
                  <span class="is-style-eyebrow">Approach</span>
                  <p style="color: var(--color-gray-400); font-size: var(--font-size-base); line-height: 1.6;">{cs.solution}</p>
                </div>
                <div style="margin-bottom: var(--spacing-small)">
                  <span class="is-style-eyebrow">Outcome</span>
                  <ul style="list-style: none; padding: 0;">
                    {#each cs.results as result (result)}
                      <li style="padding: 0.5rem 0; border-top: 1px solid var(--color-gray-300); color: var(--color-white);">{result}</li>
                    {/each}
                  </ul>
                </div>
                {#if cs.testimonial}
                  <blockquote style="border-left: 2px solid var(--color-green); padding-left: var(--spacing-small); margin-top: var(--spacing-small);">
                    <p style="font-family: var(--font-secondary); font-size: var(--font-size-h6); font-style: italic; line-height: 1.4; color: var(--color-white); margin-bottom: var(--spacing-tiny)">"{cs.testimonial}"</p>
                    <cite style="font-family: var(--font-mono); font-size: var(--font-size-x-small); color: var(--color-gray-400); font-style: normal;">— {cs.testimonialAttribution}</cite>
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
    display: grid; gap: var(--spacing-large) var(--spacing-x-small);
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) { .home-work__grid { grid-template-columns: 1fr 1fr; } }

  /* FIX: parent had display:flex but child had no width — collapsed to 0 */
  .archive-item-work__feat-media {
    border-radius: 0.75rem;
    display: block;          /* changed from flex to block */
    overflow: hidden;
    position: relative;
    margin-bottom: var(--spacing-3-x-small);
  }

  /* FIX: added width:100% so it fills parent, aspect-ratio gives height */
  .work-media-placeholder {
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 0.75rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: var(--spacing-small);
    position: relative;
    transition: transform 0.2s linear;
  }
  .archive-item-work:hover .work-media-placeholder { transform: scale(1.05); }

  .work-media-label {
    font-family: var(--font-secondary);
    font-size: var(--font-size-h4);
    font-weight: 500;
    letter-spacing: var(--letter-spacing-h4);
    line-height: var(--line-height-h4);
    color: var(--color-white);
    z-index: 1;
  }
  .work-media-tag {
    font-family: var(--font-mono);
    font-size: var(--font-size-x-small);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: var(--color-gray-400);
    z-index: 1;
  }

  .case-details summary { list-style: none; }
  .case-details summary::-webkit-details-marker { display: none; }
  .case-details[open] summary { margin-bottom: var(--spacing-tiny); }
</style>
