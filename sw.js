let CACHENAME = 'v1';

let CACHEFILES = [
    './',
    '/.index.html',
    './get-ready.html',
    './timeline.html',
    './css/style.css',
    'https://fonts.googleapis.com/css?family=Orbitron|Roboto',
    '.js/app.js'

];

// install
self.addEventListener('install', function(e){
    console.log('Service Worker installed');
    e.waitUntil(
        caches.open(CACHENAME)
                .then( function(cache) {
                        console.log('SW caching files');
                         
                        return cache.addAll(CACHEFILES);
                     }).catch(function(err) {
                        console.log(err);
                            })
                );
        });
// 




self.addEventListener('activate', function(e){
    console.log('Service Worker Activated')
    e.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(cacheNames.map(function(thisCacheName){
                if(thisCacheName !== CACHENAME) {
                    console.log('Removing cached files', thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    );
  
});

self.addEventListener('fetch', function(e){
    console.log('Service fecthing', e.request.url);
    e.respondWith(
    caches.match(e.request)
    
        .then(function(response){
                if (response) {
                    console.log('Found cache', e.request.url);
                    return response;
                }
        
        let requestClone = e.request.clone;        
        
        fetch(requestClone)
                .then(function(response){
                    if(!response){
                        consoloe.log('SW, no response from Fecth');
                    }
                    var responseClone = response.clone();

                    //  Open the cache
                    caches.open(CACHENAME).then(function(cache) {

                        // Put the fetched response in the cache
                        cache.put(e.request, responseClone);
                        console.log('[ServiceWorker] New Data Cached', e.request.url);

                        // Return the response
                        return response;
        
                    }); // end caches.open

                })
                .catch(function(err) {
                    console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
                    

                });
    })
); // end respondWith
});