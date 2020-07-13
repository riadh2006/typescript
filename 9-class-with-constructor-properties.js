var pointE = /** @class */ (function () {
    function pointE(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(pointE.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('no negative number supported ');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    pointE.prototype.draw = function () {
        console.log('x ' + this.x + ', y ' + this.y);
    };
    pointE.prototype.getDistance = function (anotherPoint) {
    };
    return pointE;
}());
var pointEpointE = new pointE(5, 6);
pointEpointE.X = 55;
pointEpointE.draw();
