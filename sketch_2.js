var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(255);
}

function draw() {
  x = 300;
  y = 150;
  r = 180;
  fill(255, 10);
  noStroke();
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  i = 0;
  while(i < 10){
    noFill();
    stroke(random(255), random(255), 255);
    ellipse(x + random(-10, 10), y + random(-10, 10), r, r);
    i = i + 1;
  }
}
