<!-- LWDS 4-beat world-build preloader: field → halves meet → word draws → settle -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { renderWordmark, worldBuild } from '../motion/engine';
  import { animate as motionAnimate, stagger } from 'motion';
  import { siteConfig } from '../data/content';

  let hidden = $state(false);
  let veilEl: HTMLDivElement;
  let fieldEl: SVGElement;
  let wrapEl: HTMLElement;
  let lobesEl: SVGElement;
  let lobeLEl: SVGElement;
  let lobeREl: SVGElement;
  let nodeEl: SVGElement;
  let wmSlot: HTMLElement;

  onMount(() => {
    document.body.classList.add('page-load-lock');

    const rnd = (() => { let h = 7; return () => (h = (h * 1103515245 + 12345) % 2147483648) / 2147483648; })();
    let d = '';
    for (let i = 0; i < 30; i++) {
      const x = 40 + rnd() * 1200, y = 30 + rnd() * 500, k = rnd();
      d += k < .45 ? `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 30 + rnd() * 60}"/>`
        : k < .8 ? `<line x1="${x}" y1="${y}" x2="${x + 30 + rnd() * 70}" y2="${y}"/>`
        : `<circle cx="${x}" cy="${y}" r="${14 + rnd() * 22}"/>`;
    }
    fieldEl.innerHTML = d;

    wmSlot.innerHTML = renderWordmark({ text: siteConfig.name, className: 'lw-wordmark', color: 'currentColor' });
    const svg = wmSlot.querySelector('svg')!;
    const strokes = Array.from(svg.querySelectorAll<SVGPathElement>('path[data-i]'));

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReduced ? 80 : 2200;

    worldBuild({
      field: fieldEl, wrap: wrapEl, lobes: lobesEl,
      lobeL: lobeLEl, lobeR: lobeREl, node: nodeEl, strokes
    }, { animate: motionAnimate, stagger });

    const timeout = window.setTimeout(() => {
      document.body.classList.remove('page-load-lock');
      hidden = true;

      if (veilEl) {
        if (prefersReduced) {
          veilEl.style.display = 'none';
          return;
        }
        // Safari has a bug where CSS transitions on fixed-position overlays
        // don't fire when nothing else on the page changes. The CSS class
        // approach produces a transition that runs but never actually
        // changes the computed opacity. We use WAAPI here because it
        // bypasses the CSS transition system entirely and animates on the
        // compositor. cancel() first to kill any CSS-transition-generated
        // animations that would fight us.
        veilEl.getAnimations().forEach(a => a.cancel());

        const anim = veilEl.animate(
          [
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(-1rem)' },
          ],
          { duration: 560, easing: 'cubic-bezier(.32,0,.16,1)', fill: 'forwards' }
        );
        anim.onfinish = () => {
          veilEl.style.visibility = 'hidden';
          veilEl.style.pointerEvents = 'none';
        };
      }
    }, duration);

    return () => { window.clearTimeout(timeout); document.body.classList.remove('page-load-lock'); };
  });
</script>

<div class="page-load-veil {hidden ? 'page-load-veil-hidden' : ''}" bind:this={veilEl} aria-hidden="true">
  <div class="page-load-stage">
    <svg class="page-load-field" bind:this={fieldEl} viewBox="0 0 1280 560"
      preserveAspectRatio="xMidYMid slice" fill="none"
      stroke="var(--color-border)" stroke-width="2" stroke-linecap="round"></svg>
    <div class="page-load-wrap" bind:this={wrapEl}>
      <svg bind:this={lobesEl} viewBox="0 0 120 120" fill="none" class="page-load-lobes">
        <path bind:this={lobeLEl} d="M60,18 H40 A34,34 0 0 0 40,86 H60 Z" fill="var(--color-ink)"/>
        <path bind:this={lobeREl} d="M60,34 H80 A34,34 0 0 1 80,102 H60 Z" fill="var(--color-brand)"/>
        <circle bind:this={nodeEl} cx="60" cy="60" r="5.5" fill="var(--color-bg)"/>
      </svg>
      <div class="page-load-wmslot" bind:this={wmSlot}></div>
    </div>
  </div>
</div>
