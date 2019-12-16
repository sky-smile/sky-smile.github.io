/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/hexo/public/2019/10/28/2019102801-Markdown/index.html","885d57df9e9227517401bf932e36a586"],["E:/hexo/public/2019/10/28/2019102801-Markdown/markdown01.png","4f7829d59cde12baaeb7388286b6be1c"],["E:/hexo/public/2019/10/28/2019102801-Markdown/md-flow.png","cabb861c8ebf0d4d692ede97620d5670"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/index.html","a7068c1b4e5b87d8e23b021343da5a62"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet01.jpg","a2cc085aeec86c9de993f02597452558"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet02.jpg","77fb1a3436896b49c9fb2776f2af5536"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet03.jpg","861f80ba02cbaf8ac9a0178674501ab6"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet04.png","a652cf420145c82a0a19360f401c7b0a"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet05.jpg","2f20300ee721448f9c2b1a26cd969889"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet06.jpg","c5bd4bee21a212e6ab6bcd6a34020485"],["E:/hexo/public/2019/11/05/2019110501-DataFrame/index.html","89f791874ed88f29c7a67830ee86074b"],["E:/hexo/public/2019/11/05/2019110501-DataFrame/pyspark01.jpg","151f53804d1b9315b26963649aff9a7c"],["E:/hexo/public/2019/11/11/2019111101-Hive/hive.png","d18a793cf443656c5aa6ae3f46b488b7"],["E:/hexo/public/2019/11/11/2019111101-Hive/index.html","be06b51ba74c1b2c9ff368a1a00f7970"],["E:/hexo/public/2019/11/28/2019112801-Terminal/index.html","2091dcb3fd7b39d14a324638161ed97d"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal001.jpg","0650efbc1a8aa67e5ede23ae465204ee"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal002.jpg","62eedfff472d60e3fc3b559568802700"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal003.jpg","ce2f3ca9171930940ce9d14fdecfbc5a"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal004.jpg","51776cd9139884a80bfa8cc6c8a1eeed"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal005.jpg","099616759dbfc20976d75c84bc8b2cc8"],["E:/hexo/public/2019/11/29/2019112901-WSL/index.html","7cba7360cdf2e5a8d982f1ad738d07b1"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl000.jpg","a9a12f72cb2700bdd270a0923be41bda"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl001.jpg","177fa674dce4feb2185c82af3f0a2e41"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl003.jpg","ebe72b95eb9cc5808159b4447c664ac0"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl004.jpg","059b3689853678d0a6965b01df1ce7ea"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl005.jpg","442e8440c5a327c2ba3b8444b76f3e8a"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl006.jpg","c47c525e5f9fbc567649ff265246a5fc"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl007.jpg","72d54e825ef5e7dfb39225b9807c759e"],["E:/hexo/public/2019/12/08/2019120801-Windows/Windows01.jpg","270b027bef54697ec44bdbd44d45cfd9"],["E:/hexo/public/2019/12/08/2019120801-Windows/Windows02.png","10e627aa5c20539c20a6e7a018e7d886"],["E:/hexo/public/2019/12/08/2019120801-Windows/index.html","027e08842038f25675e7a5e41e35736b"],["E:/hexo/public/2019/12/09/2019120901-LxRunOffline/index.html","d8a278d42aa65162784405ea92a33584"],["E:/hexo/public/2019/12/09/2019120901-LxRunOffline/wsl007.jpg","72d54e825ef5e7dfb39225b9807c759e"],["E:/hexo/public/2019/12/12/2019121201-docker/Docker_logo.png","0c1d198acd0580ef908a04c4be549567"],["E:/hexo/public/2019/12/12/2019121201-docker/docker01.png","30ef08d712e88b1733e71aa08db24c72"],["E:/hexo/public/2019/12/12/2019121201-docker/index.html","6925e5ff6f80fdbb40393546b2bc04c8"],["E:/hexo/public/2019/12/12/2019121202-docker/Docker_logo.png","0c1d198acd0580ef908a04c4be549567"],["E:/hexo/public/2019/12/12/2019121202-docker/index.html","8f03b0287f0a313bc3ad1876c591cf41"],["E:/hexo/public/2019/12/13/2019121301-openwrt/01.png","301f7a9328ccb6bab5ce3ec4a4dfe0f3"],["E:/hexo/public/2019/12/13/2019121301-openwrt/02.png","9a1a7779d390cd7be8039427e113d1e8"],["E:/hexo/public/2019/12/13/2019121301-openwrt/03.png","a5c49b0128e36a3d090145e9544fc04e"],["E:/hexo/public/2019/12/13/2019121301-openwrt/04.png","13e2a4180cb2331ebc3d76e80c16cb97"],["E:/hexo/public/2019/12/13/2019121301-openwrt/index.html","337f7674d02157c5144abcc29fea0f3c"],["E:/hexo/public/2019/12/13/2019121301-openwrt/linux.jpg","b0fe2a2205e93f58b3a65a5dbf98c3d8"],["E:/hexo/public/2019/12/16/2019121601-UbuntuTime/index.html","679e30d206af470081f626048d1ead07"],["E:/hexo/public/2019/12/16/2019121601-UbuntuTime/time.jpg","5ae0458bbd62dac743a71898cc41d465"],["E:/hexo/public/README/image_001.jpg","dae3b6a32f73611fc8197eeb1a50f759"],["E:/hexo/public/about/backiee7705.jpg","c6cacbd00753da70ee2795af7d12cbbd"],["E:/hexo/public/about/index.html","9b1b90469bd27e06b824d7ec5bec5466"],["E:/hexo/public/archives/2019/10/index.html","5354328d0123ff79126205a2d7a4e2e1"],["E:/hexo/public/archives/2019/11/index.html","c711edefa270b1eb3995d326bd05a794"],["E:/hexo/public/archives/2019/12/index.html","559c9ed1fae525bdeb63682bc9e81c09"],["E:/hexo/public/archives/2019/index.html","4d573e1c37bad20b6e89d912386fed71"],["E:/hexo/public/archives/index.html","91042ec393212b4a208f25cc643d71cc"],["E:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/hexo/public/categories/Android/index.html","e18c59e95b6420fdfb024b2e277c423f"],["E:/hexo/public/categories/Docker/index.html","c712ed762a86693d0be948239c2ed8af"],["E:/hexo/public/categories/Hive/index.html","45d7a3e6a13512a135cf0a6e24ab1d14"],["E:/hexo/public/categories/Linux/index.html","2b35fb8821f05d0b08d2117dace008f5"],["E:/hexo/public/categories/Spark/index.html","cd8ac6d2d3c1b966b12b2c3e056b7492"],["E:/hexo/public/categories/WSL/index.html","3e572150d2d642c512f7cd47f148632c"],["E:/hexo/public/categories/Windows/index.html","16bbe4c0e41a999ee115a7744d968391"],["E:/hexo/public/categories/index.html","884a1c2a685679f1ad073efef7a40241"],["E:/hexo/public/categories/other/index.html","6baa0fa5c15d5de184f032d16e583539"],["E:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["E:/hexo/public/css/index.css","ff64906f1ccc3b0cfaf966367a78c8fb"],["E:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/hexo/public/gallery/index.html","b3ded7b3dff8b918fe36574dadd2b741"],["E:/hexo/public/img/001.jpg","fa86c2c363b58bffff5d724531e7ecf5"],["E:/hexo/public/img/08.jpg","f2623b90583b1410d6199f9f08e75e9d"],["E:/hexo/public/img/1173406.jpg","4ac18e3267e8a2e0335093cf9acc9420"],["E:/hexo/public/img/12.jpg","3c3d1d1b1299e01ac0aaeeb81819ad3d"],["E:/hexo/public/img/19.jpg","c0b44f4a25ac158036b6e9bb7d6f08e2"],["E:/hexo/public/img/231005.jpg","7f4857dff67705cad5c0aa25ece43fbf"],["E:/hexo/public/img/27.jpg","105c4427f886d2e0aed3a06fa5eb90f9"],["E:/hexo/public/img/36.jpg","6f21384aea98c8038155dad2525c5ccb"],["E:/hexo/public/img/39.jpg","cf0992166e49019e476a431c52d86270"],["E:/hexo/public/img/398105.jpg","8afc6330796903c46033c857b949702f"],["E:/hexo/public/img/404.jpg","898bece7ee92395d250a1f4dd338a45a"],["E:/hexo/public/img/441017.jpg","7297bbf90c7ca7812bfd2c7e353deee6"],["E:/hexo/public/img/499219.jpg","aeb13ee104aa61f567c1ca4eeadfe9d4"],["E:/hexo/public/img/860.jpg","7dda793b1a1d70b4a33d5ffefb042ec4"],["E:/hexo/public/img/877.jpg","80d23e430d1167498dd390e4738cab2b"],["E:/hexo/public/img/902.jpg","0c5a60024b48c987c959c024e77c9928"],["E:/hexo/public/img/951.jpg","4abec7c0155ce638c4589d90718e558e"],["E:/hexo/public/img/algolia.svg","98ed7ad1113db185de1900ac9906baae"],["E:/hexo/public/img/avatar.png","3ebc38fa55f2717f03875b861eee3977"],["E:/hexo/public/img/backiee1074671.jpg","9cebe78fd86c27bc8d28cf3b6a84638c"],["E:/hexo/public/img/backiee126578.jpg","d92d341fa4d28744b425ab6dcfc1ec75"],["E:/hexo/public/img/backiee88096.jpg","cd44b2da6535dea0f426309c78fa006d"],["E:/hexo/public/img/comment_bg.png","a673b8f6dcc1d5f61c7d8107318fe07d"],["E:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/hexo/public/img/icp.png","b73f7b68e7bfdff0d61dd5a042679e7a"],["E:/hexo/public/img/image001.png","c1efe06d204db035e7826a85ca2b9d8b"],["E:/hexo/public/img/image334.jpg","c376d8c09ca201966a6d90f8fa92994e"],["E:/hexo/public/img/image_306.jpg","5f385b48325e5e7b0095925d85677a91"],["E:/hexo/public/img/post_loadding.svg","9df33e1d2762f4ce97b4c8469ac8b279"],["E:/hexo/public/img/tx002.jpg","f1c397a733e9e0270111b99c83e6080b"],["E:/hexo/public/index.html","b4a5d4f5892314862849a91a05dd8fd7"],["E:/hexo/public/js/baidupush.js","da9287d836ab24ffefece0da4fbb4667"],["E:/hexo/public/js/main.js","6cafe62d30a9c7baf4bd866430ffd4e5"],["E:/hexo/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/hexo/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/hexo/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/hexo/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/hexo/public/js/third-party/activate-power-mode.js","f5c7069bd20e8ae565d8f71314589d0c"],["E:/hexo/public/js/third-party/anime.min.js","8dfc963cc721b003b992ea40708c5a75"],["E:/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/hexo/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/hexo/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/hexo/public/js/third-party/jquery.fancybox.min.js","816e341a716edd431ae86a4661b53300"],["E:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/hexo/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/hexo/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/hexo/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/hexo/public/lib/blog-encrypt.js","037b40f88c8f0c44818849b9127a5e3f"],["E:/hexo/public/link/index.html","250cf63859c52d3a306b40de49749d29"],["E:/hexo/public/movies/index.html","32e49dc1305f67a72668be5cdd2eb020"],["E:/hexo/public/music/index.html","63b27d80bb097ab43f4ded03ee274947"],["E:/hexo/public/page/2/index.html","b6344c70400022568b3982b8aaa971ac"],["E:/hexo/public/tags/Android/index.html","82780fc0a2412f435501df9d96b62d04"],["E:/hexo/public/tags/Docker/index.html","d22481ffb9b0a069febd0b0ff5af4417"],["E:/hexo/public/tags/Hive/index.html","01462263aa6aa28a2d235eba0f293169"],["E:/hexo/public/tags/Linux/index.html","fcaae50eb8d02f80512a5139ff185579"],["E:/hexo/public/tags/Markdown/index.html","b55032a5832d37cfa5f6f8bb34cc245c"],["E:/hexo/public/tags/PySpark/index.html","bf9a1ef48f0a85475bd3863fff54bad8"],["E:/hexo/public/tags/Ubuntu/index.html","036e8ef9f837f7a69bee4adc1c072be0"],["E:/hexo/public/tags/WSL/index.html","fb92043992f50910143fe89e75817af5"],["E:/hexo/public/tags/Windows/index.html","2df0280bacfa6ea78a875f8eff487e0b"],["E:/hexo/public/tags/index.html","863860d1006670dcf898e26a238ae0ea"],["E:/hexo/public/tags/windowsTerminal/index.html","bc8fced209c5e499d70f93af1bd4d446"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







