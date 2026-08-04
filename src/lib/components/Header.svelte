<script lang="ts">
  let scrolled = $state(false);

  function onScroll() {
    scrolled = window.scrollY > 40;
  }
</script>

<svelte:window on:scroll={onScroll} />

<header class="header" class:scrolled>
  <nav class="nav">
    <a href="#top" class="logo">
      <span class="logo-mark">◆</span>
      <span class="logo-text">Studio</span>
    </a>
    <ul class="links">
      <li><a href="#work">Work</a></li>
      <li><a href="#method">Method</a></li>
      <li><a href="#lab">Lab</a></li>
      <li><a href="#contact" class="cta-button">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: var(--header-height);
    background: transparent;
    transition: background var(--duration) var(--ease-out), border-color var(--duration) var(--ease-out);
    border-bottom: 1px solid transparent;
  }

  .header.scrolled {
    background: rgba(10, 10, 10, 0.92);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom-color: var(--paper-faint);
  }

  .nav {
    max-width: var(--max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--space-md);
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
    gap: var(--space-md);
    list-style: none;
  }

  .links a {
    color: var(--paper-dim);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.2s var(--ease-out);
  }

  .links a:hover {
    color: var(--paper);
  }

  .cta-button {
    color: var(--accent) !important;
    border: 1px solid var(--accent);
    padding: 0.5rem 1.25rem;
    transition: background 0.2s var(--ease-out), color 0.2s var(--ease-out) !important;
  }

  .cta-button:hover {
    background: var(--accent);
    color: var(--ink) !important;
  }

  @media (max-width: 640px) {
    .links li:nth-child(2),
    .links li:nth-child(3) {
      display: none;
    }
  }
</style>
