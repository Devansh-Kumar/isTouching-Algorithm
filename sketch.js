var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);

fixedRect =createSprite(400,200,50,15);
fixedRect.shapeColor = ("green");
movingRect =createSprite(300,150,50,15);
movingRect.shapeColor = ("green");
}

function draw() {
  background(0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
     fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && 
     movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
      fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";  
  }
  else{
  movingRect.shapeColor ="green"
  fixedRect.shapeColor = "green"  
  }
  drawSprites();
}
