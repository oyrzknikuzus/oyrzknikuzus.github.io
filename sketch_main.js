var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {
    //横幅640px以下のとき（つまりスマホ時）に行う処理を書く


    var sketch1 = function(p) {
      var tileCount = 40;
      var actRandomSeed = 0;
      var actStrokeCap;

      p.setup = function() {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        p.background('#252525');
        //canvas.style('z-index', '-1');


      };
/*
      p.draw = function() {
        p.noLoop()
        p.frameRate(10);
        //p.noCursor();
        p.clear();
        p.strokeCap(actStrokeCap);
        //p.randomSeed(actRandomSeed);

        var tileCountY = tileCount * p.height / p.width

        for (var gridY = 0; gridY <= tileCountY; gridY++) {
          for (var gridX = 0; gridX <= tileCount; gridX++) {


            var posX = p.width / tileCount * gridX;
            var posY = p.height / tileCountY * gridY;

            var toggle = p.int(p.random(0, 2));
            p.strokeWeight(15 - (gridY)**0.5);
            p.stroke('#252525');

            if (toggle == 0) {

              p.line(posX, posY, posX + p.width / tileCount, posY + p.height / tileCountY);
            }

            if (toggle == 1) {
              p.line(posX, posY + p.height / tileCountY, posX + p.width / tileCount, posY);
            }
          }
        }
      };
*/
    };


    var sketch2 = function(p) {
      p.setup = function() {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(-13, -13);
        //canvas.style('z-index', '-1');
        p.background(255, 255, 255, 240);
        //p.noLoop();
        p.randomSeed(0);
      };


      p.draw = function() {
        //p.redraw(60);
        //p.clear();
        //p.redraw(10);
        p.frameRate(15);
        x = p.width * 0.5;
        y = p.height / 2;
        r = p.width / 3;
        p.fill(255, 10);
        p.noStroke();
        p.strokeWeight(p.random(0.5, 2));

        x = x + p.random(-10, 10);
        y = y + p.random(-10, 10);



        if (p.frameCount < 25) {
          if ((p.frameCount % 4) == 0) {
            p.noFill();
            p.stroke(p.random(255), p.random(255), 255);
            p.ellipse(x + p.random(-1, 1), y + p.random(-1, 1), r, r);
          }
        }



        if (p.frameCount >= 25  &&  p.frameCount < 90) {
          p.noFill();
          p.stroke(p.random(255), p.random(255), 255);
          p.ellipse(x + p.random(-1, 1), y + p.random(-1, 1), r, r);
        }

      };


    };



    var sketch3 = function(p) {
      const sourceText = "W/ raNdOmneSs";

      p.setup = function() {
        canvas = p.createCanvas(p.windowWidth, p.windowWidth / 2);
        canvas.position(0, 0);
        //canvas.style('z-index', '-1');
        //p.background(0);
        //p.noLoop();
        p.randomSeed(0);
      };

      p.draw = function() {
        p.clear();
        //p.background(0);
        p.frameRate(8);
        //文字の大きさ
        p.textSize(16);
        //フォント
        p.textFont('Helvetica Neue');
        //textAlign(RIGHT);
        p.stroke(0);
        p.strokeWeight(1);
        for (i = 0; i < 15; i++){
          p.text(sourceText.substring(i, i + 1), (10 * i) + p.random(0, 15), 20);
          p.fill(p.random(255), p.random(255), 255);
        }
      };



    };

    //new p5(sketch1, "random_background");
    new p5(sketch2, "random_circle");
    //new p5(sketch3, "random_randomness");




} else {























    //横幅640px超のとき（タブレット、PC）に行う処理を書く


    var sketch1 = function(p) {
/*      var tileCount = 40;
      var actRandomSeed = 0;
      var actStrokeCap;

      p.setup = function() {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        //canvas.style('z-index', '-1');
        p.background('#252525');


      };

      p.draw = function() {
        p.noLoop()
        p.frameRate(10);
        //p.noCursor();
        p.clear();
        p.strokeCap(actStrokeCap);
        //p.randomSeed(actRandomSeed);

        var tileCountY = tileCount * p.height / p.width

        for (var gridY = 0; gridY <= tileCountY; gridY++) {
          for (var gridX = 0; gridX <= tileCount; gridX++) {


            var posX = p.width / tileCount * gridX;
            var posY = p.height / tileCountY * gridY;

            var toggle = p.int(p.random(0, 2));
            p.strokeWeight(50 - (gridY));
            p.stroke('#252525');

            if (toggle == 0) {

              p.line(posX, posY, posX + p.width / tileCount, posY + p.height / tileCountY);
            }

            if (toggle == 1) {
              p.line(posX, posY + p.height / tileCountY, posX + p.width / tileCount, posY);
            }
          }
        }
      };
*/






      var textTyped = 'Type slow and fast!';
      var fontSizes = [textTyped.length];
      var minFontSize = 15;
      var maxFontSize = 800;
      var newFontSize = 0;

      var pMillis = 0;
      var maxTimeDelta = 5000.0;

      var spacing = 2; // line height
      var tracking = 0; // between letters
      var font;

      p.setup = function() {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.position(0, 0);
        font = 'Arial';


        p.noStroke();

        // init fontSizes
        for (var i = 0; i < textTyped.length; i++) {
          fontSizes[i] = minFontSize;
        }
      }

      p.draw = function() {

        p.background(255);
        p.textAlign(LEFT);
        p.fill(0);

        spacing = p.map(mouseY, 0, height, 0, 120);
        p.translate(0, 200 + spacing);

        var x = 0;
        var y = 0;
        var fontSize = 20;

        for (var i = 0; i < textTyped.length; i++) {
          // get fontsize for the actual letter from the array
          fontSize = fontSizes[i];
          p.textFont(font, fontSize);
          var letter = textTyped.charAt(i);
          var letterWidth = p.textWidth(letter) + tracking;

          if (x + letterWidth > width) {
            // start new line and add line height
            x = 0;
            y += spacing;
          }

          // draw letter
          p.text(letter, x, y);
          // update x-coordinate for next letter
          x += letterWidth;
        }

        // blinking cursor after text
        var timeDelta = (p.millis() - pMillis) * 2;
        newFontSize = p.map(timeDelta, 0, maxTimeDelta, minFontSize, maxFontSize);
        newFontSize = p.min(newFontSize, maxFontSize);

        p.fill(200, 30, 40);
        if (p.int(frameCount / 10) % 2 == 0) p.fill(255);
        p.rect(x, y, newFontSize / 2, newFontSize / 20);
      }



      p.keyTyped = function() {
        if (keyCode >= 32) {
          textTyped += key;
          fontSizes.push(newFontSize);
        } else if (keyCode == BACKSPACE || keyCode == DELETE) {
          if (textTyped.length > 0) {
            textTyped = textTyped.substring(0, p.max(0, textTyped.length - 1));
            fontSizes.pop();
          }
        }
        // reset timer
        pMillis = p.millis();
      }



    };




    var sketch2 = function(p) {
      p.setup = function() {
        //canvas = p.createCanvas(p.windowWidth, p.windowWidth / 2);

        canvas = p.createCanvas(p.windowWidth, p.windowHeight);

        canvas.position(0, 0);
        //canvas.style('z-index', '-1');
        p.background(255, 255, 255, 240);
        //p.noLoop();
        p.randomSeed(0);
      };


      p.draw = function() {
        //p.redraw(60);
        //p.clear();
        //p.redraw(10);
        p.frameRate(15);
        //x = p.width * 0.875;
        //y = p.height / 6;
        //r = p.width / 10;

        //p.fill(255, 10);
        //p.noStroke();
        //x = x + p.random(-5, 5);
        //y = y + p.random(-5, 5);

        x = p.width / 2;
        y = p.height / 2;
        r = p.width / 4;


        p.fill(255, 10);
        p.noStroke();
        p.strokeWeight(1.5);

        x = x + p.random(-15, 15);
        y = y + p.random(-15, 15);


        if (p.frameCount < 25) {
          if ((p.frameCount % 3) == 0) {
            p.noFill();
            p.stroke(p.random(255), p.random(255), 255);
            p.ellipse(x + p.random(-15, 15), y + p.random(-15, 15), r, r);
          }
        }



        if (p.frameCount >= 25  &&  p.frameCount < 90) {
          p.noFill();
          p.stroke(p.random(255), p.random(255), 255);
          p.ellipse(x + p.random(-15, 15), y + p.random(-15, 15), r, r);
        }


/*
        if (p.frameCount >= 40 && p.frameCount < 60) {
          if ((p.frameCount % 2) == 0) {
            p.noFill();
            p.stroke(p.random(255), p.random(255), 255);
            p.ellipse(x + p.random(-15, 15), y + p.random(-15, 15), r, r);
          }
        }

*/


      };


    };



    var sketch3 = function(p) {
      const sourceText = "W/ raNdOmneSs";

      p.setup = function() {
        canvas = p.createCanvas(p.windowWidth, p.windowWidth / 2);
        canvas.position(0, 0);
        //canvas.style('z-index', '-1');
        //p.background(0);
        //p.noLoop();
        p.randomSeed(0);
      };

      p.draw = function() {
        p.clear();
        //p.background(0);
        p.frameRate(8);
        //文字の大きさ
        p.textSize(24);
        //フォント
        p.textFont('Helvetica Neue');
        //textAlign(RIGHT);
        p.stroke(0);
        p.strokeWeight(1);
        for (i = 0; i < 15; i++){
          p.text(sourceText.substring(i, i + 1), (20 * i) + p.random(0, 15), 20);
          p.fill(p.random(255), p.random(255), 255);
        }
      };



    };

    new p5(sketch1, "random_background");
    new p5(sketch2, "random_circle");
    //new p5(sketch3, "random_randomness");




}
