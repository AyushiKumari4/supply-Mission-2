var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
		
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create a Ground
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		World.add(world, ground)

	packageSprite=createSprite(width/2, 200, 10,{restitution:0.5},{isStatic:true});
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	packageBody = Bodies.circle(width/2 , 200 , 10, {restitution:0.5});
	World.add(world, packageBody);
	
	block1=new block(300,550,20,100);
	
	block2=new block(450,550,20,100);

	block3=new block(350,600,100,20)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  block1.display();
  block2.display();
  block3.display();
  groundSprite.display();
  helicopterSprite.display();
  packageSprite.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//ellipse(packageBody.position.x,packageBody.position.y,20,20);

	
	Matter.Body.setStatic(packageBody,false);  
}
}



