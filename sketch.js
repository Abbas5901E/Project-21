var bullet;
var wall;
var thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 40, 20);
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white";

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet.velocityX = speed;
  
}

function draw() {
  background("black"); 
  
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness);
  
    if(damage > 10){
      wall.shapeColor = "green";
    }

    if(damage < 10){
      wall.shapeColor = "red";
    }
  }

   drawSprites();
}

function hasCollided(object1, object2){

  object1RightEdge= object1.x + object1.width;
  object2LeftEdge = object2.x;
  if (object1RightEdge >= object2LeftEdge){
    return true;
  }
   else {
    return false;
  }
}