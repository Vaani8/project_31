class plinko {
    constructor (x,y) {
        var options = {
            isStatic : true,
            restitution:1,
            friction:0
        }
        this.r=15;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        imageMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }
};