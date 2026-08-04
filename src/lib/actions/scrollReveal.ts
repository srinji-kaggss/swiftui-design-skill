/**
 * Scroll-reactive animation action for Svelte 5.
 *
 * Uses IntersectionObserver to apply CSS transforms as elements
 * enter and leave the viewport. This is the "moves with me" mechanic
 * from ui-ux-pro-max-skill, implemented with zero dependencies.
 *
 * Inspired by SwiftUI's .scrollTransition + .visualEffect — elements
 * scale, rotate, and shift based on their viewport position.
 */

interface ScrollRevealOptions {
  /** Scale range: [min, max] applied based on visibility. Default [0.92, 1] */
  scale?: [number, number];
  /** Y parallax offset in pixels. Default 40 */
  parallax?: number;
  /** Rotation in degrees. Default 0 */
  rotation?: number;
  /** Start opacity. Default 0 */
  startOpacity?: number;
  /** Threshold for observer. Default 0.15 */
  threshold?: number;
}

const defaults: Required<ScrollRevealOptions> = {
  scale: [0.92, 1],
  parallax: 40,
  rotation: 0,
  startOpacity: 0,
  threshold: 0.15,
};

/**
 * Svelte action: progressively reveals and transforms an element
 * based on its scroll position within the viewport. The element
 * starts hidden/transformed and animates to its natural state
 * as it enters the center of the screen, then continues the
 * transform as it exits the top.
 */
export function scrollReveal(node: HTMLElement, options?: ScrollRevealOptions) {
  const opts = { ...defaults, ...options };

  // Set initial state
  node.style.opacity = String(opts.startOpacity);
  node.style.transform = `translateY(${opts.parallax}px) scale(${opts.scale[0]}) rotate(${opts.rotation}deg)`;
  node.style.transformOrigin = 'center center';
  node.style.willChange = 'transform, opacity';
  node.style.transition = `opacity ${opts.duration ?? 600}ms var(--ease-out), transform ${opts.duration ?? 600}ms var(--ease-out)`;

  let visible = false;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !visible) {
          visible = true;
          // Animate IN — settle to natural state
          requestAnimationFrame(() => {
            node.style.opacity = '1';
            node.style.transform = `translateY(0) scale(${opts.scale[1]}) rotate(0deg)`;
          });
        } else if (!entry.isIntersecting && visible) {
          visible = false;
          // Reset — element has left viewport
          node.style.opacity = String(opts.startOpacity);
          node.style.transform = `translateY(${opts.parallax}px) scale(${opts.scale[0]}) rotate(${opts.rotation}deg)`;
        }
      }
    },
    { threshold: opts.threshold, rootMargin: '-8% 0px -8% 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

/**
 * Svelte action: continuous parallax based on scroll position.
 * Unlike scrollReveal (which triggers once), this continuously
 * updates the element's transform as the user scrolls, creating
 * the "moves with me" effect from ui-ux-pro-max-skill.
 */
export function scrollParallax(node: HTMLElement, intensity: number = 0.3) {
  let ticking = false;
  node.style.willChange = 'transform';

  function update() {
    const rect = node.getBoundingClientRect();
    const viewportH = window.innerHeight;
    // Progress: 0 when element enters from bottom, 1 when it exits top
    const progress = (viewportH - rect.top) / (viewportH + rect.height);

    // Map progress [-0.2..1.2] to parallax offset
    const clamped = Math.max(0, Math.min(1, progress));
    // Shift element opposite to scroll direction, centered at progress=0.5
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
