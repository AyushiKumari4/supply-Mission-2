class block {
constructor(x,y,width,height){
    var Options = {
        'friction': 0.5,
       'density':1
    }
    this.body= Bodies.rectangle(x,y,width,height,Options);
    this.width=width;
    this.height=height;
    World.add(world, this.body);
}
display(){

    var pos =this.body.position;
    
    push()
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("red");
    stroke("white");
    strokeWeight(3);
    rect(0, 0, this.width, this.height);
   pop()
}
};