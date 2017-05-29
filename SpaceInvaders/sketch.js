var ship;
var invaders = [];
var bullets = [];

function setup(){
  createCanvas(600,400);
  ship = new Ship();
  bullet = new Bullet(width/2, height/2);
  for (var i = 0; i < 13; i++) {
  invaders[i] = new Invader(i*40+40, 20);
  invaders[i+13] = new Invader(i*40+40, 55);
  invaders[i+26] = new Invader(i*40+40, 90);
  }
}



function draw(){
  background(0);
  ship.show();
  ship.move();
  
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show(); 
    bullets[i].move();
    for (var j = 0; j < invaders.length; j++) {
     if (bullets[i].hits(invaders[j])) {
       invaders.splice(j, 1);
       bullets[i].delete = true;
     }
   }
 }
 
 
 for (var i = 0; i < invaders.length; i++) {
  invaders[i].show();
 }

   for (var i = bullets.length-1; i >= 0; i--) {
   if (bullets[i].delete) {
     bullets.splice(i, 1);
   }
 }

}

function keyReleased() {
  ship.setDir(0);
}

function keyPressed() {
  if (key === ' ') {
    var bullet = new Bullet(ship.x, height);
    bullets.push(bullet);
    } 
    

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}




