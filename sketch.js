
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var B1,B2,B3,B4,B5;
var R;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
///dia=100
//wid=800
rad=40
	//Create the Bodies Here.
	R=new Roof(800,100,350,20)
    B1=new Bob(800,400,rad);
    B2=new Bob(670,400,rad);
  	B3=new Bob(735,400,rad);
  	B4=new Bob(865,400,rad);
    B5=new Bob(930,400,rad);

    rope1=new Rope(B1.body,R.body,-rad*2,0);
   // rope2=new Rope(B2.body,R.body,-rad*2,0);
   // rope3=new Rope(B3.body,R.body,-rad*2,0);
   // rope4=new Rope(B4.body,R.body,-rad*2,0);
   //rope5=new Rope(B5.body,R.body,-rad*2,0);
console.log(R.x)
	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  R.display();
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(B2.body,B2.body.position,{x:-50,y:-45});
  }
}

