<script lang="ts">
  import { journalPosts } from '../data/content';
</script>

<section id="journal" class="container">
  <div style="padding: var(--spacing-x-large) 0;">
    <div class="grid" style="margin-bottom: var(--spacing-medium-large);">
      <div class="col-12">
        <span class="is-style-eyebrow" data-reveal>Journal</span>
        <h2 class="section__headline" data-reveal>Thinking out loud.</h2>
      </div>
    </div>
    <div class="journal-list">
      {#each journalPosts as post, i (post.slug)}
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
    padding: var(--spacing-small) 0;
    border-bottom: 1px solid var(--color-gray-300);
    transition: border-color 0.35s var(--default-transition-easing);
    gap: var(--spacing-small);
  }
  .journal-item:hover { border-bottom-color: var(--color-green); }
  .journal-item__info { flex: 1; min-width: 0; }
  .journal-item__eyebrow {
    font-family: var(--font-mono); font-size: var(--font-size-x-small);
    text-transform: uppercase; letter-spacing: -0.02em;
    color: var(--color-gray-400); display: block; margin-bottom: 0.5em;
  }
  .journal-item__title {
    font-size: var(--font-size-h4); font-weight: 500;
    letter-spacing: var(--letter-spacing-h4); line-height: var(--line-height-h4);
    margin-bottom: 0.5em;
  }
  .journal-item__excerpt {
    font-size: var(--font-size-base); color: var(--color-gray-400);
    line-height: 1.5; margin-bottom: var(--spacing-tiny);
  }
  .journal-item__meta { flex-shrink: 0; }
  .journal-item__date {
    font-family: var(--font-mono); font-size: var(--font-size-x-small);
    color: var(--color-gray-500);
  }
  @media (max-width: 768px) {
    .journal-item { flex-direction: column; align-items: flex-start; }
    .journal-item__meta { align-self: flex-end; }
  }
</style>
