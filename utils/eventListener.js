const keys = {
  w: {pressed: false},
  s: {pressed: false},
  a: {pressed: false},
  d: {pressed: false},
  spacebar: {pressed: false}
}

window.addEventListener('keydown', (event) => {
  switch(event.key){
    case "w":
      keys.w.pressed = true
      break;
    case "s":
      keys.s.pressed = true
      break;
    case "a":
      keys.a.pressed = true
      break;
    case "d":
      keys.d.pressed = true
      break;
    case " ":
      keys.spacebar.pressed = true
      break;
  }
});

window.addEventListener('keyup', (event) => {

  switch(event.key){
    case "w":
      keys.w.pressed = false
      break;
    case "s":
      keys.s.pressed = false
      break;
    case "a":
      keys.a.pressed = false
      break;
    case "d":
      keys.d.pressed = false
      break;
    case " ":
      keys.spacebar.pressed = false
      break;
  }
});