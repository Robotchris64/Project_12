var path,pathImg;
var jaxon,jaxon_running;
var invisibleEdge1,invisibleEdge2;

function preload(){
 pathImg = loadImage("path.png")
 jaxon_running = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
   createCanvas(300,500);
   
path = createSprite(150,250,300,500);
path.addImage(pathImg);
path.velocityY = -4
jaxon = createSprite(150,450,50,50)
jaxon.addAnimation("running", jaxon_running)
invisibleEdge1 = createSprite(8,428,18,243);
jaxon.scale = 1.1


}

function draw() {
  background("gray");

 jaxon.x=World.mouseX;


  drawSprites();
}
