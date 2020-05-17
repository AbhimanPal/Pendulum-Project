class Chain{
    constructor(bodyA,bodyB){
        var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        stiffness : 0.01,
        length : 100

        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    push();
    strokeWeight(5);
    stroke("white")
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
    }
}