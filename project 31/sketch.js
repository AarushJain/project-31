
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var particles = [];
var plinkos= [];
var divisions= [];

var divisionHeight=300;

// var division1, division2, division3, division4, division5, division6, division7;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(240,795,480,25)

	
	
	for(var j=40; j <=width; j=j+50)
	{
		plinkos.push(new Plinko(j,75))
	}

	for(var j=15; j <=width; j=j+50)
	{
		plinkos.push(new Plinko(j,150))
	}



	//Create the Bodies Here.

	
	
	for (var k=0; k<=width;k=k+80) {
		divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));	
		}
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  


	for(var j=0;j<particles.length;j++){
		particles[j].display();
	}
	for(var k=0; k<divisions.length; k++) {
		divisions[k].display();
	}
	for(var i=0;i<plinkos.length;i++){
		plinkos[i].display();
	}
	// for(var o=15; o <=height; o=o+50)
	if(frameCount%60===0)
	{
		particles.push(new Particles(random(width/2-30,width/2+30),10,10))
	}

  
  drawSprites();
 
}



