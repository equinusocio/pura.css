let elements = document.querySelectorAll('[data-pura]');

let checkProp = function(item, prop) {
  return item.style.getPropertyValue(`--${prop}`);
}

let setProp = function(item, prop, newValue) {
  return item.style.setProperty(`--${prop}`, newValue);
}

elements.forEach(item => {
  item.addEventListener('click', function(){
    if(checkProp(item, 'pura-play-state') === '') {
      setProp(item, 'pura-play-state', 'paused');
    }
    else if (checkProp(item, 'pura-play-state') === 'paused') {
      setProp(item, 'pura-play-state', '');
    }
  })
})