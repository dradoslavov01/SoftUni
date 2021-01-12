function solve(fruit, weight, price) {
    let grams = weight / 1000;

    console.log(`I need $${(price * grams).toFixed(2)} to buy ${grams.toFixed(2)} kilograms ${fruit}.`);
}
solve('apple', 1563, 2.35)