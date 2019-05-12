var sketch1 = function(p) {
  var tileCount = 40;
  var actRandomSeed = 0;
  var actStrokeCap;

  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, 800);
    canvas.position(0, 800);
    canvas.style('z-index', '-1');
  };

  p.draw = function() {
    p.noCursor();
    p.clear();
    p.strokeCap(actStrokeCap);
    //p.randomSeed(actRandomSeed);

    for (var gridY = 0; gridY <= tileCount; gridY++) {
      for (var gridX = 0; gridX <= tileCount; gridX++) {

        var posX = p.width / tileCount * gridX;
        var posY = p.height / tileCount * gridY;

        var toggle = p.int(p.random(0, 2));

        if (toggle == 0) {
          p.strokeWeight(1);
          p.line(posX, posY, posX + p.width / tileCount, posY + p.height / tileCount);
        }

        if (toggle == 1) {
          p.strokeWeight(1);
          p.line(posX, posY + p.height / tileCount, posX + p.width / tileCount, posY);
        }
      }
    }
  };
};


var sketch2 = function(p) {
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth / 4, p.windowWidth / 4);
    canvas.position(p.windowWidth * 0.75, -30);
    canvas.style('z-index', '-1');
    //p.background(0);
  };

  p.draw = function() {
    p.frameRate(20);
    x = p.width / 2;
    y = p.height / 2;
    r = p.height * 0.5;
    p.fill(255, 10);
    p.noStroke();
    x = x + p.random(-5, 5);
    y = y + p.random(-5, 5);

    for (i = 0; i < 10; i++ ){
      p.noFill();
      p.stroke(p.random(255), p.random(255), 255);
      p.ellipse(x + p.random(-10, 10), y + p.random(-10, 10), r, r);

    }
  };
};

new p5(sketch1, "random_background");
new p5(sketch2, "random_circle");
