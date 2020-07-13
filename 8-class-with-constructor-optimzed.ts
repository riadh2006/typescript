class PointD {
    constructor(private x?: number, private y?: number){}

    getX(){
        return this.x;
    }


    setX(value){
        if(value < 0)
            throw new Error('no negative number supported ');
        this.x = value;
    }

    draw(){
        console.log('x ' + this.x + ', y ' + this.y);
    }

    getDistance(anotherPoint: PointD){

    }

}

let pointD = new PointD(5, 6);
pointD.setX(55);

pointD.draw();