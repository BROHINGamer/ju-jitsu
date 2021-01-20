class Target{
    constructor() {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(displayWidth-300,436,200,200, options);
        this.x=displayWidth-300;
        this.y=436
        this.width = 500;
        this.height = 500;
        this.image = loadImage("T.png");
        World.add(world, this.body);
      }
      display(){
        
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
       
      }
}