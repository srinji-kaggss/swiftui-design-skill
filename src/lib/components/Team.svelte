<script lang="ts">
  import { founders } from '../data/content';
</script>

<section id="team" class="container">
  <div style="padding: var(--spacing-x-large) 0;">
    <div class="grid" style="margin-bottom: var(--spacing-medium-large);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>The team</span>
        <h2 class="section__headline" data-reveal>The people behind the work.</h2>
      </div>
    </div>
    <div class="grid grid-columns--2" style="gap: var(--spacing-x-small);">
      {#each founders as founder, i (founder.name)}
        <article class="founder-card" data-reveal data-reveal-batch="true">
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
  .founder-card {
    display: flex; gap: var(--spacing-small);
    background: var(--color-gray-100);
    border-radius: var(--site-content-border-radius);
    padding: var(--spacing-small);
    margin-bottom: var(--spacing-x-small);
  }
  .founder-card__avatar {
    width: 4rem; height: 4rem; flex-shrink: 0;
    background: var(--color-gray-200); border-radius: 0.5rem;
    display: flex; align-items: center; justify-content: center;
    border: 1px solid var(--color-green);
    font-family: var(--font-mono); font-size: var(--font-size-large);
    font-weight: 700; color: var(--color-green); letter-spacing: -0.02em;
  }
  .founder-card__name {
    font-size: var(--font-size-h5); font-weight: 500;
    letter-spacing: var(--letter-spacing-h5); line-height: var(--line-height-h5);
    margin-bottom: 0.25em;
  }
  .founder-card__role {
    font-family: var(--font-mono); font-size: var(--font-size-x-small);
    text-transform: uppercase; letter-spacing: -0.02em;
    color: var(--color-green); display: block; margin-bottom: var(--spacing-tiny);
  }
  .founder-card__bio {
    font-size: var(--font-size-base); color: var(--color-gray-400);
    line-height: 1.55; margin-bottom: var(--spacing-tiny);
  }
  .founder-card__socials { display: flex; gap: var(--spacing-tiny); }
</style>
