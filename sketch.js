var ground , dustbin ,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;

function setup() {
	createCanvas(1000, 800);

	engine = Matter.Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper=createSprite(100,300,20,20);
	dustbin=new dustbin(720,380,20,20);
	ground=Bodies.rect(width/2,400,width,10,{
    isStatic:true
	})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
if(keycode===UP_Arrow){
	Matter.Body.appleforce(paperobject.body,paperobject.body.position,{x:85,y:-85});
}
}


