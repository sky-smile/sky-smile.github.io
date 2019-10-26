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

var precacheConfig = [["H:/hexo/public/2019/10/26/first/877.jpg","a96706056d3c979f0fe5943baf03514a"],["H:/hexo/public/2019/10/26/hello-world/index.html","945621bd8536cdce9398e7d6fabb9656"],["H:/hexo/public/2019/10/26/hello/0823dd54564e9258413dbc039982d158cdbf4ed5 - 副本.jpg","83a54fdaf21a472f3ec3808929af9186"],["H:/hexo/public/2019/10/26/hello/441017.jpg","8acc09f8d1f7c8c4314c638175f01858"],["H:/hexo/public/2019/10/26/hello/69624.jpg","04fc76391a2e1ea4459707e687da944f"],["H:/hexo/public/2019/10/26/hello/801867.jpg","0678fe80fd7dab3fe52607110e27d64e"],["H:/hexo/public/2019/10/26/hello/index.html","5b9edc807e6a2fe53dc9bc729098e624"],["H:/hexo/public/about/index.html","24a2f66777eea1ca0574b8f72800a601"],["H:/hexo/public/archives/2019/10/index.html","88cb4b47c3cf12fa3a88f32fe756f981"],["H:/hexo/public/archives/2019/index.html","9526870b413d9550ced87533075f0ec5"],["H:/hexo/public/archives/index.html","a1c6769e3bf0feb92cf489afb34c6378"],["H:/hexo/public/categories/first/index.html","481bb5f9d35c71595eb93900952bb803"],["H:/hexo/public/categories/index.html","e37bcf1caa283598ff5ae911a02429c4"],["H:/hexo/public/css/index.css","d850214088806fa345bcee923dbebe6a"],["H:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["H:/hexo/public/gallery/index.html","631560db13df03313dae77618778f8a9"],["H:/hexo/public/img/001.jpg","dc9fd9f29628b3caf11d4398c4446ac0"],["H:/hexo/public/img/08.jpg","7bb9c491c503612914b7bcb6e5452cba"],["H:/hexo/public/img/1173406.jpg","3852ef10ef640d0e1fc36c9f1d242b0e"],["H:/hexo/public/img/12.jpg","ea08558c046cdcdb1e19a20aff74563f"],["H:/hexo/public/img/19.jpg","86387a3814075063cd2ad4eddad35b2c"],["H:/hexo/public/img/27.jpg","aac0d5702c15db4e5d76d13145f5fcc7"],["H:/hexo/public/img/36.jpg","a51322f4080db0af0873b1ced59525bf"],["H:/hexo/public/img/39.jpg","a318c1c8007a7bc73656987582003f34"],["H:/hexo/public/img/398105.jpg","c3340657581cd4c6759624ead21e0822"],["H:/hexo/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["H:/hexo/public/img/441017.jpg","8acc09f8d1f7c8c4314c638175f01858"],["H:/hexo/public/img/499219.jpg","6388fe2ae29abe7e3bd53fd2c6109294"],["H:/hexo/public/img/801867.jpg","0678fe80fd7dab3fe52607110e27d64e"],["H:/hexo/public/img/860.jpg","935e77d3fa46089f18657fbbf41f066a"],["H:/hexo/public/img/877.jpg","a96706056d3c979f0fe5943baf03514a"],["H:/hexo/public/img/902.jpg","6c7882cd7fc87592eb6f1cf46af2b3dd"],["H:/hexo/public/img/951.jpg","31e9221a721d4ec03a9c5241a78a2479"],["H:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["H:/hexo/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["H:/hexo/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["H:/hexo/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["H:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["H:/hexo/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["H:/hexo/public/img/tx002.jpg","1712eb4a2c056a4f249c985bbb5465f9"],["H:/hexo/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["H:/hexo/public/index.html","c356f2d7eb9f0dc563960f0683c89939"],["H:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["H:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["H:/hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["H:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["H:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["H:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["H:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["H:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["H:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["H:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["H:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["H:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["H:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["H:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["H:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["H:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["H:/hexo/public/movies/index.html","e80a67146f068bde9dc7ef2d6ba5bfa1"],["H:/hexo/public/music/index.html","bd77d39a59cfe6760446869116e3a7f6"],["H:/hexo/public/tags/first/index.html","fafa5f760bdbd2028320b6ae1efdee5d"],["H:/hexo/public/tags/index.html","f973fab813b205e63679ba1b1ef97a24"]];
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







