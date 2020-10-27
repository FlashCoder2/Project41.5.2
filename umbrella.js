class Umbrella{

    constructor(x,y){
        this.image = loadImage("images/WalkingFrame/walking_1.png");
        this.image1 = loadImage("images/WalkingFrame/walking_2.png");
        this.image2 = loadImage("images/WalkingFrame/walking_3.png");
        this.image3 = loadImage("images/WalkingFrame/walking_4.png");
        this.image4 = loadImage("images/WalkingFrame/walking_5.png");
        this.image5 = loadImage("images/WalkingFrame/walking_6.png");
        this.image6 = loadImage("images/WalkingFrame/walking_7.png");
        this.image7 = loadImage("images/WalkingFrame/walking_8.png");

        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }

    display() {

        if(this.body.y){
            this.body.y = 0;
        }

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        image(this.image1, this.body.position.x, this.body.position.y, 50, 50);
        image(this.image2, this.body.position.x, this.body.position.y, 50, 50);
        image(this.image3, this.body.position.x, this.body.position.y, 50, 50);
        image(this.image4, this.body.position.x, this.body.position.y, 50, 50);
        image(this.image5, this.body.position.x, this.body.position.y, 50, 50);
        image(this.image6, this.body.position.x, this.body.position.y, 50, 50);
        image(this.image7, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }
}