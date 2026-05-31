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

const BUILD_SHA = 'd8686f3';
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
try { ASSETS = JSON.parse('["/mindmap/assets/InlineRichEditor-BKoTE9p5.css","/mindmap/assets/InlineRichEditor-CXDlkYtF.js","/mindmap/assets/MarkdownReader-BFjl5Vlv.css","/mindmap/assets/MarkdownReader-JC5QfvyN.js","/mindmap/assets/MindmapFirst-A-57jO0r.js","/mindmap/assets/MindmapFirst-bz8digZh.css","/mindmap/assets/NodeEditor-BqunRENf.css","/mindmap/assets/NodeEditor-BvL8XJ5s.js","/mindmap/assets/RichTextEditor-BXkaLjrb.css","/mindmap/assets/RichTextEditor-BZGM7MYi.js","/mindmap/assets/RichTextViewer-CWOiPkEj.css","/mindmap/assets/RichTextViewer-D52mDAi7.js","/mindmap/assets/SnapshotEditorModal-DRTTiu7-.js","/mindmap/assets/SnapshotEditorModal-HGq7UG8Q.css","/mindmap/assets/SnapshotPage-CrhtlIAb.css","/mindmap/assets/SnapshotPage-DCt2P5-9.js","/mindmap/assets/SnapshotsSidebarContext-goGTUfLG.js","/mindmap/assets/UPNG-BdZ4Wae9.js","/mindmap/assets/arc-hkpxLs5I.js","/mindmap/assets/architectureDiagram-3BPJPVTR-LOgPtgrU.js","/mindmap/assets/blockDiagram-GPEHLZMM-BciprY__.js","/mindmap/assets/c4Diagram-AAUBKEIU-B0513GyA.js","/mindmap/assets/channel-jMYRTjiJ.js","/mindmap/assets/chunk-2J33WTMH-lkIWdiB5.js","/mindmap/assets/chunk-4BX2VUAB-Dd15GmOz.js","/mindmap/assets/chunk-55IACEB6-B_sPguvv.js","/mindmap/assets/chunk-727SXJPM-DpNuNbjj.js","/mindmap/assets/chunk-AQP2D5EJ-B-A1xzDf.js","/mindmap/assets/chunk-FMBD7UC4-DqyE-VWT.js","/mindmap/assets/chunk-ND2GUHAM-DBM5kIzi.js","/mindmap/assets/chunk-QZHKN3VN-BERPFxfM.js","/mindmap/assets/classDiagram-4FO5ZUOK-DYtvuFne.js","/mindmap/assets/classDiagram-v2-Q7XG4LA2-DYtvuFne.js","/mindmap/assets/cose-bilkent-S5V4N54A-B9GABM_8.js","/mindmap/assets/cytoscape.esm-CkSuTymj.js","/mindmap/assets/dagre-BM42HDAG-Czqj2SJ3.js","/mindmap/assets/defaultLocale-CrowFXzY.js","/mindmap/assets/diagram-2AECGRRQ-DgiOAWVM.js","/mindmap/assets/diagram-5GNKFQAL-Bm4RPzmQ.js","/mindmap/assets/diagram-KO2AKTUF-s16wUGKh.js","/mindmap/assets/diagram-LMA3HP47-C8Stm6-F.js","/mindmap/assets/diagram-OG6HWLK6-fGKlMetn.js","/mindmap/assets/erDiagram-TEJ5UH35-C5bpp0i7.js","/mindmap/assets/extensions-DWTJNEu_.js","/mindmap/assets/extensions-DafwTUq2.css","/mindmap/assets/flowDiagram-I6XJVG4X-CPyBQzp0.js","/mindmap/assets/ganttDiagram-6RSMTGT7-j8a2w4Rw.js","/mindmap/assets/gitGraphDiagram-PVQCEYII-kKvDGrC9.js","/mindmap/assets/graph-D2o_JWn5.js","/mindmap/assets/hostedRooms-UUQVrfEl.js","/mindmap/assets/imageProcessor-BvnXcPSG.js","/mindmap/assets/index-BdZ8hsoS.css","/mindmap/assets/index-BkD7Hj8s.js","/mindmap/assets/index-DOot-1bs.js","/mindmap/assets/index-DzurjWp1.js","/mindmap/assets/infoDiagram-5YYISTIA-Bdy5Xv61.js","/mindmap/assets/init-Gi6I4Gst.js","/mindmap/assets/input-CsEgGj-t.js","/mindmap/assets/ishikawaDiagram-YF4QCWOH-BilijkL2.js","/mindmap/assets/journeyDiagram-JHISSGLW-CkdNkIl0.js","/mindmap/assets/kanban-definition-UN3LZRKU-Ddc01oZC.js","/mindmap/assets/layout-UJbxhwF7.js","/mindmap/assets/linear-BxSLk3I7.js","/mindmap/assets/mermaid.core-BTQAsyc4.js","/mindmap/assets/mindmap-definition-RKZ34NQL-B4UQhh5j.js","/mindmap/assets/normalizeHtmlViaTiptap-CH79cc3y.js","/mindmap/assets/openShareLiveDialog-CioYtGr0.js","/mindmap/assets/ordinal-D8o73TQ0.js","/mindmap/assets/pieDiagram-4H26LBE5-AFLhGBxm.js","/mindmap/assets/quadrantDiagram-W4KKPZXB-MwECFpP0.js","/mindmap/assets/rejoinRoom-BT_bD9Qk.js","/mindmap/assets/requirementDiagram-4Y6WPE33-CPuyAJXB.js","/mindmap/assets/roomIdentity-DkohaLWS.js","/mindmap/assets/sankeyDiagram-5OEKKPKP-j9K681yG.js","/mindmap/assets/sequenceDiagram-3UESZ5HK-CtfLwG5o.js","/mindmap/assets/stateDiagram-AJRCARHV-Dy0UhNBH.js","/mindmap/assets/stateDiagram-v2-BHNVJYJU-CzQbVQ1G.js","/mindmap/assets/textToTiptapHtml-CwYRDYHI.js","/mindmap/assets/timeline-definition-PNZ67QCA-CaDV8TAX.js","/mindmap/assets/transform-C3k1rBga.js","/mindmap/assets/useImageCache-Dc5V2kcJ.js","/mindmap/assets/useShare-BP3Lv2eg.js","/mindmap/assets/useSnapshotFilters-I2oUbmQC.js","/mindmap/assets/useSnapshotTags-T6p0_-Zp.js","/mindmap/assets/vennDiagram-CIIHVFJN-DpsE9xwm.js","/mindmap/assets/wardley-L42UT6IY-B9z8AY5g.js","/mindmap/assets/wardleyDiagram-YWT4CUSO-BHG4_Hya.js","/mindmap/assets/xychartDiagram-2RQKCTM6-DW1UFugl.js"]'); } catch { /* placeholder not stamped */ }

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
