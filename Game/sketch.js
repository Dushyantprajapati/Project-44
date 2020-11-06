const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;

var ground;
var Alex;
var Dan,Jhon,Steve;
var back_img,alex_img;

function preload(){

  back_img = loadImage("bg.jpeg");
}
function setup() {
  engine=Engine.create();
  world=engine.world
  createCanvas(800,500);


  ground=new Ground(400,490,800,10);
  Alex=new Alex1(400,480,400,100);
  Steve=new Friend(90,480,50,50);

  
}

function draw() {
  
  Engine.update(engine);
  background(back_img);
    
  Alex.scale=100;

  ground.display();
  Alex.display();
  Steve.display();
  ground.display();

}
