// Dumbnote service worker — hand-rolled, scoped to /mindmap/.
//
// Design invariants (do not break without re-reading the PWA plan):
//   1. NO skipWaiting() in install — the user-facing UpdateAvailableBanner
//      controls the swap so Yjs in-memory state never gets stranded.
//   2. fetch() bails for any cross-origin request — Google Drive,
//      PostHog (v2.dumbnote.app), GA must stay real-network.
//   3. fetch() bails for any same-origin path outside /mindmap/ —
//      defensive in case scope ever widens.
//   4. BUILD_SHA is rewritten by scripts/compose-dist.mjs after the
//      build. Each release gets a unique CACHE name, which triggers
//      updatefound on the user's next visit.

const BUILD_SHA = '09f79d1';
const CACHE = `dumbnote-shell-${BUILD_SHA}`;
const BASE = '/mindmap/';
const SHELL = [
  BASE,
  `${BASE}index.html`,
  `${BASE}favicon.svg`,
  `${BASE}favicon.png`,
  `${BASE}icon-192.png`,
  `${BASE}icon-512.png`,
  `${BASE}icon-512-maskable.png`,
  `${BASE}apple-touch-icon.png`,
  `${BASE}manifest.webmanifest`,
];

// fetch() transparently decompresses gzip/br but leaves the response's
// Content-Encoding + (compressed) Content-Length headers intact. The Cache
// API stores the DECOMPRESSED body together with those stale headers, so a
// later cache hit makes the browser try to re-inflate already-plain bytes
// and abort the navigation (Firefox: NS_BINDING_ABORTED). Rebuild the
// response from decoded bytes with the encoding headers removed so the
// cached copy is self-consistent.
async function cacheableCopy(response) {
  const headers = new Headers(response.headers);
  headers.delete('content-encoding');
  headers.delete('content-length');
  const body = await response.blob();
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      // Use individual put() so one missing asset (e.g. an icon not
      // yet committed) doesn't fail the whole install.
      Promise.all(
        SHELL.map((url) =>
          fetch(url, { cache: 'reload' })
            .then(async (r) => (r.ok ? c.put(url, await cacheableCopy(r)) : null))
            .catch(() => null),
        ),
      ),
    ),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.filter((n) => n !== CACHE && n.startsWith('dumbnote-shell-')).map((n) => caches.delete(n)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(BASE)) return;

  // SPA navigations: cache-first against the shell that `install`
  // pre-cached for this BUILD_SHA. Instant render, no multi-MB refetch,
  // and the cached copy has normalized headers so it decodes cleanly.
  // Deploy freshness is handled by the SHA-stamped CACHE + the
  // UpdateAvailableBanner, not by re-fetching here. On a cache miss we
  // fall back to a clean network pass-through (no clone/tee), then to
  // BASE when offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match(`${BASE}index.html`).then(
        (cached) => cached || fetch(req).catch(() => caches.match(BASE)),
      ),
    );
    return;
  }

  // Static assets within scope: cache-first, opportunistic refresh.
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((r) => {
        if (r.ok && r.type === 'basic') {
          cacheableCopy(r.clone()).then((copy) =>
            caches.open(CACHE).then((c) => c.put(req, copy)),
          );
        }
        return r;
      });
    }),
  );
});
