class Snow extends BaseClass{
    constructor(x,y){
        super(x,y,30,30);
        options={
            'restitution':0.2,
            'density':0.3
        }
        var snowimg=random(1,2);
        if(snowimg===1){
            this.image=loadImage("snow4.webp")
        }
        if(snowimg===2){
            this.image=loadImage("snow5.webp")
        }
        this.scale=0.3;
        this.velocityY=0.5;
    }
    display(){
        super.display();
    }
}