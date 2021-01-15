function setup() {
  createCanvas(800,400);
  fixedSprite = createSprite(400, 200, 50, 50);
  fixedSprite.shapeColor = "purple";
  fixedSprite.debug = true;
  movingSprite = createSprite(200, 200, 20, 20);
  //movingSprite.debug = true;
  movingSprite.shapeColor = "red";


}

function draw() {
  background(255,255,255);
  movingSprite.x = mouseX;
  movingSprite.y = mouseY;
  console.log(movingSprite.x-fixedSprite.x);
  if(movingSprite.x-fixedSprite.x <= movingSprite.width/2 + fixedSprite.width/2 && 
    fixedSprite.x - movingSprite.x <= movingSprite.width/2 + fixedSprite.width/2 &&
    movingSprite.y-fixedSprite.y <= movingSprite.height/2 + fixedSprite.height/2 && 
      fixedSprite.y - movingSprite.y <= movingSprite.height/2 + fixedSprite.height/2){
    movingSprite.shapeColor = "blue";
    fixedSprite.shapeColor = "blue";
  }
  else {
  fixedSprite.shapeColor = "purple";
  movingSprite.shapeColor = "red";   
  
  }


  drawSprites();
}