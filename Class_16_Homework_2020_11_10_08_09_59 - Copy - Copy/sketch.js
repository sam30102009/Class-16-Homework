var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground;
var Bananas = 0,Survival_Time = 0;

function preload(){
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey_running =          loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {  
createCanvas(500,500)
monkey = createSprite(80,430,10,10)
monkey.addAnimation ("momer",monkey_running);
monkey.scale =0.1
ground = createSprite(250,460,1000,5)
ground.x = ground.width/2;
}


function draw() {  
background(0,255,255)
fill("Black")
textSize(20)
text("Bananas = "+Bananas,100,100)  

if(monkey.isTouching(FoodGroup)){
Bananas = Bananas+1;
FoodGroup.destroyEach();
}  
   
Survival_Time = Math.ceil(frameCount/frameRate())  
text("Survial Time = "+Survival_Time,300,100)  
  
ground.velocityX = -4
if(ground.x<0){
ground.x = ground.width/2
}
monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground)
if(keyWentDown("space") && monkey.y>=426.8){
monkey.velocityY = -22
}

 
  
spawnBanana()
spawnObstacle()

drawSprites();
  
if(monkey.isTouching(obstacleGroup)){
remove();
}      
}

function spawnBanana(){
if(frameCount % 120 === 0){
var B = createSprite(600,Math.round(random(120,200)),10,10);
    B.addImage(bananaImage);
    B.scale = 0.1;
    B.velocityX = -4;
    B.lifetime = 140;
  FoodGroup.add(B);
}
}

function spawnObstacle(){
if(frameCount % 10 === 0){
var e = createSprite(600,440,10,10);
    e.addImage(obstaceImage);
    e.scale = 0.1;
    e.velocityX = -4;
    e.lifetime = 140;
  obstacleGroup.add(e);
}
}