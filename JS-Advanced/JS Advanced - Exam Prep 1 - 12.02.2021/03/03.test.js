const pizzUni = require('./03');
const { assert } = require("chai");

describe("pizzUni", function() {

    it('Make an order', () => {
        let pizza = { orderedPizza: 'pizza', orderedDrink: 'drink' };
        let pizza2 = { orderedPizza: 'pizza' };

        let pizza1 = {orderedDrink: 'drink'};
        let pizza3 = {};

        assert.throw(() => pizzUni.makeAnOrder(pizza1), 'You must order at least 1 Pizza to finish the order.');
        assert.throw(() => pizzUni.makeAnOrder(pizza3), 'You must order at least 1 Pizza to finish the order.');

        assert.equal(pizzUni.makeAnOrder(pizza2), `You just ordered ${pizza2.orderedPizza}`);
        assert.equal(pizzUni.makeAnOrder(pizza), `You just ordered ${pizza.orderedPizza} and ${pizza.orderedDrink}.`);


    })
});
