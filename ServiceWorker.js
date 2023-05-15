const staticKittyCart = "dev-kitty-cart-v1"

const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/main.js",
    "/todo.js",
    "/assets/cat3.jpeg",
    "/assets/cat4.jpeg",
    "/assets/cat5.jpeg",
    "/assets/peach1.jpeg",
    "/assets/peach2.jpeg",
    "/assets/peachCoffee.jpeg",
    "/img/icons/android-chrome-192x192.png",
    "/img/icons/android-chrome-512x512.png",
    "/img/icons/apple-touch-icon.png",
    "/img/icons/favicon-16x16.png",
    "/img/icons/favicon-32x32.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(staticKittyCart).then(cache => {
        cache.addAll(assets)
      })
    )
  })

















