<script lang="ts">
  import { scrollReveal } from '../actions/scrollReveal';

  const principles = [
    {
      number: '01',
      title: 'Flat by default',
      body: 'No gradients, no glassmorphism, no shadows pretending to be depth. Contrast and typography carry the hierarchy. Whitespace is the structure.',
    },
    {
      number: '02',
      title: 'Motion that follows you',
      body: 'Animation is not decoration — it responds to your scroll, your hover, your intent. Elements enter, shift, and settle as you move through the page.',
    },
    {
      number: '03',
      title: 'One accent, wielded',
      body: 'A single warm amber against deep black. No rainbow, no secondary palette. The accent marks what matters — CTAs, active states, the kickers.',
    },
    {
      number: '04',
      title: 'Type as architecture',
      body: 'Serif display fonts for headings, a mono for metadata, system sans for body. Size and weight create rooms. The reader walks through them.',
    },
  ];
</script>

<section id="method" class="method">
  <div class="section-header">
    <span class="section-number">02</span>
    <h2 class="section-title">Method</h2>
  </div>
  <div class="principles">
    {#each principles as p, i (p.number)}
      <div
        class="principle"
        use:scrollReveal={{ parallax: 30, startOpacity: 0, threshold: 0.2 }}
      >
        <span class="principle-number">{p.number}</span>
        <h3 class="principle-title">{p.title}</h3>
        <p class="principle-body">{p.body}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .method {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--space-2xl) var(--space-md);
    border-top: 1px solid var(--paper-faint);
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: var(--space-sm);
    margin-bottom: var(--space-xl);
  }

  .section-number {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent);
  }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 6vw, 5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .principles {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  @media (min-width: 768px) {
    .principles {
      grid-template-columns: 1fr 1fr;
    }
  }

  .principle {
    padding: var(--space-md);
    border-left: 2px solid var(--paper-faint);
    transition: border-color 0.3s var(--ease-out);
  }

  .principle:hover {
    border-left-color: var(--accent);
  }

  .principle-number {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent);
    display: block;
    margin-bottom: var(--space-xs);
  }

  .principle-title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: var(--space-xs);
  }

  .principle-body {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--paper-dim);
  }
</style>
