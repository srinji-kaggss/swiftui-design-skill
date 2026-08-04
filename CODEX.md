# Website Codex — Systematic Pattern Extraction

## Source Matrix

| Pattern | Source | File | Port Strategy |
|---------|--------|------|---------------|
| **Color tokens** | lgwks globals.css | `src/app/globals.css:1-80` | Copy token structure, swap palette to Design-I-like black/amber |
| **Fluid type scale** | afternow main.css | `:root --font-size-*` | Copy verbatim — same clamp() values |
| **Spacing scale** | afternow main.css | `:root --spacing-*` | Copy verbatim |
| **Echo layers** | afternow _afternow-base.css | `.echo`, `.echo__layer` | Copy CSS, port JS from afternow home.js scroll velocity logic |
| **Preloader** | lgwks PageLoadVeil + afternow | `globals.css .page-load-*` | Port PageLoadVeil component + CSS |
| **Button system** | afternow _afternow-base.css | `.btn`, `btn-icon-move-in/out` | Copy verbatim — the arrow clip-path animation is pure CSS |
| **Tag pills** | afternow main.css | `.tag-list > *`, `.is-style-tag` | Copy verbatim |
| **Eyebrow labels** | afternow main.css | `.is-style-eyebrow` | Copy verbatim |
| **Scroll reveal** | lgwks useScrollReveal | `src/hooks/useScrollReveal.ts` | Port as Svelte action — IntersectionObserver + data-reveal |
| **Letter hero title** | lgwks AnimatedHeroTitle | `src/components/AnimatedHeroTitle.tsx` | Port as Svelte component — letter-by-letter 45ms stagger |
| **Pinned hero** | afternow home.js | GSAP ScrollTrigger pin | Use CSS position:sticky + scroll-driven clip-path |
| **Hero video reveal** | afternow home.js | `clip-path: inset(50%→0%)` | CSS keyframe animation |
| **Sticky footer** | afternow _afternow-base.css | `.site-footer position:sticky` | Copy verbatim |
| **Grid system** | afternow _afternow-base.css | `.grid`, `.col-*` | 12-col grid, copy verbatim |
| **Section structure** | afternow | `.section__headline`, `.section__cta` | Copy verbatim |
| **Marquee** | lgwks ClientMarquee | `src/components/ClientMarquee.tsx` | Port as Svelte — CSS keyframe, no dep |
| **Custom cursor** | lgwks CustomCursor | `src/components/CustomCursor.tsx` | Port as Svelte action |
| **Floating icons** | lgwks FloatingIcons | `src/components/FloatingIcons.tsx` | Port as Svelte — scroll parallax shapes |
| **Burst button** | lgwks BurstButton | `src/components/BurstButton.tsx` | Port as Svelte — IntersectionObserver trigger |
| **Page hero** | lgwks PageHero | `src/components/PageHero.tsx` | Port as Svelte component |
| **Card hover** | afternow archive-item | `.archive-item:hover .archive-item__cta` | Copy grid expansion on hover |
| **Content width** | afternow | `--content-width:min(52.5rem,100%)` | Copy verbatim |
| **Border radius** | afternow | `--site-content-border-radius:0.75rem` | Copy verbatim |
| **Theme color swap** | lgwks globals.css | `:root[data-theme="dark"]` | We're dark-only — use Design-I-like palette |

## Palette Mapping (Design-I-like → our tokens)

| afternow/lgwks token | their value | our value | source |
|---------------------|------------|----------|--------|
| --color-black | #000 / #1C1A0F | #0A0A0A | Design-I-like bg |
| --color-white | #fff / #F4F0E6 | #FAFAF7 | Design-I-like text |
| --color-gray-100 | #EAE4D4 | #141414 | card surface |
| --color-gray-200 | #DFD8C6 | #1E1E1E | raised surface |
| --color-gray-300 | #D6CEB8 | #333333 | borders |
| --color-gray-400 | #6B6550 | #888888 | muted text |
| --color-gray-500 | #6B6550 | #888888 | muted text |
| --color-green | #4E6640 | #E8A700 | accent (amber) |
| --color-purple | #9A4F2C | #C2410C | echo layer 2 |
| --color-yellow | #C89418 | #6B8A5E | echo layer 3 |
| --font-primary | Messina Sans | system sans | no web fonts |
| --font-secondary | Messina Sans | system serif | display headings |
| --font-mono | Messina Sans Mono | ui-monospace | labels/code |

## Animation Timing (from source code)

| Effect | Duration | Easing | Source |
|--------|----------|--------|--------|
| Button hover border-radius | 320ms | cubic-bezier(.17,.17,.20,1) | afternow .btn |
| Button icon move | 350ms | ease-out | afternow btn-icon-move-in |
| Scroll reveal | 650ms | cubic-bezier(0.16,1,0.3,1) | lgwks [data-reveal] |
| Preloader fade | 420ms | cubic-bezier(.17,.17,.20,1) | lgwks .page-load-veil |
| Nav drop-in | 680ms | cubic-bezier(.17,.17,.20,1) | lgwks @keyframes navDropIn |
| Hero media reveal | 900ms | cubic-bezier(.17,.17,.20,1) | lgwks heroMediaReveal |
| Letter title stagger | 45ms per letter | — | lgwks AnimatedHeroTitle |
| Echo velocity scale | 100ms settle, 300ms recovery | power1.out → spring | afternow home.js |
| Marquee | 40s linear | linear | lgwks ClientMarquee |
