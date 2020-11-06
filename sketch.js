var hr;
var mn;
var sc;
var sAngle, mAngle, hAngle;
var sArc,mArc,hArc;

function setup() {
  createCanvas(1600,1600);
 

}

function draw() {
  background(255,255,255); 
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  sAngle = map(sc,0,60,0,360);
  mAngle = map(mn,0,60,0,360);
  hAngle = map(hr%12,0,24,0,360);

  ellipseMode(CENTER);
  
  //for seconds
  push();
  rotate(sAngle); //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
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
