class dustbin{
    constructor(x,y,width,height){
        isStatic:true;
    }
    display(){
    dustbinleftSprite=createSprite(boxPosition, boxY, 20,100);
    dustbinleftSprite.shapeColor="blue";

    dustbinLeftBody = Bodies.rectangle(boxPosition+40, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);

    dustbinBase=createSprite(boxPosition+100, boxY+40, 200,20);
    dustbinBase.shapeColor=color(255,0,0);

    dustbinBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);

    dustbinRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
    dustbinRightSprite.shapeColor="yellow";
    }
   
}