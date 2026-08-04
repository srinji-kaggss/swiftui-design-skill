/**
 * Theme context — Svelte 5 rune-based dark/light store.
 * Zero deps. Stores theme in localStorage, defaults to dark.
 * Respects prefers-color-scheme on first visit.
 */

import { getContext, setContext } from 'svelte';

const THEME_KEY = 'lw-theme';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

class ThemeStore {
  theme = $state<Theme>('dark');

  constructor() {
    this.theme = getInitialTheme();
    this.applyToDom();
  }

  get isDark() {
    return this.theme === 'dark';
  }

  setTheme(t: Theme) {
    this.theme = t;
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_KEY, t);
      this.applyToDom();
    }
  }

  toggle() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  private applyToDom() {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', this.theme);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        meta.setAttribute('content', this.theme === 'dark' ? '#171b17' : '#ede7d9');
      }
    }
  }
}

let store: ThemeStore | null = null;

export function initTheme() {
  store = new ThemeStore();
  setContext('lw-theme', store);
  return store;
}

export function useTheme(): ThemeStore {
  const ctx = getContext<ThemeStore>('lw-theme');
  if (!ctx) {
    if (!store) store = new ThemeStore();
    return store;
  }
  return ctx;
}
