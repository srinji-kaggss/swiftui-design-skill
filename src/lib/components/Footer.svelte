<!-- Afternow site-footer structure (sticky) -->
<script lang="ts">
  import { siteConfig } from '../data/content';
</script>

<footer class="site-footer">
  <div class="container">
    <div class="site-footer__bottom">
      <div class="site-footer__logo-socials">
        <span class="site-footer__logo">{siteConfig.name}</span>
        <p class="site-footer__copyright">© 2026 {siteConfig.name}. All rights reserved.</p>
      </div>
      <div class="site-footer__legal">
        <ul style="display: flex; gap: var(--spacing-tiny); list-style: none; padding: 0;">
          <li><a href="#work" class="is-style-tag">Work</a></li>
          <li><a href="#services" class="is-style-tag">Services</a></li>
          <li><a href="#team" class="is-style-tag">Team</a></li>
          <li><a href="#journal" class="is-style-tag">Journal</a></li>
          <li><a href="#contact" class="is-style-tag">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

<style>
  .site-footer__bottom {
    display: grid; gap: var(--spacing-small);
    grid-template-columns: 1fr;
  }
  @media (min-width: 992px) {
    .site-footer__bottom { grid-template-columns: repeat(12, 1fr); }
    .site-footer__bottom .site-footer__logo-socials { grid-column: span 7; }
    .site-footer__bottom .site-footer__legal { grid-column: span 5; }
  }
  .site-footer__logo {
    font-family: var(--font-secondary);
    font-size: var(--font-size-large);
    font-weight: 700;
    letter-spacing: -0.02em;
    display: block;
    margin-bottom: var(--spacing-tiny);
  }
  .site-footer__copyright {
    font-family: var(--font-mono);
    font-size: var(--font-size-x-small);
    color: var(--color-gray-400);
    opacity: 0.6;
  }
  .site-footer__legal ul { justify-content: flex-end; }
</style>
