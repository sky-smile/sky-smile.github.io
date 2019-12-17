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

var precacheConfig = [["E:/hexo/public/2019/10/28/2019102801-Markdown/index.html","885d57df9e9227517401bf932e36a586"],["E:/hexo/public/2019/10/28/2019102801-Markdown/markdown01.png","4f7829d59cde12baaeb7388286b6be1c"],["E:/hexo/public/2019/10/28/2019102801-Markdown/md-flow.png","cabb861c8ebf0d4d692ede97620d5670"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/index.html","a7068c1b4e5b87d8e23b021343da5a62"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet01.jpg","a2cc085aeec86c9de993f02597452558"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet02.jpg","77fb1a3436896b49c9fb2776f2af5536"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet03.jpg","861f80ba02cbaf8ac9a0178674501ab6"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet04.png","a652cf420145c82a0a19360f401c7b0a"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet05.jpg","2f20300ee721448f9c2b1a26cd969889"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet06.jpg","c5bd4bee21a212e6ab6bcd6a34020485"],["E:/hexo/public/2019/11/05/2019110501-DataFrame/index.html","9601cb317cd7fae7cf28a34cad2375ff"],["E:/hexo/public/2019/11/05/2019110501-DataFrame/pyspark01.jpg","151f53804d1b9315b26963649aff9a7c"],["E:/hexo/public/2019/11/11/2019111101-Hive/hive01.jpg","86dc899ad3ec5da07f7bfdecc05f9008"],["E:/hexo/public/2019/11/11/2019111101-Hive/index.html","914c4a894a62fca495f2b39c2f76a8dc"],["E:/hexo/public/2019/11/28/2019112801-Terminal/index.html","be73163a36d5c8d040f6ab3d5744140e"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal001.jpg","0650efbc1a8aa67e5ede23ae465204ee"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal002.jpg","62eedfff472d60e3fc3b559568802700"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal003.jpg","ce2f3ca9171930940ce9d14fdecfbc5a"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal004.jpg","51776cd9139884a80bfa8cc6c8a1eeed"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal005.jpg","099616759dbfc20976d75c84bc8b2cc8"],["E:/hexo/public/2019/11/29/2019112901-WSL/index.html","2172449237ecb9e40ef69f35608251d5"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl000.jpg","a9a12f72cb2700bdd270a0923be41bda"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl001.jpg","177fa674dce4feb2185c82af3f0a2e41"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl003.jpg","ebe72b95eb9cc5808159b4447c664ac0"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl004.jpg","059b3689853678d0a6965b01df1ce7ea"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl005.jpg","442e8440c5a327c2ba3b8444b76f3e8a"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl006.jpg","c47c525e5f9fbc567649ff265246a5fc"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl007.png","74446b07fe4388d3fb36d5ab249f2236"],["E:/hexo/public/2019/12/08/2019120801-Windows/Windows01.jpg","270b027bef54697ec44bdbd44d45cfd9"],["E:/hexo/public/2019/12/08/2019120801-Windows/index.html","b51d64e05c95b185eb413b5a19a5c531"],["E:/hexo/public/2019/12/08/2019120801-Windows/win01.jpg","44e45ea164774ba517036c77b2a63adc"],["E:/hexo/public/2019/12/09/2019120901-LxRunOffline/index.html","5ab5d939870697da8381688bee69f085"],["E:/hexo/public/2019/12/09/2019120901-LxRunOffline/wsl007.png","74446b07fe4388d3fb36d5ab249f2236"],["E:/hexo/public/2019/12/12/2019121201-docker/Docker_logo.png","0c1d198acd0580ef908a04c4be549567"],["E:/hexo/public/2019/12/12/2019121201-docker/docker01.png","30ef08d712e88b1733e71aa08db24c72"],["E:/hexo/public/2019/12/12/2019121201-docker/index.html","bea00f7fb8f20ee4dce8f45df5f0323b"],["E:/hexo/public/2019/12/12/2019121202-docker/Docker_logo.png","0c1d198acd0580ef908a04c4be549567"],["E:/hexo/public/2019/12/12/2019121202-docker/index.html","8f03b0287f0a313bc3ad1876c591cf41"],["E:/hexo/public/2019/12/13/2019121301-openwrt/01.png","301f7a9328ccb6bab5ce3ec4a4dfe0f3"],["E:/hexo/public/2019/12/13/2019121301-openwrt/02.png","9a1a7779d390cd7be8039427e113d1e8"],["E:/hexo/public/2019/12/13/2019121301-openwrt/03.png","a5c49b0128e36a3d090145e9544fc04e"],["E:/hexo/public/2019/12/13/2019121301-openwrt/04.png","13e2a4180cb2331ebc3d76e80c16cb97"],["E:/hexo/public/2019/12/13/2019121301-openwrt/index.html","96327c5810a290401bbdaf8da0d018fd"],["E:/hexo/public/2019/12/13/2019121301-openwrt/linux.jpg","b672ecda0c2f4751e7b6558dd3290dc7"],["E:/hexo/public/2019/12/16/2019121601-UbuntuTime/index.html","1657d2032b918ab9c00819b4b7510f2e"],["E:/hexo/public/2019/12/16/2019121601-UbuntuTime/time.jpg","5ae0458bbd62dac743a71898cc41d465"],["E:/hexo/public/2019/12/16/2019121601-UbuntuTime/ubuntu.jpg","12d9fcc6116992e1f4f6e28ff67eea42"],["E:/hexo/public/README/image_001.jpg","dae3b6a32f73611fc8197eeb1a50f759"],["E:/hexo/public/about/backiee7705.jpg","c6cacbd00753da70ee2795af7d12cbbd"],["E:/hexo/public/about/index.html","924b924152f19371d46a290bd96daf60"],["E:/hexo/public/archives/2019/10/index.html","679331693d4781edfe6aea381941e093"],["E:/hexo/public/archives/2019/11/index.html","7bb4de3520bd840170ec1ec4643b2ede"],["E:/hexo/public/archives/2019/12/index.html","2d1b62825f54658248351ed878efbbb0"],["E:/hexo/public/archives/2019/index.html","72bcdd4f8671d7d22bf4ad7d582d4a86"],["E:/hexo/public/archives/index.html","6565eca420872f967c2a45cd471e0b91"],["E:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/hexo/public/categories/Android/index.html","c7d8aa9fd69063241ca24052d694bcb3"],["E:/hexo/public/categories/Docker/index.html","9766f3704652a726369f437bdae17b5f"],["E:/hexo/public/categories/Hive/index.html","b4433bf5ddc1b04bdeec73c44f0ddade"],["E:/hexo/public/categories/Linux/index.html","c362b1d40eb125f2ee7015980efa6d17"],["E:/hexo/public/categories/Spark/index.html","072c9506946303409bec1975bd1f66c0"],["E:/hexo/public/categories/WSL/index.html","130766f4d7b32c749f5e5498bef3f845"],["E:/hexo/public/categories/Windows/index.html","54f58d44fd5455f977aa519626fecfc1"],["E:/hexo/public/categories/index.html","be2392103858c0361cf9192c9d77201a"],["E:/hexo/public/categories/other/index.html","758543f50750a503927e5943a40ccea2"],["E:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["E:/hexo/public/css/index.css","ff64906f1ccc3b0cfaf966367a78c8fb"],["E:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/hexo/public/gallery/index.html","713c5a0b30cdd2fdf730a6ac9301dfb9"],["E:/hexo/public/img/001.jpg","fa86c2c363b58bffff5d724531e7ecf5"],["E:/hexo/public/img/08.jpg","f2623b90583b1410d6199f9f08e75e9d"],["E:/hexo/public/img/1173406.jpg","4ac18e3267e8a2e0335093cf9acc9420"],["E:/hexo/public/img/12.jpg","3c3d1d1b1299e01ac0aaeeb81819ad3d"],["E:/hexo/public/img/19.jpg","c0b44f4a25ac158036b6e9bb7d6f08e2"],["E:/hexo/public/img/231005.jpg","7f4857dff67705cad5c0aa25ece43fbf"],["E:/hexo/public/img/27.jpg","105c4427f886d2e0aed3a06fa5eb90f9"],["E:/hexo/public/img/36.jpg","6f21384aea98c8038155dad2525c5ccb"],["E:/hexo/public/img/39.jpg","cf0992166e49019e476a431c52d86270"],["E:/hexo/public/img/398105.jpg","8afc6330796903c46033c857b949702f"],["E:/hexo/public/img/404.jpg","898bece7ee92395d250a1f4dd338a45a"],["E:/hexo/public/img/441017.jpg","7297bbf90c7ca7812bfd2c7e353deee6"],["E:/hexo/public/img/499219.jpg","aeb13ee104aa61f567c1ca4eeadfe9d4"],["E:/hexo/public/img/860.jpg","7dda793b1a1d70b4a33d5ffefb042ec4"],["E:/hexo/public/img/877.jpg","80d23e430d1167498dd390e4738cab2b"],["E:/hexo/public/img/902.jpg","0c5a60024b48c987c959c024e77c9928"],["E:/hexo/public/img/951.jpg","4abec7c0155ce638c4589d90718e558e"],["E:/hexo/public/img/algolia.svg","98ed7ad1113db185de1900ac9906baae"],["E:/hexo/public/img/avatar.png","3ebc38fa55f2717f03875b861eee3977"],["E:/hexo/public/img/backiee-9212.jpg","a23086792cbc04d74abc539ca01bd642"],["E:/hexo/public/img/backiee1074671.jpg","9cebe78fd86c27bc8d28cf3b6a84638c"],["E:/hexo/public/img/backiee126578.jpg","d92d341fa4d28744b425ab6dcfc1ec75"],["E:/hexo/public/img/comment_bg.png","a673b8f6dcc1d5f61c7d8107318fe07d"],["E:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/hexo/public/img/icp.png","b73f7b68e7bfdff0d61dd5a042679e7a"],["E:/hexo/public/img/image001.png","c1efe06d204db035e7826a85ca2b9d8b"],["E:/hexo/public/img/image334.jpg","c376d8c09ca201966a6d90f8fa92994e"],["E:/hexo/public/img/image_306.jpg","5f385b48325e5e7b0095925d85677a91"],["E:/hexo/public/img/post_loadding.svg","9df33e1d2762f4ce97b4c8469ac8b279"],["E:/hexo/public/img/tx002.jpg","f1c397a733e9e0270111b99c83e6080b"],["E:/hexo/public/index.html","b120c88736318cd0daebf3ddb1521fe3"],["E:/hexo/public/js/baidupush.js","da9287d836ab24ffefece0da4fbb4667"],["E:/hexo/public/js/main.js","6cafe62d30a9c7baf4bd866430ffd4e5"],["E:/hexo/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/hexo/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/hexo/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/hexo/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/hexo/public/js/third-party/activate-power-mode.js","f5c7069bd20e8ae565d8f71314589d0c"],["E:/hexo/public/js/third-party/anime.min.js","8dfc963cc721b003b992ea40708c5a75"],["E:/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/hexo/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/hexo/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/hexo/public/js/third-party/jquery.fancybox.min.js","816e341a716edd431ae86a4661b53300"],["E:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/hexo/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/hexo/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/hexo/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/hexo/public/lib/blog-encrypt.js","037b40f88c8f0c44818849b9127a5e3f"],["E:/hexo/public/link/index.html","5b422e167cc828316a32ac407af3490e"],["E:/hexo/public/movies/index.html","484a45a900b9a64e81cd7dea56205cdd"],["E:/hexo/public/music/index.html","10111865407a837c56e3fe9c4410e0f8"],["E:/hexo/public/page/2/index.html","6e5726b29de376bec285ed85780d9230"],["E:/hexo/public/tags/Android/index.html","3857cdc28074a87ff9f2edd26ab59779"],["E:/hexo/public/tags/Docker/index.html","69c6e53bc8d0569c3413e951698bd200"],["E:/hexo/public/tags/Hive/index.html","0276413a26428ef0f76ef23bbfdc9388"],["E:/hexo/public/tags/Linux/index.html","9d0c095c342a8fc89785db2f045e6566"],["E:/hexo/public/tags/Markdown/index.html","3cad802cebdb185de5f0d216fcd958ea"],["E:/hexo/public/tags/PySpark/index.html","0eb47a662ba1779197555084edc28414"],["E:/hexo/public/tags/Ubuntu/index.html","d78c29381ba073718916c88bb7b8f305"],["E:/hexo/public/tags/WSL/index.html","4daa2075c266abcc1a9bf8adf493aa3e"],["E:/hexo/public/tags/Windows/index.html","4fb0e31658d1bff0fbf1607a4ce7586f"],["E:/hexo/public/tags/index.html","627a8a8c30148a7bb2f44ef7352adc89"],["E:/hexo/public/tags/windowsTerminal/index.html","8906959fc00242b274a1ae5dd98c19e2"]];
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







