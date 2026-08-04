<!-- LWDS Footer: datum top-rule, mono, fr-CA badge -->
<script lang="ts">
  import { siteConfig } from '../data/content';
</script>

<footer class="site-footer">
  <div class="container">
    <div class="site-footer__inner">
      <div class="site-footer__left">
        <span class="site-footer__name">{siteConfig.name} · logicalworks.ca · Toronto, ON</span>
      </div>
      <div class="site-footer__right">
        <span class="is-style-tag">fr-CA disponible</span>
      </div>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    border-top: var(--rule-width) solid var(--color-accent-3);
    padding: var(--space-lg) 0;
    background: var(--color-bg);
  }
  .site-footer__inner {
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: var(--space-sm);
  }
  .site-footer__name {
    font-family: var(--font-mono);
    font-size: var(--text-caption);
    color: var(--color-muted-ink);
    letter-spacing: var(--tracking-label);
    text-transform: uppercase;
  }
  .site-footer__right { display: flex; gap: var(--space-2xs); }
</style>
