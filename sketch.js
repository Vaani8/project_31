const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1 , radius;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  var canvas =createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  ground1=new Ground (475, 795 , windowWidth , 10);

  
    for(var i = 40 ; i<=width ; i=i+50){
    plinkos.push(new plinko(i,75));
  }
  for (var i=15; i<=width-10; i=i+50){
    plinkos.push(new plinko(i,175));
  }

  for(var i = 40 ; i<=width ; i=i+50){
    plinkos.push(new plinko(i,275));
  }

  for(var i = 15 ; i<=width-10 ; i=i+50){
    plinkos.push(new plinko(i,375));
  }

  for(var i = 40 ; i<=width ; i=i+600){
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }

  
  for (var k=0;k<= width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ground1.display();
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
    }
  for(var k=0;k<divisions.length;k++)
  {
    divisions[k].display();
  }
  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10));
  }
  particles.velocityY=particles.velocityY+0.8;
}