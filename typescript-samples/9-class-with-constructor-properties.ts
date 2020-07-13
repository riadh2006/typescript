class pointE {
    constructor(private _x?: number, private _y?: number){}

    get x(){
        return this._x;
    }


    set x(value){
        if(value < 0)
            throw new Error('no negative number supported ');
        this._x = value;
    }

    draw(){
        console.log('_x ' + this._x + ', _y ' + this._y);
    }

    getDistance(anotherPoint: pointE){

    }

}

let pointEpointE = new pointE(5, 6);
pointEpointE.x= 55;

pointEpointE.draw();