<!-- LWDS Footer — expanded: link columns, newsletter, language switcher, legal links -->
<script lang="ts">
  import { useLocale } from '../i18n/context.svelte';
  import { siteConfig } from '../data/content';

  const locale = useLocale();
  const footer = $derived(locale.dict.footer);

  let email = $state('');
  let submitted = $state(false);

  function onSubscribe(e: Event) {
    e.preventDefault();
    if (!email.trim()) return;
    submitted = true;
    email = '';
  }
</script>

<footer class="site-footer">
  <div class="container">
    <!-- Newsletter -->
    <div class="site-footer__newsletter" data-reveal>
      <div class="site-footer__newsletter-copy">
        <span class="is-style-eyebrow">{footer.newsletterEyebrow}</span>
        <p class="site-footer__newsletter-title">{footer.newsletterTitle}</p>
      </div>
      <form class="site-footer__newsletter-form" onsubmit={onSubscribe}>
        <label for="footer-email" class="visually-hidden" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);">Email address</label>
        <input id="footer-email" type="email" required placeholder={footer.newsletterPlaceholder}
          bind:value={email} class="site-footer__email-input" />
        <button type="submit" class="btn btn--primary btn--sm">{footer.newsletterCta}</button>
        {#if submitted}
          <p class="site-footer__newsletter-status" role="status">{footer.newsletterSubmittedMessage}</p>
        {/if}
      </form>
    </div>

    <!-- Link columns + brand -->
    <div class="site-footer__columns" data-reveal>
      <div class="site-footer__brand-col">
        <p class="site-footer__wordmark">{footer.wordmark}</p>
        <p class="site-footer__tagline">{footer.tagline}</p>
      </div>
      {#each footer.columns as col}
        <nav class="site-footer__col" aria-label={col.title}>
          <p class="site-footer__col-heading">{col.title}</p>
          <ul>
            {#each col.links as link}
              <li><a href={link.href}>{link.label}</a></li>
            {/each}
          </ul>
        </nav>
      {/each}
    </div>

    <!-- Legal bar -->
    <div class="site-footer__legal-bar" data-reveal>
      <nav class="site-footer__legal-menu">
        <ul>
          {#each footer.legalLinks as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </nav>
      <div class="site-footer__legal-right">
        <button class="site-footer__lang-toggle" onclick={() => locale.toggle()}
          aria-label="Toggle language">
          {footer.languageLabel}
        </button>
        <span class="site-footer__copyright">{footer.copyright}</span>
      </div>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    border-top: var(--rule-width) solid var(--color-accent-3);
    padding: var(--space-xl) 0 var(--space-lg);
    background: var(--color-bg);
  }

  .site-footer__newsletter {
    display: flex; flex-wrap: wrap; justify-content: space-between;
    align-items: center; gap: var(--space-md);
    padding-bottom: var(--space-xl);
    border-bottom: 1px solid var(--color-hairline);
    margin-bottom: var(--space-lg);
  }
  .site-footer__newsletter-copy { max-width: 40ch; }
  .site-footer__newsletter-title {
    font-family: var(--font-display); font-size: var(--text-h2);
    font-weight: var(--weight-display); line-height: var(--leading-display);
  }
  .site-footer__newsletter-form {
    display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2xs);
  }
  .site-footer__email-input {
    background: var(--color-surface); border: 1px solid var(--color-border);
    border-radius: var(--radius-control); color: var(--color-ink);
    font-family: var(--font-mono); font-size: var(--text-small);
    padding: 0.5rem 0.75rem; min-height: 2rem; min-width: 200px;
  }
  .site-footer__email-input:focus { outline: 2px solid var(--color-focus-ring); outline-offset: 1px; }
  .site-footer__newsletter-status {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-muted-ink); width: 100%; margin-top: var(--space-2xs);
  }

  .site-footer__columns {
    display: grid; grid-template-columns: 2fr 1fr 1fr;
    gap: var(--space-lg); padding-bottom: var(--space-lg);
    border-bottom: 1px solid var(--color-hairline); margin-bottom: var(--space-md);
  }
  @media (max-width: 768px) {
    .site-footer__columns { grid-template-columns: 1fr; gap: var(--space-md); }
  }

  .site-footer__wordmark {
    font-family: var(--font-display); font-size: var(--text-h2);
    font-weight: var(--weight-display); line-height: var(--leading-display);
  }
  .site-footer__tagline {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-muted-ink); letter-spacing: var(--tracking-label);
    text-transform: uppercase; margin-top: var(--space-2xs); max-width: 30ch;
  }

  .site-footer__col-heading {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-muted-ink); letter-spacing: var(--tracking-label);
    text-transform: uppercase; margin-bottom: var(--space-xs);
  }
  .site-footer__col ul { list-style: none; padding: 0; }
  .site-footer__col li { margin-bottom: var(--space-2xs); }
  .site-footer__col a {
    font-size: var(--text-small); text-decoration: none;
    color: var(--color-ink); transition: color var(--duration-fast) var(--ease-standard);
  }
  .site-footer__col a:hover { color: var(--color-brand); }

  .site-footer__legal-bar {
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: var(--space-sm);
  }
  .site-footer__legal-menu ul { list-style: none; display: flex; gap: var(--space-sm); padding: 0; flex-wrap: wrap; }
  .site-footer__legal-menu a {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-muted-ink); text-decoration: none;
    letter-spacing: var(--tracking-label); text-transform: uppercase;
    transition: color var(--duration-fast) var(--ease-standard);
  }
  .site-footer__legal-menu a:hover { color: var(--color-brand); }

  .site-footer__legal-right { display: flex; align-items: center; gap: var(--space-sm); flex-wrap: wrap; }
  .site-footer__lang-toggle {
    background: var(--color-surface); border: 1px solid var(--color-border);
    border-radius: var(--radius-control); color: var(--color-ink);
    font-family: var(--font-mono); font-size: var(--text-caption);
    letter-spacing: var(--tracking-label); text-transform: uppercase;
    padding: 0.4em 0.8em; cursor: pointer;
    transition: border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard);
  }
  .site-footer__lang-toggle:hover { border-color: var(--color-brand); color: var(--color-brand); }

  .site-footer__copyright {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-muted-ink); letter-spacing: var(--tracking-label);
    text-transform: uppercase;
  }
</style>
