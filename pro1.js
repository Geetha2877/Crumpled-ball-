const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000,600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(width/2,550,width,20);
dustbin1 = new Dustbin(595,300,20,140); 
dustbin2 = new Dustbin(655,362,100,18);
dustbin3 = new Dustbin(715,300,20,140);
paper=new Paper(200,450);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 paper.display();
}
function keyPressed(){
	if (keyCode===UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-300});

}


	


