var AR, ARimg
var ap, apimg
var axe, axeimg
var betterappartment, baimg
var bk, bkimg
var lmck, lmckimg
var mk, mkimg
var pistol, pistolimg
var bcgwar, bcgwarimg
var ground

function preload(){

  lmckimg = loadImage("images/player.png")
  bcgwarimg = loadImage("images/war.png")
}


function setup() {
  createCanvas(1000,1000);
  //createSprite(400, 200, 50, 50);
  lmck = createSprite(200,500,20,20)
  lmck.addImage(lmckimg)
  lmck.setCollider("rectangle", -20, -20, 100, 210)
  lmck.debug = true
  ground = createSprite(500,605, 1000, 20)
  
}



function draw() {
  background(bcgwarimg);
  

  lmck.velocityY+=1.6
  
  if(keyDown(LEFT_ARROW)){
    fill("BLUE")
    textSize(30)
    text("I should go ahead first", lmck.x-150, 370)
  }
  if(keyDown(RIGHT_ARROW)){
    lmck.x+=4
    
  }

  if(keyDown(UP_ARROW)&&lmck.collide(ground)){
    lmck.velocityY=-10
  }
  lmck.collide(ground) 
  drawSprites();
}
