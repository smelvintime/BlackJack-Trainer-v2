import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app'; // Corrected to import from App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker for offline support and reliable auto-updates.
// The worker is network-first for HTML, so an online visitor always loads the
// latest deploy; this registration handles the case where a new version ships
// while the app is already open — it swaps in with a single reload.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .catch(() => {
        /* registration failing should never break the app */
      });
  });

  // The worker skips waiting, so when an update activates it takes control of
  // this page and fires controllerchange. Reload once to pick up new assets.
  // (No reload on first install: there's no prior controller to change from.)
  let reloading = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloading) return;
    reloading = true;
    window.location.reload();
  });
}
