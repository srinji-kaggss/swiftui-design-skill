<script lang="ts">
  import { founders } from '../data/content';
</script>

<section id="team" class="container">
  <div style="padding: var(--space-2xl) 0;">
    <div class="grid" style="margin-bottom: var(--space-xl);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>The team</span>
        <h2 class="section__headline" data-reveal>The people behind the work.</h2>
      </div>
    </div>
    <div class="grid grid-columns--2" style="gap: var(--grid-gap);">
      {#each founders as founder (founder.name)}
        <article class="lw-card lw-card--seam founder-card" data-reveal data-reveal-batch="true">
          <div class="founder-card__avatar">{founder.initials}</div>
          <div class="founder-card__info">
            <h3 class="founder-card__name">{founder.name}</h3>
            <span class="founder-card__role">{founder.role}</span>
            <p class="founder-card__bio">{founder.bio}</p>
            <div class="founder-card__socials">
              {#each founder.socials as social (social.label)}
                <a href={social.url} target="_blank" rel="noopener noreferrer" class="is-style-tag">{social.label}</a>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .founder-card { display: flex; gap: var(--space-sm); }
  .founder-card__avatar {
    width: 4rem; height: 4rem; flex-shrink: 0;
    background: var(--color-sunken); border-radius: var(--radius-tile);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-mono); font-size: var(--text-body);
    font-weight: var(--weight-medium); color: var(--color-brand);
    border: 1px solid var(--color-border);
  }
  .founder-card__name {
    font-size: var(--text-h3); font-weight: var(--weight-display);
    line-height: var(--leading-display);
    margin-bottom: 0.25em;
  }
  .founder-card__role {
    font-family: var(--font-mono); font-size: var(--text-caption);
    text-transform: uppercase; letter-spacing: var(--tracking-label);
    color: var(--color-brand); display: block; margin-bottom: var(--space-2xs);
  }
  .founder-card__bio {
    font-size: var(--text-body); color: var(--color-muted-ink);
    line-height: var(--leading-body); margin-bottom: var(--space-2xs);
    font-family: var(--font-body);
  }
  .founder-card__socials { display: flex; gap: var(--space-2xs); }
</style>
