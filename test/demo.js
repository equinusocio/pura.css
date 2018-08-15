const elements = document.querySelectorAll('[data-pura]');

const checkProp = function(item, prop) {
  return item.style.getPropertyValue(`--${prop}`);
}


elements.forEach(function(item) {
  item.addEventListener('click', function(){
    if(item.style.getPropertyValue('--pura-play-state') === '') {
      item.style.setProperty('--pura-play-state', 'paused');
    }
    else if (item.style.getPropertyValue('--pura-play-state')=== 'paused') {
      item.style.setProperty('--pura-play-state', '');
    }
  })
})