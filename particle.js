function Particle(x,y, xv, yv, xa, ya){
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.a = 50
  this.b = 100
  this.restitutionCoefficient = .2;

  this.reactionForce = createVector(0,0);

  this.render = function(){
    push();
    noStroke();
    fill(255,100);
    translate(this.pos.x, this.pos.y)
    rectMode(CENTER);
    rect(0,0, this.a, this.b);
    pop();
  }
  this.update = function(){
    this.render();
    this.applyTorque();
    this.addForce(gravity);
    this.applyCollision();
    this.applyNetForces();
    this.changePosition();
//    this.dampenVelocity();
    this.acc.mult(0);
  }
  this.applyTorque = function(fx, fy){

    //the need the force and the position relative to the center
    //of the rectangle
  }
  this.addForce = function(fx, fy){
    this.acc.add(fx, fy);

  }
  this.applyCollision = function(){
    var penetration
    penetration = this.pos.y + this.a - height + 20
    if (penetration > 0 && this.vel.mag() > 0.01){
      this.vel.mult(-1*this.restitutionCoefficient);
      //this.applyForce(0,this.restitutionCoefficient * (height - 20 - this.pos.y - this.a));
    }
    if (penetration > 0 && this.vel.mag() < 0.01){
      this.acc.mult(0);
      this.vel.mult(0);

      if(this.pos.y + this.a > height - 20){
        this.pos.y -= penetration;
      console.log(this.pos.y);
      console.log(penetration)
      }
    }
    // if the two are a small distance away and their relative
    // velocities are almost zero then make them zero
  }
  this.applyNetForces = function (){
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
  this.changePosition = function(){
    this.pos.add(this.vel);
  }
  // this.dampenVelocity = function(){
  //   this.vel.mult(0.99);
  // }

}
