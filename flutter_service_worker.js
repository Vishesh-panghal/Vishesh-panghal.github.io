'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "bf3af9d8ace526432c67193957d7ee02",
"/": "bf3af9d8ace526432c67193957d7ee02",
"main.dart.js": "9dda28ed644f0e051fe7ad88f6ad4cc2",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "b5d87d111ee40fa9d4dae79a53bdd163",
"assets/NOTICES": "c1f0b4b7c3b8970e7ccb4c0c8072e24e",
"assets/FontManifest.json": "c6b115e9ab2ac9308748c8767ca04429",
"assets/AssetManifest.bin.json": "16c233c8854bcdc18dcf5ef6642f61c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6ff58a260d7cbdee287fb0a8ed43f2fe",
"assets/fonts/MaterialIcons-Regular.otf": "522773fa506c598faff203f61a8bedac",
"assets/assets/Images/about_img.jpg": "3f59f47eff49b775360acf2026a86c93",
"assets/assets/Images/mine.jpg": "d69745d19bbe017eb7fc6aded82b6574",
"assets/assets/Images/tiktac_app.jpg": "c8a42c5734bbfbea64544e1f7b8f6a26",
"assets/assets/Images/nebula_app.jpg": "985206f155a46fca7789d6e4956934cb",
"assets/assets/Images/sign.png": "9f860751d3665b1ae4438a43e8ff2895",
"assets/assets/Images/sneakerquest_app.jpg": "e8b57f1b66a798ed77aec44395a34acb",
"assets/assets/Images/skills/firebase.svg": "d5f4c28ac6ace92c425f75cae83755fb",
"assets/assets/Images/skills/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/Images/skills/flutter.svg": "2887e5689036561b117c759de12c225c",
"assets/assets/Images/skills/python.svg": "da3277ddf2b274575710bfe33941d0a6",
"assets/assets/Images/skills/heroku.svg": "89e37f04469f9358159fcd2b6a04fa65",
"assets/assets/Images/skills/docker.svg": "2c5791cfce29655d43d99428d06e5512",
"assets/assets/Images/skills/git.svg": "395d8c6917b47ac4dcde3600673f6519",
"assets/assets/Images/skills/flask.svg": "9d6652734e7227c2ea0538c872146d80",
"assets/assets/Images/skills/fastapi.svg": "71eef4a0853f5f9e50bbfd19e9aff89c",
"assets/assets/Images/skills/dart.svg": "0556560819171ed3fb080cc04a23b64c",
"assets/assets/Images/skills/css.svg": "4140f4b42bc814aa6ff6fa6d02465024",
"assets/assets/Images/skills/pytorch.svg": "4fa91afbd53f2ca4772b860ef247e1d9",
"assets/assets/Images/skills/postman.svg": "fbfb57a181ce251926d686d12e6cee5a",
"assets/assets/Images/skills/scikitlearn.svg": "e7d47ad4ea241b1f2d76a8788a58e1e8",
"assets/assets/Images/skills/html.svg": "6f3d69949ef38223d94a5a78a0ecd6ca",
"assets/assets/Images/skills/mysql.svg": "0b5bd1b7dc517deb2b8f85e2bcb87dfb",
"assets/assets/Images/chatly_app.jpg": "95df78fc156878cb1923489383653138",
"assets/assets/animations/blob.json": "1d42cf219bc4a3687a094daeaee9b26d",
"assets/assets/animations/settingWithLappy.json": "3a58ecadb2e79025b71fa8dcf718a3f3",
"assets/assets/animations/developer_animation.json": "8290d7ce1935c40a6151123a29270a68",
"assets/assets/animations/hello.json": "e198758d3bb8ee71a5e099f2ac67af9d",
"assets/assets/animations/sitting_with_laptop.json": "6d848e22b9d723b479f11df65187fc5a",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
