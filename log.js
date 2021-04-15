class   Log{
    constructor(x,y,w,h,angle){
        var options = {
            'restitution': 1.0,
            'friction':0.8,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.w=w;
        this.h=h;
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    var angle = this.body.angle
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     rectMode(CENTER);
     rect(0,0,this.w,this.h,);
     fill("red")
     pop();
 
}

    }
