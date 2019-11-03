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

var precacheConfig = [["H:/hexo/public/2019/10/28/2019102801/index.html","1e96264a3fbcec5ccf93042aaa823011"],["H:/hexo/public/2019/10/28/2019102801/markdown01.png","4f7829d59cde12baaeb7388286b6be1c"],["H:/hexo/public/2019/10/28/2019102801/md-flow.png","cabb861c8ebf0d4d692ede97620d5670"],["H:/hexo/public/2019/11/02/2019110101/index.html","d8cbeb42ceaac4410a1e381f5207516a"],["H:/hexo/public/2019/11/02/2019110101/safetynet01.jpg","a2cc085aeec86c9de993f02597452558"],["H:/hexo/public/2019/11/02/2019110101/safetynet02.jpg","77fb1a3436896b49c9fb2776f2af5536"],["H:/hexo/public/2019/11/02/2019110101/safetynet03.jpg","861f80ba02cbaf8ac9a0178674501ab6"],["H:/hexo/public/2019/11/02/2019110101/safetynet04.png","a652cf420145c82a0a19360f401c7b0a"],["H:/hexo/public/2019/11/02/2019110101/safetynet05.jpg","2f20300ee721448f9c2b1a26cd969889"],["H:/hexo/public/2019/11/02/2019110101/safetynet06.jpg","c5bd4bee21a212e6ab6bcd6a34020485"],["H:/hexo/public/README/image_001.jpg","dae3b6a32f73611fc8197eeb1a50f759"],["H:/hexo/public/about/backiee7705.jpg","c6cacbd00753da70ee2795af7d12cbbd"],["H:/hexo/public/about/index.html","5da5139d05537b56a99270a33ff07228"],["H:/hexo/public/archives/2019/10/index.html","57e3af1f92096d38520b78f3e8a63c8a"],["H:/hexo/public/archives/2019/11/index.html","721908af702a1d910f72606d61aba90c"],["H:/hexo/public/archives/2019/index.html","1dd7c773780b2558ac7462c12fc9958d"],["H:/hexo/public/archives/index.html","12e0a28617530c510e655bbe9ae21c83"],["H:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["H:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["H:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["H:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["H:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["H:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["H:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["H:/hexo/public/categories/Android/index.html","80272748a5808658c14b5aee8c17a3c2"],["H:/hexo/public/categories/index.html","9d7c1289753c67aeb11ddd503fdcd295"],["H:/hexo/public/categories/other/index.html","7a5c9866726515f7d580eabc04023f37"],["H:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["H:/hexo/public/css/index.css","908e4e467a7de407d39ab7cb1891cb39"],["H:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["H:/hexo/public/gallery/index.html","51f2b15448f80c80c8b301315c8e0218"],["H:/hexo/public/img/001.jpg","fa86c2c363b58bffff5d724531e7ecf5"],["H:/hexo/public/img/08.jpg","f2623b90583b1410d6199f9f08e75e9d"],["H:/hexo/public/img/1173406.jpg","4ac18e3267e8a2e0335093cf9acc9420"],["H:/hexo/public/img/12.jpg","3c3d1d1b1299e01ac0aaeeb81819ad3d"],["H:/hexo/public/img/19.jpg","c0b44f4a25ac158036b6e9bb7d6f08e2"],["H:/hexo/public/img/231005.jpg","7f4857dff67705cad5c0aa25ece43fbf"],["H:/hexo/public/img/27.jpg","105c4427f886d2e0aed3a06fa5eb90f9"],["H:/hexo/public/img/36.jpg","6f21384aea98c8038155dad2525c5ccb"],["H:/hexo/public/img/39.jpg","cf0992166e49019e476a431c52d86270"],["H:/hexo/public/img/398105.jpg","8afc6330796903c46033c857b949702f"],["H:/hexo/public/img/404.jpg","898bece7ee92395d250a1f4dd338a45a"],["H:/hexo/public/img/441017.jpg","7297bbf90c7ca7812bfd2c7e353deee6"],["H:/hexo/public/img/499219.jpg","aeb13ee104aa61f567c1ca4eeadfe9d4"],["H:/hexo/public/img/860.jpg","7dda793b1a1d70b4a33d5ffefb042ec4"],["H:/hexo/public/img/877.jpg","80d23e430d1167498dd390e4738cab2b"],["H:/hexo/public/img/902.jpg","0c5a60024b48c987c959c024e77c9928"],["H:/hexo/public/img/951.jpg","4abec7c0155ce638c4589d90718e558e"],["H:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["H:/hexo/public/img/avatar.png","3ebc38fa55f2717f03875b861eee3977"],["H:/hexo/public/img/backiee1074671.jpg","9cebe78fd86c27bc8d28cf3b6a84638c"],["H:/hexo/public/img/backiee126578.jpg","d92d341fa4d28744b425ab6dcfc1ec75"],["H:/hexo/public/img/backiee88096.jpg","cd44b2da6535dea0f426309c78fa006d"],["H:/hexo/public/img/comment_bg.png","a673b8f6dcc1d5f61c7d8107318fe07d"],["H:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["H:/hexo/public/img/icp.png","b73f7b68e7bfdff0d61dd5a042679e7a"],["H:/hexo/public/img/image001.png","c1efe06d204db035e7826a85ca2b9d8b"],["H:/hexo/public/img/image334.jpg","c376d8c09ca201966a6d90f8fa92994e"],["H:/hexo/public/img/image_306.jpg","5f385b48325e5e7b0095925d85677a91"],["H:/hexo/public/img/tx002.jpg","f1c397a733e9e0270111b99c83e6080b"],["H:/hexo/public/index.html","416eb472ffd1b918d3286c32af24a8e7"],["H:/hexo/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["H:/hexo/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["H:/hexo/public/js/main.js","10f97e1001bd4f1f7d2360e8c29d6ab5"],["H:/hexo/public/js/nightshift.js","dd8c911cdf57df1c85186feceffdcda0"],["H:/hexo/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["H:/hexo/public/js/search/algolia.js","c2c8d117a3cba3e5c9f47ad65d1d00f2"],["H:/hexo/public/js/search/local-search.js","8cc4c0c6e32a9428a367eca83ffae3ab"],["H:/hexo/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["H:/hexo/public/js/third-party/canvas-nest.js","876c47c6a2edc066781c264adf33aec2"],["H:/hexo/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["H:/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["H:/hexo/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["H:/hexo/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["H:/hexo/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["H:/hexo/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["H:/hexo/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["H:/hexo/public/lib/blog-encrypt.js","037b40f88c8f0c44818849b9127a5e3f"],["H:/hexo/public/link/index.html","f035ef22f4a01abb308ccf5aa7a17376"],["H:/hexo/public/movies/index.html","a84ba9b1735a39a703dd7f3d6b6e307b"],["H:/hexo/public/music/index.html","3153d035b71a1b79adc6bf4d2c121e9f"],["H:/hexo/public/tags/Android/index.html","f3c59dbbc9d8867c4fa0c68f584619ab"],["H:/hexo/public/tags/Markdown/index.html","18f5adc1d3c813e8391ae96728013043"],["H:/hexo/public/tags/index.html","68a3c2f8f6212128ad358a522da43337"]];
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







