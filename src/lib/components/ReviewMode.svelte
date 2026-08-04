<!-- Review Mode — productionized design annotation tool. Zero deps.
     Toggle: floating button (bottom-right) or keyboard (Shift+D).
     Click any element to annotate it. Notes auto-save to localStorage.
     Copy: uses navigator.clipboard with execCommand fallback.
-->
<script lang="ts">
  type Annotation = {
    id: string;
    selector: string;
    tag: string;
    section: string;
    textPreview: string;
    note: string;
    timestamp: string;
  };

  const STORAGE_KEY = 'lw-review-notes';

  let active = $state(false);
  let annotations = $state<Annotation[]>(loadAnnotations());
  let selectedEl = $state<HTMLElement | null>(null);
  let currentNote = $state('');
  let popupX = $state(0);
  let popupY = $state(0);
  let showPopup = $state(false);
  let panelOpen = $state(annotations.length > 0);
  let copied = $state(false);
  let copyError = $state('');

  function loadAnnotations(): Annotation[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  }

  function saveAnnotations(list: Annotation[]) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {}
  }

  function getElementInfo(el: HTMLElement): { selector: string; tag: string; section: string; textPreview: string } {
    const tag = el.tagName.toLowerCase();
    const id = el.id ? '#' + el.id : '';
    const classes = el.className && typeof el.className === 'string'
      ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.')
      : '';
    const selector = tag + id + classes;

    let section = '';
    let walker: HTMLElement | null = el;
    for (let i = 0; i < 8 && walker; i++) {
      const s = walker.closest('section, header, footer, main, article, [data-reveal], [class*="section"]');
      if (s) {
        const heading = s.querySelector('h1, h2, h3, .is-style-eyebrow');
        section = heading?.textContent?.trim().slice(0, 60) || s.tagName.toLowerCase();
        break;
      }
      walker = walker.parentElement;
    }

    const textPreview = (el.textContent || '').trim().slice(0, 80);
    return { selector, tag, section, textPreview };
  }

  function onReviewClick(e: MouseEvent) {
    if (!active) return;
    e.preventDefault();
    e.stopPropagation();

    const stack = document.elementsFromPoint(e.clientX, e.clientY);
    let target: HTMLElement | null = null;
    for (const el of stack) {
      if (el.classList?.contains('review-overlay') || el.classList?.contains('review-panel') ||
          el.classList?.contains('review-popup') || el.classList?.contains('review-trigger') ||
          el.classList?.contains('review-fab') || el.classList?.contains('review-panel-toggle') ||
          el.closest('.review-panel') || el.closest('.review-popup') ||
          el.closest('.review-trigger') || el.closest('.review-fab') ||
          el.closest('.review-panel-toggle')) {
        continue;
      }
      target = el as HTMLElement;
      break;
    }
    if (!target) return;

    selectedEl = target;
    const info = getElementInfo(target);
    const rect = target.getBoundingClientRect();

    popupX = Math.min(rect.left + 10, window.innerWidth - 340);
    popupY = Math.min(rect.bottom + 8, window.innerHeight - 200);
    showPopup = true;
    currentNote = '';

    document.querySelectorAll('.review-highlight').forEach(el => el.classList.remove('review-highlight'));
    target.classList.add('review-highlight');
  }

  function saveAnnotation() {
    if (!selectedEl || !currentNote.trim()) {
      showPopup = false;
      return;
    }

    const info = getElementInfo(selectedEl);
    const ann: Annotation = {
      id: 'rev-' + Date.now(),
      selector: info.selector,
      tag: info.tag,
      section: info.section,
      textPreview: info.textPreview,
      note: currentNote.trim(),
      timestamp: new Date().toISOString().slice(11, 19),
    };
    annotations = [...annotations, ann];
    saveAnnotations(annotations);
    selectedEl.classList.remove('review-highlight');
    selectedEl = null;
    showPopup = false;
    currentNote = '';
    panelOpen = true;
  }

  function cancelAnnotation() {
    if (selectedEl) selectedEl.classList.remove('review-highlight');
    selectedEl = null;
    showPopup = false;
    currentNote = '';
  }

  function deleteAnnotation(id: string) {
    annotations = annotations.filter(a => a.id !== id);
    saveAnnotations(annotations);
  }

  async function exportAnnotations() {
    if (annotations.length === 0) return;
    const lines = annotations.map((a, i) => {
      return [
        '## ' + (i + 1) + '. [' + a.selector + '] in "' + a.section + '"',
        '   Text: "' + a.textPreview + '"',
        '   Note: ' + a.note,
        '   Time: ' + a.timestamp,
        '',
      ].join('\n');
    });
    const text = '# Design Review — ' + annotations.length + ' item(s)\n\n' + lines.join('\n');

    copyError = '';
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      // Fallback: use a temporary textarea + execCommand
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        ta.style.top = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        copied = true;
      } catch {
        copyError = 'Copy failed — text is in console';
        console.log(text);
      }
    }
    if (copied) setTimeout(() => { copied = false; }, 2500);
  }

  function clearAll() {
    annotations = [];
    saveAnnotations(annotations);
    document.querySelectorAll('.review-highlight').forEach(el => el.classList.remove('review-highlight'));
  }

  function toggleActive() {
    active = !active;
    if (!active) {
      cancelAnnotation();
      document.querySelectorAll('.review-highlight').forEach(el => el.classList.remove('review-highlight'));
    }
  }

  $effect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.shiftKey && e.key === 'D' && !(e.target as HTMLElement)?.matches('input, textarea')) {
        e.preventDefault();
        toggleActive();
      }
      if (e.key === 'Escape' && active) {
        if (showPopup) cancelAnnotation();
        else toggleActive();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });
</script>

<!-- Trigger button -->
<button
  class="review-fab"
  class:review-fab--active={active}
  onclick={toggleActive}
  aria-label="Toggle review mode"
  title="Review mode (Shift+D)"
>
  {active ? '×' : '✎'}
</button>

<!-- Inline highlight styles -->
<svelte:head>
  {@html '<style>.review-highlight{outline:2px solid var(--color-brand)!important;outline-offset:2px!important;cursor:crosshair!important;}</style>'}
</svelte:head>

<!-- Overlay when active -->
{#if active}
  <div
    class="review-overlay"
    onclick={onReviewClick}
    role="presentation"
  ></div>
  {#if showPopup}
    <div class="review-popup" style="left:{popupX}px;top:{popupY}px;">
      <div class="review-popup__selector">
        {selectedEl?.tagName?.toLowerCase()}{selectedEl?.className && typeof selectedEl.className === 'string' ? '.' + selectedEl.className.trim().split(/\s+/).slice(0,2).join('.') : ''}
      </div>
      <textarea
        class="review-popup__input"
        placeholder="What's wrong here? (Enter to save, Esc to cancel)"
        bind:value={currentNote}
        onkeydown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); saveAnnotation(); }
          if (e.key === 'Escape') { e.preventDefault(); cancelAnnotation(); }
        }}
        autofocus
      ></textarea>
      <div class="review-popup__actions">
        <button class="review-popup__btn review-popup__btn--save" onclick={saveAnnotation}>Save note</button>
        <button class="review-popup__btn review-popup__btn--cancel" onclick={cancelAnnotation}>Cancel</button>
      </div>
    </div>
  {/if}
{/if}

<!-- Notes panel — visible whenever there are annotations, not only in review mode -->
{#if annotations.length > 0}
  <button class="review-panel-toggle" onclick={() => panelOpen = !panelOpen}>
    {panelOpen ? '▼' : '▲'} {annotations.length} note{annotations.length !== 1 ? 's' : ''}
  </button>
{/if}
{#if panelOpen && annotations.length > 0}
  <div class="review-panel">
    <div class="review-panel__header">
      <span class="review-panel__title">Review Notes ({annotations.length})</span>
      <div class="review-panel__header-actions">
        <button class="review-panel__btn review-panel__btn--primary" onclick={exportAnnotations}>
          {copied ? '✓ Copied!' : copyError ? '⚠ Check console' : 'Copy all'}
        </button>
        <button class="review-panel__btn review-panel__btn--danger" onclick={clearAll}>Clear</button>
      </div>
    </div>
    <div class="review-panel__list">
      {#each annotations as ann, i}
        <div class="review-panel__item">
          <div class="review-panel__item-header">
            <span class="review-panel__item-num">{i + 1}</span>
            <span class="review-panel__item-selector">{ann.selector}</span>
            <button class="review-panel__item-del" onclick={() => deleteAnnotation(ann.id)}>×</button>
          </div>
          {#if ann.section}
            <div class="review-panel__item-section">in: {ann.section}</div>
          {/if}
          {#if ann.textPreview}
            <div class="review-panel__item-text">"{ann.textPreview}"</div>
          {/if}
          <div class="review-panel__item-note">{ann.note}</div>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .review-fab {
    position: fixed; bottom: 1rem; right: 1rem; z-index: 997;
    width: 44px; height: 44px; border-radius: 50%;
    background: var(--color-ink); color: var(--color-bg);
    border: 1px solid var(--color-border);
    font-size: 18px; cursor: pointer; display: flex;
    align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    transition: background var(--duration-fast) var(--ease-standard),
                transform var(--duration-fast) var(--ease-standard);
    font-family: var(--font-body); line-height: 1;
  }
  .review-fab:hover { transform: scale(1.08); }
  .review-fab--active {
    background: var(--color-brand);
    color: var(--color-on-brand);
  }

  .review-overlay {
    position: fixed; inset: 0; z-index: 998; cursor: crosshair;
  }

  .review-popup {
    position: fixed; z-index: 1001;
    width: 320px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    padding: 0.75rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    font-family: var(--font-body);
  }
  .review-popup__selector {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-brand); margin-bottom: 0.5rem;
    text-transform: uppercase; letter-spacing: var(--tracking-label);
  }
  .review-popup__input {
    width: 100%; min-height: 80px; resize: vertical;
    background: var(--color-bg); border: 1px solid var(--color-border);
    border-radius: var(--radius-control); color: var(--color-ink);
    font-family: var(--font-body); font-size: var(--text-small);
    padding: 0.5rem; line-height: 1.5;
  }
  .review-popup__input:focus { outline: 2px solid var(--color-brand); outline-offset: 1px; }
  .review-popup__actions { display: flex; gap: 0.5rem; margin-top: 0.5rem; justify-content: flex-end; }
  .review-popup__btn {
    font-family: var(--font-mono); font-size: var(--text-caption);
    padding: 0.4em 0.8em; border-radius: var(--radius-control);
    border: 1px solid var(--color-border); cursor: pointer;
    text-transform: uppercase; letter-spacing: var(--tracking-label);
    transition: background var(--duration-fast) var(--ease-standard);
  }
  .review-popup__btn--save { background: var(--color-brand); color: var(--color-on-brand); border-color: var(--color-brand); }
  .review-popup__btn--save:hover { background: var(--color-brand-strong); }
  .review-popup__btn--cancel { background: transparent; color: var(--color-muted-ink); }
  .review-popup__btn--cancel:hover { background: var(--color-surface); }

  .review-panel-toggle {
    position: fixed; bottom: 1rem; right: 4rem; z-index: 997;
    background: var(--color-surface); border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-ink); padding: 0.5em 0.8em; cursor: pointer;
    text-transform: uppercase; letter-spacing: var(--tracking-label);
    transition: border-color var(--duration-fast) var(--ease-standard);
  }
  .review-panel-toggle:hover { border-color: var(--color-brand); }

  .review-panel {
    position: fixed; bottom: 3.5rem; right: 1rem; z-index: 1000;
    width: 380px; max-height: 60vh; overflow-y: auto;
    background: var(--color-surface); border: 1px solid var(--color-border);
    border-radius: var(--radius-control);
    box-shadow: 0 12px 48px rgba(0,0,0,0.5);
    font-family: var(--font-body);
  }
  .review-panel__header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.75rem 1rem; border-bottom: 1px solid var(--color-hairline);
    position: sticky; top: 0; background: var(--color-surface); z-index: 1;
  }
  .review-panel__title {
    font-family: var(--font-mono); font-size: var(--text-small);
    text-transform: uppercase; letter-spacing: var(--tracking-label);
    color: var(--color-brand);
  }
  .review-panel__header-actions { display: flex; gap: 0.5rem; }
  .review-panel__btn {
    font-family: var(--font-mono); font-size: var(--text-caption);
    padding: 0.3em 0.6em; border-radius: var(--radius-control);
    border: 1px solid var(--color-border); cursor: pointer;
    background: var(--color-bg); color: var(--color-ink);
    text-transform: uppercase; letter-spacing: var(--tracking-label);
    transition: border-color var(--duration-fast) var(--ease-standard);
  }
  .review-panel__btn--primary {
    background: var(--color-brand); color: var(--color-on-brand);
    border-color: var(--color-brand);
  }
  .review-panel__btn--primary:hover { background: var(--color-brand-strong); }
  .review-panel__btn:hover { border-color: var(--color-brand); }
  .review-panel__btn--danger:hover { border-color: var(--color-danger); color: var(--color-danger); }

  .review-panel__list { padding: 0.5rem 0; }
  .review-panel__item { padding: 0.75rem 1rem; border-bottom: 1px solid var(--color-hairline); }
  .review-panel__item:last-child { border-bottom: none; }
  .review-panel__item-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem; }
  .review-panel__item-num { font-family: var(--font-mono); font-size: var(--text-caption); color: var(--color-brand); min-width: 1.5rem; }
  .review-panel__item-selector {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-muted-ink); flex: 1; overflow: hidden;
    text-overflow: ellipsis; white-space: nowrap;
  }
  .review-panel__item-del {
    background: none; border: none; cursor: pointer;
    color: var(--color-muted-ink); font-size: 1rem; line-height: 1; padding: 0 0.25rem;
  }
  .review-panel__item-del:hover { color: var(--color-danger); }
  .review-panel__item-section {
    font-family: var(--font-mono); font-size: var(--text-caption);
    color: var(--color-muted-ink); margin-bottom: 0.25rem;
    text-transform: uppercase; letter-spacing: var(--tracking-label);
  }
  .review-panel__item-text {
    font-size: var(--text-caption); color: var(--color-muted-ink);
    margin-bottom: 0.25rem; font-style: italic;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .review-panel__item-note { font-size: var(--text-small); color: var(--color-ink); line-height: 1.5; }

  @media (max-width: 768px) {
    .review-popup { width: calc(100vw - 2rem); }
    .review-panel { width: calc(100vw - 2rem); right: 1rem; }
  }
</style>
