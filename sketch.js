var bgImg;
var boyAni, boy, boyImg;
var rightEdgeSprite, leftEdgeSprite;

function setup() {

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bgImg = loadImage("snow1.jpg");
  boyAni = loadAnimation("1.png","2.png", "3.png","4.png","5.png");
  boyImg = loadImage("3.png");

  boy = createSprite(100,280,100,200); 
  boy.addAnimation("walking", boyImg);

  rightEdgeSprite = createSprite(790,200,20,400);
  rightEdgeSprite.visible = false; 
  leftEdgeSprite = createSprite(10,200,20,400);
  leftEdgeSprite.visible = false; 

 
}

function draw() {

  background(bgImg);  
  drawSprites();

  if(keyCode === 32){
    boy.addAnimation("walking", boyAni)
    // boy.velocityX = 2;
  }

  // if(boy.velocityX === 2 && boy.isTouching(rightEdgeSprite)) {
  //   boy.velocityX = -2
  // }

}