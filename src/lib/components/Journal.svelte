<script lang="ts">
  import { journalPosts } from '../data/content';
  import { scrollReveal } from '../actions/scroll';
</script>

<section id="journal" class="journal">
  <div class="container">
    <div class="section-header">
      <span class="section-number">05</span>
      <h2 class="section-title">Journal</h2>
    </div>
    <div class="journal-list">
      {#each journalPosts as post, i (post.slug)}
        <article
          class="post"
          use:scrollReveal={{ parallax: 20, threshold: 0.15 }}
        >
          <div class="post-info">
            <span class="post-eyebrow">{post.eyebrow}</span>
            <h3 class="post-title">{post.title}</h3>
            <p class="post-excerpt">{post.excerpt}</p>
            <div class="post-tags">
              {#each post.tags as tag (tag)}
                <span class="post-tag">{tag}</span>
              {/each}
            </div>
          </div>
          <div class="post-meta">
            <span class="post-date">{post.date}</span>
            <span class="post-arrow" aria-hidden="true">→</span>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .journal {
    padding: var(--space-section-y) 0;
    border-top: 1px solid var(--paper-faint);
  }

  .container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 var(--container-gutter);
  }

  .journal-list {
    display: grid;
    gap: 0;
  }

  .post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-8) 0;
    border-bottom: 1px solid var(--paper-faint);
    transition: border-color var(--dur-base) var(--ease-default);
    gap: var(--space-6);
  }

  .post:hover {
    border-bottom-color: var(--accent);
  }

  .post:hover .post-arrow {
    color: var(--accent);
    transform: translateX(8px);
  }

  .post-info {
    flex: 1;
    min-width: 0;
  }

  .post-eyebrow {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--paper-dim);
    display: block;
    margin-bottom: var(--space-2);
  }

  .post-title {
    font-family: var(--font-display);
    font-size: var(--fs-h4);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: var(--space-3);
  }

  .post-excerpt {
    font-size: var(--fs-base);
    color: var(--paper-dim);
    line-height: 1.5;
    margin-bottom: var(--space-4);
  }

  .post-tags {
    display: flex;
    gap: var(--space-2);
    flex-wrap: wrap;
  }

  .post-tag {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    padding: 0.25rem 0.625rem;
    border: 1px solid var(--paper-faint);
    color: var(--paper-dim);
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    flex-shrink: 0;
  }

  .post-date {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--paper-faint);
  }

  .post-arrow {
    font-size: 1.5rem;
    color: var(--paper-faint);
    transition: transform var(--dur-base) var(--ease-default), color var(--dur-base) var(--ease-default);
  }

  @media (max-width: 640px) {
    .post {
      flex-direction: column;
      align-items: flex-start;
    }
    .post-meta { align-self: flex-end; }
  }
</style>
