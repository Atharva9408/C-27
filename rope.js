class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
    
        var Op={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY}

        }
        //this.bodyA=body1;
        //this.pointB=pointB;
        //console.log(Op);
        this.rope=Constraint.create(Op)
        World.add(world,this.rope)
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        console.log(pointB)
        stroke("black")
     line(pointA.x-130, pointA.y, {x:670}.x,pointB.y);
     line(pointA.x-65, pointA.y, {x:735}.x,pointB.y);
     line(pointA.x, pointA.y, pointB.x, pointB.y);
     line(pointA.x+65, pointA.y, {x:865}.x, pointB.y);
     line(pointA.x+130, pointA.y, {x:930}.x, pointB.y);
    }
}