const elements = document.querySelectorAll('[data-pura]');

 Array.from(elements).map(item => {
  item.addEventListener('click', function () {
    const playState = item.style.getPropertyValue('--pura-play-state');

    if (!playState) {
      item.style.setProperty('--pura-play-state', 'paused');
    } else {
      item.style.setProperty('--pura-play-state', '');
    }
  })
})
