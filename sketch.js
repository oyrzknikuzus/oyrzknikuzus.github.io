var sketch1 = function(p){

  var tileCount = 40;
  var actRandomSeed = 0;
  var actStrokeCap;

  p.setup = function() {
    canvas = p.createCanvas(p.windowWidth, p.windowWidth);
    canvas.position(0, 400);
    //canvas.style('z-index', '-1');
    actStrokeCap = ROUND;
  };

  p.draw = function() {

    p.clear();
    p.strokeCap(actStrokeCap);

    p.randomSeed(actRandomSeed);

    for (var gridY = 0; gridY <= tileCount; gridY++) {
      for (var gridX = 0; gridX <= tileCount; gridX++) {

        var posX = p.width / tileCount * gridX;
        var posY = p.height / tileCount * gridY;

        var toggle = p.int(p.random(0, 2));

        if (toggle == 0) {
          p.strokeWeight(p.mouseX / 20);
          p.line(posX, posY, posX + p.width / tileCount, posY + p.height / tileCount);
        }

        if (toggle == 1) {
          p.strokeWeight(p.mouseY / 20);
          p.line(posX, posY + p.height / tileCount, posX + p.width / tileCount, posY);
        }

        /* if (toggle == 2){
          line(posX + p.width /tileCount / 2, posY + p.height / tileCount / 2, posX, posY);
          line(posX + p.width /tileCount / 2, posY + p.height / tileCount / 2, posX, posY + p.height /tileCount);
          line(posX + p.width /tileCount / 2, posY + p.height / tileCount / 2, posX + p.width / tileCount, posY);
          line(posX + p.width /tileCount / 2, posY + p.height / tileCount / 2, posX + p.width / tileCount, posY + p.height / tileCount);
        }*/


      }
    }
  };



};


new p5(sketch1, "random_background");
