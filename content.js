let observer = new MutationObserver(() => {
    const subtitleEl = document.querySelector('.ytp-caption-segment');
    if (subtitleEl && localStorage.getItem('translateSubtitles') === 'true') {
      const text = subtitleEl.textContent;
      if (!text.includes('[EN]')) {
        translateToEnglish(text).then(translated => {
          subtitleEl.textContent = `[EN] ${translated}`;
        });
      }
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  