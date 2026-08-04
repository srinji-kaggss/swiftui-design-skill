<!-- Ported from lgwks CustomCursor.tsx -->
<script lang="ts">
  let x = $state(-100);
  let y = $state(-100);
  let isVisible = $state(false);
  let cursorText = $state('');
  let cursorIcon = $state('');
  let cursorTheme = $state<'dark' | 'light'>('dark');
  let isDisabled = $state(false);
  let rafId = 0;
  let pending = { x: -100, y: -100 };

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
      pending = { x: e.clientX, y: e.clientY };
      if (rafId === 0) {
        rafId = requestAnimationFrame(() => {
          x = pending.x; y = pending.y; rafId = 0;
        });
      }
    }

    function onMouseEnter(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const hasCursor = target.closest<HTMLElement>('[data-cursor]');
      if (!hasCursor) return;
      isVisible = true;
      cursorIcon = hasCursor.dataset.cursorIcon ?? '';
      cursorText = hasCursor.dataset.cursorText ?? '';
      cursorTheme = hasCursor.dataset.cursorTheme === 'light' ? 'light' : 'dark';
    }

    function onMouseLeave(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('[data-cursor]')) isVisible = false;
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter, true);
    document.addEventListener('mouseleave', onMouseLeave, true);
    mqlMotion.addEventListener('change', check);
    mqlHover.addEventListener('change', check);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter, true);
      document.removeEventListener('mouseleave', onMouseLeave, true);
      mqlMotion.removeEventListener('change', check);
      mqlHover.removeEventListener('change', check);
      document.body.classList.remove('has-custom-cursor');
      if (rafId) cancelAnimationFrame(rafId);
    };
  });
</script>

{#if !isDisabled}
  <div
    class="custom-cursor {cursorTheme === 'light' ? 'color-light' : 'color-dark'} {isVisible ? 'is-visible' : ''}"
    style="transform: translate3d({x}px, {y}px, 0) translate(-50%, -50%);"
  >
    <div class="custom-cursor__content">
      {#if cursorIcon}<i class="icon-{cursorIcon}"></i>{/if}
      {#if cursorText}<div class="custom-cursor__text">{cursorText}</div>{/if}
    </div>
  </div>
{/if}
