/**
 * Minimal hash-based router. Zero deps. Svelte 5 rune-based.
 * Routes: #/, #/privacy, #/terms, #/terms/email, #/terms/sellers
 */

export type Route = {
  path: string;
  segments: string[];
};

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  const segments = hash.split('/').filter(Boolean);
  return { path: hash, segments };
}

class RouteStore {
  current = $state<Route>({ path: '/', segments: [] });

  constructor() {
    if (typeof window !== 'undefined') {
      this.current = parseHash();
      window.addEventListener('hashchange', () => {
        this.current = parseHash();
        window.scrollTo(0, 0);
      });
    }
  }

  navigate(path: string) {
    window.location.hash = path;
  }
}

let store: RouteStore | null = null;

export function getRoute(): RouteStore {
  if (!store) store = new RouteStore();
  return store;
}

export function navigate(path: string) {
  getRoute().navigate(path);
}
