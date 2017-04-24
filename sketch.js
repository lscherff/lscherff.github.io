function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(random(255));
  var speed = dist(mouseX,mouseY,pmouseX,pmouseY);
  ellipse(mouseX,mouseY,speed,speed);
}

function mousePressed() {
    fullscreen(true);
}