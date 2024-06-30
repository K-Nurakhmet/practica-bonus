'use strict';

const cart = {
	items: [],
	currentTotalPrice: 0,
	count: 0,
	discount: 0,

	increaseCount(num) {
		this.count += num;
	},

	add(name, price, quantity = 1) {
		this.items.push({ name, price, quantity });
		this.increaseCount(quantity);
	},

	calculateItemPrice() {
		const totalDiscount = this.items.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);

		return totalDiscount - totalDiscount * (this.discount / 100);
	},

	get totalPrice() {
		return this.calculateItemPrice();
	},

	set setDiscount(promocode) {
		if (promocode === 'METHED') {
			this.discount = 15;
		}

		if (promocode === 'NEWYEAR') {
			this.discount = 21;
		}
	},

	clear() {
		this.items = [];
		this.currentTotalPrice = 0;
		this.count = 0;
	},

	print() {
		console.log(JSON.stringify(this.items));
		console.log(`Общая стоимость корзины: ${this.totalPrice}`);
	},
};

cart.setDiscount = 'NEWYEAR';

cart.add('Машина', 1000, 1);
cart.add('Мишка', 500, 2);
cart.add('Iphone', 1500, 1);

cart.print();
