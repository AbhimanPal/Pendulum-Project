class Ball {
    constructor(x,y,radius) {
      var options ={
          frictionAir: 0,
          friction: 0,
          frictionStatic: 1,
          inertia: Infinity,
          restitution: 0.1
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world,this.body)
      this.radius = radius;
    }
  
    display() {
     var pos = this.body.position;
    //  pos.x = mouseX;
    //  pos.y = mouseY;
     push();
     translate(pos.x,pos.y);
     rotate(this.body.angle);
     ellipseMode(RADIUS);
     fill("red");
     ellipse(0,0,this.radius);
     pop();
    }
  }