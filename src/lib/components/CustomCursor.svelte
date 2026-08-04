<!-- LWDS CustomCursor — dot+ring, always visible, expands on [data-cursor] -->
<script lang="ts">
  let dotX = $state(-100);
  let dotY = $state(-100);
  let ringX = $state(-100);
  let ringY = $state(-100);
  let isHovering = $state(false);
  let isDisabled = $state(false);
  let isDown = $state(false);

  let dotRaf = 0;
  let ringRaf = 0;
  let dotPending = { x: -100, y: -100 };
  let ringPending = { x: -100, y: -100 };

  $effect(() => {
    const mqlMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqlHover = window.matchMedia('(hover: hover) and (pointer: fine)');

    function check() {
      if (mqlMotion.matches || !mqlHover.matches) {
        isDisabled = true;
        document.body.classList.remove('has-custom-cursor');
      } else {
        isDisabled = false;
        document.body.classList.add('has-custom-cursor');
      }
    }
    check();

    function onMouseMove(e: MouseEvent) {
      dotPending = { x: e.clientX, y: e.clientY };
      ringPending = { x: e.clientX, y: e.clientY };

      if (dotRaf === 0) {
        dotRaf = requestAnimationFrame(() => {
          dotX = dotPending.x;
          dotY = dotPending.y;
          dotRaf = 0;
        });
      }
      // Ring lags behind with spring easing
      if (ringRaf === 0) {
        ringRaf = requestAnimationFrame(() => {
          ringX = ringX + (ringPending.x - ringX) * 0.18;
          ringY = ringY + (ringPending.y - ringY) * 0.18;
          ringRaf = 0;
          // Keep animating until ring catches up
          if (Math.abs(ringPending.x - ringX) > 0.5 || Math.abs(ringPending.y - ringY) > 0.5) {
            ringRaf = requestAnimationFrame(() => {
              ringX = ringX + (ringPending.x - ringX) * 0.18;
              ringY = ringY + (ringPending.y - ringY) * 0.18;
              ringRaf = 0;
            });
          }
        });
      }
    }

    function onPointerOver(e: PointerEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest<HTMLElement>('a, button, [data-cursor], [role="button"], input, textarea, select');
      if (interactive) {
        isHovering = true;
      }
    }

    function onPointerOut(e: PointerEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest<HTMLElement>('a, button, [data-cursor], [role="button"], input, textarea, select');
      if (interactive) {
        isHovering = false;
      }
    }

    function onDown() { isDown = true; }
    function onUp() { isDown = false; }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('pointerout', onPointerOut);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    mqlMotion.addEventListener('change', check);
    mqlHover.addEventListener('change', check);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('pointerout', onPointerOut);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      mqlMotion.removeEventListener('change', check);
      mqlHover.removeEventListener('change', check);
      document.body.classList.remove('has-custom-cursor');
      if (dotRaf) cancelAnimationFrame(dotRaf);
      if (ringRaf) cancelAnimationFrame(ringRaf);
    };
  });
</script>

{#if !isDisabled}
  <!-- Ring (lagged) -->
  <div
    class="cursor-ring"
    style="transform: translate3d({ringX}px, {ringY}px, 0) translate(-50%, -50%) scale({isHovering ? 1.6 : isDown ? 0.7 : 1});"
    aria-hidden="true"
  ></div>
  <!-- Dot (instant) -->
  <div
    class="cursor-dot"
    style="transform: translate3d({dotX}px, {dotY}px, 0) translate(-50%, -50%) scale({isHovering ? 0 : isDown ? 1.3 : 1});"
    aria-hidden="true"
  ></div>
{/if}
