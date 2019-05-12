
var tileCount = 40;
var actRandomSeed = 0;
var actStrokeCap;

function setup() {
  canvas = createCanvas(windowWidth, windowWidth);
  canvas.position(0, 400);
  //canvas.style('z-index', '-1');
  actStrokeCap = ROUND;
}

function draw() {

  clear();
  strokeCap(actStrokeCap);

  randomSeed(actRandomSeed);

  for (var gridY = 0; gridY <= tileCount; gridY++) {
    for (var gridX = 0; gridX <= tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var toggle = int(random(0, 2));

      if (toggle == 0) {
        strokeWeight(mouseX / 20);
        line(posX, posY, posX + width / tileCount, posY + height / tileCount);
      }

      if (toggle == 1) {
        strokeWeight(mouseY / 20);
        line(posX, posY + height / tileCount, posX + width / tileCount, posY);
      }

      /* if (toggle == 2){
        line(posX + width /tileCount / 2, posY + height / tileCount / 2, posX, posY);
        line(posX + width /tileCount / 2, posY + height / tileCount / 2, posX, posY + height /tileCount);
        line(posX + width /tileCount / 2, posY + height / tileCount / 2, posX + width / tileCount, posY);
        line(posX + width /tileCount / 2, posY + height / tileCount / 2, posX + width / tileCount, posY + height / tileCount);
      }*/


    }
  }
}
