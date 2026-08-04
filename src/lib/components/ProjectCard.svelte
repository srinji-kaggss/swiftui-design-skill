<script lang="ts">
  import type { Project } from '../data/projects';
  import { scrollReveal } from '../actions/scrollReveal';

  let { project, index }: { project: Project; index: number } = $props();

  // Alternate rotation/scale for staggered feel — derived from index
  const rotation = $derived(index % 2 === 0 ? -1.5 : 1.5);
  const scale: [number, number] = [0.94, 1];
  const parallax = 60;
</script>

<article
  class="card"
  use:scrollReveal={{ scale, parallax, rotation, startOpacity: 0, threshold: 0.1 }}
  style="--delay: {index * 80}ms"
>
  <div class="card-number">{String(index + 1).padStart(2, '0')}</div>
  <div class="card-body">
    <div class="card-meta">
      <span class="card-category">{project.category}</span>
      <span class="card-year">{project.year}</span>
    </div>
    <h3 class="card-title">{project.title}</h3>
    <p class="card-desc">{project.description}</p>
    <div class="card-tags">
      {#each project.tags as tag (tag)}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </div>
  <div class="card-arrow" aria-hidden="true">→</div>
</article>

<style>
  .card {
    position: relative;
    display: flex;
    align-items: stretch;
    background: var(--ink-2);
    border: 1px solid var(--paper-faint);
    padding: var(--space-md);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    overflow: hidden;
    transition: border-color 0.3s var(--ease-out), background 0.3s var(--ease-out);
  }

  .card:hover {
    border-color: var(--accent);
    background: var(--ink-3);
  }

  .card:hover .card-arrow {
    color: var(--accent);
    transform: translateX(8px);
  }

  .card:hover .card-number {
    color: var(--accent);
  }

  .card-number {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--paper-faint);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-right: var(--space-sm);
    transition: color 0.3s var(--ease-out);
    flex-shrink: 0;
  }

  .card-body {
    flex: 1;
  }

  .card-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--space-sm);
  }

  .card-category {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--paper-dim);
  }

  .card-year {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    color: var(--paper-faint);
  }

  .card-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: var(--space-sm);
  }

  .card-desc {
    font-size: 0.9375rem;
    line-height: 1.5;
    color: var(--paper-dim);
    max-width: 32rem;
    margin-bottom: var(--space-sm);
  }

  .card-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    padding: 0.25rem 0.625rem;
    border: 1px solid var(--paper-faint);
    color: var(--paper-dim);
  }

  .card-arrow {
    align-self: flex-end;
    font-size: 1.5rem;
    color: var(--paper-faint);
    transition: transform 0.3s var(--ease-out), color 0.3s var(--ease-out);
    margin-left: var(--space-sm);
    flex-shrink: 0;
  }
</style>
