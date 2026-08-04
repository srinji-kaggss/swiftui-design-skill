<script lang="ts">
  import { siteConfig } from '../data/content';
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="footer-mark">◆</span>
      <span class="footer-name">{siteConfig.name}</span>
    </div>
    <div class="footer-links">
      <a href="#work">Work</a>
      <a href="#services">Services</a>
      <a href="#journal">Journal</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="footer-meta">
      <p>{siteConfig.location}</p>
      <p class="footer-copy">© 2026 {siteConfig.name}. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--paper-faint);
    padding: var(--space-16) var(--container-gutter);
    max-width: var(--container-max);
    margin: 0 auto;
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-8);
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .footer-mark {
    color: var(--accent);
    font-size: 1.25rem;
  }

  .footer-name {
    font-family: var(--font-display);
    font-size: var(--fs-lg);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .footer-links {
    display: flex;
    gap: var(--space-8);
  }

  .footer-links a {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--paper-dim);
    text-decoration: none;
    transition: color var(--dur-fast) var(--ease-default);
  }

  .footer-links a:hover { color: var(--accent); }

  .footer-meta {
    text-align: right;
    font-size: var(--fs-xs);
    font-family: var(--font-mono);
    color: var(--paper-faint);
    line-height: 1.8;
  }

  .footer-copy { color: var(--paper-faint); }

  @media (max-width: 640px) {
    .footer-inner { flex-direction: column; align-items: flex-start; }
    .footer-meta { text-align: left; }
  }
</style>
