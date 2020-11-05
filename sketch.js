const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,ground,ball;
function setup() {
 var canvas= createCanvas(800,400);
 engine=Engine.create();
world=engine.world;
var options={
  isStatic:true
}
ground=Bodies.rectangle(400,390,800,50,options);
World.add(world,ground);
console.log(ground.position.x);
console.log(ground.position.y);
var option1={
  restitution:1.0
}
ball=Bodies.circle(200,200,40,option1);
World.add(world,ball);
}

function draw(){
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,800,50); 
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);
}