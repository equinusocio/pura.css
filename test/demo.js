const elements = Array.from(document.querySelectorAll('[data-pura]'));

const items = elements.map(item => {
  item.addEventListener('click', function () {
    const playState = item.style.getPropertyValue('--pura-play-state');
    !playState ? item.style.setProperty('--pura-play-state', 'paused') : item.style.setProperty('--pura-play-state', '');
  })
});
