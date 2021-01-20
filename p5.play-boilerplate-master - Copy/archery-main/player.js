class Player{
    constructor() {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(100,displayHeight/2,300,300, options);
        this.x=100;
        this.y=displayHeight/2
        this.width = 300;
        this.height = 300;
        this.image = loadImage("player.png");
        World.add(world, this.body);
      }
      display(){
        
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
       
      }
}