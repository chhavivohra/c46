class Enemy extends BaseClass{
    constructor(x, y) {
    super(x,y,50,50);
    this.image=loadImage("enemy1.png");
   SpaceShip.scale=100
    }
    display(){
       
        
        super.display();
      }
  }