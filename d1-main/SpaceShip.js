class SpaceShip extends BaseClass{
    constructor(x, y) {
    super(x,y,50,50);
    this.image=loadImage("spaceship.png");
   SpaceShip.scale=100
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
        super.display();
      }
  }
  