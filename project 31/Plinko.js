class Plinko{
    constructor(x, y, radius) {
    var options={
        isStatic:true,
        friction:1.2,
        density:1.3
    }
    this.x=x;
    this.y=y;
    this.radius=10;
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    World.add(world, this.body);
}

display(){
var plinkoPos=this.body.position;    
push();
translate(plinkoPos.x,plinkoPos.y);
ellipseMode(CENTER);
ellipse(0,0,this.radius);
pop();
}
}