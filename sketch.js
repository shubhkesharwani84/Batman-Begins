const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World =Matter.World;
const Events=Matter.Events;

var world,engine;
var drops;
var umbrella; 
var droplets = [];
var thunderImg1, thunderImg2;



function preload(){
    thunderImg1 =loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
    thunderImg2 =loadAnimation("images/thunderbolt/4.png","images/thunderbolt/3.png","images/thunderbolt/2.png","images/thunderbolt/1.png"); 
}

function setup(){
   canvas = createCanvas(displayWidth-600, displayHeight + 180)
      engine= Engine.create();
    world=engine.world


 umbrella=new Umbrella(300,550)
}

function draw(){
  background("black");  

  Engine.update(engine);

if(frameCount%20===0){
  for(var i=0; i<80; i++){
    droplets.push(new Drop(random (0,600),random(0,200)))
}

}   
  umbrella.display();


for(var k=0; k<droplets.length; k++){
     droplets[k].display();
   }


  if(frameCount%55===0){
  var thunder=createSprite(400,300,20,20);
   var rand=Math.round(random(1,2));

   switch(rand){
     case 1:thunder.addAnimation("the thunder",thunderImg1);
     break;

     case 2: thunder.addAnimation("the thunder",thunderImg2);
     break;

   }

   if(rand>=2){
 thunder.destroy();
}


drawSprites();
}
}