const elements = document.querySelectorAll('[data-pura]');

[].map.call(elements, (item) => {
  item.addEventListener('click', function () {
    const playState = item.style.getPropertyValue('--pura-play-state');

    if (playState === '') {
      item.style.setProperty('--pura-play-state', 'paused');
    }
    else if (playState === 'paused') {
      item.style.setProperty('--pura-play-state', '');
    }
  })
})

// elements.forEach(function(item) {
//   item.addEventListener('click', function(){
//     const playState = item.style.getPropertyValue('--pura-play-state');

//     if(playState === '') {
//       item.style.setProperty('--pura-play-state', 'paused');
//     }
//     else if (playState === 'paused') {
//       item.style.setProperty('--pura-play-state', '');
//     }
//   })
// })