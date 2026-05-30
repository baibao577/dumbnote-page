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

const BUILD_SHA = 'd545f5d';
const CACHE = `dumbnote-shell-${BUILD_SHA}`;
const BASE = '/mindmap/';

// Hashed JS/CSS chunks of the multi-chunk online build, injected by
// scripts/compose-dist.mjs (it replaces the placeholder with a JSON
// array of '/mindmap/assets/...' paths). Precaching the FULL list at
// install means a client on an old SW keeps every chunk it needs even
// after a new deploy replaces the files server-side — no stale-chunk
// 404s. Stays [] in source / the standalone build (the placeholder
// isn't valid JSON, so the try/catch yields an empty list and install
// just precaches the static shell below).
let ASSETS = [];
try { ASSETS = JSON.parse('["/mindmap/assets/MindmapFirst-BlBrr34G.css","/mindmap/assets/MindmapFirst-w5znKM1Z.js","/mindmap/assets/SnapshotsSidebarContext-BwIvZ-00.js","/mindmap/assets/UPNG-CAHWTIhV.js","/mindmap/assets/arc-DntB6VGo.js","/mindmap/assets/architectureDiagram-3BPJPVTR-DgRhcTAF.js","/mindmap/assets/blockDiagram-GPEHLZMM-M9K0E3M8.js","/mindmap/assets/c4Diagram-AAUBKEIU-C154p3sU.js","/mindmap/assets/channel-Cr4rGJaB.js","/mindmap/assets/chunk-2J33WTMH-DNkXMyiV.js","/mindmap/assets/chunk-4BX2VUAB-BvzBHU8d.js","/mindmap/assets/chunk-55IACEB6-CkLu8sVv.js","/mindmap/assets/chunk-727SXJPM-Ca1SIhSI.js","/mindmap/assets/chunk-AQP2D5EJ-Do-SvHz8.js","/mindmap/assets/chunk-FMBD7UC4-ztq9iY3e.js","/mindmap/assets/chunk-ND2GUHAM-CLv-Y10e.js","/mindmap/assets/chunk-QZHKN3VN-Z39EidMa.js","/mindmap/assets/classDiagram-4FO5ZUOK-vYll0r3O.js","/mindmap/assets/classDiagram-v2-Q7XG4LA2-vYll0r3O.js","/mindmap/assets/cose-bilkent-S5V4N54A-B4JtkdgD.js","/mindmap/assets/cytoscape.esm-CkSuTymj.js","/mindmap/assets/dagre-BM42HDAG-CVgDwGql.js","/mindmap/assets/defaultLocale-CrowFXzY.js","/mindmap/assets/diagram-2AECGRRQ-B9IKmaet.js","/mindmap/assets/diagram-5GNKFQAL-MbDD6pJJ.js","/mindmap/assets/diagram-KO2AKTUF-DtyeXKJ5.js","/mindmap/assets/diagram-LMA3HP47-ByCW6_Xc.js","/mindmap/assets/diagram-OG6HWLK6-CzZz5ory.js","/mindmap/assets/erDiagram-TEJ5UH35-CkP6MbmB.js","/mindmap/assets/flowDiagram-I6XJVG4X-CpdXkWdH.js","/mindmap/assets/ganttDiagram-6RSMTGT7-ZYMeTIH9.js","/mindmap/assets/gitGraphDiagram-PVQCEYII-C2HlFAgY.js","/mindmap/assets/graph-D2o_JWn5.js","/mindmap/assets/hostedRooms-UUQVrfEl.js","/mindmap/assets/index-BkD7Hj8s.js","/mindmap/assets/index-C0nJYe6U.js","/mindmap/assets/index-DOot-1bs.js","/mindmap/assets/index-VSQu6OdV.css","/mindmap/assets/infoDiagram-5YYISTIA-KU5yR_8_.js","/mindmap/assets/init-Gi6I4Gst.js","/mindmap/assets/ishikawaDiagram-YF4QCWOH-DfJ06Zci.js","/mindmap/assets/journeyDiagram-JHISSGLW-BtPmnk7Z.js","/mindmap/assets/kanban-definition-UN3LZRKU-CTMPEwuf.js","/mindmap/assets/layout-UJbxhwF7.js","/mindmap/assets/linear-BxSLk3I7.js","/mindmap/assets/mermaid.core-GMBW1YL9.js","/mindmap/assets/mindmap-definition-RKZ34NQL-BVue6Kvn.js","/mindmap/assets/openShareLiveDialog-CioYtGr0.js","/mindmap/assets/ordinal-D8o73TQ0.js","/mindmap/assets/pieDiagram-4H26LBE5-DQ79687G.js","/mindmap/assets/quadrantDiagram-W4KKPZXB-CKzH3I0a.js","/mindmap/assets/rejoinRoom-BT_bD9Qk.js","/mindmap/assets/requirementDiagram-4Y6WPE33-PrLCtPsP.js","/mindmap/assets/roomIdentity-DkohaLWS.js","/mindmap/assets/sankeyDiagram-5OEKKPKP-B1-yp3RY.js","/mindmap/assets/sequenceDiagram-3UESZ5HK-wrPROO23.js","/mindmap/assets/stateDiagram-AJRCARHV-Daxibj21.js","/mindmap/assets/stateDiagram-v2-BHNVJYJU-DfgpjIva.js","/mindmap/assets/timeline-definition-PNZ67QCA-DulowKYD.js","/mindmap/assets/transform-C3k1rBga.js","/mindmap/assets/useShare-BSCGRe9s.js","/mindmap/assets/vennDiagram-CIIHVFJN-31Khslk6.js","/mindmap/assets/wardley-L42UT6IY-Do7N6bFM.js","/mindmap/assets/wardleyDiagram-YWT4CUSO-D4De4fdN.js","/mindmap/assets/xychartDiagram-2RQKCTM6-DSJ1FKWC.js"]'); } catch { /* placeholder not stamped */ }

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
  ...ASSETS,
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

  // SPA navigations to the app's OWN routes get the cached shell:
  // instant render, no multi-MB refetch, normalized headers so it
  // decodes cleanly. The app uses EXTENSIONLESS routes (/mindmap/,
  // /mindmap/maps/:id, /mindmap/snapshots…). Real `.html` pages — the
  // static landing/marketing site (landing.html, for-*.html,
  // features/*.html, offline.html) — must NOT be replaced by the SPA
  // shell, or they'd boot the app, fail to match a route, and redirect
  // to /mindmap/. So only extensionless navigations take the shell;
  // `.html` (and everything else) falls through to the cache-first
  // static handler below and is served as itself.
  // Deploy freshness is handled by the SHA-stamped CACHE + the
  // UpdateAvailableBanner. On a cache miss we fall back to a clean
  // network pass-through (no clone/tee), then to BASE when offline.
  if (req.mode === 'navigate' && !url.pathname.endsWith('.html')) {
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
