
var bk;
var fish1_Img, fish;
var bubble_Img, bubble;
var score = 0;

var b1_G ,b2_G ,b3_G ,b4_G,b5_G;
var burst,burst_Img;
var f1,f1_Img;
var guard,guard_Img;
var guard1,guard1_Img;

var submarine,submarine_Img;

var shark , shark1L_Img,shark1R_Img;
var shark2L_Img, shark2R_Img;

var sharkG;
var spawnf1G;

var line1,line1_Img;
var line2,line2_Img;

var gameOver,gameOver_Img;
var restart,restart_Img;

var sound;

var gameState = "play";

function preload() {
  bk = loadImage("bk.gif");

  fish1_Img = loadAnimation("images/fish1.png", "images/fish2.png", "images/fish3.png", "images/fish4.png");
  
  bubble_Img = loadImage("images/bubble1.png");

  burst_Img = loadAnimation("images/burst1.png", "images/burst2.png", "images/burst3.png", "images/burst4.png" ,"images/burst5.png", "images/burst6.png");
 
  f1_Img = loadAnimation("images/f1.png","images/f2.png","images/f3.png");

  guard_Img = loadImage("images/guard.png");

  guard1_Img = loadImage("images/guard1.png");

  submarine_Img = loadImage("images/submarine.png");

  shark1L_Img = loadImage("images/shark1.png");

  shark1R_Img = loadImage("images/shark1R.png");

  shark2L_Img = loadImage("images/shark2.png");

  shark2R_Img = loadImage("images/shark2R.png");

  line1_Img = loadImage("images/line2.png");

  gameOver_Img = loadImage("images/gameOver.jpg");

  restart_Img = loadImage("images/restart.png");

  sound = loadSound("images/burstSound.wav");

  //line2_Img = loadImage("images/line2.png");
}
function setup() {

  var canvas = createCanvas(900, 500);
  canvas.position(150, 50);

 fish = createSprite(450, 250, 20, 20);
  fish.addAnimation("running", fish1_Img);
  fish.scale = 0.22
  fish.debug = false
  fish.setCollider("circle",0,0,90)

  restart = createSprite(450,350,900,10);
  restart.addImage("images/restart.png",restart_Img);
  restart.scale = 0.8;
  restart.visible = false;

 sharkG = new Group();
 spawnf1G = new Group();

  

  b1_G = new Group();
  b2_G = new Group();
  b3_G = new Group();
  b4_G = new Group();
  b5_G = new Group();
  
  

}
function draw() {
 

  if(gameState === "play"){
    background(bk);
    restart.visible = false;
    fish.visible = true;
  textSize(90);
  fill("lightblue")
  stroke("black");
  strokeWeight(5)
  text("SCORE : "+ score,200,90);

  fish.x = mouseX
  fish.y = mouseY

  if(mouseWentDown("leftButton")){
    fish.mirrorX(fish.mirrorX() * -1)
  }

  if(mouseWentDown("rightButton")){
    fish.mirrorX(fish.mirrorX() * -1)
  }

  if(fish.isTouching(b1_G)){
    sound.play();
    b1_G.destroyEach();
    
    score = score + 1;
}

if(fish.isTouching(b2_G)){
  sound.play();
  b2_G.destroyEach();
  score = score + 1;
}

if(fish.isTouching(b3_G)){
  sound.play();
  b3_G.destroyEach();
  score = score + 1;
}

if(fish.isTouching(b4_G)){
  sound.play();
  b4_G.destroyEach();
  score = score + 1;
}

if(fish.isTouching(b5_G)){
  sound.play();
  b5_G.destroyEach();
  score = score + 1;
}

if(fish.isTouching(sharkG)){
  sharkG.destroyEach();
  score = 0
  gameState = "end";
}
spawnf1();
spawnShark1();
//spawnShark2()
//spawnsubmarine()
  spawnBubbles1();
  spawnBubbles2();
  spawnBubbles3();
  spawnBubbles4();
  spawnBubbles5();
}
if(gameState === "end"){
  background(gameOver_Img);
  restart.visible = true;
  fish.visible = false;
  b1_G.destroyEach();
  b2_G.destroyEach();
  b3_G.destroyEach();
  b4_G.destroyEach();
  b5_G.destroyEach();
  sharkG.destroyEach();
  spawnf1G.destroyEach();
  

  if(mousePressedOver(restart)){
    gameState = "play";
  }

}
  



  drawSprites();

}
function spawnBubbles1() {
  if (frameCount % 60 === 0) {
    bubble = createSprite(Math.round(random(0, 850)), 500, 20, 20);
    bubble.addAnimation("bubble1.png", bubble_Img);
    bubble.addAnimation("jump",burst_Img);
    bubble.scale = 0.2;
    bubble.velocityY = -7
    bubble.depth = fish.depth;
    fish.depth = fish.depth + 1;

    b1_G.add(bubble);
  }
}

function spawnBubbles2() {
  if (frameCount % 100 === 0) {
    bubble = createSprite(Math.round(random(0, 850)), 500, 20, 20);
    bubble.addAnimation("bubble1.png", bubble_Img);
    bubble.scale = 0.2;
    bubble.velocityY = -8
    bubble.depth = fish.depth;
    fish.depth = fish.depth + 1;

    b2_G.add(bubble);
  }
}

function spawnBubbles3() {
  if (frameCount % 140 === 0) {
    bubble = createSprite(Math.round(random(0, 850)), 500, 20, 20);
    bubble.addAnimation("bubble1.png", bubble_Img);
    bubble.scale = 0.2;
    bubble.velocityY = -9
    bubble.depth = fish.depth;
    fish.depth = fish.depth + 1;

    b3_G.add(bubble);
  }
}

function spawnBubbles4() {
  if (frameCount % 180 === 0) {
    bubble = createSprite(Math.round(random(0, 850)), 500, 20, 20);
    bubble.addAnimation("bubble1.png", bubble_Img);
    bubble.scale = 0.2;
    bubble.velocityY = -10
    bubble.depth = fish.depth;
    fish.depth = fish.depth + 1;

    b4_G.add(bubble);
  }
}

function spawnBubbles5() {
  if (frameCount % 210 === 0) {
    bubble = createSprite(Math.round(random(0, 850)), 500, 20, 20);
    bubble.addAnimation("bubble1.png", bubble_Img);
    bubble.scale = 0.2;
    bubble.velocityY = -11
    bubble.depth = fish.depth;
    fish.depth = fish.depth + 1;

    b5_G.add(bubble);
  }
}

function spawnf1(){
  if(frameCount % 200 === 0){
    f1 = createSprite(900,Math.round(random(50,450)),20,20);
    f1.addAnimation("fishing",f1_Img);
    f1.scale = 0.1;
    spawnf1G.add(f1);
    f1.velocityX = -5;
    
  }
}

function spawnsubmarine(){
  if(frameCount % 200 === 0){
  submarine = createSprite(0,Math.round(random(50,450)),20,20);
    submarine.addImage("images/submarine.png",submarine_Img);
    submarine.scale = 0.3;
    
   submarine.velocityX = 4;
  }
}

function spawnShark1(){
  if(frameCount % 100 === 0){
    shark = createSprite(0,Math.round(random(50,450)),20,20);
    shark.scale = 0.3;
    shark.velocityX = 5;
    
    var rand = Math.round(random(1,4));

    if(rand === 1){
      shark.x = 0
      shark.addImage("images/shark1.png",shark1L_Img);
      shark.velocityX = 8;
    }
    if(rand === 2){
      shark.x = 900;
      shark.addImage("images/shark1R.png",shark1R_Img);
      shark.velocityX = -8
    }
     if(rand === 3){
      shark.x = 0;
      shark.addImage("images/shark2.png",shark2L_Img);
      shark.velocityX = 8
      shark.scale = 0.7
    }
     if(rand === 4){
      shark.x = 900;
      shark.addImage("images/shark2R.png",shark2R_Img);
      shark.velocityX = -8
      shark.scale = 0.7
    }
      sharkG.add(shark);
  }
}




