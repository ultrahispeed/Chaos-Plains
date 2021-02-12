var player;
var npc1;

function setup(){
  createCanvas(800,800);

  player = createSprite(400,400,50,50);
  
  npc1 = createSprite(200,200,50,50);
}

function draw(){
  background("red");

  drawSprites();
}

function playerMovement(){
  if(keyDown(w)){
    player.x=player.x+5;
  }
}