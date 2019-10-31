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

var precacheConfig = [["H:/hexo/public/2019/10/26/first/877.jpg","a96706056d3c979f0fe5943baf03514a"],["H:/hexo/public/2019/10/26/hello-world/index.html","a57ad6bf852ea0935e8f57111eb7a54d"],["H:/hexo/public/2019/10/28/2019102801/index.html","f9e9d144a15bda2c01d2e23b3fe2656f"],["H:/hexo/public/2019/10/28/2019102801/markdown01.png","4f7829d59cde12baaeb7388286b6be1c"],["H:/hexo/public/2019/10/28/2019102801/md-flow.png","cabb861c8ebf0d4d692ede97620d5670"],["H:/hexo/public/about/backiee7705.jpg","c6cacbd00753da70ee2795af7d12cbbd"],["H:/hexo/public/about/index.html","9767339fbf16b37c8a9119fdff06453c"],["H:/hexo/public/archives/2019/10/index.html","91708ce9e2cf2258f853e32e1b4b46bf"],["H:/hexo/public/archives/2019/index.html","31a3147adcb58ae5356f29c56415d765"],["H:/hexo/public/archives/index.html","7354a18701472274bff9db32eea89a11"],["H:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["H:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["H:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["H:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["H:/hexo/public/categories/index.html","94f704b274428cfff2d3682a82c99f79"],["H:/hexo/public/categories/other/index.html","28c6a759c5c2c5f27baa68ce877c2270"],["H:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["H:/hexo/public/css/index.css","82e8515dabe27c36cc33e82b45297aeb"],["H:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["H:/hexo/public/gallery/index.html","36019fb1e2da7204866913683624513d"],["H:/hexo/public/img/001.jpg","fa86c2c363b58bffff5d724531e7ecf5"],["H:/hexo/public/img/08.jpg","f2623b90583b1410d6199f9f08e75e9d"],["H:/hexo/public/img/1173406.jpg","4ac18e3267e8a2e0335093cf9acc9420"],["H:/hexo/public/img/12.jpg","3c3d1d1b1299e01ac0aaeeb81819ad3d"],["H:/hexo/public/img/19.jpg","c0b44f4a25ac158036b6e9bb7d6f08e2"],["H:/hexo/public/img/231005.jpg","7f4857dff67705cad5c0aa25ece43fbf"],["H:/hexo/public/img/27.jpg","105c4427f886d2e0aed3a06fa5eb90f9"],["H:/hexo/public/img/36.jpg","6f21384aea98c8038155dad2525c5ccb"],["H:/hexo/public/img/39.jpg","cf0992166e49019e476a431c52d86270"],["H:/hexo/public/img/398105.jpg","8afc6330796903c46033c857b949702f"],["H:/hexo/public/img/404.jpg","898bece7ee92395d250a1f4dd338a45a"],["H:/hexo/public/img/441017.jpg","7297bbf90c7ca7812bfd2c7e353deee6"],["H:/hexo/public/img/499219.jpg","aeb13ee104aa61f567c1ca4eeadfe9d4"],["H:/hexo/public/img/860.jpg","7dda793b1a1d70b4a33d5ffefb042ec4"],["H:/hexo/public/img/877.jpg","80d23e430d1167498dd390e4738cab2b"],["H:/hexo/public/img/902.jpg","0c5a60024b48c987c959c024e77c9928"],["H:/hexo/public/img/951.jpg","4abec7c0155ce638c4589d90718e558e"],["H:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["H:/hexo/public/img/avatar.png","3ebc38fa55f2717f03875b861eee3977"],["H:/hexo/public/img/backiee1074671.jpg","9cebe78fd86c27bc8d28cf3b6a84638c"],["H:/hexo/public/img/backiee126578.jpg","d92d341fa4d28744b425ab6dcfc1ec75"],["H:/hexo/public/img/backiee88096.jpg","cd44b2da6535dea0f426309c78fa006d"],["H:/hexo/public/img/comment_bg.png","a673b8f6dcc1d5f61c7d8107318fe07d"],["H:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["H:/hexo/public/img/icp.png","b73f7b68e7bfdff0d61dd5a042679e7a"],["H:/hexo/public/img/image334.jpg","c376d8c09ca201966a6d90f8fa92994e"],["H:/hexo/public/img/tx002.jpg","f1c397a733e9e0270111b99c83e6080b"],["H:/hexo/public/index.html","834b60b0414e07b5560cf127bffa2269"],["H:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["H:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["H:/hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["H:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["H:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["H:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["H:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["H:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["H:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["H:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["H:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["H:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["H:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["H:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["H:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["H:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["H:/hexo/public/lib/blog-encrypt.js","037b40f88c8f0c44818849b9127a5e3f"],["H:/hexo/public/link/index.html","e1b13b4ba0011cf4dc7c739c45803e51"],["H:/hexo/public/movies/index.html","717cdec19b8319cb48fadfd98e9aa9b0"],["H:/hexo/public/music/index.html","97192f43ffc6a276ceadc014b6fd1d72"],["H:/hexo/public/tags/Markdown/index.html","2b00a4caad6b75dd782e60ff19854fd9"],["H:/hexo/public/tags/index.html","f915ac867022286bdd439b6863661105"]];
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







