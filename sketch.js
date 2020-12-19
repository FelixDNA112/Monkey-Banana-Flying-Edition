
// declare the variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, superBanana
var foodGroup, obstacleGroup, appleGroup
var score = 0;
var survivalTime = 0;
var background, backgroundImage

function preload(){

//load images
  
  monkey_running =          loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("background.png")
  appleImage = loadImage("Apple.jpg")

}



function setup() {
  
//creating monkey
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1
  
//creating ground
ground = createSprite(400,350,10000000,10);
ground.velocityX = -1;
ground.x = ground.width/2
ground.visible = false; 
  
//greating groups
foodGroup = createGroup();
superFoodGroup = createGroup();
obstacleGroup = createGroup();
  

  
}


function draw() {
  
background(backgroundImage); 
  
//making the monkey jump
if(keyDown("space")) {
    monkey.velocityY = -10;
    }
  
//increasing and decreasing score
if (monkey.isTouching(foodGroup)) {
  score = score + 1;
  foodGroup.destroyEach();
}

if (monkey.isTouching(obstacleGroup)) {
  score = score - 5;
  obstacleGroup.destroyEach();
}
  
if (monkey.isTouching(superFoodGroup)) {
  score = score + 2
  superFoodGroup.destroyEach();
 }
  
if (score === -1) {
  monkey.destroy();
  fill("black")
  textSize(50);
  text("YOU LOST!", 90,200);
}
  
if (score === -2) {
  monkey.destroy();
  fill("black")
  textSize(50);
  text("YOU LOST!", 90,200);
}
  
if (score === -3) {
  monkey.destroy();
  fill("black")
  textSize(50);
  text("YOU LOST!", 90,200);
}
  
if (score === -4) {
  monkey.destroy();
  fill("black")
  textSize(50);
  text("YOU LOST!", 90,200);
}
  
if (score === -5) {
  monkey.destroy();
  fill("black")
  textSize(50);
  text("YOU LOST!", 90,200);
}
  
if (score === 100) {
  monkey.destroy();
  fill("black");
  textSize(50);
  text("YOU WON!", 90,200);
}
  
monkey.velocityY = monkey.velocityY + 1;
  
//time and score
stroke("white");
textSize(20);
fill("white");
text("Score: " + score, 200,50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time: " + survivalTime, 25,50);

  
monkey.collide(ground);

//calling functions   
spawnFood();
  
spawnObstacles();
  
spawnSuperBanana();
  
spawnBetterObstacles();

drawSprites();
}

function spawnFood() {
  if (frameCount % 80 === 0) {
    var banana = createSprite();
    banana.x = 400;
    banana.y = Math.round(random(150,250));
    banana.addImage(bananaImage);   
    banana.velocityX = -5;
    banana.scale = 0.1; 
    banana.lifetime = 400;
    foodGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite();
    obstacle.x = 400;
    obstacle.y = Math.round(random(150,250));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    obstacle.lifetime = 400;
    obstacleGroup.add(obstacle);
    
  }
}

function spawnSuperBanana() {
  if (frameCount % 50 === 0) {
    var superBanana = createSprite();
    superBanana.x = 400;
    superBanana.y = Math.round(random(150,250))
    superBanana.addImage(bananaImage);
    superBanana.velocityX = -10;
    superBanana.scale = 0.1;
    superBanana.ifetime = 400;
    superFoodGroup.add(superBanana);
  }
}

function spawnBetterObstacles() {
  if (frameCount % 125 === 0) {
    var betterObstacle = createSprite();
    betterObstacle.x = 400;
    betterObstacle.y = Math.round(random(150,250));
    betterObstacle.addImage(obstacleImage);
    betterObstacle.velocityX = -10;
    betterObstacle.scale = 0.1;
    betterObstacle.lifetime = 400;
    obstacleGroup.add(betterObstacle);
  }
}