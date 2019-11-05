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

var precacheConfig = [["H:/hexo/public/2019/10/28/2019102801/index.html","7c8eb97185b958cb547df3c73ba98c2e"],["H:/hexo/public/2019/10/28/2019102801/markdown01.png","4f7829d59cde12baaeb7388286b6be1c"],["H:/hexo/public/2019/10/28/2019102801/md-flow.png","cabb861c8ebf0d4d692ede97620d5670"],["H:/hexo/public/2019/11/02/2019110101/index.html","8e8ed4709d6024e72ba2d35209b79d2c"],["H:/hexo/public/2019/11/02/2019110101/safetynet01.jpg","a2cc085aeec86c9de993f02597452558"],["H:/hexo/public/2019/11/02/2019110101/safetynet02.jpg","77fb1a3436896b49c9fb2776f2af5536"],["H:/hexo/public/2019/11/02/2019110101/safetynet03.jpg","861f80ba02cbaf8ac9a0178674501ab6"],["H:/hexo/public/2019/11/02/2019110101/safetynet04.png","a652cf420145c82a0a19360f401c7b0a"],["H:/hexo/public/2019/11/02/2019110101/safetynet05.jpg","2f20300ee721448f9c2b1a26cd969889"],["H:/hexo/public/2019/11/02/2019110101/safetynet06.jpg","c5bd4bee21a212e6ab6bcd6a34020485"],["H:/hexo/public/2019/11/05/2019110501/index.html","16c90727f5707a0e709b0bccb2cc35d2"],["H:/hexo/public/2019/11/05/2019110501/pyspark01.jpg","151f53804d1b9315b26963649aff9a7c"],["H:/hexo/public/README/image_001.jpg","dae3b6a32f73611fc8197eeb1a50f759"],["H:/hexo/public/about/backiee7705.jpg","c6cacbd00753da70ee2795af7d12cbbd"],["H:/hexo/public/about/index.html","8834b8c3058d90fda54fc07b1ef02b88"],["H:/hexo/public/archives/2019/10/index.html","0b2af438e98d8fbaaf5dcbb229408093"],["H:/hexo/public/archives/2019/11/index.html","bc378cb8b1706d73767b2ca5f35a5ed5"],["H:/hexo/public/archives/2019/index.html","948e403d93a915f03ae3674c9b649d96"],["H:/hexo/public/archives/index.html","ea25335b70095533d37134eb9c0222d7"],["H:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["H:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["H:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["H:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["H:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["H:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["H:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["H:/hexo/public/categories/Android/index.html","c806a59144a4183ce0a37effd3833346"],["H:/hexo/public/categories/index.html","aa2bcc0506e4fce07d1752cc2d470a7b"],["H:/hexo/public/categories/other/index.html","a094d03608d62ed60ed2ffcfafe8c010"],["H:/hexo/public/categories/spark/index.html","161e2143e9bc69c8a242526a2754170e"],["H:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["H:/hexo/public/css/index.css","0ed9421830b2cb44930a05a6597fa8a4"],["H:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["H:/hexo/public/gallery/index.html","18eb149b6e00fba5b2608469e06296ea"],["H:/hexo/public/img/001.jpg","fa86c2c363b58bffff5d724531e7ecf5"],["H:/hexo/public/img/08.jpg","f2623b90583b1410d6199f9f08e75e9d"],["H:/hexo/public/img/1173406.jpg","4ac18e3267e8a2e0335093cf9acc9420"],["H:/hexo/public/img/12.jpg","3c3d1d1b1299e01ac0aaeeb81819ad3d"],["H:/hexo/public/img/19.jpg","c0b44f4a25ac158036b6e9bb7d6f08e2"],["H:/hexo/public/img/231005.jpg","7f4857dff67705cad5c0aa25ece43fbf"],["H:/hexo/public/img/27.jpg","105c4427f886d2e0aed3a06fa5eb90f9"],["H:/hexo/public/img/36.jpg","6f21384aea98c8038155dad2525c5ccb"],["H:/hexo/public/img/39.jpg","cf0992166e49019e476a431c52d86270"],["H:/hexo/public/img/398105.jpg","8afc6330796903c46033c857b949702f"],["H:/hexo/public/img/404.jpg","898bece7ee92395d250a1f4dd338a45a"],["H:/hexo/public/img/441017.jpg","7297bbf90c7ca7812bfd2c7e353deee6"],["H:/hexo/public/img/499219.jpg","aeb13ee104aa61f567c1ca4eeadfe9d4"],["H:/hexo/public/img/860.jpg","7dda793b1a1d70b4a33d5ffefb042ec4"],["H:/hexo/public/img/877.jpg","80d23e430d1167498dd390e4738cab2b"],["H:/hexo/public/img/902.jpg","0c5a60024b48c987c959c024e77c9928"],["H:/hexo/public/img/951.jpg","4abec7c0155ce638c4589d90718e558e"],["H:/hexo/public/img/algolia.svg","98ed7ad1113db185de1900ac9906baae"],["H:/hexo/public/img/avatar.png","3ebc38fa55f2717f03875b861eee3977"],["H:/hexo/public/img/backiee1074671.jpg","9cebe78fd86c27bc8d28cf3b6a84638c"],["H:/hexo/public/img/backiee126578.jpg","d92d341fa4d28744b425ab6dcfc1ec75"],["H:/hexo/public/img/backiee88096.jpg","cd44b2da6535dea0f426309c78fa006d"],["H:/hexo/public/img/comment_bg.png","a673b8f6dcc1d5f61c7d8107318fe07d"],["H:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["H:/hexo/public/img/icp.png","b73f7b68e7bfdff0d61dd5a042679e7a"],["H:/hexo/public/img/image001.png","c1efe06d204db035e7826a85ca2b9d8b"],["H:/hexo/public/img/image334.jpg","c376d8c09ca201966a6d90f8fa92994e"],["H:/hexo/public/img/image_306.jpg","5f385b48325e5e7b0095925d85677a91"],["H:/hexo/public/img/post_loadding.svg","9df33e1d2762f4ce97b4c8469ac8b279"],["H:/hexo/public/img/tx002.jpg","f1c397a733e9e0270111b99c83e6080b"],["H:/hexo/public/index.html","2b941b22be3e1c514316a8b06c03b5e9"],["H:/hexo/public/js/baidupush.js","da9287d836ab24ffefece0da4fbb4667"],["H:/hexo/public/js/main.js","1f8dd9ee3aa874ec738f20b48c506f27"],["H:/hexo/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["H:/hexo/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["H:/hexo/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["H:/hexo/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["H:/hexo/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["H:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["H:/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["H:/hexo/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["H:/hexo/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["H:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["H:/hexo/public/js/third-party/jquery.fancybox.min.js","816e341a716edd431ae86a4661b53300"],["H:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["H:/hexo/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["H:/hexo/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["H:/hexo/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["H:/hexo/public/lib/blog-encrypt.js","037b40f88c8f0c44818849b9127a5e3f"],["H:/hexo/public/link/index.html","496c55335b2a34732393e3bbba37c64b"],["H:/hexo/public/movies/index.html","cf7824a07e637c30b92341ae06b34901"],["H:/hexo/public/music/index.html","2a3902016aba022d8bbfe5a2b110a683"],["H:/hexo/public/tags/Android/index.html","6e2df70481a4f2d6cd5d1067f6f72e29"],["H:/hexo/public/tags/Markdown/index.html","6df496e1266256b73bb61f5d96392a02"],["H:/hexo/public/tags/PySpark/index.html","ad7b6e417b0edcda8d07885f3eb7ba61"],["H:/hexo/public/tags/index.html","1bec9abfdae6c3dad872d901971de8eb"]];
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







