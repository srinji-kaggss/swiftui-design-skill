/**
 * Scroll-reactive animation actions for Svelte 5.
 *
 * Three primitives, zero dependencies:
 *
 *  1. scrollReveal   — IntersectionObserver-triggered reveal (opacity + transform)
 *  2. scrollParallax  — continuous scroll-driven parallax offset
 *  3. lineReveal      — splits a heading into line spans, reveals them
 *                       staggered as the element enters the viewport
 *  4. echoLayers     — the afternow pattern: stacked coloured shapes behind
 *                       a hero element that scale up briefly when scroll
 *                       velocity spikes, then settle back.
 */

/* ─── 1. Scroll Reveal ─────────────────────────────────────── */

interface ScrollRevealOptions {
  scale?: [number, number];
  parallax?: number;
  rotation?: number;
  startOpacity?: number;
  threshold?: number;
  duration?: number;
}

const revealDefaults: Required<ScrollRevealOptions> = {
  scale: [0.95, 1],
  parallax: 40,
  rotation: 0,
  startOpacity: 0,
  threshold: 0.12,
  duration: 650,
};

export function scrollReveal(node: HTMLElement, options?: ScrollRevealOptions) {
  const opts = { ...revealDefaults, ...options };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) {
    node.style.opacity = '1';
    node.style.transform = 'none';
    return { destroy() {} };
  }

  node.style.opacity = String(opts.startOpacity);
  node.style.transform = `translateY(${opts.parallax}px) scale(${opts.scale[0]}) rotate(${opts.rotation}deg)`;
  node.style.transformOrigin = 'center center';
  node.style.willChange = 'transform, opacity';
  node.style.transition = `opacity ${opts.duration}ms var(--ease-spring), transform ${opts.duration}ms var(--ease-spring)`;

  let visible = false;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !visible) {
          visible = true;
          requestAnimationFrame(() => {
            node.style.opacity = '1';
            node.style.transform = `translateY(0) scale(${opts.scale[1]}) rotate(0deg)`;
          });
        } else if (!entry.isIntersecting && visible) {
          visible = false;
          node.style.opacity = String(opts.startOpacity);
          node.style.transform = `translateY(${opts.parallax}px) scale(${opts.scale[0]}) rotate(${opts.rotation}deg)`;
        }
      }
    },
    { threshold: opts.threshold, rootMargin: '-6% 0px -6% 0px' },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

/* ─── 2. Continuous Parallax ──────────────────────────────── */

export function scrollParallax(node: HTMLElement, intensity: number = 0.3) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return { destroy() {} };

  let ticking = false;
  node.style.willChange = 'transform';

  function update() {
    const rect = node.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const progress = (viewportH - rect.top) / (viewportH + rect.height);
    const clamped = Math.max(0, Math.min(1, progress));
    const offset = (0.5 - clamped) * 100 * intensity;
    node.style.transform = `translateY(${offset}px)`;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();

  return {
    destroy() {
      window.removeEventListener('scroll', onScroll);
    },
  };
}

/* ─── 3. Line Reveal ────────────────────────────────────────── */
/**
 * Splits the text content of a heading into line-based spans,
 * then reveals them with a staggered upward clip as the element
 * enters the viewport. Inspired by afternow's SplitText hero.
 */

export function lineReveal(node: HTMLElement, stagger: number = 0.15) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Split into words first, wrapping each in an inline-block span
  const text = node.textContent ?? '';
  const words = text.split(' ');

  node.innerHTML = '';
  node.style.position = 'relative';

  const lineWrap = document.createElement('span');
  lineWrap.style.display = 'block';
  lineWrap.style.overflow = 'hidden';

  for (let i = 0; i < words.length; i++) {
    const wordSpan = document.createElement('span');
    wordSpan.style.display = 'inline-block';
    wordSpan.style.willChange = 'transform, opacity';
    wordSpan.textContent = words[i];

    if (reduced) {
      wordSpan.style.opacity = '1';
      wordSpan.style.transform = 'none';
    } else {
      wordSpan.style.opacity = '0';
      wordSpan.style.transform = 'translateY(110%)';
      wordSpan.style.transition = `opacity 600ms var(--ease-spring), transform 800ms var(--ease-spring)`;
    }

    lineWrap.appendChild(wordSpan);
    if (i < words.length - 1) {
      lineWrap.appendChild(document.createTextNode(' '));
    }
  }

  node.appendChild(lineWrap);

  if (reduced) return { destroy() {} };

  let revealed = false;
  const wordSpans = Array.from(lineWrap.querySelectorAll('span'));

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !revealed) {
          revealed = true;
          wordSpans.forEach((span, i) => {
            setTimeout(() => {
              span.style.opacity = '1';
              span.style.transform = 'translateY(0)';
            }, i * stagger * 1000);
          });
          observer.unobserve(node);
        }
      }
    },
    { threshold: 0.2 },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

/* ─── 4. Echo Layers ────────────────────────────────────────── */
/**
 * The "moves with me" effect from afternow.co:
 * Stacked coloured shapes behind a hero element. When the user
 * scrolls with velocity, the layers briefly scale up (by an amount
 * proportional to scroll speed and layer depth), then settle back
 * with a spring ease. Also applies a continuous parallax offset
 * as the hero section scrolls through the viewport.
 */

export function echoLayers(node: HTMLElement, options?: {
  colors?: string[];
  intensity?: number;
}) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const colors = options?.colors ?? [
    'var(--echo-1)',
    'var(--echo-2)',
    'var(--echo-3)',
  ];
  const intensity = options?.intensity ?? 1;

  // Create the layer elements inside the node
  const layers: HTMLElement[] = [];
  const cssColors = colors.map(c =>
    c.startsWith('var(') ? c : c.startsWith('#') ? c : `var(--echo-${c})`,
  );

  for (let i = 0; i < cssColors.length; i++) {
    const layer = document.createElement('span');
    layer.className = 'echo-layer';
    layer.style.cssText = `
      position: absolute;
      inset: 0;
      background: ${cssColors[i]};
      border-radius: inherit;
      opacity: 0;
      will-change: transform, opacity;
      transform: scale(0.8);
      z-index: ${-i - 1};
      backface-visibility: hidden;
    `;
    node.insertBefore(layer, node.firstChild);
    layers.push(layer);
  }

  if (reduced) {
    layers.forEach((l, i) => {
      l.style.opacity = String(0.4 - i * 0.1);
      l.style.transform = `translateX(${(i + 1) * 8}px) translateY(${(i + 1) * 8}px) scale(1)`;
    });
    return { destroy() {} };
  }

  // Set initial state
  layers.forEach((layer, i) => {
    layer.style.opacity = String(0.3 - i * 0.06);
    layer.style.transform = `translateX(${(i + 1) * 12 * intensity}px) translateY(${(i + 1) * 12 * intensity}px) scale(1)`;
  });

  let lastScrollY = window.scrollY;
  let velocity = 0;
  let ticking = false;
  let settleTimers: ReturnType<typeof setTimeout>[] = [];

  function clearSettleTimers() {
    settleTimers.forEach(t => clearTimeout(t));
    settleTimers = [];
  }

  function update() {
    const currentY = window.scrollY;
    const delta = currentY - lastScrollY;
    // Smooth the velocity (exponential moving average)
    velocity = velocity * 0.7 + delta * 0.3;
    lastScrollY = currentY;

    const absV = Math.abs(velocity);
    const velocityFactor = Math.min(absV / 8000, 0.3);

    // Also compute a steady parallax based on hero position
    const rect = node.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const progress = (viewportH - rect.top) / (viewportH + rect.height);
    const parallaxOffset = (0.5 - Math.max(0, Math.min(1, progress))) * 30 * intensity;

    layers.forEach((layer, i) => {
      const depth = (i + 1) * 0.5;
      const scaleBoost = 1 + velocityFactor * depth;
      const drift = (i + 1) * 12 * intensity + parallaxOffset * (i + 1);

      layer.style.transform = `translateX(${drift}px) translateY(${drift}px) scale(${scaleBoost})`;
    });

    // Settle back over a short duration if velocity is low
    clearSettleTimers();
    settleTimers.push(
      setTimeout(() => {
        if (Math.abs(velocity) < 1) return;
        layers.forEach((layer, i) => {
          const drift = (i + 1) * 12 * intensity + parallaxOffset * (i + 1);
          layer.style.transition = 'transform 300ms var(--ease-spring)';
          layer.style.transform = `translateX(${drift}px) translateY(${drift}px) scale(1)`;
        });
        settleTimers.push(
          setTimeout(() => {
            layers.forEach(l => (l.style.transition = ''));
          }, 320),
        );
      }, 80),
    );

    // Decay velocity
    velocity *= 0.8;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();

  return {
    destroy() {
      window.removeEventListener('scroll', onScroll);
      clearSettleTimers();
    },
  };
}

/* ─── 5. Pin Hero ───────────────────────────────────────────── */
/**
 * Pins the hero section using position: sticky so it stays in place
 * while background layers scroll past. Combined with echoLayers,
 * this creates the "hero holds while the world moves" effect
 * from afternow's GSAP ScrollTrigger pin.
 *
 * Uses native CSS sticky — no JS scroll listener needed.
 * The CSS for this lives in Hero.svelte's <style> block.
 */
