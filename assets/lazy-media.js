/* Keep video files off the network until their player approaches the viewport. */
(() => {
  const videos = [...document.querySelectorAll('video[data-lazy-video]')];
  const activate = video => {
    if (video.dataset.mediaReady) return;
    video.dataset.mediaReady = 'true';
    video.querySelectorAll('source[data-src]').forEach(source => {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
    });
    video.preload = 'metadata';
    video.load();
  };
  const playAutomatic = video => {
    if (document.hidden || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    activate(video);
    video.play().catch(() => {}); // Controls remain available if autoplay is blocked.
  };
  if (!('IntersectionObserver' in window)) {
    videos.forEach(video => {
      activate(video);
      if (video.hasAttribute('data-autoplay')) playAutomatic(video);
    });
    return;
  }
  const nearby = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      activate(entry.target);
      nearby.unobserve(entry.target);
    });
  }, { rootMargin: '400px 0px' });
  const automatic = new Set(videos.filter(video => video.hasAttribute('data-autoplay')));
  const visible = new Set();
  const playback = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        visible.add(video);
        playAutomatic(video);
      } else {
        visible.delete(video);
        video.pause();
      }
    });
  }, { threshold: 0.01 });
  videos.forEach(video => {
    nearby.observe(video);
    if (automatic.has(video)) playback.observe(video);
    video.addEventListener('focus', () => activate(video));
  });
  document.addEventListener('visibilitychange', () => {
    visible.forEach(video => document.hidden ? video.pause() : playAutomatic(video));
  });
})();
