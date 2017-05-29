function Rocket(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.delete = false;
  
  //this.history = [];
  
 // var v = createVector(this.x, this.y);
  //this.history.push(v);
  
  this.show = function() {
    noStroke(0);
    fill(244, 65, 65);
    triangle(this.x, this.y, 50, 50);
    
    //for (var i = 0; i < history.length; i++) {
     // var pos = this.history[i];
     // ellipse(pos.x,pos.y, 10, 10);
    //}
 }
  
  
  
  
  this.vanish = function() {
    this.toDelete = true; 
  }
  
  
  
  this.hits = function(invader) {
    var d = dist(this.x, this.y, invader.x, invader.y);
    if (d < this.r + rocket.r) {
      return true;
    } else {
      return false;
    }
    
  }
  
  this.move = function() {
    this.y = this.y - 5;
  }
  
}