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

const BUILD_SHA = '81bdcf4';
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
try { ASSETS = JSON.parse('["/mindmap/assets/InlineRichEditor-BKoTE9p5.css","/mindmap/assets/InlineRichEditor-smJLVJXu.js","/mindmap/assets/MarkdownReader-BFjl5Vlv.css","/mindmap/assets/MarkdownReader-CB_Lkng0.js","/mindmap/assets/MindmapFirst-C-qiwRNv.js","/mindmap/assets/MindmapFirst-bz8digZh.css","/mindmap/assets/NodeEditor-BqunRENf.css","/mindmap/assets/NodeEditor-C3VI5JFw.js","/mindmap/assets/RichTextEditor-BXkaLjrb.css","/mindmap/assets/RichTextEditor-DEkBKrQK.js","/mindmap/assets/RichTextViewer-CWOiPkEj.css","/mindmap/assets/RichTextViewer-qgZWRe4o.js","/mindmap/assets/SnapshotEditorModal-CTkUQQNH.js","/mindmap/assets/SnapshotEditorModal-HGq7UG8Q.css","/mindmap/assets/SnapshotPage-CrhtlIAb.css","/mindmap/assets/SnapshotPage-CxU1wsVw.js","/mindmap/assets/SnapshotsSidebarContext-qNEyQqvW.js","/mindmap/assets/UPNG-BaVw8os8.js","/mindmap/assets/arc-C1__iDUr.js","/mindmap/assets/architectureDiagram-3BPJPVTR-fLnOwv3C.js","/mindmap/assets/blockDiagram-GPEHLZMM-DoWUhauc.js","/mindmap/assets/c4Diagram-AAUBKEIU-DeCWgHxp.js","/mindmap/assets/channel-DwdnZwhs.js","/mindmap/assets/chunk-2J33WTMH-D7rAiU9W.js","/mindmap/assets/chunk-4BX2VUAB-BQdDfdOc.js","/mindmap/assets/chunk-55IACEB6-CzwQQRW1.js","/mindmap/assets/chunk-727SXJPM-Va4IVHLY.js","/mindmap/assets/chunk-AQP2D5EJ-Bh7lcVh2.js","/mindmap/assets/chunk-FMBD7UC4-BXCyWmPe.js","/mindmap/assets/chunk-ND2GUHAM-BFoSuk86.js","/mindmap/assets/chunk-QZHKN3VN-B6wh4mq4.js","/mindmap/assets/classDiagram-4FO5ZUOK-CFV7fTMb.js","/mindmap/assets/classDiagram-v2-Q7XG4LA2-CFV7fTMb.js","/mindmap/assets/cose-bilkent-S5V4N54A-CiP1ATxU.js","/mindmap/assets/cytoscape.esm-CkSuTymj.js","/mindmap/assets/dagre-BM42HDAG-4fVhFtSy.js","/mindmap/assets/defaultLocale-CrowFXzY.js","/mindmap/assets/diagram-2AECGRRQ-coK7bfdU.js","/mindmap/assets/diagram-5GNKFQAL-H7bUpxMS.js","/mindmap/assets/diagram-KO2AKTUF-B9yfSN9q.js","/mindmap/assets/diagram-LMA3HP47-xgpBLfLb.js","/mindmap/assets/diagram-OG6HWLK6-Bai6TYDw.js","/mindmap/assets/erDiagram-TEJ5UH35-BApbaNtW.js","/mindmap/assets/extensions-CrO_1Y4V.js","/mindmap/assets/extensions-DafwTUq2.css","/mindmap/assets/flowDiagram-I6XJVG4X-6mC72SoM.js","/mindmap/assets/ganttDiagram-6RSMTGT7-qHvAJFxa.js","/mindmap/assets/gitGraphDiagram-PVQCEYII-CkDudZS7.js","/mindmap/assets/graph-D2o_JWn5.js","/mindmap/assets/hostedRooms-UUQVrfEl.js","/mindmap/assets/imageProcessor-BvnXcPSG.js","/mindmap/assets/index-BdZ8hsoS.css","/mindmap/assets/index-BkD7Hj8s.js","/mindmap/assets/index-C05ngjsn.js","/mindmap/assets/index-DOot-1bs.js","/mindmap/assets/infoDiagram-5YYISTIA-CoeOGA_A.js","/mindmap/assets/init-Gi6I4Gst.js","/mindmap/assets/input-CCcciFaG.js","/mindmap/assets/ishikawaDiagram-YF4QCWOH-mowQDdFn.js","/mindmap/assets/journeyDiagram-JHISSGLW-BetzrJ1k.js","/mindmap/assets/kanban-definition-UN3LZRKU-CDb55dLm.js","/mindmap/assets/layout-UJbxhwF7.js","/mindmap/assets/linear-BxSLk3I7.js","/mindmap/assets/mermaid.core-JgC5Xb3J.js","/mindmap/assets/mindmap-definition-RKZ34NQL-DbPeDiQc.js","/mindmap/assets/normalizeHtmlViaTiptap-RUhu3vTw.js","/mindmap/assets/openShareLiveDialog-CioYtGr0.js","/mindmap/assets/ordinal-D8o73TQ0.js","/mindmap/assets/pieDiagram-4H26LBE5-DlZlVCrX.js","/mindmap/assets/quadrantDiagram-W4KKPZXB-YDoogES6.js","/mindmap/assets/rejoinRoom-BT_bD9Qk.js","/mindmap/assets/requirementDiagram-4Y6WPE33-DZctWj15.js","/mindmap/assets/roomIdentity-DkohaLWS.js","/mindmap/assets/sankeyDiagram-5OEKKPKP-MvqwA9D_.js","/mindmap/assets/sequenceDiagram-3UESZ5HK-Dfn4EN7g.js","/mindmap/assets/stateDiagram-AJRCARHV-kynmk2vj.js","/mindmap/assets/stateDiagram-v2-BHNVJYJU-Bd46xqEf.js","/mindmap/assets/textToTiptapHtml-CwYRDYHI.js","/mindmap/assets/timeline-definition-PNZ67QCA-DqudC6Mx.js","/mindmap/assets/transform-C3k1rBga.js","/mindmap/assets/useImageCache-CMflylGk.js","/mindmap/assets/useShare-CGCMJL5p.js","/mindmap/assets/useSnapshotFilters-C85_f6jX.js","/mindmap/assets/useSnapshotTags-Cz61xWmn.js","/mindmap/assets/vennDiagram-CIIHVFJN-D77YpR4b.js","/mindmap/assets/wardley-L42UT6IY-DIxX4-M9.js","/mindmap/assets/wardleyDiagram-YWT4CUSO-KQPUsBn7.js","/mindmap/assets/xychartDiagram-2RQKCTM6-CM2fccMe.js"]'); } catch { /* placeholder not stamped */ }

// Minimal static shell precached synchronously at install — NO hashed chunks.
// The full chunk manifest (ASSETS) is precached separately via a PRECACHE_ASSETS
// message the app posts once it's interactive (see below), so install doesn't
// fetch ~124 chunks concurrently and steal first-load bandwidth on slow links.
const STATIC_SHELL = [
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

// Precache a list of URLs into CACHE. Individual put() so one missing asset
// (e.g. an icon not yet committed) doesn't fail the whole batch. Skips URLs
// already cached so a repeat call (e.g. the first-visit claim-reload firing
// PRECACHE_ASSETS twice) doesn't re-download everything.
async function precache(urls) {
  const c = await caches.open(CACHE);
  await Promise.all(
    urls.map(async (url) => {
      if (await c.match(url)) return;
      try {
        const r = await fetch(url, { cache: 'reload' });
        if (r.ok) await c.put(url, await cacheableCopy(r));
      } catch {
        /* best-effort — a missing asset must not fail the batch */
      }
    }),
  );
}

self.addEventListener('install', (e) => {
  // Only the minimal static shell here — see STATIC_SHELL note above. The full
  // ASSETS manifest is filled lazily via the PRECACHE_ASSETS message.
  e.waitUntil(precache(STATIC_SHELL));
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
  if (!e.data) return;
  if (e.data.type === 'SKIP_WAITING') self.skipWaiting();
  // Deferred full-manifest precache, triggered by the app once it's interactive
  // (registerServiceWorker → window load + idle). Keeps the no-stale-404
  // guarantee — every hashed chunk this build needs ends up cached — without
  // racing the app's own first-load chunk downloads. waitUntil keeps the SW
  // alive until the precache completes.
  if (e.data.type === 'PRECACHE_ASSETS' && Array.isArray(ASSETS) && ASSETS.length) {
    e.waitUntil(precache(ASSETS));
  }
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
