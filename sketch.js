var treeIMG,ground,boyIMG;
var tree, boySprite, stoneObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var elastic;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1435, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(width/2,height-5,width,10);

	Engine.run(engine);
    tree = new Tree (1150,440,450,540);
    boySprite=new Boy(320,620,200,290);

    stoneObj = new Stone(155,550,50);
  
    mango1 = new mango(1170,250,40);
    mango2 = new mango(1200,350,45);
    mango3 = new mango(1250,260,50);
    mango4 = new mango(1340,360,55);
    mango5 = new mango(1099,350,40);
    mango6 = new mango(1090,260,45);
    mango7 = new mango(1010,375,50);

    elastic = new Throw(stoneObj.body,{x:255,y:550})
    
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  ground.display();
  tree.display();
  boySprite.display();

  elastic.display();
  stoneObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  detectcollision(stoneObj,mango1);
    detectcollision(stoneObj,mango2);
    detectcollision(stoneObj,mango3);
    detectcollision(stoneObj,mango4);
    detectcollision(stoneObj,mango5);
    detectcollision(stoneObj,mango6);
    detectcollision(stoneObj,mango7);

    
     drawSprites();
     }

    function mouseDragged(){
     Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY})
	}

    function mouseReleased(){
     elastic.fly();
	}

    function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(stoneObj.body, { x: 225, y: 550 })
    }
}
   

function detectcollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r+lstone.r)
    {
     Matter.Body.setStatic(lmango.body,false);
	}
}