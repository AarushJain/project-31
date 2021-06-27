class Particles{
    constructor(x, y) {
    var options={
        isStatic:false,
        restitution:0.4
    }
    this.x=x;
    this.y=y;
    this.radius=10;
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    this.color=color(random(0,255), random(0,255), random(0,255))
    World.add(world, this.body);
}

display(){
var particlePos=this.body.position;    
push();
translate(particlePos.x,particlePos.y);
fill(this.color);
ellipseMode(CENTER);
ellipse(0,0,this.radius);
pop();
}
}