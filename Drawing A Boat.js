hide();
penUp();

drawBackground();

moveTo(150,400);
drawStarfish(randomNumber(10,30));
moveTo(50,425);
drawStarfish(randomNumber(10,30));

moveTo(50,450);
turnTo(0);
drawSeagrass(randomNumber(50,200));
moveTo(100,450);
turnTo(0);
drawSeagrass(randomNumber(50,200));

moveTo(100,100);
drawFish(randomNumber(20,50));
moveTo(200,200);
drawFish(randomNumber(20,50));

function drawBackground(){
  penColor("DarkBlue");
  dot(1000);
}

function drawStarfish(size) {
  penRGB(255,0,255);
  penWidth(20);
  penDown();
   
  turnTo(0);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
     
  penUp();
}

function drawSeagrass(size) {
  penRGB(0,255,0);
  penWidth(10);
  penDown();
  arcLeft(30,size);
  arcRight(60,size);
  arcLeft(60,size);
  arcRight(60,size);
  penUp();
}

function drawFish(size){
 penRGB(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  penWidth(size);
  penDown();
  
  dot(size);
  turnTo(90);
  moveForward(30);
  
  turnLeft(30);
  moveForward(30);
  turnRight(120);
  moveForward(30);
  turnRight(120);
  moveForward(30);
  turnRight(120);
  
  penUp();
}
