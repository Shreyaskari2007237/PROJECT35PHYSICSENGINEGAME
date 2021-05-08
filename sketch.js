var bgImg;
var earth,earthImg1,earthImg2;
var doctor,doctorImg;
var corona,coronaGroup,coronaImg;
var gameState="PLAY";
var coronaDead;
var score;

function preload(){
bgImg=loadImage("Sprites/Background.png");
earthImg1=loadImage("Sprites/Earth.png");
earthImg2=loadImage("Sprites/Earth Smiling.png");
doctorImg=loadImage("Sprites/Doctor.png");
coronaImg=loadImage("Sprites/corona1.png");

}

function setup() {
  createCanvas(1800,900);
  
  earth=createSprite(800,450,50,50);
  earth.addImage(earthImg1);

  doctor=createSprite(900,200,50,50);
  doctor.addImage(doctorImg);
  doctor.scale=0.7;

  coronaGroup=new Group();

  coronaDead=0;
score=0;
}

function draw() {
  background(bgImg);  
  text(mouseX+","+mouseY,30,45);
   
  textSize(30);
  fill("red");
  text("CoronaDead:"+coronaDead,100,50);

  if(gameState=="PLAY"){
  Corona();

  if(keyDown("right")){
    doctor.x=doctor.x+3;
  }
  if (keyDown("left")){
    doctor.x=doctor.x-3;
  }
  if(keyDown("up")){
    if(doctor.y>18){
      doctor.y=doctor.y-3;
    }
  }
  if(keyDown("down")){
    if(doctor.y>85){
      doctor.y=doctor.y+3;
    }
  }

 

  if(coronaGroup.isTouching(doctor)){
    score=score+1;
    coronaGroup.destroyEach();
  }
  if(score==5){
    coronaDead=coronaDead+50;
    gameState="END";
  }
}
  if(gameState=="END"){
    coronaGroup.setVelocityEach(0);
    earth.addImage(earthImg2);
    doctor.visible=false;
    textSize(40);
    fill(201, 129, 28);
    textFont("Algerian");
    text("Congratulations! You Killed The Corona Viruses",500,193);
}
  drawSprites();
}
function Corona(){
  if(frameCount%120==0){
    corona=createSprite(1700,Math.round(random(30,800)),10,10);
    corona.addImage(coronaImg);
    corona.scale=0.7;
    corona.velocityX=-4;
    coronaGroup.add(corona);

  }
}