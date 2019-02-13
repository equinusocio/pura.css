const elements = Array.from(document.querySelectorAll('[data-pura]'));

const items = elements.map(item => {
  item.addEventListener('click', () => {
    const playState = item.style.getPropertyValue('--pura-play-state');
    item.style.setProperty('--pura-play-state', !playState ? 'paused' : '');
  })
});
