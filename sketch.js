const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var chain;
var holder;
var ball;
var engine,world;
var flag = 0;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  holder = new Ground(400,20,600,20);
  ball = new Ball(400,350,50);
  chain = new Chain(ball.body,holder.body);
  
  
}

function draw() {
  background("black");
  Engine.update(engine);  
  
 chain.display();

  ball.display();
  holder.display();
  if(flag ===1){
    Matter.Body.setPosition(ball.body,{ x : mouseX, y : mouseY});
  }
  else{
    Matter.Body.setPosition(ball.body,{ x : 400, y : 350});

  }
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    flag = 1;
  }

  if(keyCode === DOWN_ARROW){
    flag = 0;
  }
}