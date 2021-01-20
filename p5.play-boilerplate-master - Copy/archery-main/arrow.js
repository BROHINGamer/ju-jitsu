class Arrow{
    constructor(x, y) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y,150,50, options);
        this.width = 150;
        this.height = 50;
        this.image = loadImage("tribal-arrow.png");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}