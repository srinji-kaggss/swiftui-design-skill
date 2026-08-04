/**
 * Scroll actions — ported from lgwks-frontend.
 */

/* ─── 1. Scroll Reveal (from lgwks useScrollReveal.ts) ────── */
/* Called once on the root container. Finds ALL [data-reveal] children. */

export function scrollRevealAll(node: HTMLElement) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = Array.from(node.querySelectorAll<HTMLElement>('[data-reveal]'));

  if (reduced) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return { destroy() {} };
  }

  if (elements.length === 0) return { destroy() {} };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        const delayAttr = target.dataset.revealDelay;
        const batchAttr = target.dataset.revealBatch;

        let delayMs = 0;
        if (delayAttr) {
          const parsed = parseInt(delayAttr, 10);
          if (!Number.isNaN(parsed)) delayMs = parsed;
        }

        if (batchAttr === 'true') {
          const parent = target.parentElement;
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll<HTMLElement>('[data-reveal]'));
            const index = siblings.indexOf(target);
            delayMs += index * 80;
          }
        }

        if (delayMs > 0) {
          setTimeout(() => target.classList.add('is-revealed'), delayMs);
        } else {
          target.classList.add('is-revealed');
        }

        observer.unobserve(target);
      });
    },
    { threshold: 0.1 },
  );

  elements.forEach((el) => observer.observe(el));

  return { destroy() { observer.disconnect(); } };
}

/* ─── 2. Echo Layers (from afternow home.js scroll velocity) ── */

export function echoLayers(node: HTMLElement, options?: {
  colors?: string[];
  intensity?: number;
}) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const colors = options?.colors ?? ['var(--color-purple)', 'var(--color-yellow)', 'var(--color-green)'];
  const intensity = options?.intensity ?? 1;

  const layers: HTMLElement[] = [];
  for (let i = 0; i < colors.length; i++) {
    const layer = document.createElement('span');
    layer.className = 'echo__layer';
    layer.style.setProperty('--echo-color', colors[i]);
    node.insertBefore(layer, node.firstChild);
    layers.push(layer);
  }

  if (reduced) return { destroy() {} };

  let lastScrollY = window.scrollY;
  let velocity = 0;
  let ticking = false;

  function update() {
    const currentY = window.scrollY;
    const delta = currentY - lastScrollY;
    velocity = velocity * 0.7 + delta * 0.3;
    lastScrollY = currentY;

    const absV = Math.abs(velocity);
    const velocityFactor = Math.min(absV / 8000, 0.3);

    const rect = node.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const progress = (viewportH - rect.top) / (viewportH + rect.height);
    const parallaxOffset = (0.5 - Math.max(0, Math.min(1, progress))) * 30 * intensity;

    layers.forEach((layer, i) => {
      const depth = (i + 1) * 0.5;
      const scaleBoost = 1 + velocityFactor * depth;
      const drift = (i + 1) * 12 * intensity + parallaxOffset * (i + 1);
      layer.style.transform = `translateX(${drift}px) translateY(${drift}px) scale(${scaleBoost})`;
      layer.style.opacity = String(0.3 - i * 0.06);
    });

    velocity *= 0.8;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => { update(); ticking = false; });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();

  return { destroy() { window.removeEventListener('scroll', onScroll); } };
}

/* ─── 3. Letter Hero Title (from lgwks AnimatedHeroTitle) ──── */

export function letterTitle(node: HTMLElement, stagger: number = 45) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const text = node.textContent ?? '';
  const words = text.trim().split(/\s+/);

  const wordOffsets = words.reduce<number[]>((offsets, word, index) => {
    const prev = offsets[index - 1] ?? 0;
    const prevLen = words[index - 1]?.length ?? 0;
    offsets.push(index === 0 ? 0 : prev + prevLen + 1);
    return offsets;
  }, []);

  node.innerHTML = '';
  node.setAttribute('aria-label', text);

  if (reduced) {
    node.textContent = text;
    return { destroy() {} };
  }

  const lettersWrap = document.createElement('span');
  lettersWrap.setAttribute('aria-hidden', 'true');
  lettersWrap.style.display = 'inline';

  words.forEach((word, wordIndex) => {
    const wordOffset = wordOffsets[wordIndex] ?? 0;
    const wordSpan = document.createElement('span');
    wordSpan.className = 'letter-hero-word';
    wordSpan.style.display = 'inline-block';

    word.split('').forEach((letter, letterIndex) => {
      const letterSpan = document.createElement('span');
      letterSpan.className = 'letter-hero-letter';
      letterSpan.textContent = letter;
      letterSpan.style.animationDelay = `${(wordOffset + letterIndex) * stagger}ms`;
      wordSpan.appendChild(letterSpan);
    });

    if (wordIndex < words.length - 1) {
      wordSpan.style.marginRight = '0.25em';
    }

    lettersWrap.appendChild(wordSpan);
  });

  node.appendChild(lettersWrap);
  return { destroy() {} };
}

/* ─── 4. Floating Parallax Icons (from lgwks FloatingIcons) ── */

export interface FloatingIconConfig {
  x: string; y: string; s: number; r: number; bg: string; speed: number; rot: number;
}

export function floatingParallax(node: HTMLElement, icons: FloatingIconConfig[]) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
    el.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    node.appendChild(el);
    refs[i] = el;
  });

  let ticking = false;
  let lastY = window.scrollY;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const velocity = y - lastY;
      lastY = y;
      refs.forEach((el, i) => {
        const icon = icons[i];
        if (el && icon) {
          const drift = y * icon.speed;
          const rot = Math.min(Math.abs(velocity) * 0.35, 14) * icon.rot * Math.sign(velocity || 1);
          el.style.transform = `translateY(${drift}px) rotate(${rot}deg)`;
        }
      });
      ticking = false;
    });
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return { destroy() { window.removeEventListener('scroll', onScroll); } };
}

/* ─── 5. Burst Trigger (from lgwks BurstButton) ──────────── */

export function burstTrigger(node: HTMLElement) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return { destroy() {} };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        node.classList.add('burst-active');
        setTimeout(() => node.classList.remove('burst-active'), 900);
        observer.disconnect();
      }
    },
    { threshold: 0.8 },
  );
  observer.observe(node);
  return { destroy() { observer.disconnect(); } };
}

/* ─── 6. Hero Pin Reveal ──────────────────────────────────── */

export function heroPinReveal(node: HTMLElement) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return { destroy() {} };

  let ticking = false;
  node.style.clipPath = 'inset(50% round 20px)';
  node.style.transform = 'scale(0.965)';
  node.style.willChange = 'clip-path, transform';

  function update() {
    const rect = node.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / (rect.height || 1)));
    const clipInset = Math.max(0, 50 - progress * 50);
    const scale = 0.965 + progress * 0.035;
    node.style.clipPath = `inset(${clipInset}% round 20px)`;
    node.style.transform = `scale(${scale})`;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => { update(); ticking = false; });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();

  return { destroy() { window.removeEventListener('scroll', onScroll); } };
}
