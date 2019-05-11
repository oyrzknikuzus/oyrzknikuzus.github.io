var sketch1 = function(p){
  var tileCount = 40;
  var actRandomSeed = 0;

  var actStrokeCap;

  p.setup = function() {
    p.createCanvas(windowWidth, windowWidth);

    p.actStrokeCap = ROUND;
  }

  p.draw = function() {
    p.noCursor();
    p.clear();
    p.strokeCap(actStrokeCap);

    p.randomSeed(actRandomSeed);

    for (var gridY = 0; gridY <= tileCount; gridY++) {
      for (var gridX = 0; gridX <= tileCount; gridX++) {

        var posX = width / tileCount * gridX;
        var posY = height / tileCount * gridY;

        var toggle = int(random(0, 3));

        if (toggle == 0) {
          strokeWeight(mouseX / 20);
          line(posX, posY, posX + width / tileCount, posY + height / tileCount);
        }

        if (toggle == 1) {
          strokeWeight(mouseY / 20);
          line(posX, posY + height / tileCount, posX + width / tileCount, posY);
        }

        if (toggle == 2){
          line(posX + width /tileCount / 2, posY + height / tileCount / 2, posX, posY);
          line(posX + width /tileCount / 2, posY + height / tileCount / 2, posX, posY + height /tileCount);
          line(posX + width /tileCount / 2, posY + height / tileCount / 2, posX + width / tileCount, posY);
          line(posX + width /tileCount / 2, posY + height / tileCount / 2, posX + width / tileCount, posY + height / tileCount);
        }

      }
    }
  }

  p.mousePressed = function() {
    p.actRandomSeed = random(100000);
  }
}

var skech2 = function(p){
  var canvas;

  p.setup = function() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    background(255);
  }

  p.draw = function() {
    x = width / 2;
    y = 150;
    r = 180;
    p.fill(255, 10);
    p.noStroke();
    x = x + random(-5, 5);
    y = y + random(-5, 5);
    i = 0;
    while(i < 10){
      p.noFill();
      p.stroke(random(255), random(255), 255);
      p.ellipse(x + random(-10, 10), y + random(-10, 10), r, r);
      i = i + 1;
    }
  }

}


new p5(sketch1, "random_circle");
new p5(sketch2, "random_background");
