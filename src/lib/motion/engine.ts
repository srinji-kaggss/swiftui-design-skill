/**
 * Logical Works — Motion Engine
 *
 * A proper motion engine powering all animation on the site through Svelte actions.
 * Built on Motion One (motion@10, ~5kb gzipped) — the same engine the LWDS uses
 * for the wordmark build. Single runtime dependency. Framework-agnostic.
 *
 * Exports Svelte actions (use:action) and standalone functions. Every action
 * respects prefers-reduced-motion (drops to opacity-only or final frame).
 *
 * Animation timing pulled from LWDS motion.css tokens:
 *   --ease-standard  cubic-bezier(.32,0,.16,1) at 320ms — everything by default
 *   --ease-seam      cubic-bezier(.22,1,.28,1)         — arrivals, wordmark build
 *   --ease-exit      cubic-bezier(.4,0,1,1)            — leaving only
 *
 * No bounce, no overshoot. Things arrive and settle.
 */

import { animate as motionAnimate, inView, scroll, stagger } from 'motion';

const EASE = [0.32, 0, 0.16, 1] as [number, number, number, number];
const EASE_SEAM = [0.22, 1, 0.28, 1] as [number, number, number, number];

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ═══════════════════════════════════════════════════════════════
   1. SCROLL REVEAL
   Replaces the hand-rolled IntersectionObserver. Uses Motion One's inView().
   Finds all [data-reveal] descendants and animates them in when visible.
   ═══════════════════════════════════════════════════════════════ */

export function scrollRevealAll(node: HTMLElement) {
  const elements = Array.from(node.querySelectorAll<HTMLElement>('[data-reveal]'));

  if (prefersReducedMotion()) {
    elements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return { destroy() {} };
  }

  // Set initial state via CSS-compatible inline styles
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity var(--duration-reveal) var(--ease-deliberate), transform var(--duration-reveal) var(--ease-deliberate)`;
  });

  const cleanups: (() => void)[] = [];

  elements.forEach(el => {
    const batch = el.dataset.revealBatch === 'true';
    let delay = 0;
    if (batch) {
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll<HTMLElement>('[data-reveal]'));
        const index = siblings.indexOf(el);
        delay = index * 80; // --stagger-step
      }
    }
    const delayAttr = el.dataset.revealDelay;
    if (delayAttr) delay += parseInt(delayAttr, 10) || 0;

    const cleanup = inView(el, () => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      // Return nothing — inView unobserves this element after first reveal
    }, { margin: '-10% 0px -10% 0px' });

    // Apply delay via transition-delay
    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`;
    }

    if (typeof cleanup === 'function') cleanups.push(cleanup);
  });

  return {
    destroy() {
      cleanups.forEach(fn => { try { fn(); } catch {} });
    }
  };
}

/* ═══════════════════════════════════════════════════════════════
   2. ECHO LAYERS — velocity-reactive parallax behind hero
   Uses Motion One's scroll() for velocity tracking (built-in).
   ═══════════════════════════════════════════════════════════════ */

export function echoLayers(node: HTMLElement, options?: {
  colors?: string[];
  intensity?: number;
}) {
  const reduced = prefersReducedMotion();
  const colors = options?.colors ?? ['var(--clay-500)', 'var(--smoke-500)', 'var(--sage-500)'];
  const intensity = options?.intensity ?? 1;

  const layers: HTMLElement[] = [];
  for (let i = 0; i < colors.length; i++) {
    const layer = document.createElement('span');
    layer.className = 'echo__layer';
    layer.style.setProperty('--echo-color', colors[i]);
    node.insertBefore(layer, node.firstChild);
    layers.push(layer);
  }

  if (reduced) {
    layers.forEach((l, i) => {
      l.style.opacity = String(0.15 - i * 0.03);
      l.style.transform = `translateX(${(i + 1) * 12}px) translateY(${(i + 1) * 12}px)`;
    });
    return { destroy() {} };
  }

  let lastVelocity = 0;
  let rafId = 0;
  let pendingVelocity = 0;

  function applyTransforms(velocity: number) {
    const absV = Math.min(Math.abs(velocity) / 8000, 0.25);
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = (vh - rect.top) / (vh + rect.height);
    const parallax = (0.5 - Math.max(0, Math.min(1, progress))) * 28 * intensity;

    layers.forEach((layer, i) => {
      const depth = (i + 1) * 0.6;
      const scale = 1 + absV * depth;
      const drift = (i + 1) * 10 * intensity + parallax * (i + 1);
      layer.style.transform = `translate3d(${drift}px, ${drift}px, 0) scale(${scale})`;
      layer.style.opacity = String(0.25 - i * 0.05);
    });
  }

  const cleanup = scroll((info: { y: { velocity: number } }) => {
    pendingVelocity = info.y.velocity;
    if (rafId === 0) {
      rafId = requestAnimationFrame(() => {
        // Smooth velocity (exponential decay)
        lastVelocity = lastVelocity * 0.85 + pendingVelocity * 0.15;
        applyTransforms(lastVelocity);
        rafId = 0;
      });
    }
  });

  // Initial state
  applyTransforms(0);

  return {
    destroy() {
      if (cleanup) cleanup();
      if (rafId) cancelAnimationFrame(rafId);
    }
  };
}

/* ═══════════════════════════════════════════════════════════════
   3. LETTER TITLE — letter-by-letter stagger reveal
   Uses Motion One animate() with stagger. The LWDS way.
   ═══════════════════════════════════════════════════════════════ */

export function letterTitle(node: HTMLElement, staggerMs: number = 45) {
  const reduced = prefersReducedMotion();
  const text = node.textContent ?? '';
  const words = text.trim().split(/\s+/);

  node.innerHTML = '';
  node.setAttribute('aria-label', text);

  if (reduced) {
    node.textContent = text;
    return { destroy() {} };
  }

  const wrap = document.createElement('span');
  wrap.setAttribute('aria-hidden', 'true');
  wrap.style.display = 'inline';

  const letterSpans: HTMLElement[] = [];
  let letterIndex = 0;

  words.forEach((word, wi) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'letter-hero-word';
    wordSpan.style.display = 'inline-block';
    wordSpan.style.whiteSpace = 'nowrap';

    word.split('').forEach(letter => {
      const ls = document.createElement('span');
      ls.className = 'letter-hero-letter';
      ls.textContent = letter;
      ls.style.display = 'inline-block';
      ls.style.willChange = 'transform, opacity';
      wordSpan.appendChild(ls);
      letterSpans.push(ls);
      letterIndex++;
    });

    if (wi < words.length - 1) {
      wordSpan.style.marginRight = '0.25em';
    }
    wrap.appendChild(wordSpan);
  });

  node.appendChild(wrap);

  // Set initial state
  letterSpans.forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(100%)';
  });

  let playback: AnimationPlayback | undefined;
  let cleanup: (() => void) | undefined;

  cleanup = inView(node, () => {
    playback = motionAnimate(
      letterSpans,
      { opacity: [0, 1], transform: ['translateY(100%)', 'translateY(0%)'] },
      { duration: 0.52, delay: stagger(staggerMs / 1000), easing: EASE_SEAM }
    );
    return () => { playback?.cancel(); };
  }) as (() => void) | undefined;

  return {
    destroy() {
      if (cleanup) cleanup();
      playback?.cancel();
    }
  };
}

/* ═══════════════════════════════════════════════════════════════
   4. FLOATING PARALLAX — decorative floating shapes on scroll
   ═══════════════════════════════════════════════════════════════ */

export interface FloatingIconConfig {
  x: string; y: string; s: number; r: number; bg: string; speed: number; rot: number;
}

export function floatingParallax(node: HTMLElement, icons: FloatingIconConfig[]) {
  const reduced = prefersReducedMotion();
  if (reduced) return { destroy() {} };

  const refs: (HTMLDivElement | null)[] = [];

  icons.forEach((icon, i) => {
    const el = document.createElement('div');
    el.className = 'floating-icon';
    el.style.left = icon.x;
    el.style.top = icon.y;
    el.style.width = `${icon.s}px`;
    el.style.height = `${icon.s}px`;
    el.style.borderRadius = `${icon.r}px`;
    el.style.background = icon.bg;
    node.appendChild(el);
    refs[i] = el;
  });

  let rafId = 0;
  let lastScrollY = window.scrollY;

  function applyParallax() {
    const scrollY = window.scrollY;
    const velocity = scrollY - lastScrollY;
    lastScrollY = scrollY;

    refs.forEach((el, i) => {
      const icon = icons[i];
      if (el && icon) {
        const drift = scrollY * icon.speed;
        const rotAmount = Math.min(Math.abs(velocity) * 0.35, 14) * icon.rot * Math.sign(velocity || 1);
        el.style.transform = `translate3d(0, ${drift}px, 0) rotate(${rotAmount}deg)`;
      }
    });
    rafId = 0;
  }

  function onScroll() {
    if (rafId === 0) {
      rafId = requestAnimationFrame(applyParallax);
    }
  }

  const cleanup = scroll(onScroll);
  applyParallax();

  return {
    destroy() {
      if (cleanup) cleanup();
      if (rafId) cancelAnimationFrame(rafId);
    }
  };
}

/* ═══════════════════════════════════════════════════════════════
   5. BURST TRIGGER — expand rings on scroll into view
   ═══════════════════════════════════════════════════════════════ */

export function burstTrigger(node: HTMLElement) {
  const reduced = prefersReducedMotion();
  if (reduced) return { destroy() {} };

  let cleanup: (() => void) | undefined;

  cleanup = inView(node, () => {
    node.classList.add('burst-active');
    const timer = setTimeout(() => node.classList.remove('burst-active'), 1000);
    // No return — unobserve after first trigger
  }, { margin: '-20%' }) as (() => void) | undefined;

  return { destroy() { if (cleanup) cleanup(); } };
}

/* ═══════════════════════════════════════════════════════════════
   6. HERO PIN REVEAL — scroll-driven clip-path reveal
   Uses Motion One's scroll() with progress mapping.
   ═══════════════════════════════════════════════════════════════ */

export function heroPinReveal(node: HTMLElement) {
  const reduced = prefersReducedMotion();
  if (reduced) {
    node.style.clipPath = 'inset(0)';
    return { destroy() {} };
  }

  node.style.clipPath = 'inset(50% round 20px)';
  node.style.transform = 'scale(0.965)';
  node.style.willChange = 'clip-path, transform';

  let rafId = 0;

  function update() {
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / (rect.height || 1)));
    const clipInset = Math.max(0, 50 - progress * 50);
    const scaleVal = 0.965 + progress * 0.035;
    node.style.clipPath = `inset(${clipInset}% round 20px)`;
    node.style.transform = `scale(${scaleVal})`;
    rafId = 0;
  }

  function onScroll() {
    if (rafId === 0) {
      rafId = requestAnimationFrame(update);
    }
  }

  const cleanup = scroll(onScroll);
  update();

  return {
    destroy() {
      if (cleanup) cleanup();
      if (rafId) cancelAnimationFrame(rafId);
    }
  };
}

/* ═══════════════════════════════════════════════════════════════
   7. WORLD BUILD — the 4-beat signature identity animation
   Drives the preloader: field of strokes → halves meet → word
   draws → settle. Uses Motion One animate + stagger.

   This is a standalone function (not a Svelte action) called from
   the Preloader component.
   ═══════════════════════════════════════════════════════════════ */

export async function worldBuild(scope: {
  field: SVGElement;
  wrap: HTMLElement;
  lobes: SVGElement;
  lobeL: SVGElement;
  lobeR: SVGElement;
  node: SVGElement;
  strokes: SVGPathElement[];
}, video?: { animate: typeof motionAnimate; stagger: typeof stagger }) {
  const { field, wrap, lobes, lobeL, lobeR, node: nodeDot, strokes } = scope;
  const reduce = prefersReducedMotion();

  // Set initial states
  strokes.forEach(p => {
    const L = p.getTotalLength();
    p.style.strokeDasharray = String(L);
    p.style.strokeDashoffset = String(L);
  });

  if (reduce) {
    strokes.forEach(p => { p.style.strokeDashoffset = '0'; });
    wrap.style.opacity = '1';
    lobes.style.opacity = '1';
    field.style.opacity = '0.35';
    return;
  }

  const parts = Array.from(field.children) as SVGElement[];
  parts.forEach(p => { p.style.opacity = '0'; });
  wrap.style.opacity = '0';
  lobes.style.opacity = '0';
  (lobeL as HTMLElement).style.transform = 'translateX(-90px)';
  (lobeR as HTMLElement).style.transform = 'translateX(90px)';
  (nodeDot as HTMLElement).style.opacity = '0';

  // Beat 01: field of loose strokes appears
  await motionAnimate(parts, { opacity: [0, 0.9] }, {
    duration: 0.4,
    delay: stagger(0.012),
    easing: EASE
  }).finished;

  // Field fades as halves arrive
  motionAnimate(field, { opacity: [0.9, 0.12] }, { duration: 0.6, easing: EASE });

  // Beat 02: lobes appear, halves travel in and meet on the seam
  motionAnimate(lobes, { opacity: [0, 1] }, { duration: 0.25 });
  await motionAnimate(
    [lobeL, lobeR] as HTMLElement[],
    { transform: 'translateX(0px)' },
    { duration: 0.5, easing: EASE_SEAM }
  ).finished;

  // Node appears at the meeting point
  motionAnimate(nodeDot, { opacity: [0, 1] }, { duration: 0.2 });

  // Beat 03: wordmark appears and draws itself
  motionAnimate(wrap, { opacity: [0, 1] }, { duration: 0.15 });
  await motionAnimate(strokes, {
    strokeDashoffset: 0
  }, {
    duration: 0.5,
    delay: stagger(0.05),
    easing: EASE_SEAM
  }).finished;

  // Beat 04: everything settles (implicit — no overshoot)
}

/* ═══════════════════════════════════════════════════════════════
   RE-EXPORTS — convenience for components
   ═══════════════════════════════════════════════════════════════ */

export { renderWordmark, buildWordmark } from '../assets/wordmark.js';
export type AnimationPlayback = ReturnType<typeof motionAnimate>;
