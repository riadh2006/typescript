class PointC {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('x ' + this.x + ', y ' + this.y);
    }

    getDistance(anotherPoint: PointC){

    }

}

let pointc = new PointC();
pointc.draw();