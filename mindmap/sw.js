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

const BUILD_SHA = 'd551bd9';
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
try { ASSETS = JSON.parse('["/mindmap/assets/MindmapFirst-CmvH23lX.js","/mindmap/assets/MindmapFirst-DidsImmi.css","/mindmap/assets/SnapshotsSidebarContext-CWMUaE8x.js","/mindmap/assets/UPNG-DR1OgFOh.js","/mindmap/assets/arc-CxSPiEQ3.js","/mindmap/assets/architectureDiagram-3BPJPVTR-Bp5OZF0n.js","/mindmap/assets/blockDiagram-GPEHLZMM-Cq8vA2NZ.js","/mindmap/assets/c4Diagram-AAUBKEIU-DEB0VwhB.js","/mindmap/assets/channel-CXkBRQew.js","/mindmap/assets/chunk-2J33WTMH-mGI52JZP.js","/mindmap/assets/chunk-4BX2VUAB-DtScomLQ.js","/mindmap/assets/chunk-55IACEB6-tsRxGDaL.js","/mindmap/assets/chunk-727SXJPM-gEVIZbrO.js","/mindmap/assets/chunk-AQP2D5EJ-DgDIm8UR.js","/mindmap/assets/chunk-FMBD7UC4-BTLSzz3S.js","/mindmap/assets/chunk-ND2GUHAM-BiPKM1k_.js","/mindmap/assets/chunk-QZHKN3VN-DCocszFn.js","/mindmap/assets/classDiagram-4FO5ZUOK-Chv2Sz4Z.js","/mindmap/assets/classDiagram-v2-Q7XG4LA2-Chv2Sz4Z.js","/mindmap/assets/cose-bilkent-S5V4N54A-DXJ07Red.js","/mindmap/assets/cytoscape.esm-CkSuTymj.js","/mindmap/assets/dagre-BM42HDAG-DQKWpBMP.js","/mindmap/assets/defaultLocale-CrowFXzY.js","/mindmap/assets/diagram-2AECGRRQ-mBXr1yqS.js","/mindmap/assets/diagram-5GNKFQAL-Dr6YOzit.js","/mindmap/assets/diagram-KO2AKTUF-BG9sWmd_.js","/mindmap/assets/diagram-LMA3HP47-CCdeTeuJ.js","/mindmap/assets/diagram-OG6HWLK6-uAY_RzWS.js","/mindmap/assets/erDiagram-TEJ5UH35-COX_6KQs.js","/mindmap/assets/flowDiagram-I6XJVG4X-CIQ3QU72.js","/mindmap/assets/ganttDiagram-6RSMTGT7-B2X_dUwP.js","/mindmap/assets/gitGraphDiagram-PVQCEYII-BCW__Aui.js","/mindmap/assets/graph-D2o_JWn5.js","/mindmap/assets/hostedRooms-UUQVrfEl.js","/mindmap/assets/index-BkD7Hj8s.js","/mindmap/assets/index-DOot-1bs.js","/mindmap/assets/index-Fh317ome.js","/mindmap/assets/index-VSQu6OdV.css","/mindmap/assets/infoDiagram-5YYISTIA-CaYbjUOV.js","/mindmap/assets/init-Gi6I4Gst.js","/mindmap/assets/ishikawaDiagram-YF4QCWOH-DPdx3tpY.js","/mindmap/assets/journeyDiagram-JHISSGLW-DsXicJHL.js","/mindmap/assets/kanban-definition-UN3LZRKU-tAvalE0B.js","/mindmap/assets/layout-UJbxhwF7.js","/mindmap/assets/linear-BxSLk3I7.js","/mindmap/assets/mermaid.core-BEUYHDUH.js","/mindmap/assets/mindmap-definition-RKZ34NQL-0bNClDIW.js","/mindmap/assets/openShareLiveDialog-CioYtGr0.js","/mindmap/assets/ordinal-D8o73TQ0.js","/mindmap/assets/pieDiagram-4H26LBE5-Bd3fyQiM.js","/mindmap/assets/quadrantDiagram-W4KKPZXB-DTU37mfl.js","/mindmap/assets/rejoinRoom-BT_bD9Qk.js","/mindmap/assets/requirementDiagram-4Y6WPE33-CGoHL-Vb.js","/mindmap/assets/roomIdentity-DkohaLWS.js","/mindmap/assets/sankeyDiagram-5OEKKPKP-DAO-uKEw.js","/mindmap/assets/sequenceDiagram-3UESZ5HK-Ba0CDKuM.js","/mindmap/assets/stateDiagram-AJRCARHV-CkJVQQA4.js","/mindmap/assets/stateDiagram-v2-BHNVJYJU-D8hlomCA.js","/mindmap/assets/timeline-definition-PNZ67QCA-C52CFpad.js","/mindmap/assets/transform-C3k1rBga.js","/mindmap/assets/useShare-Dvn-8pXq.js","/mindmap/assets/vennDiagram-CIIHVFJN-CeOvyNl0.js","/mindmap/assets/wardley-L42UT6IY-DV156qFg.js","/mindmap/assets/wardleyDiagram-YWT4CUSO-BKbi0fTX.js","/mindmap/assets/xychartDiagram-2RQKCTM6-gCFbCPeI.js"]'); } catch { /* placeholder not stamped */ }

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
