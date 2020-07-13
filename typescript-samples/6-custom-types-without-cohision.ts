class Point {
    x: number;
    y: number;

    draw(){
        console.log('x ' + this.x + ', y ' + this.y);
    }

    getDistance(anotherPoint: Point){

    }

}

let point = new Point();

point.x = 5;
point.y = 15;
point.draw();