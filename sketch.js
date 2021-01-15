var movingobject;
var steadyobject;
var ball;
var fixed, ball2;
function setup() {
  createCanvas(800,400);
  movingobject=createSprite(60,70,100,100);
  steadyobject=createSprite(200,150,80,100);
ball=createSprite(250,100,80,120);
fixed=createSprite(120,120,60,70);
ball2=createSprite(140,60,80,90);
  movingobject.debug=true;
  steadyobject.debug=true;
}

function draw() {
  background("black");  
  drawSprites();
 // movingobject.y=mouseY;
  //movingobject.x=mouseX
  ball.y=mouseY
  ball.x=mouseX
  if (IsTouching (ball,fixed)){
    fixed.velocityX=4
    fixed.velocityY=4
ball.x=300
  }
  else {
    ball.shapeColor="brown"
    fixed.shapeColor="white"
  
  }
 if (IsTouching (movingobject,steadyobject))
 {
  movingobject.shapeColor="green";
  steadyobject.shapeColor="red";
 }
 else {
  movingobject.shapeColor="yellow";
  steadyobject.shapeColor="red";
 }
  console.log(movingobject.x-steadyobject.x)
 

}




