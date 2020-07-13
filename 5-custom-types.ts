interface Point {
    x: number, 
    y: number

}

// Inline annotation 
let drawPoint = (point : {x: number, y: number}) => {

}

// With Interface 
let drawPointWithInterface = (point: Point) => {

}

let getDistance = (pointA: Point, pointB: Point) => {

}

drawPoint({
    x: 1, 
    y: 2
});



drawPointWithInterface({
    x: 1, 
    y: 2
});