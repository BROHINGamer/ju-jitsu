const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b_img;
var player;
var p_img;
var target;
var t_img;
var gameState="onSling";
var score=0;
var arrow1,arrow2,arrow3,arrow4,arrow5
var arrows=[]
var score=0;

function preload(){
  bg=loadImage("golden project-2.png")
b_img=loadImage("bg.jpg")
p_img=loadImage("player.png")

}

function setup(){
  var canvas=createCanvas(displayWidth-20,displayHeight-30);
 // background(bg);
  engine=Engine.create();
  world=engine.world
  var options = {
    isStatic: true
}
target = new Target();
target2 = new Target(40);
target3 = new Target(60);
target4 = new Target(80);
target5= new Target(100);

 player=createSprite(200,576)
 player.addImage(p_img);
 player.visible=false;
  form=new Form();
  ground= new Ground(displayWidth/2,displayHeight-20,displayWidth,20)
  arrow=new Arrow(256,536)
 
chain=new Chain(arrow.body,{x:256,y:536})


}
function draw(){
  
  Engine.update(engine);
  background(b_img);
  ground.display()
  //fill("white")
  target.display();
  /*target2.display();
  target3.display();
  target4.display();
  target5.display();*/
  textSize(30);
  fill("black")
  text("Score:"+score,100,100)
  //text("mouseX:"+mouseX,displayWidth/2,displayHeight/2)
  //text("mouseY:"+mouseY,displayWidth/2,displayHeight/2+50)
  drawSprites()
  form.display();
 form.button2.mousePressed(() => {
  
  player.visible=true
    form.greeting.hide();
    form.title.hide();
   
    form.button2.hide();
  
})
if(player.visible===true)
{
  
  fill("black")
  textSize(30);
  text("Press Space to get Arrow", 200,200);
  arrow.display();
  chain.display();
}
if(arrow.body.position.x>920 && arrow.body.position.x<990 && arrow.body.position.y<500  && arrow.body.position.y>210 ||
    arrow.body.position.x>1124 && arrow.body.position.x<1166 && arrow.body.position.y<500  && arrow.body.position.y>210 ||
    arrow.body.position.x>1003 && arrow.body.position.x<1160 && arrow.body.position.y<258  && arrow.body.position.y>208 ||
    arrow.body.position.x>1003 && arrow.body.position.x<1120 && arrow.body.position.y<500  && arrow.body.position.y>446)
  {
    
    score+=20
   
  }
  if(arrow.body.position.x>992 && arrow.body.position.x<1003 && arrow.body.position.y<423  && arrow.body.position.y>284 ||
    arrow.body.position.x>1116 && arrow.body.position.x<1129 && arrow.body.position.y<418 && arrow.body.position.y>284 ||
    arrow.body.position.x>1029 && arrow.body.position.x<1112 && arrow.body.position.y<302  && arrow.body.position.y>284 ||
    arrow.body.position.x>1002 && arrow.body.position.x<1107 && arrow.body.position.y<411  && arrow.body.position.y>400)
  {
    
    score+=40
   
  }
  if(arrow.body.position.x>1007 && arrow.body.position.x<1027 && arrow.body.position.y<406  && arrow.body.position.y>304 ||
    arrow.body.position.x>1096 && arrow.body.position.x<1115 && arrow.body.position.y<402  && arrow.body.position.y>406 ||
    arrow.body.position.x>1027 && arrow.body.position.x<1110 && arrow.body.position.y<319  && arrow.body.position.y>312 ||
    arrow.body.position.x>1011 && arrow.body.position.x<1096 && arrow.body.position.y<409 && arrow.body.position.y>379)
  {
    
    score+=60
   
  }
  if(arrow.body.position.x>1024 && arrow.body.position.x<1045 && arrow.body.position.y<392  && arrow.body.position.y>317 ||
    arrow.body.position.x>1079 && arrow.body.position.x<1095 && arrow.body.position.y<324  && arrow.body.position.y>385 ||
    arrow.body.position.x>1033 && arrow.body.position.x<1091 && arrow.body.position.y<305  && arrow.body.position.y>331 ||
    arrow.body.position.x>1026 && arrow.body.position.x<1096 && arrow.body.position.y<399  && arrow.body.position.y>377)
  {
    
    score+=80
   
  }
  if(arrow.body.position.x>1038 && arrow.body.position.x<1071 && arrow.body.position.y<378 && arrow.body.position.y>330 )
  { score+=100 }
}
function mouseDragged(){
  if(gameState!=="launched")
  {
      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
 // Matter.Body.applyForce(arrow.body,arrow.body.position,{x:5,y:-5})

return false;    
}
}



function mouseReleased(){
 chain.fly();
 
  //arrows.pop()
 
  gameState="launched"
  return false
}

function keyPressed(){
  if(keyCode === 32 && gameState==="launched"){
     // if(arrows.length>=0){
          Matter.Body.setPosition(arrow.body, {x: 158, y: 340});
      
     chain.attach(arrow.body);
     gameState="onSling"
     
    //  }
    }
  }
