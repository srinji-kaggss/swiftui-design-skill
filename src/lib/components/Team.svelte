<script lang="ts">
  import { founders } from '../data/content';
  import { scrollReveal } from '../actions/scroll';
</script>

<section id="team" class="team">
  <div class="container">
    <div class="section-header">
      <span class="section-number">04</span>
      <h2 class="section-title">The Team</h2>
    </div>
    <div class="founders-grid">
      {#each founders as founder, i (founder.name)}
        <article
          class="founder"
          use:scrollReveal={{ parallax: 35, rotation: i === 0 ? -1 : 1, threshold: 0.15 }}
        >
          <div class="founder-avatar" style="--accent-hue: {i === 0 ? 'var(--echo-1)' : 'var(--echo-3)'}">
            <span>{founder.initials}</span>
          </div>
          <div class="founder-info">
            <h3 class="founder-name">{founder.name}</h3>
            <span class="founder-role">{founder.role}</span>
            <p class="founder-bio">{founder.bio}</p>
            <div class="founder-socials">
              {#each founder.socials as social (social.label)}
                <a href={social.url} target="_blank" rel="noopener noreferrer">{social.label}</a>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .team {
    padding: var(--space-section-y) 0;
    border-top: 1px solid var(--paper-faint);
  }

  .container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-gutter);
  }

  .founders-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  @media (min-width: 768px) {
    .founders-grid { grid-template-columns: 1fr 1fr; }
  }

  .founder {
    display: flex;
    gap: var(--space-6);
    background: var(--ink-2);
    border: 1px solid var(--paper-faint);
    padding: var(--space-8);
    transition: border-color var(--dur-base) var(--ease-default);
  }

  .founder:hover { border-color: var(--accent); }

  .founder-avatar {
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    background: var(--ink-3);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--accent-hue, var(--accent));
  }

  .founder-avatar span {
    font-family: var(--font-mono);
    font-size: var(--fs-lg);
    font-weight: 700;
    color: var(--accent);
    letter-spacing: -0.02em;
  }

  .founder-name {
    font-family: var(--font-display);
    font-size: var(--fs-h5);
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-1);
  }

  .founder-role {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    display: block;
    margin-bottom: var(--space-4);
  }

  .founder-bio {
    font-size: var(--fs-base);
    color: var(--paper-dim);
    line-height: 1.55;
    margin-bottom: var(--space-4);
  }

  .founder-socials {
    display: flex;
    gap: var(--space-4);
  }

  .founder-socials a {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--paper-dim);
    text-decoration: none;
    transition: color var(--dur-fast) var(--ease-default);
  }

  .founder-socials a:hover { color: var(--accent); }
</style>
