class Player {
  
  constructor(){
    // super(Object)
    // this.url = "../assets/position_right.png"
    this.width = 35
    this.height = 35
    this.position = {
      x: 100,
      y: canvas.height - 150
    }
    this.sprites = [
      new Sprite("../assets/position_right.png", 4),
      new Sprite("../assets/position_left.png", 4),
      new Sprite("../assets/walking_right.png", 3),
      new Sprite("../assets/walking_left.png", 3),
      new Sprite("../assets/shot_right.png", 2),
      new Sprite("../assets/shot_left.png", 2)
    ]
    this.currentSprite = 1
    
  }
  
  draw(){
    
    if(this.sprites[this.currentSprite].loaded){
      c.drawImage(this.sprites[this.currentSprite].image, this.sprites[this.currentSprite].currentFrame, 0, this.sprites[this.currentSprite].frameDivisor, this.sprites[this.currentSprite].image.height, this.position.x, this.position.y, this.sprites[this.currentSprite].frameDivisor, this.sprites[this.currentSprite].image.height)
    }
    
  }

  updateFrame(){
    if(this.sprites[this.currentSprite].loaded){
      if(this.sprites[this.currentSprite].frame != this.sprites[this.currentSprite].frames) {
        this.sprites[this.currentSprite].frame++
        this.sprites[this.currentSprite].currentFrame = (this.sprites[this.currentSprite].frameDivisor * this.sprites[this.currentSprite].frame) - this.sprites[this.currentSprite].frameDivisor
      }
      else{
        this.sprites[this.currentSprite].frame = 0
        this.sprites[this.currentSprite].currentFrame = this.sprites[this.currentSprite].frameDivisor * this.sprites[this.currentSprite].frame
      }
    }
  }

  updateSprite(sprite){
    this.currentSprite = sprite
  }
}