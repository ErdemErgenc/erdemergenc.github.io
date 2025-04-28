'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1c92c27900e8c797d1cbfd1940999579",
".git/config": "19f0b25fa6ad13034c679da123f7a7ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dfc02a40abcb6a803a6559fdee0a5019",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9ada25bd86d0f95e1988aae2fdc5071b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "195e88bbf768e7d474d51be61ebb8787",
".git/logs/refs/heads/main": "5ed284f1e46498b4ae71fd5ff38149f7",
".git/logs/refs/remotes/origin/HEAD": "6014d675147d839373fd8c7b3bb84653",
".git/logs/refs/remotes/origin/main": "55cc7acf84e553fa0ad8208da3757b89",
".git/objects/02/3dc929389fdf50973eef906ab5ecf58574a298": "3a9fba18b6cd88b2842881533a35e659",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0a/89fece46c7c7c1deea4bde7ee2f64f6cac342f": "7ff85496a4611bd332bd1f41faaa29da",
".git/objects/12/1b72adf123c92d7af35773e255eae041a29758": "20addf6950073a852ecfa54dc8e8b302",
".git/objects/13/5e0c55c734ab7aca2f0860201f9dc19656e896": "f5e62bd329ce7872b2b2d91ae2ac53da",
".git/objects/21/46fe899c4fbc834ef7f34e22c65b37a8dfb9e2": "363d77608362425f090274ef916bd11e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/c9972437cf3ab282d0371009cc2fc2e9348155": "33f4f2126247f335c2a488c1b7647277",
".git/objects/2a/f49799c3a0ecd6d4723219869d1ff1a6e4c1f4": "ccb5d63aa12bd0ad293d3b950fc6d00c",
".git/objects/2b/a687186744864253a791ebf9d10f856bc31e0c": "a8bcb3dd66058565f357ed1d4124ed9a",
".git/objects/2e/aae550fe0e19447337dd23a14410d66ddf46e8": "2d9cac2f3676e03b02be984cdb3f0305",
".git/objects/31/ca400ef41fb713286ffdbb364581094c304aa1": "7b46075a7102f57b6801612630359550",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/c088f6fbbc75a4d5645359d85acc200877e989": "672ea2774684c9f54a12bfbe23c71238",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/3db62e3f1acc09dccb63f84795861cc2776097": "52585804c89e0c0d289d37f37740bf3e",
".git/objects/3d/1719c7fc58b17e432b64da679f8a0896cc4a01": "db03ddd25b54ff99586adde9fae7944b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/c088eb15e3cefd0141989034fdae5d1acae21c": "13411b09fe481f191beabdf83a092b55",
".git/objects/43/c87322dfcd999931cffe78074cd312863c1689": "19405f78e7d93c8878b2d5860ff443fd",
".git/objects/47/93ec69f76082b0ec64a7dff25c93fe7524c095": "e3b14acd7895c1a1c655bec0b892bd94",
".git/objects/4a/6cb225e8d8ba0895d20c4fefd2d1a6294b55d6": "908ec98a52eb2f563eb34d3ffd5cf881",
".git/objects/4d/8f5ef8088d7bc3445aa91cdb01094ba5f9e053": "71b0ebed9a9d9c9afeaa50ce2a1227c2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/f74e3947449472ab01d38d355b8969260b3944": "106f359727abd21d8b10d8e7fdd78c0c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/75/c9600fbd33b6a99a911d6d43b2a0b448c5c8f3": "5119402a2f84f0a967d8ef1369355d8a",
".git/objects/76/d5b63f102f08170cf055c3cad26c5cc4d30fee": "99250a2974b4cefb77a3b8a834c9b887",
".git/objects/76/fd875f8012db6077c35e2ccb52bdb61586a06c": "8449ae123f739c5bf636b902593489da",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/84/f5a93df132d6b4a7edefed7efa7644619b1582": "2429d3666d297edd82efd725bbd767b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/95/bfc84441e9a6e7b6886ba8f32c71c04a3d19b3": "a3b44ed38c0edabafba1626f95b19a05",
".git/objects/9b/35a0f202936effe797c0fe787d4c488873adec": "c886e3f933c311447c83befde61263f0",
".git/objects/9c/ac5dcee6d4b12098e226b3a4faaa3cef431456": "55ecad7e61bdc374909086d0ee99ac9f",
".git/objects/a0/4e2378376aecf149c55efc30ec0e79feacd6a0": "4099d63eb31707cfa773f8398b71664f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/af/aebbcd696b49a333abcf27f462f3cbd24d5d49": "1d418652abf30ff9d22eb932999c7b53",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e8fd521e87665d8034c9e04b93da4c56903567": "233db4f4480a99519ba0c8c0f1c8881f",
".git/objects/bb/433968540529c5c915516e1002df633f2d5ca4": "c1c1dd63975d1b9b74215b61054e6785",
".git/objects/bc/5c3af73bf1d425f975dce69d739dc3663dd71e": "aea24b39f409c2bb4955ef10cb303a5b",
".git/objects/c1/93d97456ce33867a8a2eba9ed3d643976e76d1": "799e9d823b40eaa593aa55cfb5e58ade",
".git/objects/c3/465338d632f3197e703eb3d38345d9ba1ea118": "da2b26f2ba764b88e2b98e069e5ba7b2",
".git/objects/c4/9c4cc9d1ad71f7f14a460691be0bb1a0e943cb": "d60b17953f2c39f0b4b05e85eb2ab79a",
".git/objects/c7/ad3e44081c775e54b7e123ecf7c0e042402608": "8842e61f70574a1f9a61a6e142ae6597",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a7dda0c280e55fb264082f9a8c237825326465": "900bd8cb3833ff8627e091f9b82f0b51",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e4/f0a9357c4e91b60513a74c10d55edb0611d5db": "c3de57ad27618a27daa0186ebf586637",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/bba43845b8b6fb85d7dff7ac13fb6f2d9c22d1": "fcc3bde87bb62a7a57b8cf2a41e97493",
".git/objects/f9/45438b1832ad798ba8491e6c4d4e39170243b9": "66bef6f9863078614a6c9dbee26adf84",
".git/refs/heads/main": "d7bbaa63ec9a611aee67fa1a124477e9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d7bbaa63ec9a611aee67fa1a124477e9",
"assets/AssetManifest.bin": "25a4914be6e372694ffaec90adacb368",
"assets/AssetManifest.bin.json": "6aed7c9de4043c31ed1bd402cca4ab56",
"assets/AssetManifest.json": "0a026cda7957a762fe40e624f1687813",
"assets/assets/animations/cat_button.riv": "e2f376fe3127310b918e0110ab44d499",
"assets/assets/animations/college_student.riv": "3d08d23a45589ddb087e23ef163db6c1",
"assets/assets/animations/developer.riv": "fa7abb57d6ff145cf70eb8a0154d6246",
"assets/assets/animations/moving_car.riv": "2d5bb6715c15726cd280bd3ffb8933f3",
"assets/assets/animations/personal_intro.riv": "58b3f6f9fe28e54d8946a78d2c68493e",
"assets/assets/animations/poof_poof.riv": "8f91a75a748c3802c5015ca247e9f720",
"assets/assets/animations/rocket_ship_animation.riv": "3c7090972d3c5b05e0cd3129add25ad6",
"assets/assets/animations/send_it_button.riv": "1c8735f6ef98e37ead593211f67721f2",
"assets/assets/animations/windmills.riv": "21e1c5de268b9aaea6ff76b59b4be66f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "9cf265ef83dbfc678179c01aeb8fdc16",
"assets/NOTICES": "db5055ed62aca01f54b0735c768e67f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8c6388eae138faeb3c0aabf50741e54b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "20c23ef3517701adc5526ada1979c131",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "caf33bb8ffcc7b426cfe0f2716c9a768",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5574988591d25b48f4315f7973256bb2",
"/": "5574988591d25b48f4315f7973256bb2",
"main.dart.js": "7386b934d8dfc7368ed6ee1f0d5a3dce",
"manifest.json": "7896915b5038faa55b27183586ec19cf",
"README.md": "2e22f15b7efe1048596b4613a16ba5bd",
"tardis4.png": "a6c4f5e4f4b7975003f6fa9b6263cbb1",
"version.json": "ee21cb1e7f6fbdd3d1804762a586d3f9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
