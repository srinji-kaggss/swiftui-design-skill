/**
 * Minimal markdown-to-HTML renderer for legal documents.
 * Handles: ##/### headings, paragraphs, - bullet lists, **bold**, *italic*, links.
 * Zero deps. Only what the legal docs need.
 */

export function renderMarkdown(md: string): string {
  const lines = md.split('\n');
  const html: string[] = [];
  let inList = false;

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (!line.trim()) {
      if (inList) { html.push('</ul>'); inList = false; }
      continue;
    }

    // Skip horizontal rules
    if (/^---+$/.test(line.trim())) continue;

    // Headings
    const h3 = line.match(/^###\s+(.+)$/);
    const h2 = line.match(/^##\s+(.+)$/);
    const h1 = line.match(/^#\s+(.+)$/);
    if (h3) {
      if (inList) { html.push('</ul>'); inList = false; }
      const slug = h3[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html.push(`<h3 id="${slug}">${inline(h3[1])}</h3>`);
      continue;
    }
    if (h2) {
      if (inList) { html.push('</ul>'); inList = false; }
      const slug = h2[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html.push(`<h2 id="${slug}">${inline(h2[1])}</h2>`);
      continue;
    }
    if (h1) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<h1>${inline(h1[1])}</h1>`);
      continue;
    }

    // Bullet list items
    const bullet = line.match(/^-\s+(.+)$/);
    if (bullet) {
      if (!inList) { html.push('<ul>'); inList = true; }
      html.push(`<li>${inline(bullet[1])}</li>`);
      continue;
    }

    // Regular paragraph
    if (inList) { html.push('</ul>'); inList = false; }
    html.push(`<p>${inline(line)}</p>`);
  }
  if (inList) html.push('</ul>');

  return html.join('\n');
}

function inline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}

export function parseMarkdownSections(md: string): { heading: string; body: string }[] {
  const lines = md.split('\n');
  const sections: { heading: string; body: string }[] = [];
  let current: { heading: string; body: string } | null = null;

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^---+$/.test(line.trim())) continue;
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      if (current) sections.push(current);
      current = { heading: h2[1], body: '' };
      continue;
    }
    if (current) {
      current.body += line + '\n';
    }
  }
  if (current) sections.push(current);
  return sections;
}
