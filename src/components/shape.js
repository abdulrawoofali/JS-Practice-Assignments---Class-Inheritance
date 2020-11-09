// declare class

// export class using module.exports

// declare class

// export class using module.exports

class Shape {
	constructor(color) {
		this.color = "red";
	}
	drawShape() {
		console.log("Drawing a Shape");
	}
	calculateArea() {
		console.log("Unknown Shape");
		return 0;
	}
}

module.exports = Shape;
