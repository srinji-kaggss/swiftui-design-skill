<script lang="ts">
  import { siteConfig } from '../data/content';
  import { letterTitle } from '../motion/engine';
</script>

<section id="contact" class="container">
  <div style="padding: var(--space-2xl) 0;">
    <div class="grid">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>Have a project?</span>
        <h2 class="contact-heading" use:letterTitle={45}>Let's collaborate on what matters to you.</h2>
        <p class="contact-body" data-reveal>
          Whether you have a defined project brief or are still working through
          the problem — the right time to talk to us is before you have all the
          answers. That is usually when we are most useful. Tell us where you are.
          We will tell you where we can take you.
        </p>
      </div>
    </div>
    <div class="contact-links" data-reveal>
      <a href={`mailto:${siteConfig.email}`} class="contact-email" data-cursor data-cursor-text="Email">{siteConfig.email}</a>
      <div class="contact-meta">
        <p><strong>Business</strong><br/>{siteConfig.email}</p>
        <p><strong>Press & Partnerships</strong><br/>{siteConfig.pressEmail}</p>
        <p><strong>Location</strong><br/>{siteConfig.location}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .contact-heading {
    font-size: var(--text-display-1);
    font-weight: var(--weight-display);
    line-height: var(--leading-display);
    margin-bottom: var(--space-md);
    max-width: 18ch;
  }
  .contact-body {
    font-size: var(--text-body);
    line-height: var(--leading-body);
    color: var(--color-muted-ink);
    max-width: 42rem;
    margin-bottom: var(--space-2xl);
    font-family: var(--font-body);
  }
  .contact-links {
    display: flex; justify-content: space-between; align-items: flex-end;
    flex-wrap: wrap; gap: var(--space-md);
  }
  .contact-email {
    font-family: var(--font-display);
    font-size: var(--text-display-2);
    font-weight: var(--weight-display);
    text-decoration: none; color: var(--color-ink);
    transition: color var(--duration-fast) var(--ease-standard);
  }
  .contact-email:hover { color: var(--color-brand); }
  .contact-meta { display: flex; flex-direction: column; gap: var(--space-sm); }
  .contact-meta p {
    font-size: var(--text-small); color: var(--color-muted-ink);
    line-height: 1.5; font-family: var(--font-body);
  }
  .contact-meta strong {
    font-family: var(--font-mono); font-size: var(--text-caption);
    text-transform: uppercase; letter-spacing: var(--tracking-label);
    color: var(--color-brand); font-weight: var(--weight-medium);
  }
  @media (max-width: 768px) {
    .contact-email { font-size: var(--text-h1); }
    .contact-links { flex-direction: column; align-items: flex-start; }
  }
</style>
