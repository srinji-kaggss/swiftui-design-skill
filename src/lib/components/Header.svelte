<!-- LWDS TopNav pattern: Seam mark + constructed wordmark, spaced-caps nav + theme toggle -->
<script lang="ts">
  import { siteConfig } from '../data/content';
  import { renderWordmark } from '../motion/engine';
  import { onMount } from 'svelte';
  import { useTheme } from '../theme.svelte';

  let scrolled = $state(false);
  let menuOpen = $state(false);
  let wmSlot: HTMLElement;

  const theme = useTheme();

  onMount(() => {
    wmSlot.innerHTML = renderWordmark({ text: siteConfig.name, className: 'lw-wordmark', color: 'currentColor', seam: false });
  });

  function onScroll() { scrolled = window.scrollY > 40; }
  function toggleMenu() { menuOpen = !menuOpen; }

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Journal', href: '#journal' },
  ];
</script>

<svelte:window onscroll={onScroll} />

<header class="site-header" class:site-header--scrolled={scrolled}>
  <a href="#top" class="site-header__logo-wrapper" aria-label="Logical Works home">
    <svg viewBox="0 0 120 120" width="24" height="24" aria-hidden="true">
      <path d="M60,18 H40 A34,34 0 0 0 40,86 H60 Z" fill="var(--color-ink)"/>
      <path d="M60,34 H80 A34,34 0 0 1 80,102 H60 Z" fill="var(--color-brand)"/>
      <circle cx="60" cy="60" r="5.5" fill="var(--color-bg)"/>
    </svg>
    <span class="site-header__wm" bind:this={wmSlot}></span>
  </a>
  <nav class="site-header__navigation">
    <ul class="menu">
      {#each navLinks as link (link.label)}
        <li><a href={link.href} onclick={() => menuOpen = false}>{link.label}</a></li>
      {/each}
    </ul>
    <div class="site-header__actions">
      <button
        class="theme-toggle"
        onclick={() => theme.toggle()}
        aria-label="Toggle dark/light mode"
        title={theme.isDark ? 'Switch to light' : 'Switch to dark'}
      >
        {#if theme.isDark}
          <!-- Sun icon -->
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
        {:else}
          <!-- Moon icon -->
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {/if}
      </button>
      <a href="#contact" class="btn btn--primary btn--sm" onclick={() => menuOpen = false}>Contact</a>
    </div>
  </nav>
  <div class="mobile-actions">
    <button
      class="theme-toggle theme-toggle--mobile"
      onclick={() => theme.toggle()}
      aria-label="Toggle dark/light mode"
    >
      {#if theme.isDark}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      {:else}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      {/if}
    </button>
    <button class="mobile-toggle" onclick={toggleMenu} aria-label="Menu">
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
    </button>
  </div>
</header>

{#if menuOpen}
  <div class="mobile-menu">
    {#each navLinks as link (link.label)}
      <a href={link.href} onclick={() => menuOpen = false}>{link.label}</a>
    {/each}
    <a href="#contact" class="btn btn--primary btn--sm" onclick={() => menuOpen = false}>Contact</a>
  </div>
{/if}

<style>
  .site-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: var(--space-sm) var(--grid-padding-x);
    background: var(--color-bg);
    border-bottom: 1px solid transparent;
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    transition: border-color var(--duration-standard) var(--ease-standard), background var(--duration-standard) var(--ease-standard);
  }
  .site-header--scrolled {
    border-bottom-color: var(--color-border);
    background: color-mix(in srgb, var(--color-bg) 92%, transparent);
    backdrop-filter: blur(12px);
  }
  .site-header__logo-wrapper {
    display: flex; align-items: center; gap: var(--space-2xs);
    text-decoration: none; flex-shrink: 0;
  }
  .site-header__wm { display: inline-flex; align-items: center; }
  .site-header__wm :global(svg) { height: 19px; width: auto; }
  .site-header__navigation {
    display: flex; align-items: center; gap: var(--space-lg);
  }
  .site-header__actions {
    display: flex; align-items: center; gap: var(--space-sm);
  }
  .menu {
    display: flex; gap: var(--space-lg); list-style: none; padding: 0; margin: 0;
  }
  .menu a {
    font-family: var(--font-body); font-size: var(--text-small);
    color: var(--color-ink); text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
    transition: border-color var(--duration-standard) var(--ease-standard), color var(--duration-standard) var(--ease-standard);
  }
  .menu a:hover { border-bottom-color: var(--color-brand); }

  .theme-toggle {
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px; border-radius: var(--radius-control);
    background: transparent; border: 1px solid var(--color-border);
    color: var(--color-ink); cursor: pointer;
    transition: border-color var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard);
  }
  .theme-toggle:hover { border-color: var(--color-brand); color: var(--color-brand); }

  .mobile-actions { display: none; }
  .mobile-toggle { display: none; }
  @media (max-width: 999px) {
    .site-header__navigation { display: none; }
    .mobile-actions {
      display: flex; align-items: center; gap: var(--space-2xs);
      position: fixed; top: var(--space-sm); right: var(--grid-padding-x); z-index: 200;
    }
    .theme-toggle--mobile { display: flex; }
    .mobile-toggle {
      display: flex; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: var(--space-2xs);
    }
    .mobile-toggle span {
      display: block; width: 24px; height: 2px;
      background: var(--color-ink); transition: transform var(--duration-fast) var(--ease-standard);
    }
    .mobile-toggle span:first-child.open { transform: translateY(7px) rotate(45deg); }
    .mobile-toggle span:last-child.open { transform: translateY(-3.5px) rotate(-45deg); }
    .mobile-menu {
      position: fixed; top: 3.5rem; left: 0; right: 0;
      background: var(--color-bg); z-index: 199;
      display: flex; flex-direction: column; gap: var(--space-sm);
      padding: var(--space-md) var(--grid-padding-x);
      border-bottom: 1px solid var(--color-border);
    }
    .mobile-menu a {
      font-family: var(--font-body); font-size: var(--text-body);
      color: var(--color-ink); text-decoration: none;
    }
  }
</style>
