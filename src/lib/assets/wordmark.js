/* Logical Works — constructed wordmark.
   The letters are NOT a font. Each glyph is a set of strokes on a shared 140-unit grid:
   one stroke weight, one round cap, one circle radius. That is the whole alphabet.
   Because every glyph is a stroke, the wordmark can draw itself — which is what the
   world-build sequence in guidelines/brand-wordmark-build.html does.

   Framework-agnostic on purpose. Works as:
     <script type="module"> import { renderWordmark } from './wordmark.js'
     Svelte:  {@html renderWordmark({ text:'Logical Works' })}
     Motion:  import { animate, stagger } from 'motion'  ->  buildWordmark(svg, { animate, stagger })
*/

export const metrics = { cap:140, x:100, baseline:140, desc:182, stroke:18, radius:41, tracking:6, wordGap:44 };

const M = metrics;
const circle = (cx, cy, r) => ({ d: `M${cx - r},${cy} A${r},${r} 0 1 1 ${cx + r},${cy} A${r},${r} 0 1 1 ${cx - r},${cy}`, len: 2 * Math.PI * r });
const line = (x1, y1, x2, y2) => ({ d: `M${x1},${y1} L${x2},${y2}` });
const path = (d) => ({ d });

/* advance = the glyph's own width; strokes are drawn in glyph space from x=0 */
export const glyphs = {
  'L': { adv: 88,  s: [ line(9,0,9,140), line(9,140,74,140) ] },
  'o': { adv:108,  s: [ circle(50,90,41) ] },
  'g': { adv:108,  s: [ circle(50,90,41), line(91,90,91,152), path('M91,152 A26,26 0 0 1 52,170') ] },
  'i': { adv: 26,  s: [ line(9,40,9,140), line(9,10,9,10) ] },
  'c': { adv:100,  s: [ path('M75.2,57.7 A41,41 0 1 0 75.2,122.3') ] },
  'a': { adv:108,  s: [ circle(50,90,41), line(91,49,91,140) ] },
  'l': { adv: 28,  s: [ line(9,0,9,140) ] },
  'W': { adv:142,  s: [ path('M9,0 L38,140 L67,34 L96,140 L125,0') ] },
  'r': { adv: 70,  s: [ line(9,40,9,140), path('M9,88 A38,38 0 0 1 56,52') ] },
  'k': { adv: 90,  s: [ line(9,0,9,140), line(74,58,12,104), line(34,88,78,140) ] },
  's': { adv: 96,  s: [ path('M78,62 C74,48 22,45 22,66 C22,84 76,86 76,112 C76,133 24,133 18,118') ] },
  ' ': { adv: M.wordGap, s: [] }
};

export function layout(text = 'Logical Works') {
  let x = 0; const out = [];
  for (const ch of text) {
    const g = glyphs[ch];
    if (!g) { x += M.wordGap; continue; }
    out.push({ ch, x, strokes: g.s });
    x += g.adv + (ch === ' ' ? 0 : M.tracking);
  }
  return { items: out, width: Math.max(0, x - M.tracking) };
}

export function renderWordmark(opts = {}) {
  const { text = 'Logical Works', color = 'currentColor', className = 'lw-wordmark', seam = true } = opts;
  const { items, width } = layout(text);
  const pad = M.stroke / 2 + 2;
  const vb = `${-pad} ${-pad} ${width + pad * 2} ${M.desc + pad * 2}`;
  let i = 0, body = '';
  for (const it of items) {
    body += `<g transform="translate(${it.x},0)" data-glyph="${it.ch}">`;
    for (const st of it.strokes) body += `<path d="${st.d}" data-i="${i++}"></path>`;
    body += '</g>';
  }
  const seamMark = seam ? `<line class="lw-wordmark-seam" x1="0" y1="${M.desc}" x2="${width}" y2="${M.desc}" stroke-width="2" opacity="0"></line>` : '';
  return `<svg class="${className}" viewBox="${vb}" role="img" aria-label="${text}" fill="none" stroke="${color}" stroke-width="${M.stroke}" stroke-linecap="round" stroke-linejoin="round">${body}${seamMark}</svg>`;
}

/* The build: every stroke starts undrawn, then arrives in reading order.
   Pass Motion One's animate + stagger (or GSAP-equivalent shims). No dependency here. */
export function buildWordmark(svg, { animate, stagger, duration = 0.9, delay = 0.34 } = {}) {
  const strokes = [...svg.querySelectorAll('path[data-i]')];
  strokes.forEach(p => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; });
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !animate) {
    strokes.forEach(p => { p.style.strokeDashoffset = 0; });
    return Promise.resolve();
  }
  return animate(strokes, { strokeDashoffset: 0 }, {
    duration, delay: stagger ? stagger(delay / 4) : 0, easing: [0.22, 1, 0.28, 1]
  }).finished;
}

globalThis.LWWordmark = { metrics, glyphs, layout, renderWordmark, buildWordmark };
