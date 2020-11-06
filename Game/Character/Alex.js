 class Alex1 extends Baseclass{
    constructor(x,y,width,height){
       super(x,y,width,height)
       this.image=loadImage("Aleximage/GraveRobber.png");
       
    }
  display(){
      
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  }
        
    
}