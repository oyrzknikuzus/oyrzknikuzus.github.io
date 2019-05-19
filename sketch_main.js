var sketch1 = function(p) {
  var tileCount = 40;
  var actRandomSeed = 0;
  var actStrokeCap;

  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowWidth * 4);
    canvas.position(0, 200);
    canvas.style('z-index', '-1');

  };

  p.draw = function() {
    p.noLoop()
    p.frameRate(1);
    p.noCursor();
    p.clear();
    p.strokeCap(actStrokeCap);
    //p.randomSeed(actRandomSeed);

    var tileCountY = tileCount * p.height / p.width

    for (var gridY = 0; gridY <= tileCountY; gridY++) {
      for (var gridX = 0; gridX <= tileCount; gridX++) {


        var posX = p.width / tileCount * gridX;
        var posY = p.height / tileCountY * gridY;

        var toggle = p.int(p.random(0, 2));
        p.strokeWeight((gridY / 8) ** 2);
        p.stroke('#AAAAAA');

        if (toggle == 0) {

          p.line(posX, posY, posX + p.width / tileCount, posY + p.height / tileCountY);
        }

        if (toggle == 1) {
          p.line(posX, posY + p.height / tileCountY, posX + p.width / tileCount, posY);
        }
      }
    }
  };
};


var sketch2 = function(p) {
  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth / 4, p.windowWidth / 4);
    canvas.position(p.windowWidth * 0.75, -30);
    //canvas.style('z-index', '-1');
    //p.background(255);
    //p.noLoop();
    p.randomSeed(0);
  };

  p.draw = function() {
    //p.redraw(60);
    p.frameRate(30);
    x = p.width / 2;
    y = p.height / 2;
    r = p.height * 0.5;
    p.fill(255, 10);
    p.noStroke();
    x = x + p.random(-5, 5);
    y = y + p.random(-5, 5);

    for (i = 0; i < 2; i++ ){
      p.noFill();
      p.stroke(p.random(255), p.random(255), 255);
      p.ellipse(x + p.random(-10, 10), y + p.random(-10, 10), r, r);

    }
  };


};



var sketch3 = function(p) {
  const sourceText = "randomness";

  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth / 4, p.windowWidth / 4);
    canvas.position(0, 0);
    //canvas.style('z-index', '-1');
    //p.background(255);
    //p.noLoop();
    p.randomSeed(0);
  };

  p.redraw = function() {
    //p.background(0);
    p.frameRate(10);
    //文字の大きさ
    p.textSize(24);
    //フォント
    p.textFont('Helvetica Neue');
    //p.textAlign(CENTER);
    p.stroke(0);
    p.strokeWeight(2);
    for (i = 0; i < 10; i++){
      p.text(sourceText.substring(i, i + 1), p.width / 4 + (i + 1) * p.random(15, 20), 120);
      p.fill(p.random(255), p.random(255), 255);
    }
  };
};

new p5(sketch1, "random_background");
new p5(sketch2, "random_circle");
new p5(sketch3, "random_randomness");
