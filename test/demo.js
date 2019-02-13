const elements = [...document.querySelectorAll('[data-pura]')];

const items = elements.map(item =>
  item.addEventListener('click', () =>
    item.style.setProperty('--pura-play-state', !!item.style.getPropertyValue('--pura-play-state')
    ? ''
    : 'paused'))
);
