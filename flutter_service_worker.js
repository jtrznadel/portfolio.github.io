'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8b61d5ef771b34dd3ade24430ef2935f",
".git/config": "a85ad3107fe58b82d2d52f4272f4fcb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7ab326f53f1fc805d9a576a1615dc5cf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b05f5414fd82905da15401f51dffdcf8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c157d40a717b191ccb24fc7dc6f96002",
".git/logs/refs/heads/master": "c157d40a717b191ccb24fc7dc6f96002",
".git/logs/refs/remotes/origin/main": "d5c75e86e034398cc448a5e6c17b2a5b",
".git/logs/refs/remotes/origin/master": "0ae2992f3b8f37612e98ddb8ae784847",
".git/objects/01/618e6a95cb499d2261a3e15e5df0e803059839": "3c9bce3daa6115ae4850216847fbb64d",
".git/objects/01/784eaff0f1f34128bb35ea1c7835d2d3cca104": "ef4f83c3e4dbeaa3cacc50c120c4e8fe",
".git/objects/01/7f763683691e786e847e8dcf053d53fbbba0bb": "0d56825054be08939b084baf9459d31a",
".git/objects/03/2d6df6f9a70fe08d22ae62dba92322a0c679b9": "1d90e2fc4c4a0627a67d5206b1738e40",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/f5e8ddcb5dfda4a9995acdf431fcd349f82174": "87cdc243c89fda0fac66e9adc59ebd88",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/13/242dd2b84d600c2d3885974acc6775bef9ebad": "aa0eb69be08a079a6438ed39f6545761",
".git/objects/13/2b25ba55fe38aec36bf053975c16db974a5e6b": "7b639899430634436917c44a45311ba0",
".git/objects/14/6389d7826be2a6c6b23c4cb674f1e7ff57e4c5": "bdb90d6a427e5307973a9c6f8ae20fce",
".git/objects/1b/982292fc0bf9565d9d57f91fef63a2d24f678a": "e3bf26306b593467715e33c0f52e7e39",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/3ffd12c8f89a9da78c404d68eddc485cfd1574": "c5ddd6969481005a1d3e9b5dd9e4c886",
".git/objects/27/1211dbc886904d613b31b24d61e4b2ce581c64": "5e21ecd199f7d366d2e3fd2581732557",
".git/objects/2a/c06770dc657e4f93e3e0520fa182764cfabd83": "99679d0c568a19e89d6774b7068efd42",
".git/objects/2b/21639d1a44d62e75cb8be3797762ec8fe99fdd": "a2d8a8a1b533d3c2d911c956d6966d40",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2f/30e304cfdd44c0921ac978bc15ece0edaeb60a": "95f7d281255401c0f3c42271cf083501",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/70ef2cebbbc128e7e898673376c375ece05307": "fc35d1f6fd017c931044d75ea69b92c9",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/ba4b9e2ca8188af8ee776d7e45f3674a649642": "79d2fcb6bf92ed91b05767cec1fcb964",
".git/objects/52/f04c79355d7574348f70e91b5aec9c442307b5": "5d327054601d0501b79e42dffe9db7da",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/05a90bdfa8c53787201399f60dc89e5291dc6a": "d70e8119a5d57f4d14f1b32c3ee5369c",
".git/objects/59/ba5dac62268c479fed42c03925a36dca0b061f": "9875d729960eb21f43093e5c15ed6127",
".git/objects/5a/e8d6e4a39b747299318b96283b09997255e52a": "8733913e0b5e5f432e3420c01a79132b",
".git/objects/60/f710bb607589ec4d16f1b2eb5e26baf64df21a": "2ff3bba4c875dae4152117b854082d7e",
".git/objects/63/43f3da1adf68572d22aeb2e648276a72d04cba": "bfc5bd2910ed527f951ffa0e4bbba9d1",
".git/objects/65/fe7160e07056eef21cba2eae733e96c43a9f14": "3a3a018516fff73312183257a863fa09",
".git/objects/66/406dcf68d2c08842c0a6eecbd9f7fa2c935ede": "d5c5d46cf3485c542a3a74d236166690",
".git/objects/68/6bff2bb076442d7d0f674bc7dd50fee5ed6603": "f7ef06b4e286c68128a2fc4fde989ca6",
".git/objects/6b/b7d3d2436dbf300d2a2ce0d0a646dedcfac4a1": "24fc6bda6c8e5c6364d0c222713b3021",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/6d/ea8e5d7839e71f8fe4d6fe31f4999b6c1c574e": "3621360759734f9d9af4c2788b3d42f4",
".git/objects/71/f2e2b7c21c75f8d521fa8b98b74df3c24c9d8d": "01f9bcd44413df4e74e7ec191dedfae4",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/72/ccd81900623b963af217a0565602ddb6e08a78": "8a6aeda22f72b7901992356e20fc8c79",
".git/objects/74/9b39b621f2d00842191fc63cc124b1ca17c615": "a6ebfab1357a3fc98e9bb44bbb74631b",
".git/objects/80/2f2e7033997bb6ae7b2250cc04c56fb60b9cfe": "78b676d91d59b7d465589efb7b73895c",
".git/objects/82/055d64b6c79353741503ff11db79ca3b821cce": "b524d9e17dbe2872abee803706ca274e",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e499626a6b3dcc366642072e1b3803f04e901b": "82cf7ff2365381297ba2a7851971f8ef",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8d/7a4fd43df7377c6496bc7572a3b7566247b030": "5970913212c2aa369fe122a3f9501302",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/1c5abf6c2c76b16f879c724b625f7e42fc2a8f": "46024b0b3ae9908c8ed27550032e9e62",
".git/objects/9a/5f739b0d4dc8d345d73ddaa62893e45e2f6c7a": "8da5d9e3d91483e02b5eedb5c96a5999",
".git/objects/9b/91fa83de3aa4c34fae8ef6f4816c411aa589df": "306ce62de20dd0c08de306fd0ac8b7d5",
".git/objects/a8/16deacbf9f3bd233b313d03fd2f44fd654fcc6": "3cb75ae8dfe9e2afe675c71bd3aed17b",
".git/objects/ab/ac0ec745914612dd931f01edb9214ec488f120": "af992c7bd7eefc9e914318b2484837f4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/90409f284987ef20ca1c0642f708c38ec21514": "c64520fd3041067adfe0e2049d8f7bf2",
".git/objects/ba/8685eb9804eddcb47b09e113ff05783843ced8": "e092004e09981cc6bc98310e6941f8d6",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c3/7bfa1562907e856987d64b798e6a8a9eaf00a5": "c2aab36c32c7d865e48f869042c8c7d6",
".git/objects/c3/8987ea10005d24d0666838b0ba9370c217f06a": "f3238fb211e956bc8a64502da2e339c9",
".git/objects/cf/8f01ef06334de3047347fa3350479fc5fadfc1": "7510bb10e7d8dc56d5b821b3d17a7170",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b95efd7200f4d94e0c844e5ac5bca5b834029b": "c61e3e9f84b9bd48aa9a7b48ecf8778d",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/fcf5cf1e7b7d29c83a88e4cf87dbaa61d9d18c": "fcea55baff84725b5154f0e9657965cc",
".git/objects/da/82f55e00aa0d7e894d02735ad60d8321be60fc": "7d8918187bb3e85dc3a68ebfcf5a7851",
".git/objects/db/859abcba773d90bd524c4d931a98339378781d": "e7878bba992452819186e6cfa4a373fd",
".git/objects/e5/eefaadbe9b00a5be5730b201f757dab4cc00a0": "63b73e38c5c823b646582b05f5d5e409",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/0e591fcb70ff6c2a0871002cc99129087da8c3": "97b65a1982c984c8abe9a712ff906cd5",
".git/objects/e7/6f926ad615311f6e0414fa913e8c92921b32ea": "fad6899747eced4018f57cd28b987079",
".git/objects/eb/80c3dd70e48a0aac415055a88796b6029a6a95": "ec0470cd98f28ab373866bc600aa7d42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/6da59df2b34022eeb843097690f43e729e010a": "5d65d4796be9502c4f81c4e1f2bd9dfb",
".git/objects/f2/a36aec076b6f915073d20bb8db50cf131708cb": "dcfab231ca764f46f0e4c9c3fe94c3c4",
".git/objects/f7/2336a96b07afaedd038eaacc8539f07da21c47": "ecb403024bafdb9d6d430e5dd8dc4d84",
".git/objects/f7/87a77fdf95799dc2062b4e2de8cda36458df49": "04b1c415e795e3be9251cceecd5d87a3",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/ff/a89b2503b59b7e51886fa55ef5d8ac5194d6a6": "6ee7c580625f59d46404eb48cebee952",
".git/ORIG_HEAD": "a2e972a62e1e20704f483159d381028b",
".git/refs/heads/master": "b370f42f1d03357fb790e1dd66526cee",
".git/refs/remotes/origin/main": "b5a67950ad0e25f80dbd522f66f4221c",
".git/refs/remotes/origin/master": "b370f42f1d03357fb790e1dd66526cee",
"assets/AssetManifest.bin": "fe1a784605228b738db57d476e8f4e7d",
"assets/AssetManifest.bin.json": "26f81640ae96c212ba42f517fce14c72",
"assets/AssetManifest.json": "669492c2f02e0b4aae101bc277ebca02",
"assets/assets/images/budgetbuddy_intro.png": "40dcc0d01b4b42754a49263070aa63a2",
"assets/assets/images/portfolio_image.png": "c903a118a63a6c34cbd008add9109cfc",
"assets/assets/images/socialease_intro.png": "fd9a9a8cff652ec4051820806afd9ec8",
"assets/assets/logos/dartlang-icon.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/logos/dotnet-icon.svg": "d969f7b3867a266393b5c5a3c2048db5",
"assets/assets/logos/firebase-icon.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/logos/flutterio-icon.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/logos/os-ios-svgrepo-com.svg": "6e35e0db21d50a59419f134add0620f0",
"assets/assets/logos/sql-icon.svg": "f97753b41cb2ab44394095651cec98e4",
"assets/assets/logos/swift-icon.svg": "a8f87f8c8f7df5912eeb590481d605d7",
"assets/assets/logos/xcode-svgrepo-com.svg": "35cb8b66e93683bb1be28abe6721f52c",
"assets/assets/lotties/home_astronaut.json": "e5b160a4df7fc67c859a9a2e9bc0b075",
"assets/assets/pdf/Jakub%20Trznadel%20-%20Mobile%20Developer%20-%20Resume.pdf": "48bd8bc832221e305748eccf4d6bbd87",
"assets/assets/pdf/Jakub%2520Trznadel%2520-%2520Mobile%2520Developer%2520-%2520Resume.pdf": "0606642c823aba5745bf6ff3ba7d402e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "c259d216d697fa7b8d92523e8f8a90c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "cc6720a0aea7caf8ef4a3a92870859ee",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"how%208d7a4fd43df7377c6496bc7572a3b7566247b030": "c39fbc93ed095afcc30af4f9753fc669",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "826e7b355cdc2e7d84fc99f25f7c9114",
"/": "826e7b355cdc2e7d84fc99f25f7c9114",
"main.dart.js": "422d3df69afdeedd1bfd2ed193101776",
"manifest.json": "826b007480801bfd3c8d71613c1b08ae",
"version.json": "998a2a153f3b69857123b570d4b21201"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
