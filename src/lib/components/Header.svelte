<!-- Ported from afternow site-header structure + lgwks nav -->
<script lang="ts">
  import { siteConfig } from '../data/content';
  let scrolled = $state(false);
  let menuOpen = $state(false);

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
  <a href="#top" class="site-header__logo-wrapper">
    <span class="site-header__logo">{siteConfig.name}</span>
  </a>
  <nav class="site-header__navigation">
    <div class="site-header__navigation-inner">
      <div class="site-header__navigation-backdrop"></div>
      <div class="site-header__main-menu">
        <ul class="menu">
          {#each navLinks as link (link.label)}
            <li><a href={link.href} onclick={() => menuOpen = false}>{link.label}</a></li>
          {/each}
        </ul>
      </div>
      <a href="#contact" class="btn btn-sm btn-color--white no-icon" onclick={() => menuOpen = false}>Contact</a>
    </div>
  </nav>
  <button class="mobile-toggle" onclick={toggleMenu} aria-label="Menu">
    <span class:open={menuOpen}></span>
    <span class:open={menuOpen}></span>
  </button>
</header>

{#if menuOpen}
  <div class="mobile-menu">
    {#each navLinks as link (link.label)}
      <a href={link.href} onclick={() => menuOpen = false}>{link.label}</a>
    {/each}
    <a href="#contact" class="btn btn-color--white no-icon" onclick={() => menuOpen = false}>Contact</a>
  </div>
{/if}

<style>
  .mobile-toggle { display: none; }
  @media (max-width: 999px) {
    .site-header__navigation { display: none; }
    .mobile-toggle {
      display: flex; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 0.5rem;
      position: fixed; top: 0.75rem; right: 1rem; z-index: 1000;
    }
    .mobile-toggle span {
      display: block; width: 24px; height: 2px;
      background: var(--color-white); transition: transform 0.25s ease;
    }
    .mobile-toggle span:first-child.open { transform: translateY(7px) rotate(45deg); }
    .mobile-toggle span:last-child.open { transform: translateY(-3.5px) rotate(-45deg); }
    .mobile-menu {
      position: fixed; top: 3.875rem; left: 0; right: 0;
      background: var(--color-black); z-index: 999;
      display: flex; flex-direction: column; gap: var(--spacing-small);
      padding: var(--spacing-medium) var(--grid-padding-x);
      border-bottom: 1px solid var(--color-gray-300);
    }
    .mobile-menu a {
      font-family: var(--font-mono); font-size: var(--font-size-large);
      color: var(--color-white); text-decoration: none;
      text-transform: uppercase; letter-spacing: -0.02em;
    }
  }
</style>
