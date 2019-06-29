

var textTyped = 'Type something';
var fontSizes = [textTyped.length];
var minFontSize = 15;
var maxFontSize = 800;
var newFontSize = 0;

var pMillis = 0;
var maxTimeDelta = 5000.0;

var spacing = 2; // line height
var tracking = 0; // between letters
var font;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '3000');

  font = 'Arial';


  noStroke();

  // init fontSizes
  for (var i = 0; i < textTyped.length; i++) {
    fontSizes[i] = minFontSize;
  }
}

function draw() {

  background(0);
  textAlign(LEFT);
  fill(255);

  spacing = map(mouseY, 0, height, 0, 120);
  translate(0, 200 + spacing);

  var x = 0;
  var y = 0;
  var fontSize = 20;

  for (var i = 0; i < textTyped.length; i++) {
    // get fontsize for the actual letter from the array
    fontSize = fontSizes[i];
    textFont(font, fontSize);
    var letter = textTyped.charAt(i);
    var letterWidth = textWidth(letter) + tracking;

    if (x + letterWidth > width) {
      // start new line and add line height
      x = 0;
      y += spacing;
    }

    // draw letter
    text(letter, x, y);
    // update x-coordinate for next letter
    x += letterWidth;
  }

  // blinking cursor after text
  var timeDelta = (millis() - pMillis) * 2;
  newFontSize = map(timeDelta, 0, maxTimeDelta, minFontSize, maxFontSize);
  newFontSize = min(newFontSize, maxFontSize);

  fill(255);
  if (int(frameCount / 10) % 2 == 0) ;
  rect(x, y, newFontSize / 2, newFontSize / 20);
}



function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
    fontSizes.push(newFontSize);
  } else if (keyCode == BACKSPACE || keyCode == DELETE) {
    if (textTyped.length > 0) {
      textTyped = textTyped.substring(0, max(0, textTyped.length - 1));
      fontSizes.pop();
    }
  }
  // reset timer
  pMillis = millis();
}
