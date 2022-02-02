class Character extends BaseClass{
    constructor(x,y){
     super(x,y,40,80)
     this.image=loadImage("snowman.JPG");
    }
    display(){
        super.display();
        if(keyDown===LEFT_ARROW){
            this.velocityX-=3;
        }
        if(keyDown===RIGHT_ARROW){
            this.velocityY+=3;
        }
    }
}