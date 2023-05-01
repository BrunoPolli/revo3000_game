const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// canvas.width = 800
// canvas.height = 600

canvas.width = 1042
canvas.height = 516
var lastMove;

const player1 = new Player()

function animate() {
  setTimeout(function(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'rgb(84,84,84)'
    c.fillRect(0, 0, canvas.width, canvas.height)
  
    player1.draw()
    player1.updateFrame()
  
    if(keys.a.pressed){
      player1.updateSprite(3)
      if(!keys.spacebar.pressed){
        player1.position.x -= 18
      }
      lastMove = 'a'
    }
    else{
      if(lastMove === 'a'){
        player1.updateSprite(1)
      }
    }
    if(keys.d.pressed){
      player1.updateSprite(2)
      if(!keys.spacebar.pressed){
        player1.position.x += 18
      }
      lastMove = 'd'
    }
    else{
      if(lastMove === 'd'){
        player1.updateSprite(0)
      }
    }
    if(keys.spacebar.pressed){
      if(lastMove === 'a'){
        player1.updateSprite(5)
      }
      else{
        player1.updateSprite(4)
      }
    }
    // if(!keys.spacebar.pressed){
    //   player1.updateSprite(0)
    // }


  }, 100)
}

animate()
