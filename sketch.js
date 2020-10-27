const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var maxDrops = 100;
function preload(){
    
}

function setup(){
canvas = createCanvas(400,600);

engine = Engine.create();
    world = engine.world;

umbrella = new Umbrella(200,50,20,20);
}

function draw(){

  Engine.update(engine);
  
  for(var i = 0; i<maxDrops; i++){
      drops.push(new createDrop(random(0,400), random(0,400)))
  }  
  rand = Math.round(random(1,4))
  switch(rand){
    case 1: obstacle.addImage("images/thunderbolt/1.png");
              break;
      case 2: obstacle.addImage("images/thunderbolt/1.png");
              break;
      case 3: obstacle.addImage("images/thunderbolt/1.png");
              break;
      case 4: obstacle.addImage("images/thunderbolt/1.png");
              break;
    default: break;
  }
  umbrella.display();
  drops.display();
}   

function spawnRainDrops(){
  if(World.framcount % 0.1 === 0){
    drops.velocityY = 4;
  }
}

