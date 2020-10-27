class Drops{

    constructor(x,y){
        var options = {
            isStatic = false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, this.options);
        
        World.add(world, this.body);
    }

    display() {

        if(this.body.y = 410){
            this.body.y = 0;
        }

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}