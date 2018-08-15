const elements = document.querySelectorAll('[data-pura]');

elements.forEach(function(item) {
  item.addEventListener('click', function(){
    const puraPlayState = item.style.getPropertyValue('--pura-play-state');

    if(puraPlayState === '') {
      item.style.setProperty('--pura-play-state', 'paused');
    }
    else if (puraPlayState === 'paused') {
      item.style.setProperty('--pura-play-state', '');
    }
  })
})