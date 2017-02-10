var particle;
var environment;
var gravity;

function setup(){
  createCanvas(windowWidth, windowHeight);
  particle = new Particle(100,400);
  environment = new Environment();
  gravity = createVector(0,.1);
}

function draw(){
  background(0);
  particle.update();
  environment.render();
}
