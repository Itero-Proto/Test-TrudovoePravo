self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache-v1").then(cache => {
      return cache.addAll([
        "/Test-Uridicheskoe_litso/index.html",
        "/Test-Uridicheskoe_litso/manifest.json",
        "/Test-Uridicheskoe_litso/sw.js",
        "/Test-Uridicheskoe_litso/styles.css",
        "/Test-Uridicheskoe_litso/icons/icon-192.png",
        "/Test-Uridicheskoe_litso/icons/icon-512.png"
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
