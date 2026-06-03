// Self-unregistering "kill switch" service worker.
//
// This project intentionally does NOT use a service worker. However, a
// different app that previously ran on http://localhost:3000 may have
// registered one at this origin. Service workers persist across server
// restarts and across projects on the same origin, so that stale worker keeps
// serving cached/old JavaScript — surfacing phantom "X is not defined" errors
// (e.g. PiLeaf, FaWhatsapp) that don't match the current source.
//
// Browsers periodically re-fetch the registered worker's script (this file) to
// check for updates. Serving this byte-different file makes any stale worker
// update to this no-op, which clears all caches, unregisters itself, and
// reloads open tabs with fresh, worker-free content.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })(),
  );
});
