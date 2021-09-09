const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,rope1;
var ball2,rope2;
var ball3,rope3;
var ball4,rope4;
var ball5,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
    ellipseMode(RADIUS);
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_option={
    restitution: 1.3,
	//isStatic:true
	  
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    
	ball3 = Bodies.circle(400,380,20,ball_option);
	World.add(world,ball3);

	ball2 = Bodies.circle(360,380,20,ball_option);
	World.add(world,ball2);
     
	ball1 = Bodies.circle(320,380,20,ball_option);
	World.add(world,ball1);
    
	ball4 = Bodies.circle(440,380,20,ball_option);
	World.add(world,ball4);

	ball5 = Bodies.circle(480,380,20,ball_option);
	World.add(world,ball5);
     
	
	rope1 = new rope(ball1,roof,-80,0)
	rope2 = new rope(ball2,roof,-40,0)
	rope3 = new rope(ball3,roof,0,0)
	rope4 = new rope(ball4,roof,40,0)
	rope5 = new rope(ball5,roof,80,0)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
   rope1.display();
   rope2.display();
   rope3.display() ;
   rope4.display();
   rope5.display();
  
  //create ellipse shape for multiple bobs here
   ellipse(ball1.position.x,ball1.position.y,20);
   ellipse(ball2.position.x,ball2.position.y,20);
    ellipse(ball3.position.x,ball3.position.y,20);
	ellipse(ball4.position.x,ball4.position.y,20);
	ellipse(ball5.position.x,ball5.position.y,20);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
   function keyPressed(){
	   if(keyCode===UP_ARROW ){
		   Matter.Body.applyForce(ball5,ball5.position,{x:0.02,y:-0.02});
	   }
   }
   