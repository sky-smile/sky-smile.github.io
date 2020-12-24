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

var precacheConfig = [["E:/hexo/public/2019/10/28/2019102801-Markdown/index.html","ca5c26441a819ac192176c9cdc338177"],["E:/hexo/public/2019/10/28/2019102801-Markdown/markdown01.png","4f7829d59cde12baaeb7388286b6be1c"],["E:/hexo/public/2019/10/28/2019102801-Markdown/md-flow.png","cabb861c8ebf0d4d692ede97620d5670"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/index.html","3e15f6e36368577cec700fea4aa0fde8"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet01.jpg","a2cc085aeec86c9de993f02597452558"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet02.jpg","77fb1a3436896b49c9fb2776f2af5536"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet03.jpg","861f80ba02cbaf8ac9a0178674501ab6"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet04.png","a652cf420145c82a0a19360f401c7b0a"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet05.jpg","2f20300ee721448f9c2b1a26cd969889"],["E:/hexo/public/2019/11/02/2019110101-SafetyNet/safetynet06.jpg","c5bd4bee21a212e6ab6bcd6a34020485"],["E:/hexo/public/2019/11/05/2019110501-DataFrame/index.html","2bc36da12145b2f75264ac38fc93bec9"],["E:/hexo/public/2019/11/05/2019110501-DataFrame/pyspark01.jpg","151f53804d1b9315b26963649aff9a7c"],["E:/hexo/public/2019/11/11/2019111101-Hive/hive01.jpg","86dc899ad3ec5da07f7bfdecc05f9008"],["E:/hexo/public/2019/11/11/2019111101-Hive/index.html","fc6e9eebbea0b0dd9955a896d8d9b0de"],["E:/hexo/public/2019/11/28/2019112801-Terminal/index.html","17836004efd5422fc8101028fde03afd"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal001.jpg","0650efbc1a8aa67e5ede23ae465204ee"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal002.jpg","62eedfff472d60e3fc3b559568802700"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal003.jpg","ce2f3ca9171930940ce9d14fdecfbc5a"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal004.jpg","51776cd9139884a80bfa8cc6c8a1eeed"],["E:/hexo/public/2019/11/28/2019112801-Terminal/windowsterminal005.jpg","099616759dbfc20976d75c84bc8b2cc8"],["E:/hexo/public/2019/11/29/2019112901-WSL/index.html","7e9802676d4e754ef5dbe095fd3778ef"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl000.jpg","a9a12f72cb2700bdd270a0923be41bda"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl001.jpg","177fa674dce4feb2185c82af3f0a2e41"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl003.jpg","ebe72b95eb9cc5808159b4447c664ac0"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl004.jpg","059b3689853678d0a6965b01df1ce7ea"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl005.jpg","442e8440c5a327c2ba3b8444b76f3e8a"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl006.jpg","c47c525e5f9fbc567649ff265246a5fc"],["E:/hexo/public/2019/11/29/2019112901-WSL/wsl007.png","74446b07fe4388d3fb36d5ab249f2236"],["E:/hexo/public/2019/12/08/2019120801-Windows/Windows01.jpg","270b027bef54697ec44bdbd44d45cfd9"],["E:/hexo/public/2019/12/08/2019120801-Windows/index.html","a71f80c21e2642695c7fd7a29bf9cb6a"],["E:/hexo/public/2019/12/08/2019120801-Windows/win01.jpg","44e45ea164774ba517036c77b2a63adc"],["E:/hexo/public/2019/12/09/2019120901-LxRunOffline/index.html","6c5c160c0301d8ac4fb67631a8184956"],["E:/hexo/public/2019/12/09/2019120901-LxRunOffline/wsl007.png","74446b07fe4388d3fb36d5ab249f2236"],["E:/hexo/public/2019/12/12/2019121201-docker/Docker_logo.png","0c1d198acd0580ef908a04c4be549567"],["E:/hexo/public/2019/12/12/2019121201-docker/docker01.png","30ef08d712e88b1733e71aa08db24c72"],["E:/hexo/public/2019/12/12/2019121201-docker/index.html","3e5a4b1f9c96797e044e03910a696f27"],["E:/hexo/public/2019/12/12/2019121202-docker/Docker_logo.png","0c1d198acd0580ef908a04c4be549567"],["E:/hexo/public/2019/12/12/2019121202-docker/index.html","57db9e448ecfeee11c4264597051eb95"],["E:/hexo/public/2019/12/13/2019121301-openwrt/01.png","301f7a9328ccb6bab5ce3ec4a4dfe0f3"],["E:/hexo/public/2019/12/13/2019121301-openwrt/02.png","9a1a7779d390cd7be8039427e113d1e8"],["E:/hexo/public/2019/12/13/2019121301-openwrt/03.png","a5c49b0128e36a3d090145e9544fc04e"],["E:/hexo/public/2019/12/13/2019121301-openwrt/04.png","13e2a4180cb2331ebc3d76e80c16cb97"],["E:/hexo/public/2019/12/13/2019121301-openwrt/index.html","6e1706b14616ec2ab29abcc91e1fd6cb"],["E:/hexo/public/2019/12/13/2019121301-openwrt/linux.jpg","b672ecda0c2f4751e7b6558dd3290dc7"],["E:/hexo/public/2019/12/16/2019121601-UbuntuTime/index.html","8fddc8e549476765fb8f0210dc951179"],["E:/hexo/public/2019/12/16/2019121601-UbuntuTime/time.jpg","5ae0458bbd62dac743a71898cc41d465"],["E:/hexo/public/2019/12/16/2019121601-UbuntuTime/ubuntu.jpg","12d9fcc6116992e1f4f6e28ff67eea42"],["E:/hexo/public/2019/12/26/2019122601-BackupSoftware/01.jpg","fc009ce288276bc352a5d750918f160c"],["E:/hexo/public/2019/12/26/2019122601-BackupSoftware/index.html","a75a98d567a5f3ad903600de3fe88104"],["E:/hexo/public/2020/01/08/2020010801-python/index.html","20b69b57a956b75978cc52df8145603e"],["E:/hexo/public/2020/01/08/2020010801-python/python01.png","5abfd7664d2987a7c881d1ec7a27b70d"],["E:/hexo/public/2020/01/08/2020010801-python/python02.jpg","ca4ccc74d30461c5aa0b90ecd2cffc19"],["E:/hexo/public/README/image_001.jpg","325376e80832f8a1f7b27e4a92332595"],["E:/hexo/public/about/backiee7705.jpg","765d3b05f5933a3c415b3ba2b841b370"],["E:/hexo/public/about/index.html","1bba24d6165c8905b50149b83c0ba3f7"],["E:/hexo/public/archives/2019/10/index.html","e8ac32ba9b7410e1260c0f47cdbaaee2"],["E:/hexo/public/archives/2019/11/index.html","d7aa22b5e39ed341ed37a7b767784d80"],["E:/hexo/public/archives/2019/12/index.html","a8aa36e88ee357e46dbf1986d455ad28"],["E:/hexo/public/archives/2019/index.html","06f0fefa05f0b1c1d0d16794c7259372"],["E:/hexo/public/archives/2020/01/index.html","a32d3422ed797bc55b9afe24063be7d3"],["E:/hexo/public/archives/2020/index.html","78b590dcdb872b759b9aec756ee52bdf"],["E:/hexo/public/archives/index.html","890611a89974b890e483b6d9507e8b27"],["E:/hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/hexo/public/categories/Android/index.html","0669787297e287e95c2e4f1e048dc72b"],["E:/hexo/public/categories/Docker/index.html","2c25fa0a3649400270698ba83beb951f"],["E:/hexo/public/categories/Hive/index.html","6ef7b22a1f24d2b1e3b13389d950dfe8"],["E:/hexo/public/categories/Linux/index.html","c6f83ecab3c1c27098463d41d75a2f6e"],["E:/hexo/public/categories/Spark/index.html","e089c2cb8d60bd199b6c6f907e412528"],["E:/hexo/public/categories/WSL/index.html","2b7f7ccbcc7ffdab6312395bef27f10c"],["E:/hexo/public/categories/Windows/index.html","1c02f5eb9b54a148e8f50d5d8b8bc853"],["E:/hexo/public/categories/index.html","cdba50de4bbf4876381527bd116d02d0"],["E:/hexo/public/categories/other/index.html","91a7ca98733f09a7b0853255bfc0d415"],["E:/hexo/public/categories/python/index.html","785711f83fbd1ab0dd27f2c0faac724b"],["E:/hexo/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["E:/hexo/public/css/index.css","13e07c50161fd50d45348cb787a03def"],["E:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/hexo/public/gallery/index.html","2d25dbcb0a2621f66516831985a988a9"],["E:/hexo/public/img/001.jpg","9358f9d9757d48faa4b9f23979f6fb91"],["E:/hexo/public/img/08.jpg","1f0fe815cfe601dc968b833c25a9c1d7"],["E:/hexo/public/img/1173406.jpg","d625f5347a70130225c344a07be77e6c"],["E:/hexo/public/img/12.jpg","358ed7c2b98def2e214e56b5c83a929a"],["E:/hexo/public/img/19.jpg","20b7065a2e49cdf205df6b72dc7c9fbc"],["E:/hexo/public/img/231005.jpg","7639510fef86991cc18b2cd19cc88aa4"],["E:/hexo/public/img/27.jpg","df764ccecd700e73658703887405a000"],["E:/hexo/public/img/36.jpg","a537b3e6b10dcbe54639d8a405662cdd"],["E:/hexo/public/img/39.jpg","7015ef4f4d47c7a1ac2d34cc94f501c4"],["E:/hexo/public/img/398105.jpg","1ce7bc756102a766b9ea0e059e34e440"],["E:/hexo/public/img/404.jpg","b408d58537dd4b632f2d7cdfb9edd011"],["E:/hexo/public/img/441017.jpg","ea18e21cee9bab2092e8ade2e1b7e142"],["E:/hexo/public/img/499219.jpg","2475146236b1f09996450f5591029547"],["E:/hexo/public/img/860.jpg","20543c5aa1d5d80611f0b8eceff68645"],["E:/hexo/public/img/877.jpg","8d1bcd496d782262ac5e29d3c988db5f"],["E:/hexo/public/img/902.jpg","503a17a2c6132eda7a83e0891b505e10"],["E:/hexo/public/img/951.jpg","61facc5a7d0eee95bc60a6c20489d664"],["E:/hexo/public/img/algolia.svg","98ed7ad1113db185de1900ac9906baae"],["E:/hexo/public/img/avatar.png","3625d1f72c79e9e13dbf09c6ca84c895"],["E:/hexo/public/img/avatar009.jpg","1ab9c222d93a2f2ef63772b7b45a7915"],["E:/hexo/public/img/backiee-9212.jpg","04e73564b904e8dbfe2dfb46224987a9"],["E:/hexo/public/img/backiee121264.jpg","de4500e9c05a52aae713c1d0492159e8"],["E:/hexo/public/img/backiee126578.jpg","95e52ea558e159039b916e505f32d390"],["E:/hexo/public/img/comment_bg.png","c908202d45715a49bdb83fadca23b26c"],["E:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/hexo/public/img/icp.png","b73f7b68e7bfdff0d61dd5a042679e7a"],["E:/hexo/public/img/image001.png","c1efe06d204db035e7826a85ca2b9d8b"],["E:/hexo/public/img/image_306.jpg","68d11e17f65c3544cfc2a01d7c58907e"],["E:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/hexo/public/img/post_loadding.svg","9df33e1d2762f4ce97b4c8469ac8b279"],["E:/hexo/public/img/tx002.jpg","9b2df93f7ec94e000e2042c628ded47f"],["E:/hexo/public/index.html","d60067c79ba8ef05297b0d29cc933354"],["E:/hexo/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["E:/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["E:/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["E:/hexo/public/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["E:/hexo/public/link/index.html","c488aee2177563abc33fb18d33ba1663"],["E:/hexo/public/movies/index.html","70920a4187221496230590b27d8ad65c"],["E:/hexo/public/music/index.html","1c179d14fdc8aeb50f44e2e5bf36bf94"],["E:/hexo/public/page/2/index.html","2d9a65e75765d6a1762025da7dd5f14b"],["E:/hexo/public/resume/index.html","c99935a5488006359be222d5d0a670d4"],["E:/hexo/public/tags/Android/index.html","36ce5227b8305a5168a0f80188f46abd"],["E:/hexo/public/tags/Docker/index.html","cf1df172b17758ee67d6d85fde7bacc4"],["E:/hexo/public/tags/Hive/index.html","44387bdce6aff777af81892807c5860a"],["E:/hexo/public/tags/Linux/index.html","166fb780b79da54939e51b150daf7323"],["E:/hexo/public/tags/Markdown/index.html","17f07285e04749ee3ac160ac777039f8"],["E:/hexo/public/tags/PySpark/index.html","cb40d54d75285ee114822947d4d078cc"],["E:/hexo/public/tags/Python/index.html","6fb7a395671767db1a53a190718a134a"],["E:/hexo/public/tags/Ubuntu/index.html","340a079667eff7437fc64c2aca87fc73"],["E:/hexo/public/tags/WSL/index.html","ef1762751ae756cc63a4ad1b5f69d242"],["E:/hexo/public/tags/Windows/index.html","2dccd0457476d0104be7b0799becf0ac"],["E:/hexo/public/tags/WindowsTerminal/index.html","1938898cb30a148b1539e63bfe0111a4"],["E:/hexo/public/tags/index.html","2bc2642b86ae2ed33f6f53e1b552b9ba"],["E:/hexo/public/tags/破解/index.html","6c44d0ec730609effa452dff5c21ee1b"],["E:/hexo/public/tags/软件/index.html","3f54a51ac212b0a69f3056baaf79c34d"]];
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







