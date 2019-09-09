var shape = {
    type: '',
    getType: function() {
        return this.getType;
    }
}

function triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

triangle.prototype = shape;
triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};
triangle.prototype.constructor = triangle;

console.log(triangle(1, 2, 3));