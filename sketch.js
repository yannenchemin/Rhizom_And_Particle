// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Particles are generated each cycle through draw(),
// fall with gravity and fade out over time
// A ParticleSystem object manages a variable size
// list of particles.

// an array of ParticleSystems
let systems = [];

function setup() {
  let text = createP("click to add rhizom systems");
  text.position(10, 365);

  createCanvas(640, 360);
  background(0);

  for(let j = 0; j< 10; j++){ //빨간점
    stroke(255);
    strokeWeight(2);
    fill(255,0,0);
    ellipse(random(width),random(height),30);

}
    ellipse(mouseX,mouseY,100);
}


function draw() {
 //print(pmouseX + ' -> ' + mouseX);
  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle();
    systems[i].run();
   }



  }


function mousePressed() {
  systems.push(new ParticleSystem(1, createVector(mouseX, mouseY)));
}
