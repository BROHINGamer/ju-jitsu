class Form{
constructor(){
    this.input=createInput("Name");
    this.button=createButton("START");
    this.button2=createButton("PLAY");
    this.greeting=createElement('h2');
    this.title=createElement('h2');
    
}
hide(){
    
}
display(){
    this.title.html("THE ARCHER KING");
    this.title.position(350,50);
    this.title.style('font-size','70px');
    this.title.style('color','red')
    this.input.position(550,400);
    this.input.style('width', '200px');
    this.input.style('height', '20px');
    this.input.style('background', 'lavender');
   this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
    
       this.button2.position(960,500);
        this.button2.style('width', '200px');
        this.button2.style('height', '40px');
        this.button2.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            
      var name = this.input.value();
            
           
           
           this.greeting.html("Hello " +name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '100px');
            
        });
        
}
}