var hour;
var minute;
var second;
var sAngle, mAngle, hAngle;
var sArc,mArc,hArc;

function setup() {
  createCanvas(1600,1600);
  hour = hour();
  minute = minute();
  second = second();
  hour = hour-12;

}

function draw() {
  background(255,255,255); 
  angleMode(DEGREES);
  sAngle = map(second,0,60,0,360);
  mAngle = map(minute,0,60,0,360);
  hAngle = map(hour,0,24,0,360);

  ellipseMode(CENTER);
  
  push();
  stroke("red");
  strokeWeight(6);
  noFill();
  sArc = arc(400, 450, 600, 700, PI*95, PI + QUARTER_PI);
  rotate(sAngle);
  pop();

  push();
  stroke("blue");
  strokeWeight(7);
  noFill();
  mArc = arc(400, 450, 700, 800,PI*200, PI );
  rotate(mAngle);
  pop();

  push();
  stroke("yellow");
  strokeWeight(8);
  noFill();
  hArc= arc(400, 450, 800, 900, PI + QUARTER_PI, TWO_PI*80);
  rotate(hAngle);
  pop();

  drawSprites();
}