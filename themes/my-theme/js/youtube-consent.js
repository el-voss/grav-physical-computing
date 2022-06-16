import Cookies from './js.cookie.js';

function activateVideos() {
  const iframes = document.querySelectorAll('.video__iframe[data-src*="youtube-nocookie.com"]');
  iframes.forEach((iframe) => {
    iframe.src = iframe.dataset.src;
  });
}

function attachEvents() {
  const notices = document.querySelectorAll('.video__notice');
  notices.forEach((notice) => {
    notice.addEventListener('submit', (event) => {
      activateVideos();
      // Store consent for one year
      Cookies.set('youtube-consent', 'true', { expires: 365 });
      event.preventDefault();
    });
  });
}

if (Cookies.get('youtube-consent') === 'true') {
  activateVideos();
} else {
  attachEvents();
}
