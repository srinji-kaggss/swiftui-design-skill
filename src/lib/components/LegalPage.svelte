<!-- LWDS Legal Page — generic layout for all legal documents -->
<script lang="ts">
  import type { LegalSection } from '../data/legal/privacy';
  import { renderMarkdown } from '../data/legal/markdown';
  import { useLocale } from '../i18n/context.svelte';

  let {
    eyebrow = '',
    title = '',
    heroBody = '',
    summaryEyebrow = '',
    summaryTitle = '',
    summaryBody = '',
    sections = [] as LegalSection[],
    markdownContent = '',
    relatedLinks = [] as { href: string; label: string; tag: string; description: string }[],
    ctaTitle = '',
    ctaBody = '',
    ctaHref = '',
    ctaLabel = '',
  }: {
    eyebrow?: string;
    title?: string;
    heroBody?: string;
    summaryEyebrow?: string;
    summaryTitle?: string;
    summaryBody?: string;
    sections?: LegalSection[];
    markdownContent?: string;
    relatedLinks?: { href: string; label: string; tag: string; description: string }[];
    ctaTitle?: string;
    ctaBody?: string;
    ctaHref?: string;
    ctaLabel?: string;
  } = $props();

  const locale = useLocale();
  const homeHref = $derived(locale.dict.buttons.back ? '#/' : '#/');
</script>

<section class="section" style="padding-top: var(--space-2xl);">
  <div class="container">
    <a href={homeHref} class="btn btn--link" data-reveal>&larr; {locale.dict.buttons.back}</a>
  </div>
</section>

<section class="section" data-reveal>
  <div class="container has-content-width">
    <span class="is-style-eyebrow">{eyebrow}</span>
    <h1 class="section__headline" style="font-size: var(--text-display-2); max-width: 20ch;">{title}</h1>
    <p style="font-size: var(--text-body); line-height: 1.6; color: var(--color-muted-ink); max-width: 60ch; margin-top: var(--space-sm);">{heroBody}</p>
  </div>
</section>

<section class="section" data-reveal>
  <div class="container has-content-width">
    <div class="lw-card" style="padding: var(--space-lg);">
      <span class="is-style-eyebrow">{summaryEyebrow}</span>
      <h2 style="font-size: var(--text-h1); margin-bottom: var(--space-sm);">{summaryTitle}</h2>
      <p style="font-size: var(--text-body); line-height: 1.7; color: var(--color-muted-ink);">{summaryBody}</p>
    </div>
  </div>
</section>

{#if relatedLinks.length > 0}
  <section class="section" data-reveal>
    <div class="container has-content-width">
      <span class="is-style-eyebrow">Related pages</span>
      <h2 style="font-size: var(--text-h2); margin-bottom: var(--space-md);">References</h2>
      <div class="grid grid-columns--2" style="gap: var(--space-md);">
        {#each relatedLinks as link}
          <a href={link.href} class="lw-card" style="text-decoration: none; display: block;">
            <span class="is-style-tag" style="margin-bottom: var(--space-xs);">{link.tag}</span>
            <h3 style="font-size: var(--text-h3); margin-bottom: var(--space-2xs);">{link.label}</h3>
            <p style="font-size: var(--text-small); color: var(--color-muted-ink); line-height: 1.5;">{link.description}</p>
          </a>
        {/each}
      </div>
    </div>
  </section>
{/if}

{#if sections.length > 0}
  <section class="section" data-reveal>
    <div class="container has-content-width">
      {#each sections as section}
        <article id={section.id} style="margin-bottom: var(--space-lg); scroll-margin-top: 100px;">
          <div style="display: flex; gap: var(--space-sm); align-items: baseline;">
            <span style="font-family: var(--font-mono); font-size: var(--text-caption); color: var(--color-brand); min-width: 2rem;">{section.number}</span>
            <h2 style="font-size: var(--text-h2); flex: 1;">{section.title}</h2>
          </div>
          <div style="margin-left: calc(2rem + var(--space-sm)); margin-top: var(--space-xs);">
            {#each section.body as para}
              <p style="font-size: var(--text-body); line-height: 1.7; color: var(--color-muted-ink); margin-bottom: var(--space-xs);">{para}</p>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </section>
{/if}

{#if markdownContent}
  <section class="section" data-reveal>
    <div class="container has-content-width">
      <div class="legal-markdown">
        {@html renderMarkdown(markdownContent)}
      </div>
    </div>
  </section>
{/if}

{#if ctaTitle}
  <section class="section" data-reveal style="padding-bottom: var(--space-2xl);">
    <div class="container has-content-width">
      <div class="lw-card lw-card--seam" style="padding: var(--space-lg);">
        <h2 style="font-size: var(--text-h1); margin-bottom: var(--space-sm);">{ctaTitle}</h2>
        <p style="font-size: var(--text-body); line-height: 1.6; color: var(--color-muted-ink); max-width: 50ch; margin-bottom: var(--space-md);">{ctaBody}</p>
        <a href={ctaHref} class="btn btn--primary">{ctaLabel}</a>
      </div>
    </div>
  </section>
{/if}
