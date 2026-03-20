const CACHE_NAME = 'it-passport-v2';
const ASSETS = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon.svg',
  './img/2019h31h_q26.png',
  './img/2019h31h_q58.png',
  './img/2019h31h_q71.png',
  './img/2019h31h_q82.png',
  './img/2020r02o_q11.png',
  './img/2020r02o_q55.png',
  './img/2020r02o_q72.png',
  './img/2021r03_q50.png',
  './img/2021r03_q70.png',
  './img/2021r03_q74.png',
  './img/2022r04_q15.png',
  './img/2022r04_q32.png',
  './img/2022r04_q43.png',
  './img/2022r04_q79.png',
  './img/2022r04_q90.png',
  './img/2022r04_q97.png',
  './img/2023r05_q13.png',
  './img/2023r05_q33.png',
  './img/2023r05_q41.png',
  './img/2023r05_q86.png',
  './img/2024r06_q08.png',
  './img/2024r06_q24.png',
  './img/2024r06_q41.png',
  './img/2024r06_q57.png',
  './img/2024r06_q60.png',
  './img/2024r06_q67.png',
  './img/2025r07_q26.png',
  './img/2025r07_q54.png',
  './img/2025r07_q66.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
