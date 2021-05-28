// creating Child class - Bird which is an extension of parent class - Base class
class Bird extends BaseClass{
  constructor(x,y){
    //parent class constructor
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}