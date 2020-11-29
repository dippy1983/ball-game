class Box{
    constructor(x,y,height,width){
        var option={
restitution:1
        }


this.body=Bodies.rectangle(x,y,width,height,option)
World.add(world,this.body)



    }
    display(){
var pos=this.body.position
rectMode(CENTER)
fill(255)
rect(pos.x,pos.y,this.height,this.width)
    }



}
