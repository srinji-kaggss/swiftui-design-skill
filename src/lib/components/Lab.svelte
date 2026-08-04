<script lang="ts">
  import { scrollReveal } from '../actions/scrollReveal';

  const experiments = [
    { title: 'Scroll-reactive parallax', status: 'Live', tag: 'Motion' },
    { title: 'Flat design tokens system', status: 'Live', tag: 'System' },
    { title: 'IntersectionObserver reveal', status: 'Live', tag: 'Animation' },
    { title: 'CSS-only scroll snapping', status: 'Exploring', tag: 'Layout' },
    { title: 'Keyboard-navigable sections', status: 'Planned', tag: 'A11y' },
    { title: 'Rust→WASM motion core', status: 'Future', tag: 'Motion' },
  ];
</script>

<section id="lab" class="lab">
  <div class="section-header">
    <span class="section-number">03</span>
    <h2 class="section-title">Lab</h2>
  </div>
  <div class="experiments">
    {#each experiments as exp, i (exp.title)}
      <div
        class="experiment"
        use:scrollReveal={{ parallax: 20, startOpacity: 0, threshold: 0.15 }}
      >
        <div class="exp-info">
          <h3 class="exp-title">{exp.title}</h3>
          <span class="exp-tag">{exp.tag}</span>
        </div>
        <span class="exp-status" class:live={exp.status === 'Live'} class:exploring={exp.status === 'Exploring'}>
          {exp.status}
        </span>
      </div>
    {/each}
  </div>
</section>

<style>
  .lab {
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

  .experiments {
    display: grid;
    gap: 0;
  }

  .experiment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) 0;
    border-bottom: 1px solid var(--paper-faint);
    transition: border-color 0.3s var(--ease-out);
  }

  .experiment:hover {
    border-bottom-color: var(--accent);
  }

  .exp-info {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  .exp-title {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 500;
  }

  .exp-tag {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    padding: 0.25rem 0.625rem;
    border: 1px solid var(--paper-faint);
    color: var(--paper-dim);
  }

  .exp-status {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--paper-dim);
  }

  .exp-status.live {
    color: var(--accent);
  }

  .exp-status.exploring {
    color: var(--paper);
  }
</style>
