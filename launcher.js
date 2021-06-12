class launcher{
    constructor(bodyA, anchor){
        var options = {
            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = anchor
        this.launcher= Constraint.create(options);
        World.add(world, this.launcher);
    }
     fly(){
         this.launcher.bodyA = null;
     }

      display(){
           if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           } 
    }
    
}
