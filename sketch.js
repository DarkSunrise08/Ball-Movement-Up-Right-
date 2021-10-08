const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var ball;
var left;
var right;
var top_wall;

var button1,button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution: 0.9,
    airFriction: 0.7
  }

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  button1 = createImg("right.png");
  button1.position(100,320);
  button1.size(75,45);
  button1.mouseClicked(horizontalForce);

  button2 = createImg("up.png");
  button2.position(40,300);
  button2.size(45,75);
  button2.mouseClicked(verticalForce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20,20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function horizontalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});
}

function verticalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
}
