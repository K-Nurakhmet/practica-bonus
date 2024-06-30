'use strict';

const rectangle = {
	width: 5,
	height: 5,

	set widthPerimetr(width) {
		this.width = width;
	},

	set heightPerimetr(height) {
		this.height = height;
	},

	get rectanglePerimetr() {
		const perimetr = (this.width + this.height) * 2;
		return `Периметр прямоугольника равен: ${perimetr} см`;
	},

	get rectangleSquare() {
		const square = this.width * this.height;
		return `Площадь прямоугольника равна: ${square} квадратных см`;
	},
};

rectangle.widthPerimetr = 5;
rectangle.heightPerimetr = 5;

console.log(rectangle.rectanglePerimetr);
console.log(rectangle.rectangleSquare);
