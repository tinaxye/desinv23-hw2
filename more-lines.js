a: lines start from center

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(170, 170, random(width), random(height));
}


b: lines end in top right quadrant

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width), random(height), random(170, 340), random (0, 170));
}


both a & b:
function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(170, 170, random(170, 340), random (0, 170));
}






