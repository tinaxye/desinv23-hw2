function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255, 255, 255);
  fill(255, 51, 0);
  noStroke();
  rect(50, 0, 150, 150);
  fill(0, 102, 204);
  rect(0, 150, 50, 50);
  fill(255, 230, 128);
  rect(180, 175, 100, 100);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(6);
  line(48, 0, 48, 400);
  line(0, 148, 400, 148);
  line(180, 150, 180, 400);
  strokeWeight(3);
  line(180,174,400,174);
  strokeWeight(5);
  line(0, 70, 45, 70);
  line(280, 175, 280, 400);
  line(0, 200, 180, 200);
  strokeWeight(2);
  line(200, 0, 200, 150);
  strokeWeight(6);
  line(180, 275, 280, 275);
}
