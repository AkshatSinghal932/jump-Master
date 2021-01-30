var canvas,rect1,rect2,rect3,rect4,box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 

rect1=createSprite(80,585,200,30);
rect1.shapeColor="red";
rect2=createSprite(300,585,200,30);
rect2.shapeColor="yellow";
rect3=createSprite(510,585,200,30);
rect3.shapeColor="green";
rect4=createSprite(720,585,200,30);
rect4.shapeColor="blue";

box=createSprite(random(20,750),300,50,50);
box.velocityX=7;
box.velocityY=6;


 }

function draw() {
    background(rgb(0,0,0));
       if(box.isTouching(rect1)){
       box.shapeColor="red";
    }
    if(box.isTouching(rect2)){
        box.shapeColor="yellow";
      }
    if(box.isTouching(rect3)){
        box.shapeColor="green";
      }
    if(box.isTouching(rect4)){
        box.shapeColor="blue";
      }
      if(box.isTouching(rect1)||box.isTouching(rect3)||box.isTouching(rect4)){
        music.loop();
      }
      if(box.isTouching(rect2)){
        box.velocityY=0;
        box.velocityX=0;
        music.stop();
      }
      
    var edges=createEdgeSprites();
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    box.bounceOff(edges[3]);
    box.bounceOff(rect1);
    box.bounceOff(rect2);
    box.bounceOff(rect3);
    box.bounceOff(rect4);
 

    drawSprites();
}
