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

var precacheConfig = [["E:/hexo/public/2019/10/28/2019102801/index.html","d09bb23e6b0ac8e97fffabb95ffd3729"],["E:/hexo/public/2019/10/28/2019102801/markdown01.png","4f7829d59cde12baaeb7388286b6be1c"],["E:/hexo/public/2019/10/28/2019102801/md-flow.png","cabb861c8ebf0d4d692ede97620d5670"],["E:/hexo/public/2019/11/02/2019110101/index.html","173d7e3ea6d2b26866a890a9461b397c"],["E:/hexo/public/2019/11/02/2019110101/safetynet01.jpg","a2cc085aeec86c9de993f02597452558"],["E:/hexo/public/2019/11/02/2019110101/safetynet02.jpg","77fb1a3436896b49c9fb2776f2af5536"],["E:/hexo/public/2019/11/02/2019110101/safetynet03.jpg","861f80ba02cbaf8ac9a0178674501ab6"],["E:/hexo/public/2019/11/02/2019110101/safetynet04.png","a652cf420145c82a0a19360f401c7b0a"],["E:/hexo/public/2019/11/02/2019110101/safetynet05.jpg","2f20300ee721448f9c2b1a26cd969889"],["E:/hexo/public/2019/11/02/2019110101/safetynet06.jpg","c5bd4bee21a212e6ab6bcd6a34020485"],["E:/hexo/public/2019/11/05/2019110501/index.html","a292d0df329c3127d90dcf3b016b67b7"],["E:/hexo/public/2019/11/05/2019110501/pyspark01.jpg","151f53804d1b9315b26963649aff9a7c"],["E:/hexo/public/2019/11/11/2019111101/hive.png","d18a793cf443656c5aa6ae3f46b488b7"],["E:/hexo/public/2019/11/11/2019111101/index.html","192e3e614038be3e964d1cc66ecc18db"],["E:/hexo/public/2019/11/28/2019112801/index.html","c519e0f0bcf4642c3edf12352fae31a5"],["E:/hexo/public/2019/11/28/2019112801/windowsterminal001.jpg","0650efbc1a8aa67e5ede23ae465204ee"],["E:/hexo/public/2019/11/28/2019112801/windowsterminal002.jpg","62eedfff472d60e3fc3b559568802700"],["E:/hexo/public/2019/11/28/2019112801/windowsterminal003.jpg","ce2f3ca9171930940ce9d14fdecfbc5a"],["E:/hexo/public/2019/11/28/2019112801/windowsterminal004.jpg","51776cd9139884a80bfa8cc6c8a1eeed"],["E:/hexo/public/2019/11/28/2019112801/windowsterminal005.jpg","099616759dbfc20976d75c84bc8b2cc8"],["E:/hexo/public/2019/11/29/2019112901/index.html","75123d0be1e56eccd356d43f9fe9644a"],["E:/hexo/public/2019/11/29/2019112901/wsl000.jpg","a9a12f72cb2700bdd270a0923be41bda"],["E:/hexo/public/2019/11/29/2019112901/wsl001.jpg","177fa674dce4feb2185c82af3f0a2e41"],["E:/hexo/public/2019/11/29/2019112901/wsl003.jpg","ebe72b95eb9cc5808159b4447c664ac0"],["E:/hexo/public/2019/11/29/2019112901/wsl004.jpg","059b3689853678d0a6965b01df1ce7ea"],["E:/hexo/public/2019/11/29/2019112901/wsl005.jpg","442e8440c5a327c2ba3b8444b76f3e8a"],["E:/hexo/public/2019/11/29/2019112901/wsl006.jpg","c47c525e5f9fbc567649ff265246a5fc"],["E:/hexo/public/2019/11/29/2019112901/wsl007.jpg","72d54e825ef5e7dfb39225b9807c759e"],["E:/hexo/public/2019/12/08/2019120801/Windows01.jpg","270b027bef54697ec44bdbd44d45cfd9"],["E:/hexo/public/2019/12/08/2019120801/Windows02.png","10e627aa5c20539c20a6e7a018e7d886"],["E:/hexo/public/2019/12/08/2019120801/index.html","45f63064c2b1eabb6720af74ccb97ac3"],["E:/hexo/public/2019/12/09/2019120901/index.html","ee10b6d340dd1182f99ef6e31c162f74"],["E:/hexo/public/2019/12/09/2019120901/wsl007.jpg","72d54e825ef5e7dfb39225b9807c759e"],["E:/hexo/public/README/image_001.jpg","dae3b6a32f73611fc8197eeb1a50f759"],["E:/hexo/public/about/backiee7705.jpg","c6cacbd00753da70ee2795af7d12cbbd"],["E:/hexo/public/about/index.html","80dd2559ad2c9a62211bc0a62a051ed6"],["E:/hexo/public/archives/2019/10/index.html","bb07948c2fff00e3f40d745e482794b5"],["E:/hexo/public/archives/2019/11/index.html","0c535df3623f92f4225f134fac0922a0"],["E:/hexo/public/archives/2019/12/index.html","9a96737491c939bd2ce7aa735864b1b7"],["E:/hexo/public/archives/2019/index.html","df6cf6358c1519d780e3d2d132c907bf"],["E:/hexo/public/archives/index.html","17b4e1e5202b3939d9957ee9e824b1cc"],["E:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/hexo/public/categories/Android/index.html","3709bc39b320b29cc671ebc3c762a1c3"],["E:/hexo/public/categories/Hive/index.html","9db1252bdc1b85dd1d4752e44590ac25"],["E:/hexo/public/categories/WSL/index.html","057ae18e47d53284f94d72f46e89462c"],["E:/hexo/public/categories/Windows/index.html","2575a37115bfa5e1aa5cd9f07d065d82"],["E:/hexo/public/categories/index.html","5e5b26f680999e76d6912c945288e112"],["E:/hexo/public/categories/other/index.html","3ce9696d0594016e9085f022d39c7376"],["E:/hexo/public/categories/spark/index.html","939c7b61f2e0c9853bda294e47889304"],["E:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["E:/hexo/public/css/index.css","8336871c5eb8c96e29982f2a74a9c73b"],["E:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/hexo/public/gallery/index.html","0fe5db801312be7b50b069ce0236c000"],["E:/hexo/public/img/001.jpg","fa86c2c363b58bffff5d724531e7ecf5"],["E:/hexo/public/img/08.jpg","f2623b90583b1410d6199f9f08e75e9d"],["E:/hexo/public/img/1173406.jpg","4ac18e3267e8a2e0335093cf9acc9420"],["E:/hexo/public/img/12.jpg","3c3d1d1b1299e01ac0aaeeb81819ad3d"],["E:/hexo/public/img/19.jpg","c0b44f4a25ac158036b6e9bb7d6f08e2"],["E:/hexo/public/img/231005.jpg","7f4857dff67705cad5c0aa25ece43fbf"],["E:/hexo/public/img/27.jpg","105c4427f886d2e0aed3a06fa5eb90f9"],["E:/hexo/public/img/36.jpg","6f21384aea98c8038155dad2525c5ccb"],["E:/hexo/public/img/39.jpg","cf0992166e49019e476a431c52d86270"],["E:/hexo/public/img/398105.jpg","8afc6330796903c46033c857b949702f"],["E:/hexo/public/img/404.jpg","898bece7ee92395d250a1f4dd338a45a"],["E:/hexo/public/img/441017.jpg","7297bbf90c7ca7812bfd2c7e353deee6"],["E:/hexo/public/img/499219.jpg","aeb13ee104aa61f567c1ca4eeadfe9d4"],["E:/hexo/public/img/860.jpg","7dda793b1a1d70b4a33d5ffefb042ec4"],["E:/hexo/public/img/877.jpg","80d23e430d1167498dd390e4738cab2b"],["E:/hexo/public/img/902.jpg","0c5a60024b48c987c959c024e77c9928"],["E:/hexo/public/img/951.jpg","4abec7c0155ce638c4589d90718e558e"],["E:/hexo/public/img/algolia.svg","98ed7ad1113db185de1900ac9906baae"],["E:/hexo/public/img/avatar.png","3ebc38fa55f2717f03875b861eee3977"],["E:/hexo/public/img/backiee1074671.jpg","9cebe78fd86c27bc8d28cf3b6a84638c"],["E:/hexo/public/img/backiee126578.jpg","d92d341fa4d28744b425ab6dcfc1ec75"],["E:/hexo/public/img/backiee88096.jpg","cd44b2da6535dea0f426309c78fa006d"],["E:/hexo/public/img/comment_bg.png","a673b8f6dcc1d5f61c7d8107318fe07d"],["E:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/hexo/public/img/icp.png","b73f7b68e7bfdff0d61dd5a042679e7a"],["E:/hexo/public/img/image001.png","c1efe06d204db035e7826a85ca2b9d8b"],["E:/hexo/public/img/image334.jpg","c376d8c09ca201966a6d90f8fa92994e"],["E:/hexo/public/img/image_306.jpg","5f385b48325e5e7b0095925d85677a91"],["E:/hexo/public/img/post_loadding.svg","9df33e1d2762f4ce97b4c8469ac8b279"],["E:/hexo/public/img/tx002.jpg","f1c397a733e9e0270111b99c83e6080b"],["E:/hexo/public/index.html","13e5479930d03274347395937ae816e8"],["E:/hexo/public/js/baidupush.js","da9287d836ab24ffefece0da4fbb4667"],["E:/hexo/public/js/main.js","6cafe62d30a9c7baf4bd866430ffd4e5"],["E:/hexo/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/hexo/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/hexo/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/hexo/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/hexo/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/hexo/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/hexo/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/hexo/public/js/third-party/jquery.fancybox.min.js","816e341a716edd431ae86a4661b53300"],["E:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/hexo/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/hexo/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/hexo/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/hexo/public/lib/blog-encrypt.js","037b40f88c8f0c44818849b9127a5e3f"],["E:/hexo/public/link/index.html","1969d96afa91c1db9ab083a7e21cef35"],["E:/hexo/public/movies/index.html","3a84b9e13dddb163a182f856e1efe6a7"],["E:/hexo/public/music/index.html","29c9ced433c765c93ec071218241280a"],["E:/hexo/public/tags/Android/index.html","0a2f57f662a7d55e8559ba70e918ed09"],["E:/hexo/public/tags/Hive/index.html","cfc10cf65f08bf93e4e1645324c2327e"],["E:/hexo/public/tags/Linux/index.html","97e805df7397b5e3044aeae23165077b"],["E:/hexo/public/tags/Markdown/index.html","50afbe929b27378a8dc68857e5e67b00"],["E:/hexo/public/tags/PySpark/index.html","b918cbc8d8260d0b728fece1ad97ba9e"],["E:/hexo/public/tags/WSL/index.html","9e53846f983032d614f1977b4eda8e57"],["E:/hexo/public/tags/Windows/index.html","ff5f92f3aeab834fd8533455c03d4ca2"],["E:/hexo/public/tags/index.html","371775f6738490c3fdeecf3437c0402b"],["E:/hexo/public/tags/windowsTerminal/index.html","460038464a84d261e4d5721b6dab7841"]];
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







