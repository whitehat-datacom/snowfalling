const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowfall,char;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  char=new Character(400, 200);
  for(var i=1;i<=800;i+=5){
    snowfall=new Snow(i,0);
  }
}

function draw() {
  background(255,255,255);  
  char.display();
  snowfall.display();
  drawSprites();
}