var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(200,100,80,30);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(400,100,80,30);
  gameObject2.shapeColor = "green";
gameObject1.velocityX= 2
gameObject2.velocityX= -2

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(gameObject1, gameObject2)
  bounceoff(movingRect,fixedRect);
  drawSprites();
}
