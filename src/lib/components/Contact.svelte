<script lang="ts">
  import { siteConfig } from '../data/content';
  import { lineReveal } from '../actions/scroll';
</script>

<section id="contact" class="contact">
  <div class="container">
    <span class="eyebrow">Have a project?</span>
    <h2 class="heading" use:lineReveal={0.1}>Let's collaborate on what matters to you.</h2>
    <p class="body">
      Whether you have a defined project brief or are still working through
      the problem — the right time to talk to us is before you have all the
      answers. That is usually when we are most useful. Tell us where you are.
      We will tell you where we can take you.
    </p>
    <div class="contact-links">
      <a href={`mailto:${siteConfig.email}`} class="contact-email">{siteConfig.email}</a>
      <div class="contact-meta">
        <p><strong>Business</strong><br/>{siteConfig.email}</p>
        <p><strong>Press & Partnerships</strong><br/>{siteConfig.pressEmail}</p>
        <p><strong>Location</strong><br/>{siteConfig.location}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: var(--space-section-y) 0;
    border-top: 1px solid var(--paper-faint);
  }

  .container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-gutter);
  }

  .heading {
    font-family: var(--font-display);
    font-size: var(--fs-display);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.05;
    margin-bottom: var(--space-8);
    text-wrap: pretty;
    max-width: 18ch;
  }

  .heading :global(span) { display: inline-block; }

  .body {
    font-size: var(--fs-xl);
    color: var(--paper-dim);
    line-height: 1.5;
    max-width: 42rem;
    margin-bottom: var(--space-24);
  }

  .contact-links {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: var(--space-12);
  }

  .contact-email {
    font-family: var(--font-display);
    font-size: var(--fs-display-2);
    font-weight: 700;
    letter-spacing: -0.04em;
    text-decoration: none;
    color: var(--paper);
    transition: color var(--dur-fast) var(--ease-default);
  }

  .contact-email:hover { color: var(--accent); }

  .contact-meta {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .contact-meta p {
    font-size: var(--fs-sm);
    color: var(--paper-dim);
    line-height: 1.5;
  }

  .contact-meta strong {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .contact-email { font-size: var(--fs-h1); }
    .contact-links { flex-direction: column; align-items: flex-start; }
  }
</style>
