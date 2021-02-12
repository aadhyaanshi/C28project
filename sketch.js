
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1102,50,30);
	mango3=new mango(1010,40,30);
	mango4=new mango(1022,90,30);


	
	var options  {

		isStatic:false,
		restitution:0,
		friction:1,
		density:1.2
	  }

	stoneObj = new stoneObj(100,100,option)
	
	chain = new chain(stoneObj.body,{x:200,y:100});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  chain.display();
  stoneObj.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango12;
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
 


  groundObject.display();
}


function mouseDragged (){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased (){
    chain.fly();
}
