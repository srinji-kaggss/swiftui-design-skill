<script lang="ts">
  import { siteConfig } from '../data/content';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  function onScroll() {
    scrolled = window.scrollY > 40;
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Journal', href: '#journal' },
    { label: 'Team', href: '#team' },
  ];
</script>

<svelte:window onscroll={onScroll} />

<header class="header" class:scrolled>
  <nav class="nav">
    <a href="#top" class="logo" aria-label={siteConfig.name}>
      <span class="logo-mark">◆</span>
      <span class="logo-text">{siteConfig.name}</span>
    </a>
    <button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle menu">
      <span class:open={menuOpen}></span>
      <span class:open={menuOpen}></span>
    </button>
    <ul class="links" class:open={menuOpen}>
      {#each navLinks as link (link.label)}
        <li><a href={link.href} onclick={() => menuOpen = false}>{link.label}</a></li>
      {/each}
      <li><a href="#contact" class="cta-button" onclick={() => menuOpen = false}>Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  .header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    height: 4rem;
    background: transparent;
    transition: background var(--dur-base) var(--ease-default), border-color var(--dur-base) var(--ease-default);
    border-bottom: 1px solid transparent;
  }

  .header.scrolled {
    background: rgba(10, 10, 10, 0.92);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom-color: var(--paper-faint);
  }

  .nav {
    max-width: var(--container-max);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--container-gutter);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--paper);
  }

  .logo-mark {
    color: var(--accent);
    font-size: 1.25rem;
  }

  .logo-text {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .links {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    list-style: none;
  }

  .links a {
    color: var(--paper-dim);
    text-decoration: none;
    font-size: var(--fs-sm);
    font-weight: 500;
    transition: color var(--dur-fast) var(--ease-default);
  }

  .links a:hover { color: var(--paper); }

  .cta-button {
    color: var(--accent) !important;
    border: 1px solid var(--accent);
    padding: 0.5rem 1.25rem;
    transition: background var(--dur-fast) var(--ease-default), color var(--dur-fast) var(--ease-default) !important;
  }

  .cta-button:hover {
    background: var(--accent);
    color: var(--ink) !important;
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .menu-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--paper);
    transition: transform var(--dur-fast) var(--ease-default);
  }

  .menu-toggle span:first-child.open { transform: translateY(7px) rotate(45deg); }
  .menu-toggle span:last-child.open { transform: translateY(-3.5px) rotate(-45deg); }

  @media (max-width: 768px) {
    .menu-toggle { display: flex; }
    .links {
      position: fixed;
      top: 4rem; left: 0; right: 0;
      flex-direction: column;
      background: var(--ink);
      padding: var(--space-8) var(--container-gutter);
      gap: var(--space-6);
      transform: translateY(-100%);
      transition: transform var(--dur-base) var(--ease-default);
      border-bottom: 1px solid var(--paper-faint);
    }
    .links.open { transform: translateY(0); }
  }
</style>
