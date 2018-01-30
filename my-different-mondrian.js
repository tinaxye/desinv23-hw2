function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  fill(random(255), random(255), 255);
  rect(random(350), random(350), random(width-100), random(height-100));
}
