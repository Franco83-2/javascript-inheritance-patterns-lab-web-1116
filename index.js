class Point {
  constructor(x, y) {
  this.x = x,
  this.y = y
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }
}

class Shape {
  addToPlane(x, y) {
    this.position = new Point(x,y)
  }

  move (x,y) {
    this.position = new Point(x,y)
  }
}

class Side {
  constructor(length) {
    this.length = length
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }

  diameter() {
    return this.radius * 2
  }

  area() {
    return (Math.PI * (this.radius * this.radius))
  }

  circumference() {
    return (Math.PI * 2 * this.radius)
  }
}

class Polygon extends Shape {
  constructor(arr) {
    super()
    this.sides = arr
    this.perimeter
  }

  perimeter() {
    let _this = this
    let a = 0
    for (let i = 0; i < _this.sides.length; i++) {
      a += _this.sides[i].length
    }
    return a
  }

  numberOfSides() {
    return this.sides.length
  }
}

class Quadrilateral extends Polygon {
  constructor(a,b,c,d) {
    super()
    this.sides = [new Side(a),new Side(b),new Side(c),new Side(d)]
  }

  numberOfSides() {
    return this.sides.length
  }
}

class Rectangle extends Quadrilateral {
  constructor(width,height) {
    super()
    this.width = width
    this.height = height
    this.sides = [new Side(width),new Side(height),new Side(width),new Side(height)]
  }

  area() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor(num) {
    super()
    this.width = num
    this.height = num
    this.sides = [new Side(num),new Side(num),new Side(num),new Side(num)]
  }
}

Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}

class Triangle extends Polygon {
  constructor(a,b,c) {
    super()
    this.sides = [new Side(a),new Side(b),new Side(c)]
  }
}
