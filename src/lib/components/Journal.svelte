<script lang="ts">
  import { journalPosts } from '../data/content';
</script>

<section id="journal" class="container">
  <div style="padding: var(--space-2xl) 0;">
    <div class="grid" style="margin-bottom: var(--space-xl);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>Journal</span>
        <h2 class="section__headline" data-reveal>Thinking out loud.</h2>
      </div>
    </div>
    <div class="journal-list">
      {#each journalPosts as post (post.slug)}
        <article class="journal-item" data-reveal data-reveal-batch="true" data-cursor data-cursor-text="Read">
          <div class="journal-item__info">
            <span class="journal-item__eyebrow">{post.eyebrow}</span>
            <h3 class="journal-item__title">{post.title}</h3>
            <p class="journal-item__excerpt">{post.excerpt}</p>
            <div class="tag-list">
              {#each post.tags as tag (tag)}
                <span>{tag}</span>
              {/each}
            </div>
          </div>
          <div class="journal-item__meta">
            <span class="journal-item__date">{post.date}</span>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .journal-list { display: grid; gap: 0; }
  .journal-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: var(--space-md) 0;
    border-top: 1px solid var(--color-border);
    transition: border-color var(--duration-standard) var(--ease-standard);
    gap: var(--space-sm);
  }
  .journal-item:last-child { border-bottom: 1px solid var(--color-border); }
  .journal-item:hover { border-top-color: var(--color-brand); }
  .journal-item__info { flex: 1; min-width: 0; }
  .journal-item__eyebrow {
    font-family: var(--font-mono); font-size: var(--text-caption);
    text-transform: uppercase; letter-spacing: var(--tracking-label);
    color: var(--color-brand); display: block; margin-bottom: 0.5em;
  }
  .journal-item__title {
    font-size: var(--text-h3); font-weight: var(--weight-display);
    line-height: var(--leading-display);
    margin-bottom: 0.5em;
  }
  .journal-item__excerpt {
    font-size: var(--text-body); color: var(--color-muted-ink);
    line-height: var(--leading-body); margin-bottom: var(--space-2xs);
    font-family: var(--font-body);
  }
  .journal-item__meta { flex-shrink: 0; }
  .journal-item__date {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-muted-ink); font-variant-numeric: tabular;
  }
  @media (max-width: 768px) {
    .journal-item { flex-direction: column; align-items: flex-start; }
    .journal-item__meta { align-self: flex-end; }
  }
</style>
