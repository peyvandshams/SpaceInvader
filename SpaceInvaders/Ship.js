function Ship() {
  this.x = width/2;
  this.xdir = 0;
  
  this.show = function() {
    fill(83, 244, 66);
    rectMode(CENTER);
    rect(this.x, height-10, 10, 20);
  }
  
  this.setDir = function(dir) {
    this.xdir = dir;
  }
  
  this.move = function(dir) {
    this.x += this.xdir*5;
  }
}