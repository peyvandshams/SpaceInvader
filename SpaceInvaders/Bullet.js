function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.delete = false;
  
  //this.history = [];
  
  //this.update = function() {
    //this.y += this.yspeed;
    //this.yspeed += gravity;
    
    //if (this.y > height) {
      //this.y = height;
      //this.yspeed *= -1;
    //}
    
     //var v = createVector(this.x, this.y);
  //this.history.push(v);
  //println(this.history.length);
    
  //}
  
 
  
  this.show = function() {
    noStroke(0);
    fill(244, 65, 65);
    ellipse(this.x, this.y, 10, 10);
    
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
    if (d < this.r + bullet.r) {
      return true;
    } else {
      return false;
    }
    
  }
  
  this.move = function() {
    this.y = this.y - 5;
  }
  
}