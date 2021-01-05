class Ground{
    constructor(x,y,weight,height){
        var option={
            restitution:0.4,
            friction:0.2,
             density:1.0
        }
        ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
        World.add(world, ground);
   
        paperPosition=width/2-100
        paperY=610;

    }

    display(){
        var paperpos=this.body.position;
        push
         translate(paperpos.x,paperpos.y);
           strokeweight(3);
           fill(yellow);
           ellipse(0,0,this.r);
           Pop()
    }
}
