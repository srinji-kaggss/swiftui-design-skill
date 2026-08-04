<!-- Ported from lgwks PageLoadVeil.tsx -->
<script lang="ts">
  import { siteConfig } from '../data/content';
  let hidden = $state(false);

  $effect(() => {
    document.body.classList.add('page-load-lock');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeout = window.setTimeout(() => {
      document.body.classList.remove('page-load-lock');
      hidden = true;
    }, prefersReducedMotion ? 80 : 620);
    return () => { window.clearTimeout(timeout); document.body.classList.remove('page-load-lock'); };
  });
</script>

<div class="page-load-veil {hidden ? 'page-load-veil-hidden' : ''}" aria-hidden="true">
  <div class="page-load-bg"></div>
  <div class="page-load-logo-slot">
    <span class="page-load-logo">{siteConfig.name}</span>
  </div>
  <div class="page-load-menu-slot">
    <span class="page-load-dot">
      <span></span><span></span><span></span><span></span>
    </span>
  </div>
</div>
