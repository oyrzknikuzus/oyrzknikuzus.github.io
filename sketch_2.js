var sketch2 = function(p) {
  p.setup = function() {

    canvas = p.createCanvas(p.windowWidth, 600);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
  };

  p.draw = function() {
    x = p.width / 2;
    y = 150;
    r = 180;
    p.fill(255, 10);
    p.noStroke();
    x = x + p.random(-5, 5);
    y = y + p.random(-5, 5);
    i = 0;
    while(i < 10){
      p.noFill();
      p.stroke(p.random(255), p.random(255), 255);
      p.ellipse(x + p.random(-10, 10), y + p.random(-10, 10), r, r);
      i = i + 1;
    }
  };
};
new p5(sketch2, "random_circle");
