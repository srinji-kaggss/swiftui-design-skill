# Website Codex — Logical Works Design System

## System Alignment

This site ports the **Logical Works Design System** (2026-08 overhaul) as its single source of truth for all visual and motion decisions. The previous afternow/lgwks token mapping has been superseded.

### Token sources (all ported verbatim from LWDS)

| Token group | Source | Port target |
|------------|--------|-------------|
| **Colors** | `tokens/colors.css` | `src/lib/tokens.css` — Pigment palette (clay/smoke/sage on pine black) |
| **Typography** | `tokens/typography.css` | Bodoni Moda (display 400/500), Archivo (body), IBM Plex Mono (evidence/labels) |
| **Spacing/Radius** | `tokens/spacing.css` | Square surfaces (`--radius-surface: 0`), 2px controls, Seam motif (lobe = 999px) |
| **Motion** | `tokens/motion.css` | `--ease-standard` 320ms, `--ease-seam` for arrivals, no bounce |
| **Fonts** | `tokens/fonts.css` | Google Fonts CDN (self-host before production) |

### Motion engine

| Action | Source pattern | Implementation |
|--------|---------------|----------------|
| **scrollRevealAll** | lgwks `useScrollReveal` + Motion One `inView` | `src/lib/motion/engine.ts` — finds `[data-reveal]`, animates with `--ease-standard` |
| **echoLayers** | afternow scroll velocity + Motion One `scroll()` | Pigment palette colors, velocity-reactive scale + drift |
| **letterTitle** | lgwks `AnimatedHeroTitle` + Motion One `animate`/`stagger` | Letter-by-letter `--ease-seam` reveal |
| **floatingParallax** | lgwks `FloatingIcons` | rAF scroll parallax, Pigment shapes |
| **burstTrigger** | lgwks `BurstButton` + Motion One `inView` | IntersectionObserver → CSS keyframe burst |
| **heroPinReveal** | afternow GSAP ScrollTrigger | rAF scroll → clip-path inset mapping |
| **worldBuild** | LWDS `brand-wordmark-build.html` | 4-beat: field → halves meet → word draws → settle |

### Component mapping

| Component | LWDS reference | Pattern |
|-----------|---------------|---------|
| **Preloader** | `guidelines/brand-wordmark-build.html` | 4-beat world-build (field strokes → lobes → wordmark) |
| **Header** | `ui_kits/marketing-site/TopNav.jsx` | Seam mark SVG + constructed wordmark, spaced-caps nav |
| **Hero** | afternow echo + lgwks letterTitle | Pigment echo layers, Motion One letter stagger |
| **Capabilities** | `ui_kits/marketing-site/Home.jsx` cards | LWDS Card (datum top-rule), 3-col grid |
| **Work** | afternow archive-item + lgwks cases | LWDS tile radius, accent-rule cards |
| **Stats** | LWDS mono numerics | `--font-mono`, `tabular-nums`, brand color |
| **Team** | LWDS Card seam variant | `lw-card--seam` (left accent rule) |
| **Journal** | `ui_kits/marketing-site/Journal.jsx` | Mono eyebrows, datum rules between items |
| **Contact** | `ui_kits/marketing-site/Contact.jsx` | Display-type email, mono meta |
| **Footer** | `ui_kits/marketing-site/Footer.jsx` | Datum top-rule, mono, fr-CA badge |

### Runtime dependencies

| Dep | Version | Size | Purpose |
|-----|---------|------|---------|
| `motion` | 10.18.0 | ~5kb gz | Motion engine — `animate`, `stagger`, `inView`, `scroll` |
| `svelte` | 5.56.x | — | Framework (devDep) |
| `vite` | 6.x | — | Build (devDep) |

### Design decisions (LWDS-driven)

- **Dark stance is default**: `data-theme="dark"` on `<html>`. Light stance available via `[data-theme="light"]`.
- **Pigment palette**: pine-900 black (#171b17), clay-500 brand, smoke-500 accent-2, sage-500 accent-3. No blue/purple/teal "AI palette".
- **Square corners**: `--radius-surface: 0` on cards/panels, `--radius-control: 2px` on buttons/inputs, `--radius-tile: 22px` on work media, `--radius-lobe: 999px` on echo layers.
- **No shadows**: depth from flat tone changes and 2px accent rules, not floating boxes. `--shadow-lg` only for overlays.
- **Seam motif**: the Coordination Mark (ink lobe + brand lobe meeting on vertical axis with center node) appears in header and preloader.
- **Constructed wordmark**: `wordmark.js` — strokes on a 140-unit grid, not a font. Renders into header and preloader via `renderWordmark()`.
- **Bodoni Moda**: display type at 400/500 only, never below 28px, never bold. Tracking -0.005em (high contrast needs air).
- **IBM Plex Mono**: evidence/state/labels, spaced caps (0.16em tracking), tabular numerals.
- **Motion**: one-physics discipline. `--ease-standard` 320ms for everything, `--ease-seam` for arrivals. No bounce, no overshoot. Reduced-motion = opacity-only.
