function Environment(){
  //this.pos = createVector(x,y);

  this.a = 50
  this.b = 100
  this.invmass = 0
  this.render = function(){
    push();
    noStroke();
    fill(255,0,150);
    //translate(this.pos.x, this.pos.y)
    rectMode(CORNER);
    rect(0,height-20,width,20);
    pop();
  }
}
