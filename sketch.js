var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
 
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  // creating ground
  ground = createSprite(300,180,600,20);
  ground.addImage("gnd",groundImage)

}


function draw(){
  //set background color 
  background("pink");
  ground.velocityX = -2;
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -8;
  }

if(ground.x < 100){
  ground.x = ground.width/2;

}

  //giving gravity effect
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground)
  drawSprites();
}