<script lang="ts">
  import { siteConfig } from '../data/content';
</script>

<section id="contact" class="container">
  <div style="padding: var(--spacing-x-large) 0;">
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
    font-size: var(--font-size-display-1);
    letter-spacing: var(--letter-spacing-display-1);
    line-height: var(--line-height-display-1);
    margin-bottom: var(--spacing-medium);
    max-width: 18ch;
  }
  .contact-body {
    font-size: var(--font-size-x-large);
    line-height: var(--line-height-x-large);
    color: var(--color-gray-400);
    max-width: 42rem;
    margin-bottom: var(--spacing-x-large);
  }
  .contact-links {
    display: flex; justify-content: space-between; align-items: flex-end;
    flex-wrap: wrap; gap: var(--spacing-medium);
  }
  .contact-email {
    font-family: var(--font-secondary);
    font-size: var(--font-size-display-2);
    font-weight: 600;
    letter-spacing: var(--letter-spacing-display-2);
    text-decoration: none; color: var(--color-white);
    transition: color 0.2s ease;
  }
  .contact-email:hover { color: var(--color-green); }
  .contact-meta { display: flex; flex-direction: column; gap: var(--spacing-small); }
  .contact-meta p { font-size: var(--font-size-small); color: var(--color-gray-400); line-height: 1.5; }
  .contact-meta strong {
    font-family: var(--font-mono); font-size: var(--font-size-x-small);
    text-transform: uppercase; letter-spacing: -0.02em;
    color: var(--color-green); font-weight: 500;
  }
  @media (max-width: 768px) {
    .contact-email { font-size: var(--font-size-h1); }
    .contact-links { flex-direction: column; align-items: flex-start; }
  }
</style>
