// Service Worker for caching critical assets
const CACHE_NAME = "akrolink-v1";
const CRITICAL_ASSETS = [
  "/",
  "/customs-clearance-logistics-warehouse-heathrow.jpg",
  "/icon.svg",
  "/logo.png",
  "/manifest.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CRITICAL_ASSETS))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.destination === "image") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
