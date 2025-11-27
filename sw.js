self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache-v1").then(cache => {
      return cache.addAll([
        "/Test-TrudovoePravo/index.html",
        "/Test-TrudovoePravo/manifest.json",
        "/Test-TrudovoePravo/sw.js",
        "/Test-TrudovoePravo/styles.css",
        "/Test-TrudovoePravo/icons/icon-192.png",
        "/Test-TrudovoePravo/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
