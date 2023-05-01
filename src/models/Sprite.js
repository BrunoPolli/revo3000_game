class Sprite {
  constructor(imgSrc, frames) {
    this.loaded = false
    this.image = new Image()
    this.frame = 1
    this.frames = frames
    this.frameWidth = 0
    this.currentFrame;
    this.frameDivisor;
    this.image.src = imgSrc
    this.image.onload = () => {
      this.frameDivisor = this.image.width / this.frames
      this.currentFrame = this.frameDivisor * this.frame - this.frameDivisor
      this.loaded = true
    }
  }
  
}