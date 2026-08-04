/**
 * Locale context — Svelte 5 rune-based i18n provider.
 * Zero deps. Stores locale in localStorage, defaults to en-US.
 * Any component calls `useLocale()` to get the current Dictionary.
 */

import { getContext, setContext } from 'svelte';
import type { Locale, Dictionary } from './types';
import { enUS } from './locales/en-US';
import { frCA } from './locales/fr-CA';

const dictionaries: Record<Locale, Dictionary> = {
  'en-US': enUS,
  'fr-CA': frCA,
};

const STORAGE_KEY = 'lw-locale';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en-US';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'fr-CA' || stored === 'en-US') return stored;
  return 'en-US';
}

class LocaleStore {
  locale = $state<Locale>('en-US');
  dict = $derived<Dictionary>(dictionaries[this.locale]);

  constructor() {
    this.locale = getInitialLocale();
  }

  setLocale(loc: Locale) {
    this.locale = loc;
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, loc);
      document.documentElement.lang = loc === 'fr-CA' ? 'fr' : 'en';
    }
  }

  toggle() {
    this.setLocale(this.locale === 'en-US' ? 'fr-CA' : 'en-US');
  }
}

let store: LocaleStore | null = null;

export function initLocale() {
  store = new LocaleStore();
  setContext('lw-locale', store);
  return store;
}

export function useLocale(): LocaleStore {
  const ctx = getContext<LocaleStore>('lw-locale');
  if (!ctx) {
    // Fallback for components outside the provider tree
    if (!store) store = new LocaleStore();
    return store;
  }
  return ctx;
}
