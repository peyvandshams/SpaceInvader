function Invader(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  
  this.vanish = function() {
    this.r = this.r + 2;
  }
  
  this.show = function() {
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  
}