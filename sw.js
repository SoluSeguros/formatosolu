/* Service Worker – Declaración de Siniestros (PWA) */
const CACHE = "siniestros-v2";

// Recursos propios (app shell) que se precachean en la instalación
const SHELL = [
  "./", "./index.html", "./styles.css", "./app.js", "./manifest.json",
  "./plantilla.pdf", "./carro1.png", "./carro2.png",
  "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./apple-touch-icon.png"
];

// Librerías externas (CDN) – se cachean como "no-cors" para uso offline
const CDN = [
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js",
  "https://unpkg.com/pdf-lib/dist/pdf-lib.min.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    await Promise.allSettled(CDN.map(u => c.add(new Request(u, { mode: "no-cors" }))));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;

  if (sameOrigin) {
    // NUESTROS archivos -> network-first: siempre la última versión con conexión,
    // y la copia en caché como respaldo offline.
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        if (res && res.ok) { const c = await caches.open(CACHE); c.put(req, res.clone()); }
        return res;
      } catch (err) {
        const cached = await caches.match(req);
        if (cached) return cached;
        if (req.mode === "navigate") return caches.match("./index.html");
        throw err;
      }
    })());
  } else {
    // CDN / externos -> cache-first (no cambian, ahorra datos y sirve offline).
    e.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res && (res.ok || res.type === "opaque")) {
          const c = await caches.open(CACHE);
          c.put(req, res.clone());
        }
        return res;
      } catch (err) {
        throw err;
      }
    })());
  }
});
