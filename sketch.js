
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var stone
var mango1,mango2,mango3,mango4,mango5
var tree
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(400,70);
	mango1 = new Mango(81,100);
	mango2 = new Mango(60,150);
    mango3 = new Mango(100,130);
	mango4 = new Mango(50,120);
	mango5 = new Mango(78,190);
	tree = new Tree(50,400);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  
  drawSprites();
 
}



