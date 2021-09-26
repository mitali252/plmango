class Stone {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        isStatic:true
      }
    this.body = Bodies.circle(x, y,50, options);
    this.radius = 50
    this.image= loadImage("stone.png")
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
  }
    
}