// Entry: bootstraps modules, router, and service worker
import { initTheme } from './modules/theme.js';
import { initStore } from './modules/store.js';
import { initList } from './modules/ui-list.js';
import { initDetails } from './modules/ui-details.js';
import { initRouter } from './modules/router.js';
import { initModals } from './modules/modals.js';
import { initMap } from './modules/map.js';

gsap.registerPlugin(ScrollTrigger);

initTheme();
const store = initStore();
const list = initList(store);
const details = initDetails(store);
const map = initMap(store);
initRouter({ store, list, details, map });
initModals();

// Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
