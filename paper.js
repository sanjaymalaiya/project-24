
class paper{
    constructor(x,y,r){
        var option ={
            restitution:0.3,
            friction:0.1,
            density:1.2
        }

        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,option )
        World.add(world,this.body);

    }


    display(){
        var paperpos=this.body.position;
       push
        translate(paperpos.x,paperpos.y);
          strokeweight(3);
          fill(red);
          ellipse(0,0,this.r);
          Pop()
    }

}
